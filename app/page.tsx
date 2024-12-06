import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import About from "./ui/about";
import SkillWall from "./ui/SkillWall";
import ProjectExperience from "./ui/work-experience/ProjectExperience";
import WhatCanIDo from "./ui/WhatCanIDo";
import { EmailSvg } from "./ui/svg/email";
import { GithubSvg } from "./ui/svg/github";
import { WebsiteSvg } from "./ui/svg/website";
import Contact from "./ui/Contact";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col p-10 text-primary gap-32">
      {/* introduce / hero */}
      <div className="mt-60 self-center text-center" id="home">
        <h1 className="shrink-0 leading-10">
          <span className="text-5xl opacity-40">I'm Yolin Joe.</span>
          <br />
          <span className="text-6xl opacity-80">
            The All-Round Frontend Player.
          </span>
        </h1>
        <h2 className="opacity-30 leading-8">With Vue, React, node.js</h2>
      </div>
      {/* hero */}
      {/* about 
        我是一个充满热情的前端开发者，有五年以上的开发工作经验。我喜欢去体验那些有创造性的工作，这帮助我变得更全能。我的专业不止于前端：响应式页面开发，前端工程化，微服务化，还有服务端api构建，应用部署。
        我的宗旨是构建用户体验友好的应用，更要构建开发者友好的应用。
        在实际的合作中，我希望让大多数人处于一个感到舒适的环境。
      */}
      <About className="md:w-[35%] self-center"></About>
      {/* skills wall 
        frontend： html，css，javascript，typescript，vue，react，frontend-microservice，tailwindcss，sass，emotion-js, webpack
        test: playwright
        backend： nodejs，java，koa, prisma，mysql
        deploy： git，docker，nginx，gitlab-ci
      */}
      <SkillWall className=""></SkillWall>
      {/* project experience */}
      <ProjectExperience className="md:px-20"></ProjectExperience>
      {/* what can i do 
        1. make pages with frameworks like Vue, React, Next
        2. be familiar with css skills like tailwind, scss, emotion
        3. mainly engaged in website development. Build complex systems with frontend microservices tech.
        4. Use Koa，prisma for server-side development
      */}
      <WhatCanIDo className="md:px-20"></WhatCanIDo>

      {/* contact 
        1. github
        2. personal works: betaeye.top
        3. email
      */}
      <Contact></Contact>
    </main>
  );
}
