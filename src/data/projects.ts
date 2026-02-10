/**
 * 项目展示页数据。编辑此文件或通过 CMS 维护项目列表。
 */
import type { Multilingual } from "@/i18n";

export interface ProjectItem {
  url: string;
  name: Multilingual;
  techStack: Multilingual;
  description: Multilingual;
}

export const PROJECTS_LIST: ProjectItem[] = [
  // {
  //   url: "https://astro.build",
  //   name: { en: "Astro", "zh-cn": "Astro" },
  //   techStack: { en: "Astro, TypeScript", "zh-cn": "Astro、TypeScript" },
  //   description: {
  //     en: "Build faster websites with less client-side JavaScript.",
  //     "zh-cn": "用更少的客户端 JavaScript 构建更快的网站。",
  //   },
  // },
  // {
  //   url: "https://github.com",
  //   name: { en: "GitHub", "zh-cn": "GitHub" },
  //   techStack: { en: "Git", "zh-cn": "Git" },
  //   description: {
  //     en: "Where the world builds software.",
  //     "zh-cn": "全球开发者协作平台。",
  //   },
  // },
];
