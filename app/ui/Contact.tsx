import React from "react";
import { GithubSvg } from "./svg/github";
import { EmailSvg } from "./svg/email";
import { WebsiteSvg } from "./svg/website";

export default function Contact() {
  return (
    <section className="self-center" id="contact">
      <h1 className="text-center text-4xl opacity-70">Contact Me</h1>
      <p className="mt-8 leading-8 text-primary/50 flex gap-10">
        <a
          href="https://github.com/RaggedyWalker"
          target="_blank"
          title="https://github.com/RaggedyWalker"
        >
          <GithubSvg
            width={32}
            height={32}
            className="rounded-full text-primary cursor-pointer 
            hover:shadow-[0_0_16px_6px_rgba(124,58,237)]"
          />
        </a>
        <a href="mailto:zhuyonglin42@126.com">
          <EmailSvg
            className="rounded-full text-primary cursor-pointer hover:shadow-[0_0_16px_6px_rgba(124,58,237)]"
            width={32}
            height={32}
          ></EmailSvg>
        </a>
        <a href="https://betaeye.top" target="_blank" title="Beta Eye">
          <WebsiteSvg
            className="rounded-full text-primary cursor-pointer hover:shadow-[0_0_16px_6px_rgba(124,58,237)]"
            width={32}
            height={32}
          ></WebsiteSvg>
        </a>
      </p>
    </section>
  );
}
