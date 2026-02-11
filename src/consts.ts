// 站点常量：从环境变量读取站点/作者信息，其余为模板默认文案
// 可在项目中通过 import 使用。站点相关 key 见 .env.example

import type { Multilingual } from "@/i18n";

const env = import.meta.env;

function getEnv(key: string): string | undefined {
  return env[key];
}

/** 站点标题（来自 PUBLIC_SITE_TITLE_*） */
export const SITE_TITLE: Multilingual = {
  en: getEnv("PUBLIC_SITE_TITLE_EN") ?? "Our Daily Code",
  "zh-cn": getEnv("PUBLIC_SITE_TITLE_ZH_CN") ?? "我的博客",
};

/** 站点描述（来自 PUBLIC_SITE_DESCRIPTION_*） */
export const SITE_DESCRIPTION: Multilingual = {
  en: getEnv("PUBLIC_SITE_DESCRIPTION_EN") ?? "A personal blog of Derek Carlos",
  "zh-cn": getEnv("PUBLIC_SITE_DESCRIPTION_ZH_CN") ?? "基于 Astro 与 i18n 的个人博客。",
};

/** SEO 关键词（来自 PUBLIC_SITE_KEYWORDS_*，可选） */
export const SITE_KEYWORDS: Multilingual = {
  en: getEnv("PUBLIC_SITE_KEYWORDS_EN") ?? "blog, astro, i18n",
  "zh-cn": getEnv("PUBLIC_SITE_KEYWORDS_ZH_CN") ?? "博客, Astro, 多语言",
};

/** 网站 slogan（来自 PUBLIC_SITE_SLOGAN_*） */
export const SITE_SLOGAN: Multilingual = {
  en: getEnv("PUBLIC_SITE_SLOGAN_EN") ?? "Deploy. Learn. Repeat.",
  "zh-cn": getEnv("PUBLIC_SITE_SLOGAN_ZH_CN") ?? "写一次，到处运行。",
};

/** X (Twitter) 账号（来自 PUBLIC_X_ACCOUNT） */
export const X_ACCOUNT: string = getEnv("PUBLIC_X_ACCOUNT") ?? "";

/** 默认作者名（来自 PUBLIC_AUTHOR_NAME，用于 meta、博文 fallback） */
export const AUTHOR_NAME: string = getEnv("PUBLIC_AUTHOR_NAME") ?? "Derek Carlos";

export const NOT_TRANSLATED_CAUTION: Multilingual = {
  en: "This page is not available in your language.",
  "zh-cn": "此页面不支持您的语言。",
};

// 首页简介问候语（可改为从 env 扩展）
export const HOME_INTRO_GREETING: Multilingual = {
  en: "Hello, I'm Derek.",
  "zh-cn": "你好，我是本站作者。",
};

// 首页简介（模板占位，建议部署前在 consts 或通过 CMS 替换）
export const HOME_INTRO: Multilingual = {
  en: `
  - Pronounced /dih-REK/: /dɪˈrɛk/ or /dəˈrɛk/
  - Currently working on GoldenGate projects
  - Regaining my fitness through indoor cycling
  - Threads: [@derekcarlos](https://www.threads.com/@derekcarlos)
  - Check the [About](/about) page to learn more about this blog.`
};

export const HOME_AUTHOR_TAGS: Multilingual[] = [
  { en: "Oracle" },
  { en: "GoldenGate" },
  { en: "Database" },
  { en: "Best Practices" },
  { en: "Implementation" },
];

// 导航文案
export const NAV_HOME: Multilingual = { en: "Home", "zh-cn": "首页" };
export const NAV_ABOUT: Multilingual = { en: "About", "zh-cn": "关于" };
export const NAV_PROJECTS: Multilingual = { en: "Projects", "zh-cn": "项目" };
export const NAV_ARCHIVE: Multilingual = { en: "Archive", "zh-cn": "归档" };
export const NAV_SPONSOR: Multilingual = { en: "Support", "zh-cn": "支持" };
export const NAV_SERIES: Multilingual = { en: "Series", "zh-cn": "系列" };
export const NAV_TAGS: Multilingual = { en: "Tags", "zh-cn": "标签" };
export const NAV_STATUS: Multilingual = { en: "Status", "zh-cn": "状态" };
export const NAV_COPYRIGHT: Multilingual = { en: "Copyright", "zh-cn": "版权信息" };
export const NAV_PRIVACY: Multilingual = { en: "Privacy", "zh-cn": "隐私政策" };
export const NAV_LINKS: Multilingual = { en: "Friends", "zh-cn": "友情链接" };
export const NAV_ANALYTICS: Multilingual = { en: "Analytics", "zh-cn": "访问统计" };

