import projectsData from "@/data/projects";

// Translation Imports
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

// Definimos el tipo de Params como una Promesa
type Params = Promise<{ projectUrl: string; locale: "en" | "es" }>;

export default async function ProjectInfo({
  params,
}: {
  params: Params;
}) {
  // Esperamos a que la promesa de `params` se resuelva
  const { projectUrl, locale } = await params;

  // Ajustamos la configuración del locale
  setRequestLocale(locale);

  // Obtenemos el proyecto actual
  const currentProject = projectsData.find(
    (project) => project.url === projectUrl
  );

  // Obtenemos las traducciones
  const t = await getTranslations("projectInfo");

  return (
    <>
      <h1 className="text-2xl font-bold">{currentProject?.title[locale]}</h1>
      <div className="flex gap-8 flex-col-reverse lg:flex-row py-5 lg:gap-1">
        <div className="w-full lg:w-6/12 text-lg font-medium flex-col flex gap-5 lg:gap-4">
          <p>{currentProject?.description[locale]}</p>
          <span className="text-subtitle"> {currentProject?.skills}</span>
          <div className="flex gap-2">
            <button className="btn border-2 border-info">Github</button>
            <a href={`https://${currentProject?.url}`} target="_blank">
              <button className="btn border-2 border-primary text-lg font-bold">
                {t("projectBtn")}
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-6/12 lg:px-6">
          <img src="/img/projects/1.png" alt="Project Image" />
        </div>
      </div>
    </>
  );
}
