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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
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
            <div className="bg-primary w-full h-24 lg:h-36 absolute -z-10 top-0"></div>
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
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