export const ARTICLE_LICENSE = "CC BY-SA 4.0";

export const READING_TIME_LABEL: Multilingual = {
  en: "min read",
  "zh-cn": "分钟阅读",
};

export const NAV_SEARCH: Multilingual = { en: "Search", "zh-cn": "搜索" };
export const SEARCH_PLACEHOLDER: Multilingual = {
  en: "Search posts…",
  "zh-cn": "搜索文章…",
};
export const SEARCH_NO_RESULTS: Multilingual = { en: "No results.", "zh-cn": "暂无结果。" };
export const SEARCH_OPEN_HINT: Multilingual = {
  en: "⌘K or Ctrl+K to open search",
  "zh-cn": "⌘K 或 Ctrl+K 打开搜索",
};
export const SEARCH_SOURCE_ALGOLIA: Multilingual = { en: "From Algolia", "zh-cn": "来自 Algolia" };
export const SEARCH_SOURCE_LOCAL: Multilingual = { en: "Local search", "zh-cn": "本地索引" };

export const ARCHIVE_PAGE_TITLE: Multilingual = { en: "Archive", "zh-cn": "归档" };
export const SITEMAP_PAGE_TITLE: Multilingual = { en: "Sitemap", "zh-cn": "站点地图" };
export const SITEMAP_XML_LABEL: Multilingual = {
  en: "XML Sitemap (for search engines)",
  "zh-cn": "XML 站点地图（供搜索引擎使用）",
};
export const SPONSOR_PAGE_TITLE: Multilingual = { en: "Support", "zh-cn": "支持" };
export const COPYRIGHT_PAGE_TITLE: Multilingual = { en: "Copyright", "zh-cn": "版权信息" };
export const PRIVACY_PAGE_TITLE: Multilingual = { en: "Privacy Policy", "zh-cn": "隐私政策" };
export const LINKS_PAGE_TITLE: Multilingual = { en: "Friends", "zh-cn": "友情链接" };

export const SPONSOR_WHY_TITLE: Multilingual = {
  en: "Why Support Me?",
  "zh-cn": "为什么需要您的支持？",
};
export const SPONSOR_WHY_BODY: Multilingual = {
  en: "Your support helps keep this site running and content free. Edit this in **src/consts.ts**.",
  "zh-cn": "您的支持有助于维持本站运营并保持内容免费。请在 **src/consts.ts** 中修改此处文案。",
};
export const SPONSOR_METHODS_TITLE: Multilingual = {
  en: "Ways to Support",
  "zh-cn": "支持方式",
};
export const SPONSOR_BENEFITS_TITLE: Multilingual = {
  en: "Supporter Benefits",
  "zh-cn": "支持者权益",
};
export const SPONSOR_BENEFITS_BODY: Multilingual = {
  en: "Thank you for your support. Edit in **src/consts.ts**.",
  "zh-cn": "感谢您的支持。请在 **src/consts.ts** 中修改。",
};

export const PROJECTS_PAGE_TITLE: Multilingual = { en: "Projects", "zh-cn": "项目" };
export const PROJECTS_TECH_STACK_LABEL: Multilingual = { en: "Tech Stack", "zh-cn": "技术栈" };

export const HOME_LATEST_POSTS: Multilingual = { en: "Latest posts", "zh-cn": "最新文章" };
export const HOME_PROJECTS_TITLE: Multilingual = {
  en: "Featured Projects",
  "zh-cn": "精选项目",
};
export const HOME_TAGS_TITLE: Multilingual = { en: "Popular Tags", "zh-cn": "热门标签" };
export const HOME_VIEW_ALL: Multilingual = { en: "View all posts", "zh-cn": "查看全部" };
export const HOME_VIEW_ALL_PROJECTS: Multilingual = {
  en: "View all projects",
  "zh-cn": "查看全部项目",
};

export const BLOG_INTRO: Multilingual = {
  en: "Exploring Oracle database technologies, GoldenGate implementations, and practical solutions to real-world deployment challenges. Learn from hands-on experience with Oracle products in production environments. And other things I have learned in life so far.",
  "zh-cn": "博客文章。请在 **src/consts.ts** 中修改 BLOG_INTRO。",
};
export const BLOG_SERIES_TITLE: Multilingual = { en: "Series", "zh-cn": "系列" };
export const BLOG_TOP_TAGS_TITLE: Multilingual = { en: "Top 20 Tags", "zh-cn": "热门标签 Top 20" };

