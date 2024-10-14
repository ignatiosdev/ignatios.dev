"use client";


""

import { FaGraduationCap } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";

type Props = {currentPageId:string};

function PageIcon({currentPageId}: Props) {


  const defaultIconProps: { [key: string]: string | number } = {
    className: "text-primary rounded-full bg-primary-content p-1",
    size: 40,
  };

  const pageIcons: { [key: string]: React.ReactNode } = {
    education: <FaGraduationCap {...defaultIconProps} />,
    projects: <IoFolderOpen {...defaultIconProps} />,
  };

  return <div>{pageIcons[currentPageId]}</div>;
}

export default PageIcon;
