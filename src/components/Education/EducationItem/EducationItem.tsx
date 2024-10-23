type Props = { title: string; subtitle: string; skills: string; key: number };

function EducationItem({ title, subtitle, skills }: Props) {
  return (
    <div className="flex flex-col px-2 pt-5 gap-y-1">
      <div className="flex">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <span className="text-subtitle-darker">{subtitle}</span>
      <span className="text-subtitle-darker text-sm">{skills}</span>
    </div>
  );
}

export default EducationItem;
