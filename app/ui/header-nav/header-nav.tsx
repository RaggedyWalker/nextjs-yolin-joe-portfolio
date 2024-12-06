"use client";

import React, { FC, MouseEvent, useState } from "react";
import { GithubSvg } from "../svg/github";
import clsx from "clsx";

const hashArr = ["home", "skill", "contact"];
const HeaderNav = () => {
  const [current, setCurrent] = useState("home");
  return (
    <div className="z-[1000] fixed top-2 text-2xl py-2 px-4 flex w-full justify-center items-center">
      <div className="bg-violet-600/30 rounded-full text-2xl py-2 px-4 ml-auto">
        {hashArr.map((hash) => (
          <Nav
            current={current}
            hash={hash}
            key={hash}
            setCurrent={setCurrent}
          ></Nav>
        ))}
      </div>
      <div className="flex items-center ml-auto">
        <a
          href="https://github.com/RaggedyWalker"
          target="_blank"
          title="https://github.com/RaggedyWalker"
        >
          <GithubSvg
            width={32}
            height={32}
            className="text-primary cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

const Nav: FC<{
  hash: string;
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}> = ({ hash, current, setCurrent }) => {
  const title = hash.charAt(0).toUpperCase() + hash.slice(1);

  function scrollToElement(event: MouseEvent) {
    const element = document.getElementById(hash);
    // 使用 scrollIntoView 方法将元素滚动到可视区域正中
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // 平滑滚动
        block: "center", // 将元素对齐到视口的中间位置
      });
      setCurrent(hash);
    }
  }

  return (
    <span
      className={clsx(
        "p-2 cursor-pointer  hover:text-orange-200",
        hash === current ? "text-primary/80" : "text-primary/20"
      )}
      data-hash={hash}
      onClick={scrollToElement}
    >
      {title}
    </span>
  );
};

export default HeaderNav;
