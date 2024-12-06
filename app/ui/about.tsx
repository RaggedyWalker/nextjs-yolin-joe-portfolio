import clsx from "clsx";
import React, { FC } from "react";

const About: FC<{ className?: string }> = (props) => {
  return (
    <section className={clsx(props.className)}>
      {/* <p className="leading-8 text-primary/50">
        我是一个充满热情的前端开发者，目前base在上海。我喜欢去体验那些有创造性的工作，这帮助我变得更全面。我有五年以上的开发经验，有金融科技产品，AI应用开发经验。我的专业不止于前端：响应式页面开发，前端工程化，前端微服务，还有服务端api构建，应用部署。
        <br />
        <br />
        我的宗旨是构建<strong className="text-primary/80">用户体验友好</strong>
        的应用和<strong className="text-primary/80">开发者友好</strong>的应用。
        在实际的合作中，我希望让大多数人处于一个感到舒适的环境。
      </p> */}

      <p className="leading-8 text-primary/50">
        I am a passionate front-end developer, enjoy working on creative
        projects, which helps me become more well-rounded. I have over five
        years of development experience currently based in Shanghai, with a
        background in fintech products and AI conversation application
        development. My expertise extends beyond front-end development: I have
        experience with responsive design, front-end engineering, microservices,
        as well as server-side API development and application deployment.
        <br />
        <br />
        My goal is to create applications that are both
        <strong className="text-primary/80"> user-friendly </strong> and
        <strong className="text-primary/80"> developer-friendly </strong>
        applications. In collaborative work, I strive to create an environment
        where everyone feels comfortable.
      </p>
    </section>
  );
};

export default About;
