import PageTitle from "@/components/PageTitle/PageTitle";
import ProjectItem from "@/components/Projects/ProjectItem/ProjectItem";
import Project from "@/types/Project";
import projectsData from "@/data/projects";

export default function ProjectsPage() {
  const mockProject: Project = projectsData[0] as Project; // Type assertion

  return (
    <>
      <div className="flex flex-col gap-2 -mx-3">
        <div className="px-3 ">
          <PageTitle currentPageId="projects" text="Projects" />
        </div>
        <div className="flex flex-wrap ">
          {/* {projectsData.map(
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
