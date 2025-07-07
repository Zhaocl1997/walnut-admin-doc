# 介绍

:::info
项目不涉及常规的低代码生成或者拖拽生成表单之类的，这个项目的方向是高度封装组件简化复制粘贴的过程，后面慢慢会有具体写到。
:::

## 涵盖内容

 - 基础技术栈：typescript + vue3 + vite6 + unocss + naive-ui + pinia + vue-router4 + vueuse + axios + iconify
 - 基础功能：RBAC、暗色模式、国际化、多维度登录、第三方oauth
 - 现代化的常见工具：lodash-es、nanoid、lru-cache、ua-parse-js
 - 简化的项目配置，无需 eslint + pritter + husky 一配置一天的苦逼经历，simple-git-hook + antfu大佬的eslint规则，简化配置过程，[查看这里](./base/project.md)
 - 基于naive-ui的全局扩展，[查看这里](./base/naive-ui.md)
 - 多样的vite插件支持，[查看这里](./base/plguin.md)
 - 开箱即用的基础组件和高阶组件，[查看这里](./component/index.md)
 - 丰富的axios扩展功能，[查看这里](./base/axios.md)
 - 方便的icon配置，[查看这里](./base/icon.md)
 - 灵活的router配置，[查看这里](./base/router.md)
 - 多样的第三方插件植入，[查看这里](./base/vendor.md)
 - 符合要求的安全加密，[查看这里](./base/crypto.md)

## 有趣的功能

:::warning
下面有的功能是纯前端方向的，有的有需要后台接口配合，甚至有的功能没有接口没法用，需要注意
:::

 - ❤️【纯前端】web-vitals 接入，可随时在 google analytics 后台看到统计情况，维度很丰富，[查看这里](./features/web-vitals.md)
 - 😂【接口配合】fingerprint 指纹追踪，大部分情况是对于C端的功能，我也做到了项目里，同时配合后台也做了一些业务相关处理，[查看这里](./features/fingerprint.md)
 - 👍【纯前端】sentry 接入，对于非大型项目来说绝对够用了，[查看这里](./features/sentry.md)
 - 😎【必须有接口】capjs 人机校验接入，这个也很有意思，capjs这个开源项目非常精致，我很喜欢，[查看这里](./features/capjs.md)
 - 👌【必须有接口】ali-oss 接入，包括sts支持，[查看这里](./features/ali-oss.md)
 - 😘【纯前端】animate.css + vue的 transition 封装的组件，[查看这里](./component/extra/transition.md)
 - 🙌【纯前端】driverjs 轻量化的引导，[查看这里](./features/driverjs.md)
 - 😒【纯前端】html-to-image 页面快照？实则不然，就是个截图，[查看这里](./features/html-to-image.md)
 - 🤩【纯前端】libphonenumber-js 实现的国际化手机号表单项，[查看这里](./component/extra/phone-number-input.md)
 - 😊【纯前端】untyper 打字机？star虽少，功能够用，[查看这里](./features/untyper.md)
 - 😇【纯前端】21st 太酷了！这才是真正的前端，[查看这里](./features/21st.md)
