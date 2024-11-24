import { Fragment } from "react";

import { IoArrowBackOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import { Link } from "@/i18n/routing";
import projectsData from "@/data/projects";

// Translation Imports
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

// Definimos el tipo de Params como una Promesa
type Params = Promise<{ projectId: string; locale: "en" | "es" }>;

export default async function ProjectInfo({ params }: { params: Params }) {
  // Esperamos a que la promesa de `params` se resuelva
  const { projectId, locale } = await params;

  // Ajustamos la configuración del locale
  setRequestLocale(locale);

  // Obtenemos el proyecto actual
  const currentProject = projectsData.find(
    (project) => project.id === projectId
  );

  // Obtenemos las traducciones
  const t = await getTranslations("projectInfo");

  // Function to replace newlines with <br /> tags
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
    <>
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <IoArrowBackOutline className="text-subtitle-darker" size={28} />
        </Link>
        <h1 className="text-2xl font-bold">{currentProject?.title[locale]}</h1>
      </div>
      <div className="flex gap-8 flex-col-reverse lg:flex-row py-5 lg:gap-1">
        <div className="w-full lg:w-6/12 text-lg font-medium flex-col flex gap-5 lg:gap-2">
          <p className="whitespace-pre-line">
            {renderDescriptionWithLineBreaks(
              currentProject?.fullDescription[locale] || ""
            )}
          </p>
          <span className="text-subtitle">{currentProject?.skills}</span>
          <div className="flex gap-2 pt-4">
            {currentProject?.github && (
              <a href={`https://${currentProject?.github}`} target="_blank">
                <button className="btn bg-transparent hover:bg-transparent hover:border-info px-4 border-2 border-info">
                  <FaGithub size={28} />
                  Github
                </button>
              </a>
            )}

            {currentProject?.url && (
              <a href={`https://${currentProject?.url}`} target="_blank">
                <button className="btn bg-transparent hover:bg-transparent hover:border-primary border-2 border-primary text-lg font-bold">
                  {t("projectBtn")}
                </button>
              </a>
            )}
          </div>
        </div>
        <div className="w-full lg:w-6/12 lg:px-6">
          <img
            src={`/img/projects/${currentProject?.id}.png`}
            alt={currentProject?.imageAlt[locale]}
          />
        </div>
      </div>
    </>
  );
}
