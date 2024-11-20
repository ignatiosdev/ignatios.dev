// VERCEL
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import {setRequestLocale} from 'next-intl/server';
import "./globals.css";
import Profile from "@/components/Profile/Profile";
import Skills from "@/components/Skills/Skills";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


type Params = Promise<{locale: "en" | "es" }>;

export default async function RootLayout({
  children,
  params
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
    <html lang={locale} data-theme="dark">
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen">
            <div style={{ backgroundImage: 'url(/img/hexagons.png)' }} className="w-full h-28 absolute -z-10 top-0"></div>
            <div className="flex flex-col lg:flex-row mt-16 justify-center gap-5  px-6 lg:px-0 z-10">
              <div className="flex flex-col lg:w-1/5 gap-5">
                <Profile />
                <Skills
                  skills={["JavaScript", "Node.js", "Next.js", "Typescript"]}
                />
              </div>
              <div className="lg:w-6/12 flex flex-col gap-5 lg:gap-4">
                <Navbar />
                <div className="container-default">{children}</div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </NextIntlClientProvider>
        <Analytics/>
        <SpeedInsights />
      </body>
     
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

