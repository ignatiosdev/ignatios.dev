import { Fragment } from "react"; // Make sure to import React

import { Link } from "@/i18n/routing";

type Props = {
  title: string;
  shortDescription: string;
  imagePath: string;
  imageAlt: string;
  id: string;
};

function ProjectItem({
  title,
  shortDescription,
  imagePath,
  imageAlt,
  id,
}: Props) {
  // Function to manually replace newlines with <br /> tags
  const renderDescriptionWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <Fragment key={index}>
        {line}
        <br />
        <br />
      </Fragment>
    ));
  };

  return (
    <Link href={`/${id}`}>
      <div className="card card-compact bg-base-100 w-full container-fit cursor-pointer p-3 transition-all duration-300 hover:scale-102 h-full">
        <figure className="px-4 pt-4 ">
          <img src={imagePath} alt={imageAlt} className="rounded-md aspect-video s" />
        </figure>
        <div className="card-body">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="whitespace-pre-line">
            {renderDescriptionWithLineBreaks(shortDescription)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
