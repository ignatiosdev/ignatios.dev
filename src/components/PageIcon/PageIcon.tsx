"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { FaGraduationCap } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";



type Props = {};

function PageIcon({}: Props) {
  const pathname: string = usePathname();

  const currentPageId: string = (
    pathname === "/" ? "projects" : pathname
  ).replace(/^\/+/, "");

  const defaultIconProps: { [key: string]: string | number } = {
    className:"text-primary rounded-full bg-primary-content p-1",
    size: 60, 
  };

  const pageIcons: { [key: string]: React.ReactNode } = {
    education: <FaGraduationCap {...defaultIconProps} />,
    projects: <IoFolderOpen {...defaultIconProps} />,
  };

  return <div>{pageIcons[currentPageId]}</div>;
}

export default PageIcon;
