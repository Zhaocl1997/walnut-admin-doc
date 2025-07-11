# 介绍

:::warning
项目不涉及常规的低代码生成或者拖拽生成表单之类的，这个项目的方向是高度封装组件的方向。
:::

## 涵盖内容

:::info
- 暂时都是想到什么写什么，写文档也是门学问（

- 文档是在豆包的辅助下生成的，我也有简单审核，所以有些地方ai味会很重，不过描述的很清晰就可以了。
:::

 - 基础技术栈：<WBaseLink preset="ts">typescript</WBaseLink> + <WBaseLink preset="vue">vue3</WBaseLink> + <WBaseLink preset="vite">vite6</WBaseLink> + <WBaseLink preset="unocss">unocss</WBaseLink> + <WBaseLink preset="naive-ui">naive-ui</WBaseLink> + <WBaseLink preset="pinia">pinia</WBaseLink> + <WBaseLink preset="vue-router">vue-router4</WBaseLink> + <WBaseLink preset="vueuse">vueuse</WBaseLink> + <WBaseLink preset="axios">axios</WBaseLink> + <WBaseLink preset="iconify">iconify</WBaseLink>

 - 基础功能：RBAC、暗色模式、国际化、多维度登录、第三方oauth
 - 现代化的常见工具：<WBaseLink preset="lodash-es">lodash-es</WBaseLink>、<WBaseLink preset="nanoid">nanoid</WBaseLink>、<WBaseLink preset="lru-cache">lru-cache</WBaseLink>、<WBaseLink preset="ua-parser-js">ua-parser-js</WBaseLink>等
 - 简化的项目配置，无需 eslint + pritter + husky 配置很多的苦逼经历，simple-git-hook + antfu大佬的eslint规则，简化配置过程，[查看这里](./base/project.md)
 - 基于naive-ui的全局扩展，[查看这里](./base/naive-ui.md)
 - 需要接口支持的i18n，[查看这里](./base/i18n.md)
 - 多样的vite插件支持，[查看这里](./base/plugin.md)
 - 开箱即用的基础组件和高阶组件，[查看这里](./component/index.md)
 - 丰富的axios扩展功能，[查看这里](./base/axios.md)
 - 方便的icon配置，[查看这里](./base/icon.md)
 - 灵活的router配置，[查看这里](./base/router.md)
 - 多样的第三方插件植入，[查看这里](./base/vendor.md)
 - 符合要求的安全加密，[查看这里](./base/crypto.md)
 - 功能强大的hooks封装，[查看这里](./base/hooks.md)

## 有趣的功能

### 纯前端
 - ❤️【纯前端】web-vitals 接入，可随时在 google analytics 后台看到统计情况，维度很丰富，[查看这里](./features/web-vitals.md)
 - 🙌【纯前端】driverjs 轻量化的引导，[查看这里](./features/driverjs.md)
 - 😒【纯前端】html-to-image 页面快照？实则不然，就是个截图，[查看这里](./features/html-to-image.md)
 - 🤩【纯前端】libphonenumber-js 实现的国际化手机号表单项，[查看这里](./component/extra/phone-number-input.md)
 - 😊【纯前端】untyper 打字机？star虽少，功能够用，[查看这里](./features/untyper.md)
 - 😇【纯前端】21st 太酷了！这才是真正的前端，[查看这里](./features/21st.md)
 - 👍【纯前端】sentry 接入，对于非大型项目来说绝对够用了，[查看这里](./features/sentry.md)
 - 😘【纯前端】animate.css + vue的 transition 封装的组件，[查看这里](./component/extra/transition.md)

### 可配合接口
 - 😂【接口配合】fingerprint 指纹追踪，大部分情况是对于C端的功能，我也做到了项目里，同时配合后台也做了一些业务相关处理，[查看这里](./features/fingerprint.md)

### 必须有接口支持
 - 😎【必须有接口】capjs 人机校验接入，这个也很有意思，capjs这个开源项目非常精致，我很喜欢，[查看这里](./features/capjs.md)
 - 👌【必须有接口】ali-oss 接入，包括sts支持，[查看这里](./features/ali-oss.md)
