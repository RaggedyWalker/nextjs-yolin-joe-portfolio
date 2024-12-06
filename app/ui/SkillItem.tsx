import React, { FC } from "react";

const SkillItem: FC<{
  item: {
    label: string;
    icon: string;
  };
}> = ({ item }) => {
  return (
    <p className="w-20 h-20 p-6 flex flex-col justify-center items-center gap-2 border border-violet-950 shadow-violet-700 hover:shadow-violet-500 hover:cursor-pointer  shadow-lg">
      <img src={item.icon} width={50} height={50} title={item.label} />
      <label className="text-xs opacity-80">{item.label}</label>
    </p>
  );
};

export default SkillItem;
