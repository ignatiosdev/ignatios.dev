import React from "react";

type Props = { text: string };

function SkillItem({ text }: Props) {
  return (
    <div className="px-2 py-0.5 rounded-lg w-min text-primary bg-primary-content">{text}</div>
  );
}

export default SkillItem;
