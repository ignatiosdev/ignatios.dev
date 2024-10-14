import React from "react";
import { FaGraduationCap } from "react-icons/fa";

type Props = { pageId: string };

function PageIcon({ pageId }: Props) {
  const pageIcons: { [key: string]: React.ReactNode } = {
    education: <FaGraduationCap />,
  };

  return pageIcons[pageId];
}

export default PageIcon;
