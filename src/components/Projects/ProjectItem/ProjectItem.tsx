import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type Props = {
  title: string;
  shortDescription: string;
  imageAlt: string;
  id: string;
};

async function ProjectItem({ title, shortDescription, imageAlt, id }: Props) {
  const t = await getTranslations("projects");

  return (
    <Link href={`/${id}`}>
      <div className="card card-compact bg-base-100 w-full container-fit cursor-pointer p-3 transition-all duration-300 hover:scale-102 h-full">
        <figure className="px-4 pt-4">
          <img
            src={`/img/projects/${id}.webp`}
            alt={imageAlt}
            className="rounded-md aspect-video"
          />
        </figure>
        <div className="card-body">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="whitespace-pre-line">
            {shortDescription}{" "}
            <span className="text-primary">{t("readMore")}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
