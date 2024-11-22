
import {Link} from "@/i18n/routing";


type Props = {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  url: string;
}

function ProjectItem({ title, description, imagePath, imageAlt,url }: Props) {
  return (
    <Link href={`/${url}`}>
      <div className="card card-compact bg-base-100 w-full container-fit cursor-pointer p-3 transition-all duration-300 hover:scale-102">
        <figure className="px-4 pt-4 ">
          <img src={imagePath} alt={imageAlt} className="rounded-md" />
          
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
