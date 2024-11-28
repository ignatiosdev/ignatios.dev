// VERCEL
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import { setRequestLocale } from "next-intl/server";
import "./globals.css";
import Profile from "@/components/Profile/Profile";
import Skills from "@/components/Skills/Skills";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "Ignatios.dev",
  description: "...",
};

// Optimize Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

type Params = Promise<{ locale: "en" | "es" }>;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params; // Awaiting the `params` object here.

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html className={inter.className} lang={locale} suppressHydrationWarning>
      <body>
        <Script id="theme-detector">{`
          const theme = document.documentElement.style.colorScheme
          document.documentElement.classList.add(theme)
        `}</Script>

        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="min-h-screen">
              <div
                style={{
                  backgroundImage: "url(/img/hexagons.webp)",
                  backgroundSize: "cover",
                }}
                className="w-full h-28 absolute -z-10 top-0"
              ></div>
              <div className="flex flex-col lg:flex-row mt-16 justify-center gap-5  px-6 xl:px-0 z-10 ">
                <div className="flex flex-col lg:w-3/12 xl:w-1/5 gap-5">
                  <Profile />
                  <Skills
                    skills={["Next.js","React.js","Typescript","Python","Node.js", "Docker", "SQL","CSS"]}
                  />
                </div>
                <div className="lg:w-7/12  xl:w-6/12 flex flex-col gap-5 xl:gap-4">
                  <Navbar />
                  <div className="container-default">{children}</div>
                </div>
              </div>
            </div>
            <Footer></Footer>
          </Providers>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
