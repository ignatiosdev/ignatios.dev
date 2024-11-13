"use client";

import {usePathname, useRouter} from '@/i18n/routing';




type Props = {};
import { IoLanguage } from "react-icons/io5";

function LanguageDropdown({}: Props) {

    const pathname = usePathname();
    const router = useRouter();

  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn p-0">
          <IoLanguage size={25}></IoLanguage>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-info bg-opacity-80 rounded-lg z-[1]  py-3 px-4 gap-y-2 text-base font-medium"
        >
          <li className="cursor-pointer" onClick={()=> {router.replace(pathname, {locale: 'es'});}}>
            <a>Spanish</a>
          </li>

          <li className="cursor-pointer" onClick={()=> {router.replace(pathname, {locale: 'en'});}}>
            <a>English</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LanguageDropdown;
