import "./ProfilePicture.css";
import { StaticImageData } from "next/image";

type Props = { profileImg: StaticImageData };

export default function ProfilePicture({ profileImg }: Props) {
  return (
    <img
      src={profileImg.src}
      className="w-40 h-40 container-round mx-auto"
    >
      
    </img>
  );
}
