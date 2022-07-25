import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "指南",
    activeMatch: "/guide/",
    items: [
      {
        text: "介绍",
        link: "/guide/introduction",
      },
      { text: "深入", link: "/guide/deep/config" },
    ],
  },
  {
    text: "组件",
    activeMatch: `/component/`,
    items: [
      {
        text: "UI组件",
        link: "/component/UI/button",
      },
      {
        text: "其他组件",
        link: "/component/Extra/arrow",
      },
      {
        text: "App级别组件",
        link: "/component/App/authorize",
      },
      {
        text: "高阶组件",
        link: "/component/HOC/withValue",
      },
      {
        text: "进阶组件",
        link: "/component/Advanced/apiSelect",
      },
      {
        text: "第三方组件",
        link: "/component/vendor/avatarUpload",
      },
    ],
  },
  {
    text: "记录",
    activeMatch: "/record/",
    items: [
      {
        text: "日常记录",
        link: "/record/daily",
      },
      {
        text: "部署记录",
        link: "/record/deploy",
      },
    ],
  },
];