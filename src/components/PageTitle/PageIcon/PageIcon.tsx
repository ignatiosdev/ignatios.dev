"use client";

("");

import { FaGraduationCap } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";

type Props = { currentPageId: string };

function PageIcon({ currentPageId }: Props) {
  const defaultIconProps: { [key: string]: string | number } = {
    className: "text-primary rounded-full bg-primary-content p-1.5",
    size: 40,
  };

  const pageIcons: { [key: string]: React.ReactNode } = {
    projects: <IoFolderOpen {...defaultIconProps} />,
    experience: <MdOutlineWork {...defaultIconProps} />,
    education: <FaGraduationCap {...defaultIconProps} />,
    contact: <FaEnvelope {...defaultIconProps} />,
  };

  return <div>{pageIcons[currentPageId]}</div>;
}

export default PageIcon;
