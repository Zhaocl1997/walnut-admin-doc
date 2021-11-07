# 日常记录

## 2021.11.07

- 今天完成的事情
  - 在vueuse的DeepMayBeRef类型基础上优化了一个自己适用的类型，用到了form和table的hook函数参数类型上，一个类型一劳永逸，再也不担心回有ref类型的错误了
  - 面包屑的函数写冗余了，删除了一些
  - 修复了window上的naive消息组件api的类型
  - **阶段性成功**：清除了项目所有的类型错误（暂时）
  - 重新梳理了一下vite的相关配置，发现proxy那里写的真的好乱，明天继续优化
- 想法
  - menu页面几个树相关的函数，类型推导还需要优化
  - 一般proxy代理的都是以api为前缀的转发到后台地址上，并且后台的真实地址是不带api这样的前缀，但是这个项目的后台我决定还是带api字眼的前缀（还包括api的版本），感觉增加了一些工作量
  - 环境变量的命名再好好规范一下
  - 打包后header的样式和开发时不一致，好像inverted的问题，但不清楚为什么打完包表现就不一样了
  - chunk的分割需要研究一下
  - vben的打包信息相关部分很有意思，可以学习一下
  - 打包流程需要研究一些，还有相关的版本更新（CI/CD？）

## 2021.11.06

