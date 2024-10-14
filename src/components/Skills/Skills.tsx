import React from "react";
import SkillItem from "./../SkillItem/SkillItem";

type Props = { skills: string[] };

function Skills({ skills }: Props) {
  let leftSection: string[] = [];
  let rightSection: string[] = [];

  skills.forEach((skill, index) => {
    index % 2 == 0 ? leftSection.push(skill) : rightSection.push(skill);
  });


  return (
    <div className="container-default">
      <div className="flex gap-2">
        <div className="flex flex-col w-1/2 gap-2.5">
          {leftSection.map((item) => (
            <div className="flex justify-end" key={item}>
              <SkillItem text={item} />
            </div>
          ))}
        </div>

        <div className="flex flex-col w-1/2 gap-2.5">
          {rightSection.map((item) => (
            <div className="flex justify-start" key={item}>
              <SkillItem text={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
