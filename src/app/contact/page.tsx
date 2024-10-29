import PageTitle from "@/components/PageTitle/PageTitle";
import ResumeDownloadButton from "@/components/Contact/ResumeDownloadButton/ResumeDownloadButton";

import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <PageTitle
        iconSize={45}
        currentPageId="contact"
        text="Contact me"
      ></PageTitle>

      <div className="px-2 py-4 ">
        <p>
          I’d love to hear from you! Please feel free to email me or reach out
          on LinkedIn. I look forward to hearing from you and will respond as
          soon as possible.
        </p>

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
            <span className="font-bold text-lg">Download my resume</span>
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