- 今天完成的事情
  - 升级了依赖，[stylelint 14](https://stylelint.io/migration-guide/to-14/) 有变化，lint appSettings 文件时报错了，就把 vue 文件从 stylelint 的配置里去掉了（有了 windicss 基本用不上手写 css 了，stylelint 在 vue 文件的校验用处不大）
  - 修复了 table 的类型错误
  - 移除了项目中所有的 as any，下一步可能尝试移除所有 any
  - 修复了 layout 的两个 style 问题
  - 修复了一些类型错误，最终目标就是 vue-tsc 没有任何的错误
- 想法
  - MaybeRef 这个类型，应该统一改成 vueuse 里的（已经全局注册类型了，可以直接用）
  - 明天把 form 好好捋捋，类型估计要改的也不少
  - appSettings 的表单内容靠右还没做
  - 亮色模式下左侧菜单和面包屑的文字颜色有问题
  - 项目的主题色配置还没做，需要做和 naive 的主题想配套的设置
  - icon 的方案，前两天看到了 antfu 的[unocss](https://github.com/antfu/unocss)，很有意思，icon 可以使用纯 css 的方案，有空尝试一下

## 2021.10.27

- 今天完成的事情
  - 把整体的 settings 的基本完成，差一些细枝末节的东西
- 想法
  - 本来想改一下 appsettings 里的表单内容靠右对齐，没想到打开了 form 的文件夹，全是飘红。。。settings 完事就打算重新做一下 form 了，好久没动，类型和可以优化的地方太多了（table 也是类似的，只不过还没到 table）（form 和 table 的设计真的是一版又一版，工作量不小，有时候一弄就是一天）
  - header 和 tab 的 height 设置不知道有什么用。。。但是能提出来的影响整体布局的配置我都做了，没准就有人想改 header 的高度呢，这样就不用找文件去配置了
  - footer 暂时还没做
  - aside 的 fix 也应该做一下
  - tab 的三种风格，说白了就是 css，但是我对 css 不是很精通，那些高级的很漂亮很炫酷的我都只是略知一二，后续如果可以白嫖到几套好的 css，会做优化的
  - tab 的滚动条和 tab 贴太近了，要么去掉要么往下一点。而且监听鼠标向左滚动滑轮时，全局的也会下滚，需要想办法组织一下事件冒泡
  - 关于左侧菜单，一是嵌套的菜单示例需要再优化优化，二是我在想如果当前的路由在左侧菜单里展开后的位置超出立了屏幕高度，或许需要用 naive 自带的 scrollTo 方法
- 明天设计一下 userSettings 的类型

## 2021.10.26

- 今天完成的事情
  - 把 mongo 和 nest 的程序部署到 ubuntu 的服务器上了，但是还没实现流程自动化
  - menu 的 settings 基本完成
- 想法
  - 头部的 lock 和 search 想做一下，但说实话这两组件都不简单，search 想要 algolia 的风格，但我上网看了一下 algolia 一般适用于文档查询，需要再研究研究
  - lock 的话想配合后台节后实现，就需要去开发后台相关了
  - 面包屑的完成度不是很高，明天需要丰富一下
- 明天继续 settings 的部分

## 2021.10.25

- 今天完成的事情
  - 修复了根路由的死循环 bug
  - 抽离了 vite 的 host 到环境变量里
  - 修复了关闭多个 tab 的逻辑错误
  - 重构的**screenfull**的逻辑，把 isFullScreen 和要全屏的目标 id 设置成了全局的变量，就是为了在全屏指定元素时需要加一些样式美化一下，感觉设计不太合理
  - 开始写**AppSettings**的类型了，最有意思的整体架构部分要来了
- 明天还是想先把**AppSettings**的相关做一下，也有可能要配一下后台的部署环境（自己的另外一台机器做服务器了）

## 2021.10.22

- 今天是第一次写开发记录。仔细想想，真的应该早点养成这个习惯。有太多灵光一现的想法，第二天起来可能就忘了。记录是个自我提升和总结的好方法。
- 今天完成的事情
  - 把 enum 全部剔除了，统一使用了**as const**的写法，确实很香
  - 把原来使用 provide/inject 的 AppContext 统一换成了 vueuse 的[createGlobalState](https://vueuse.org/shared/createglobalstate/#createglobalstate), 工作量挺大，项目里使用 AppContext 的地方确实不少了。**createGlobalState**我主要抽离成了两部分，一部分是 demo 里需要和 local 相辅的，还有一部分就是 memory 里的，不会体现在 local 里
  - 实在是等不及**auto-import**的 type 自动引入，自己手写了一些 vue/vue-router 以及一部分自定义常用的类型，以后再也不用引入常用的类型了
  - 把 menu/route 的逻辑整体抽出到 core 文件夹下了，要不 store 里一部分逻辑，router 里一部分逻辑很乱，**明天准备把 tab 的逻辑也抽离出来**，工作量也不小
  - App 文件夹整体优化了，减少文件数量，结构清晰一些
  - 最后的一些 scss 代码删除了，项目里原来 6+1 模式的 scss 的文件夹结构在 windicss 面前，十分无用
  - 抽离了 n-drawer 做出了 w-drawer，最主要是默认的底部按钮和 drawer 头部尾部的固定样式，**后续要把 form 里的高级表单内的 drawer 替换一下**
- 想法
  - 每天都在优化，每天都在重构，确实比较耗时，但我相信最后做出的代码质量应该不会差，打好基础，才能继续开发，这种中后台的架子，基础很重要
  - vueuse 里还是有很多 hook 可以用在框架里，可以做很多 features
  - 国际化需要做一套后台支持的模式，会比较麻烦，暂时没想好怎么设计
  - 做了**AppSettings**的组件架子，里面还没写配置项目。这个配置项，我觉得主要有两部分，一部分是面向 user 的，一部分的面向 developer 的，需要分清楚。
  - icon 方案还没决定是否采用**unplugin-icon**
  - 类型优化和设计，是一条永远都走不完的路，这工作量比 js 的项目得多了一倍（一心一意想做好得话），所有的函数变量我都会写类型，有时就会遇到比较棘手的类型，卡半天，效率就变慢了
  - 我的 ts 还是很弱，如果我能提升一下 ts 的进阶知识，获取一些类型的设计上思路都会不同
  - 权限部分一点没开始，前路漫漫
  - modal 还是要做二封的
  - vite 配置方面和打包优化方面好久没做了，部署也没自动化，github 的 ci 还没了解过，服务器现在还没着落......
  - MaybeRefDeep/DeepMaybeRef 相类似相关的类型，需要优化
  - layout 还只是最简单的布局，后续扩展也前路漫漫
  - component 的插件生成文件路径有问题，导致在 template 里的自定义组件没有类型支持，是个问题
  - table 好久没碰了，里面的内容也是不少，以后组件里的 vue 能有 setup 就用 setup，很香，代码也是很简洁
  - 后台的 nestjs，一万年没碰过了，后续到了国际化和全面的部分，后台还需要设计设计，头大了
  - vue-tsc 没有错误报告，就算是项目的一个中期小目标了
- 今天就先这些吧，22:45 了，今天是 10 点开始的，我也是坐了超长时间。扣了这么多字，有点像写日记了（正经人谁写日记啊？）