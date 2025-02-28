import "./ProfilePicture.css";
import { StaticImageData } from "next/image";

type Props = { profileImg: StaticImageData };

export default function ProfilePicture({ profileImg }: Props) {
  return (
    <img
      src={profileImg.src}
      className="w-36 h-36 rounded-full  border-none border-transparent mx-auto"
    >
      
    </img>
  );
}
