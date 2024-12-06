import "@/app/ui/global.css";
import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";
import HeaderNav from "./ui/header-nav/header-nav";

export const metadata: Metadata = {
  title: "Yolin Joe's portfolio",
  description: "personal main website, created by next.js",
  creator: "Yolin Joe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark-theme">
      <body className={`${lusitana.className} bg-primary`}>
        <HeaderNav></HeaderNav>
        {children}
      </body>
    </html>
  );
}
