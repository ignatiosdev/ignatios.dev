"use client";

import { FaGraduationCap } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


type Props = { currentPageId: string; size?: number };

function PageIcon({ currentPageId, size }: Props) {
  const defaultIconProps: { [key: string]: string | number } = {
    className: "text-primary rounded-full bg-primary-content p-2",
    size: 40,
  };

  let iconProps = defaultIconProps;
  size ? (defaultIconProps.size = size) : null;

  const pageIcons: { [key: string]: React.ReactNode } = {
    projects: <IoFolderOpen {...iconProps} />,
    experience: <MdOutlineWork {...iconProps} />,
    education: <FaGraduationCap {...iconProps} />,
    contact: <IoMdContact {...iconProps} />,
  };

  return <div>{pageIcons[currentPageId]}</div>;
}

export default PageIcon;
