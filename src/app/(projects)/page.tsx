import PageTitle from "@/components/PageTitle/PageTitle";
import ProjectItem from "@/components/Projects/ProjectItem/ProjectItem";
import projectsData from "@/data/projects";

export default function ProjectsPage() {


  return (
    <>
      <div className="flex flex-col gap-2 -mx-3">
        <div className="px-3 ">
          <PageTitle currentPageId="projects" text="Projects" />
        </div>
        <div className="flex flex-wrap ">
       {projectsData.map(
          (
            project 
          ) => (
            <div key={project.id} className="w-1/2 p-3"> <ProjectItem  {...project} /></div>
          )
        )} 




         
        </div>
      </div>
    </>
  );
}
