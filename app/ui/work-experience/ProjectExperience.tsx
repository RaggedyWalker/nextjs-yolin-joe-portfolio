import clsx from "clsx";
import React, { FC } from "react";

const ProjectExperience: FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={clsx(className)}>
      <h2 className="text-4xl text-primary/70 text-center md:text-left">
        Recent Experience
      </h2>
      <div className="text-primary/60 mt-10 grid md:grid-cols-1 gap-8">
        {/* 
          
          personal

          - "Beta Eye" A personal financial application
          
          I build this full-stack project to help me improve trading skills.
          Betaeye primarily provides candlestick simulated training.You can
          practise with random time and stock. I use koa, prisma, mysql, third
          party api to collect market data. And also use react, tailwind,
          ant-design library to build website pages.
          


          2022 - 2024
          
          - 开发金融投研saas“Alpha派”，金融AI智能回答模块
          - Financial Research App "Alpha Pai"
          - Financial AI intelligent answering in the investment research SaaS "Alpha Pai"

          I developed the AI conversation module which is able to answer
          questions in the financial field. With Company's self-developed
          financial AI , I use vue.js and websocket to build Q&A sessions.The
          answer supports displaying text, tables, and charts format.
               


          - “AlphaMind”基线版投研产品开发
          - "Alpha Mind" Enterprise-level investment research products

          Build an investment research product system with Micro Frontends technique. We splited one huge stone web application into several atom web applications like Data Library, Meeting, Research Report, Reseacher Workbench. And conviniently provide localized services for a number of well-known Chinese securities firms and fund companies



          - 上海电信翼销售APP前端负责人
          - Head of Shanghai Telecom Wing Sales APP Front-end

          Responsible for the core telecom order business.Refactored and upgraded the entire APP to Vue SPA, which greatly improves the loading speed of the application and the cleanliness of the architecture.

          During my tenure, I managed team tasks and the Mobile html5 technology architecture. I also regularly organized
          business knowledge training and technical share to help members be more competent in work.

          负责核心电信订购业务，把app到重构升级vue spa，巨大提升应用加载速度，架构整洁度。
          任职期间负责管理团队任务，移动端技术架构。我还会定期组织业务知识培训和技术交流，帮助团队成员变得更出色。
        */}
        <div className="experience-card">
          <h1 className="text-xl text-primary pb-4">
            "
            <a
              className="underline text-violet-500"
              href="https://betaeye.top"
              target="_blank"
            >
              Beta Eye
            </a>
            " A personal financial application
          </h1>
          <p>
            I build this full-stack project to help me improve trading skills.
            Betaeye primarily provides candlestick simulated training with
            random time and stock if you like. I use koa, prisma, mysql, third
            party api to collect real market data. And also use react, tailwind,
            ant-design library to build website pages.
          </p>
        </div>

        <div className="experience-card">
          <h1 className="text-xl text-primary pb-4">
            "
            <a
              className="underline text-violet-500"
              href="https://www.rabyte.cn/en/"
              target="_blank"
            >
              Alpha Pai
            </a>
            " Investment Research App
          </h1>
          <p>
            I builded the AI conversation module which is able to answer
            questions in the financial field. I use vue.js, echarts, websocket,
            and most importantly ,Company's self-developed financial AI to build
            Q&A sessions.The answer supports displaying text, tables, and charts
            format.
          </p>
        </div>

        <div className="experience-card">
          <h1 className="text-xl text-primary pb-4">
            "
            <a
              className="underline text-violet-500"
              href="https://www.rabyte.cn/en/"
              target="_blank"
            >
              Alpha Mind
            </a>
            " Enterprise-level investment research products
          </h1>
          <p>
            Builded an investment research product system with Micro Frontends
            technique. We splited one huge stone web application into several
            atom web applications like Data Library, Meeting, Research Report,
            Reseacher Workbench. And conviniently provide localized services for
            a number of well-known Chinese securities brokers and fund
            companies.
          </p>
        </div>

        <div className="experience-card">
          <h1 className="text-xl text-primary pb-4">
            Head of Shanghai Telecom Wing Sales APP front-end team
          </h1>
          <p>
            Took charge of the core telecom order business.We refactored and
            upgraded the jQuery html5 APP to Vue SPA, which greatly improves the
            loading speed of the application and the cleanliness of the
            architecture. During my tenure, I managed team tasks and the
            frontend part technology architecture. I also regularly organized
            business knowledge training and technical share to help members be
            more competent in work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectExperience;
