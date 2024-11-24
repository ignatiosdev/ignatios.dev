""

type Props = { text: string };

function SkillItem({ text }: Props) {
  return (
    <div className="px-2 py-0.5 rounded-lg w-min dark:text-primary dark:bg-primary-content  text-primary-content border border-primary dark:border-0">{text}</div>
  );
}

export default SkillItem;
