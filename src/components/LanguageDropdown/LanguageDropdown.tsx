"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { IoLanguage } from "react-icons/io5";
import EsFlag from "../Flags/EsFlag/EsFlag";
import EngFlag from "../Flags/EngFlag/EngFlag";

type Props = {};

function LanguageDropdown({}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    console.log("Changed language to:", locale);
    router.replace(pathname, { locale });
  };

  return (
    <>
      <details className="dropdown">
        <summary className="btn m-1 bg-transparent border-0 shadow-none">
          {" "}
          <IoLanguage className="w-7 h-7" />
        </summary>
        <ul className="menu dropdown-content bg-info bg-opacity-80 rounded-lg z-[1] gap-y-1 w-full py-2 px-0 justify-around text-base font-medium mt-1">
          <li className="cursor-pointer p-2" tabIndex={0}>
            <button
              className="flex justify-center z-10 p-0"
              onClick={() => changeLanguage("es")}
            >
              <EsFlag width={25} />
            </button>
          </li>

          <li className="cursor-pointer p-2" tabIndex={0}>
            <button
              className="flex justify-center p-0"
              onClick={() => changeLanguage("en")}
            >
              <EngFlag width={25} />
            </button>
          </li>
        </ul>
      </details>
    </>
  );
}

export default LanguageDropdown;
