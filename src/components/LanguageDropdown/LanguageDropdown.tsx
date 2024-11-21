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
    <div className="dropdown dropdown-bottom">
      <button className="btn" tabIndex={0} onClick={() => console.log("Dropdown button clicked")}>
        <IoLanguage size={25} />
      </button>

      <ul className="menu dropdown-content bg-info bg-opacity-80 rounded-lg z-[1] w-full gap-y-2 py-2 justify-around text-base font-medium">
        <li className="cursor-pointer p-2" tabIndex={0}>
          <button className="flex justify-center z-10" onClick={() => changeLanguage("es")}>
            <EsFlag width={25} />
          </button>
        </li>

        <li className="cursor-pointer p-2" tabIndex={0}>
          <button className="flex justify-center" onClick={() => changeLanguage("en")}>
            <EngFlag width={25} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageDropdown;
