import PageTitle from "@/components/PageTitle/PageTitle";

import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

import ExperienceItem from "@/components/Experience/ExperienceItem/ExperienceItem";
import experienceData from "@/data/experience";


export default function Experience() {
  return (
    <>
      <PageTitle currentPageId="experience" text="Experience" />
    <div className="-ms-0.5 pt-1.5">
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {
        experienceData.map(
          (
            item
          ) => (
          <ExperienceItem title={item.title} date={item.date} description={item.description}></ExperienceItem>
        )
      )}
         
        
      </Timeline></div>
    </>
  );
}
