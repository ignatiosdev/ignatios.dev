import LinkIcon from "@/components/LinkIcon/LinkIcon";

type Props = {
  title: string;
  subtitle: string;
  skills: string;
  key: number;
  url: string;
};

function EducationItem({ title, subtitle, skills, url }: Props) {
  return (
    <div className="flex flex-col px-2 pt-5 gap-y-1">
      <div className="flex gap-x-4 items-baseline pt-1">
        <h1 className="text-lg font-semibold ">{title}</h1>
        <div>
          <LinkIcon url={url}></LinkIcon>
        </div>
      </div>
      <span className="text-subtitle-darker">{subtitle}</span>
      <span className="text-subtitle-darker text-sm">{skills}</span>
    </div>
  );
}

export default EducationItem;
