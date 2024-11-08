import PageTitle from "@/components/PageTitle/PageTitle";
import ProjectItem from "@/components/Projects/ProjectItem/ProjectItem";
import projectsData from "@/data/projects";

// Translation Imports
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export default async function ProjectsPage({
  params,
}: {
  params: { locale: "en" | "es" };  
}) {
  
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
                description={project.description[locale]} // Same here
                imagePath={project.imagePath}
                imageAlt={project.imageAlt[locale]} // And here
                url={project.url}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
