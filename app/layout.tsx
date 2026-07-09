import type { Metadata } from "next";
import "./globals.css";

const sitePrefix = process.env.GITHUB_PAGES === "true" ? "/skills-radar" : "";

export const metadata: Metadata = {
  title: "Skills Radar｜中文互联网 Skills 推荐雷达",
  description: "从专家真实工作流出发，筛选值得先装、先看或持续观察的 Agent Skills 与开源项目。",
  icons: { icon: `${sitePrefix}/favicon.svg`, shortcut: `${sitePrefix}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
