import React, { FC } from "react";
import skillsIcons from "../config/skillsIcons";
import SkillItem from "./SkillItem";
import clsx from "clsx";

const SkillWall: FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={clsx(className)} id="skill">
      <h1 className="text-center text-4xl opacity-70">Skills Wall</h1>
      <div className="mt-10 flex flex-wrap justify-center">
        <div className="gap-8 grid grid-cols-3 lg:grid-cols-6">
          {skillsIcons
            .filter((item) => item.icon)
            .map((item) => {
              return <SkillItem item={item} key={item.label}></SkillItem>;
            })}
        </div>
      </div>
    </section>
  );
};

export default SkillWall;