export const BLOG_POSTS_PER_PAGE = 12;
export const PAGINATION_PREV: Multilingual = { en: "Previous", "zh-cn": "上一页" };
export const PAGINATION_NEXT: Multilingual = { en: "Next", "zh-cn": "下一页" };
export const PAGINATION_FIRST: Multilingual = { en: "First", "zh-cn": "首页" };
export const PAGINATION_LAST: Multilingual = { en: "Last", "zh-cn": "尾页" };
export const PAGINATION_GO: Multilingual = { en: "Go", "zh-cn": "跳转" };
export const PAGINATION_PAGE: Multilingual = { en: "Page", "zh-cn": "第" };
export const PAGINATION_OF: Multilingual = { en: "of", "zh-cn": "页，共" };

export const ABOUT_PAGE_TITLE: Multilingual = { en: "About", "zh-cn": "关于" };
export const ABOUT_ME_TITLE: Multilingual = { en: "About Me and This Blog", "zh-cn": "关于我" };
export const ABOUT_ME_BODY: Multilingual = {
  en: `Hello, I'm Derek. _Kamusta_?
  I am a technical consultant with 20 years of experience working with Oracle products.

  I am writing this blog for myself, for I want to have a blog that can document what I have learned, at least for the last 5 years or so. I am doing this because as I grow older there are things that I can no longer retain in my memory and if I simply let those things undocumented, I will go through the process of learning them all over again.

  I need a blog that displays the code snippets and commands that I use in a presentable manner, so that I can simply copy and paste them the next time I need to use them. My skills have grown mostly by reading other technical blogs like this and I wish to present my version of a technical blog that can also help other people in their pursuit for knowledge.

  This is not for me to say that all posts here will be correct, for I know that I will find a better way to do things. With that in mind, I will try to keep the posts here updated to ensure that they are up to date to the best practices and help others who would stumble upon this little place of mine in the Internet.`,
};
export const ABOUT_TECH_TITLE: Multilingual = { en: "Tech Stack", "zh-cn": "技术栈" };
export const ABOUT_TECH_TESTING: Multilingual = {
  en: "Testing Tools (UI / E2E / API)",
  "zh-cn": "测试工具（UI / E2E / API）",
};
export const ABOUT_TECH_API_PERF: Multilingual = { en: "API & Performance", "zh-cn": "API 与性能" };
export const ABOUT_TECH_LANGUAGES: Multilingual = { en: "Languages", "zh-cn": "编程语言" };
export const ABOUT_TECH_DEVOPS: Multilingual = { en: "DevOps", "zh-cn": "DevOps" };
export const ABOUT_PROJECTS_TITLE: Multilingual = {
  en: "Featured Projects",
  "zh-cn": "精选项目",
};
export const ABOUT_SUPPORT_TITLE: Multilingual = { en: "Support", "zh-cn": "支持我" };
export const ABOUT_SUPPORT_BODY: Multilingual = {
  en: "If you find this helpful, consider [supporting me](/sponsor).",
  "zh-cn": "如果你觉得有帮助，欢迎 [支持我](/sponsor)。",
};
export const ABOUT_CONNECT_TITLE: Multilingual = { en: "Connect", "zh-cn": "联系我" };
export const ABOUT_CONNECT_BODY: Multilingual = {
  en: "Edit ABOUT_CONNECT_BODY in **src/consts.ts**.",
  "zh-cn": "请在 **src/consts.ts** 中修改 ABOUT_CONNECT_BODY。",
};

/** 精选项目（关于页），编辑 src/data/projects.ts */
export const FEATURED_PROJECTS: Array<{
  url: string;
  title: Multilingual;
  description: Multilingual;
}> = [
  {
    url: "https://astro.build",
    title: { en: "Astro", "zh-cn": "Astro" },
    description: {
      en: "Build faster websites with less client-side JavaScript.",
      "zh-cn": "用更少的客户端 JavaScript 构建更快的网站。",
    },
  },
  {
    url: "https://github.com",
    title: { en: "GitHub", "zh-cn": "GitHub" },
    description: {
      en: "Where the world builds software.",
      "zh-cn": "全球开发者协作平台。",
    },
  },
];
