import projectsData from "@/data/projects";

type Props = {};

function page({ params }: { params: { projectUrl: string } }) {
  let currentProject = projectsData.find(
    (project) => project.url === params.projectUrl
  );

  return (
    <>
      <h1 className="text-2xl font-bold">{currentProject?.title}</h1>
      <div className="flex gap-8 flex-col-reverse lg:flex-row py-5 lg:gap-1">
        <div className="w-full lg:w-6/12 text-lg font-medium flex-col flex gap-5 lg:gap-4  ">
          <p>{currentProject?.description}</p>
          <span className="text-subtitle"> {currentProject?.skills}</span>
          <div className="flex gap-2">
            <button className="btn border-2 border-info">Github</button>
            <a href={`https://${currentProject?.url}`} target="_blank">
              <button className="btn border-2 border-primary text-lg font-bold">
                VISIT PROJECT
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-6/12 lg:px-6">
          <img src="/img/projects/1.png"></img>
        </div>
      </div>
    </>
  );
}

export default page;
