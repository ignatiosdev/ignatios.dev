import ProfilePicture from "@/components/Profile/ProfilePicture/ProfilePicture";
import profileImg from "../../assets/img/profileImage.png";
import ActionButton from "@/components/Profile/ActionButton/ActionButton";

import { useTranslations } from "next-intl";
import SettingsMenu from "../SettingsMenu/SettingsMenu";

type Props = {};

function Profile({}: Props) {
  const t = useTranslations("profile");
  return (
    <div className="flex flex-col text-center gap-4 container-default">
      <div className="flex">
        <div className="w-2/12"></div>
        <div className="w-8/12">
          <ProfilePicture profileImg={profileImg}></ProfilePicture>
        </div>
        <div className="w-2/12">
          <div className="md:hidden flex flex-col">
            <SettingsMenu></SettingsMenu>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Ignacio Cattalurda</h2>
        <span className="text-subtitle text-sm ">
          Full-stack developer - Maldonado, Uruguay
        </span>
      </div>
      <div className="text-subtitle">
        <p>{t("aboutText")}</p>
      </div>

      <div className="flex justify-center">
        <ActionButton text={t("actionBtnText")}></ActionButton>
      </div>
    </div>
  );
}

export default Profile;
