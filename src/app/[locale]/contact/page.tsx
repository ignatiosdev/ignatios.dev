import PageTitle from "@/components/PageTitle/PageTitle";
import ResumeDownloadButton from "@/components/Contact/ResumeDownloadButton/ResumeDownloadButton";

import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// Translation Imports
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export default async function Contact({
  params,
}: {
  params: { locale: "en" | "es" };
}) {

    // Ensure static rendering by making locale available at build time
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <>
      <PageTitle
        iconSize={45}
        currentPageId="contact"
        text={t("pageTitle")}
      ></PageTitle>

      <div className="px-2 py-4 ">
        <p>{t("paragraph")}</p>

        <div className="flex flex-col gap-y-4 py-6">
          <div className="flex items-center gap-4">
            <FaEnvelope size={28} className="text-primary"></FaEnvelope>
            <span className="font-medium text-lg">contact@ignatios.dev</span>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedinIn size={28} className="text-primary"></FaLinkedinIn>
            <span className="font-medium text-lg">ignatiosdev</span>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub size={29} className="text-primary"></FaGithub>
            <span className="font-medium text-lg">ignatiosdev</span>
          </div>

          <div className="py-5 flex flex-col gap-y-5">
            <span className="font-bold text-lg">{t("downloadresume")}</span>
            <div className="flex flex-col lg:flex-row gap-6 ">
              <ResumeDownloadButton
                text="RESUME"
                language="en"
              ></ResumeDownloadButton>

              <ResumeDownloadButton
                text="RESUME"
                language="es"
              ></ResumeDownloadButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}