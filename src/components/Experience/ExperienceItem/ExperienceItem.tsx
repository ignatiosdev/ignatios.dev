type Props = {
    title: string;
    date: string;
    description: string;
 
  };
  
  import TimelineItem from "@mui/lab/TimelineItem";
  import TimelineSeparator from "@mui/lab/TimelineSeparator";
  import TimelineConnector from "@mui/lab/TimelineConnector";
  import TimelineContent from "@mui/lab/TimelineContent";
  import TimelineDot from "@mui/lab/TimelineDot";
  

function ExperienceItem({date,title,description}: Props) {




  return (
    <TimelineItem className="py-1.5">
          <TimelineSeparator>
            <TimelineDot className="bg-primary"/>
            <TimelineConnector className="bg-primary"/>
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <div className="flex flex-col ps-3 w-11/12 gap-3">
              <span className="text-subtitle ">{date}</span>
              <h1 className="text-lg font-bold ">{title}</h1>
              <p className="text-subtitle">{description}
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
  );
}

export default ExperienceItem;
