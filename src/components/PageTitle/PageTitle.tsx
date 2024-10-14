import PageIcon from "@/components/PageTitle/PageIcon/PageIcon";

type Props = { currentPageId: string; text: string };

function PageTitle({ text, currentPageId }: Props) {
  return (
    <div className="flex items-center gap-3">
      <PageIcon currentPageId={currentPageId}></PageIcon>
      <h1 className="text-2xl font-bold">{text}</h1>
    </div>
  );
}

export default PageTitle;
