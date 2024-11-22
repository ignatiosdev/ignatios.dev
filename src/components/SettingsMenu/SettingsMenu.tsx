"use client";

import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { ThemeController } from "../ThemeController/ThemeController";

type Props = {};

function SettingsMenu({}: Props) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 items-center xl:gap-2">
        <ThemeController></ThemeController>
        <LanguageDropdown></LanguageDropdown>
      </div>
    </>
  );
}

export default SettingsMenu;
