import PageTitle from "@/components/PageTitle/PageTitle";

export default function Experience() {
  return (
    <>
      <PageTitle currentPageId="experience" text="Experience" />
      <ul className="timeline timeline-compact timeline-vertical timeline-snap-icon px-3 pt-2 gap-y-5">
        <li>
          <div className="timeline-middle"><div className="bg-primary rounded-full w-4 h-4"></div></div>
          <div className="timeline-end ">
            <div className="flex flex-col px-3 gap-3">
              <span className="text-subtitle ">OCTOBER, 2023 - PRESENT</span>
              <h1 className="text-lg font-bold ">IT Technician at Infoserv</h1>
              <p className="text-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip Ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum
              </p>
            </div>
          </div>
          <hr style={{height:"105%"}} className="bg-primary" />
        </li>
        <li>
          <div className="timeline-middle"><div className="bg-primary rounded-full w-4 h-4"></div></div>
          <div className="timeline-end ">
            <div className="flex flex-col px-3 gap-3">
              <span className="text-subtitle ">OCTOBER, 2023 - PRESENT</span>
              <h1 className="text-lg font-bold ">IT Technician at Infoserv</h1>
              <p className="text-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip Ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum
              </p>
            </div>
          </div>
          <hr style={{height:"180%"}} className="bg-primary" />
        </li>
        <li>
          <div className="timeline-middle"><div className="bg-primary rounded-full w-4 h-4"></div></div>
          <div className="timeline-end ">
            <div className="flex flex-col px-3 gap-3">
              <span className="text-subtitle ">OCTOBER, 2023 - PRESENT</span>
              <h1 className="text-lg font-bold ">IT Technician at Infoserv</h1>
              <p className="text-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip Ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum
              </p>
            </div>
          </div>
          <hr style={{height:"100%"}} className="bg-primary" />
        </li>
      </ul>
    </>
  );
}
