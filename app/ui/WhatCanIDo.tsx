import React, { FC } from "react";
import Image from "next/image";
import clsx from "clsx";
import ComputerFillSvg from "@/app/ui/svg/computer-fill";
import BuildToolSvg from "@/app/ui/svg/build-tool-sharp";
import CycleSvg from "@/app/ui/svg/cycle";
import PeopleTeamSvg from "@/app/ui/svg/people-team-fill";

interface Ability {
  icon?: React.ReactElement;
  ability: string;
  desc: string;
}
const WhatCanIDo: FC<{ className?: string }> = ({ className }) => {
  const list = [
    {
      //   icon: "/portfolio/computer-fill.svg",
      icon: <ComputerFillSvg width={48} height={48} />,
      ability: "Complete Websites",
      desc: "Make beautiful websites that achieve your business goals",
    },
    {
      //   icon: "/portfolio/build-tool-sharp.svg",
      icon: <BuildToolSvg width={48} height={48} />,
      ability: "Design & Optimize",
      desc: "Build scalable architecture that keep code clean and efficient.<br/>Improve performance and speed up your websites",
    },
    {
      //   icon: "/portfolio/cycle.svg",
      icon: <CycleSvg width={48} height={48} />,
      ability: "Entire Development LifeCycle",
      desc: "Participate in the entire production lifecycle, from frontend, backend to go-live",
    },
    {
      //   icon: "/portfolio/people-team-fill.svg",
      icon: <PeopleTeamSvg width={48} height={48} />,
      ability: "Team Communication",
      desc: "Collaborate with team members across different functions.<br/>Lead teammates to grow",
    },
  ];
  return (
    <section className={clsx(className)}>
      <h2 className="text-4xl text-primary/70 text-center md:text-left">What Can I Do</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {list.map((item, index) => (
          <AbilityCard item={item} key={index}></AbilityCard>
        ))}
      </div>
    </section>
  );
};

const AbilityCard: FC<{ item: Ability }> = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border-2 border-zinc-900 bg-primary/50 p-1 text-primary/40 text-center cursor-pointer hover:shadow hover:shadow-violet-900 hover:brightness-150">
      <section className="bg-zinc-800/50 rounded-2xl h-20 flex justify-center items-center text-primary/70">
        {
          item.icon
          //   <Image
          //     src={item.icon}
          //     alt={item.ability}
          //     width={40}
          //     height={40}
          //     style={{ color: "#ffffff" }}
          //   />
        }
      </section>
      <h3 className="text-primary/90 text-xl">{item.ability}</h3>
      <p
        className="break-words"
        dangerouslySetInnerHTML={{ __html: item.desc }}
      ></p>
    </div>
  );
};

export default WhatCanIDo;
