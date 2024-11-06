import Project from "@/types/Project";
import Link from "next/link";

function ProjectItem({ id, title, description, imagePath, imageAlt,url }: Project) {
  return (
    <Link href={`/${url}`}>
      <div className="card card-compact bg-base-100 w-full shadow-xl container-fit cursor-pointer p-3">
        <figure className="px-4 pt-4 ">
          <img src={imagePath} alt={imageAlt} className="rounded-md" />{" "}
          {/* Remove the `url()` wrapper */}
        </figure>
        <div className="card-body">
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
