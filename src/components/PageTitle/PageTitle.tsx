import PageIcon from "@/components/PageTitle/PageIcon/PageIcon";

type Props = { currentPageId: string; text: string, iconSize?:number};

function PageTitle({ text, currentPageId,iconSize }: Props) {
  return (
    <div className="flex items-center gap-3">
      <PageIcon size={iconSize} currentPageId={currentPageId}></PageIcon>
      <h1 className="text-2xl font-bold">{text}</h1>
    </div>
  );
}

export default PageTitle;
