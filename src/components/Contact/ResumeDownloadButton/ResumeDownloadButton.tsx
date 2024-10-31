import EngFlag from "@/components/Flags/EngFlag/EngFlag";
import EsFlag from "@/components/Flags/EsFlag/EsFlag";

import { MdOutlineFileDownload } from "react-icons/md";

type Props = { text: string; language: string };

function ResumeDownloadButton({ text, language }: Props) {
  let languages: { [key: string]: React.ReactNode } = {
    en: <EngFlag width={30}></EngFlag>,
    es: <EsFlag width={32}></EsFlag>,
  };

  return (
    <button className="bg-primary w-60 h-10 rounded-lg font-semibold text-lg lg:text-2xl ps-2 lg:ps-0">
      <div className="flex w-full h-full ">
        <div className="w-1/5 flex justify-end items-center">
        {languages[language]}
        </div>
        <div className="w-3/5 flex  justify-center items-center">{text}</div>
        <div className="w-1/5 rounded-e-lg bg-primary-lighter flex justify-center items-center">
          <MdOutlineFileDownload size={35} className="text-base-100" />
        </div>
      </div>
    </button>
  );
}

export default ResumeDownloadButton;
