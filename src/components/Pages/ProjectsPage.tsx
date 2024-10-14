import React from "react";
import PageIcon from './../PageIcon/PageIcon';

type Props = {pageId:string};

function ProjectsPage({pageId}: Props) {
  return (
    <div className="flex">
      <PageIcon pageId={pageId}></PageIcon>
      <h1>ProjectsPage</h1>
    </div>
  );
}

export default ProjectsPage;
