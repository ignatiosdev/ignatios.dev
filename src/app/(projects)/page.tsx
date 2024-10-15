import PageTitle from "@/components/PageTitle/PageTitle";
import ProjectItem from "@/components/Projects/ProjectItem/ProjectItem";
import Project from "@/types/Project";
import projectsData from "@/data/projects";

export default function ProjectsPage() {
  console.log(projectsData);
  const mockProject: Project = projectsData[0];

  return (
    <>
      <div className="flex flex-col gap-4">
        <PageTitle currentPageId="projects" text="Projects" />
        <div className="flex flex-wrap ">
          {/* {Projects.map(
          (
            project // Map through all projects
          ) => (
            <div className="w-1/2"> <ProjectItem key={project.id} {...project} /></div>
          )
        )} */}




          <div className="w-1/2 p-3">
            <ProjectItem key={mockProject.id} {...mockProject} />
          </div>
          <div className="w-1/2 p-3">
            <ProjectItem key={mockProject.id} {...mockProject} />
          </div>
          <div className="w-1/2 p-3">
            <ProjectItem key={mockProject.id} {...mockProject} />
          </div>
          <div className="w-1/2 p-3">
            <ProjectItem key={mockProject.id} {...mockProject} />
          </div>

        </div>
      </div>
    </>
  );
}
