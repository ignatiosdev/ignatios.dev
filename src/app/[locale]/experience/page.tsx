import PageTitle from "@/components/PageTitle/PageTitle";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import ExperienceItem from "@/components/Experience/ExperienceItem/ExperienceItem";
import experienceData from "@/data/experience";


// Translation Imports
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

type Params = Promise<{locale: "en" | "es" }>;

export default async function Experience({
  params,
}: {
  params: Params;  
}) {

  // Ensure static rendering by making locale available at build time
  const { locale } = await params;  
  setRequestLocale(locale);  

  const t = await getTranslations("experience");


  return (
    <>
       <PageTitle currentPageId="experience" text={t("pageTitle")} />
      <div className="-ms-0.5 pt-1.5">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {experienceData.map((item, index) => (
            <ExperienceItem
              key={index}
              title={item.title[locale]}
              date={item.date[locale]}
              description={item.description[locale]}
            ></ExperienceItem>
          ))}
        </Timeline>
      </div> 
    </>
  );
}

