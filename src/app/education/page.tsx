import PageTitle from "@/components/PageTitle/PageTitle";
import EducationItem from "@/components/Education/EducationItem/EducationItem";
import educationData from "@/data/education";


export default function Education() {
  return (
    <>
      <PageTitle iconSize={43} currentPageId="education" text="Education" />
      {/* <div className="flex flex-col px-2 pt-5 gap-y-1">
        <div className="flex ">
          <h1 className="text-lg font-semibold">Full Stack Developer</h1>
        </div>
        <span className="text-subtitle-darker">IBM 2023</span>
        <span className="text-subtitle-darker text-sm">Node.js - React.js - JavaScript - Python - SQL - IBM Cloud</span>
      </div> */}

      <div className="flex flex-col">
        {educationData.map((item,index) => (
          <EducationItem key={index}
            title={item.title}
            subtitle={item.subtitle}
            skills={item.skills}
          ></EducationItem>
        ))}
      </div>
    </>
  );
}
