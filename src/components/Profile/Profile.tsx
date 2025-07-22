import ProfilePicture from "@/components/Profile/ProfilePicture/ProfilePicture";
import profileImg from "../../assets/img/profileImage.webp";
import ActionButton from "@/components/Profile/ActionButton/ActionButton";

import { useTranslations } from "next-intl";
import SettingsMenu from "../SettingsMenu/SettingsMenu";

type Props = {};

function Profile({}: Props) {
  const t = useTranslations("profile");
  return (
    <div className="flex flex-col text-center gap-4 container-default">
      <div className="flex">
        <div className="w-2/12 md:hidden"></div>
        <div className="w-8/12 md:w-full">
          <ProfilePicture profileImg={profileImg}></ProfilePicture>
        </div>
        <div className="w-2/12 md:hidden">
          <div className="flex flex-col -me-2">
            <SettingsMenu></SettingsMenu>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Ignacio Cattalurda</h1>
        <h3 className="text-subtitle text-sm ">
          Full-stack developer - Montevideo, Uruguay
        </h3>
      </div>
      <div className="text-subtitle">
        <p>{t("aboutText")}</p>
      </div>

      <div className="flex justify-center">
        <ActionButton text={t("actionBtnText")} ariaLabel={t("actionBtnAriaLabel")}></ActionButton>
      </div>
    </div>
  );
}

export default Profile;
