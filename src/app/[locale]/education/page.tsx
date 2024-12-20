import PageTitle from "@/components/PageTitle/PageTitle";
import EducationItem from "@/components/Education/EducationItem/EducationItem";
import educationData from "@/data/education";

// Translation Imports
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

type Params = Promise<{locale: "en" | "es" }>;

export default async function Education({
  params,
}: {
  params: Params;
}) {
  
  // Ensure static rendering by making locale available at build time
  const { locale } = await params; 
  setRequestLocale(locale);  

  const t = await getTranslations("education");

  return (
    <>
      <PageTitle
        iconSize={40}
        currentPageId="education"
        text={t("pageTitle")}
      />

      <div className="flex flex-col">
        {educationData.map((item, index) => (
          <EducationItem
            key={index}
            title={item.title[locale]}
            subtitle={item.subtitle[locale]}
            skills={item.skills[locale]}
            url={item.url}
          ></EducationItem>
        ))}
      </div>
    </>
  );
}
