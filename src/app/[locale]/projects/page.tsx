import PageTitle from "@/components/PageTitle/PageTitle";
import ProjectItem from "@/components/Projects/ProjectItem/ProjectItem";
import projectsData from "@/data/projects";

// Translation Imports
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

type Params = Promise<{ locale: "en" | "es" }>;

export default async function ProjectsPage({ params }: { params: Params }) {
  // Ensure static rendering by making locale available at build time
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("projects");

  return (
    <>
      <div className="flex flex-col gap-2 -mx-3">
        <div className="px-3">
          <PageTitle currentPageId="projects" text={t("pageTitle")} />
        </div>
        <div className="flex flex-wrap ">
          {projectsData.map((project) => (
            <div key={project.id} className="w-full lg:w-1/2 p-3">
              <ProjectItem
                title={project.title[locale]} // TypeScript knows `locale` is "en" or "es"
                shortDescription={project.shortDescription[locale]} // Same here
                imageAlt={project.imageAlt[locale]} // And here
                id={project.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
