# 日常记录

## 2022.04.07

- 时隔将近小半年，又来写日常记录了。

  - 针对上一次去年 11.14 写的部分：

    - 1. 系统管理中基本模块全部完成了，包括用户、角色、菜单、字典、日志（操作和登录）以及国际化的语言和词条管理。
    - 2. 菜单的 permission 字段加好了，也同步完成了最基本的元素级别的权限控制
    - 3. keep-alive 的问题，查过后发现是 router 的 bug，只会在嵌套路由情况下出现问题（项目的 README 中有提到以及 issue 链接）。深度只有 1 的路由情况下没问题。所以为了暂时让 keep-alive 功能好使，我查看了 vben 处理 keep-alive 的部分，就是暂时把路由`拍扁`。拍成平级的然后挂载到根路由下，但同时会出现的问题就是菜单和面包屑部分的逻辑会有变动，项目中也写了 TODO，可以自行查看。
    - 4. 国际化 table 和 form 的部分，实现方法也很粗暴，就是自定义一套规则：`form:{form-key}:{field}`和`table:{table-key}:{field}`。中间部分是一个自定义的 key 值，也算是 table 或 form 的一个唯一国际化标识，最后一部分就是字段名称。后续为了简化，添加时只需要录入 table 部分的国际化信息即可，然后在 form 上做个 props 的处理，读取 table 对应的国际化词条（当然这就要保证 form-key 和 table-key 相同）。这样一个 table 的词条就可以覆盖相关的表单。
    - 5. 项目不打算做前端的 json 国际化了，如有需要我可以提供现成的 json 文件，然后自行改造即可。
    - 6. 项目高度封装了一个 CRUD 组件，当然这只适用于单一业务且复杂度不是很高的场景。系统管理中的页面基本都用的 CRUD 组件，就算是例子了。可以自行查看

  - 这段时间做了什么：（说实话跨度有点大，我能想起什么写什么把）
    - 海量优化（我知道这像屁话，但确实如此）
    - 抽离了 app settings 并做了一个组件，且做了成 settings.json 的配置文件（其中还通过一个插件和 interface 实现了 json 文件的智能提示）
    - 把系统管理下的模块基本完成了，剩下的就是优化（这量可不少啊，虽然只有短短一行）
    - 封装了 description 组件，同时做了关于页面
    - 把 windicss 彻底换成了 unocss
    - 封装了一个锁屏的组件，用到了若干 vueuse 的函数，很有意思
    - 添加了 animate.css 和 transition 配合，省的总要写 css
    - 优化了 iframe 页面，同时为了适应 keep-alive 做了假缓存（通过 v-show 控制显隐）
    - 添加了 vite-banner 和 vite-terminal 的插件，一个是在打包时生成 js 文件头部的注释，另一个是在开发控制台输出打印内容
    - 添加了 html-to-image 插件，实现了页面的快照功能（还有问题，不过能用了）
    - npm 换成了 pnpm（真香，比 npm 快多了）
    - 把字典类型 table 列深入嵌到了 w-table 中，使用起来更加方便
    - table 实现了列的显隐和拖拽设置（显隐时列宽部分没有重新计算，还有点问题）
    - 菜单页面做了几次优化，同时添加了几个新字段，实现了同 tab 打开不同页面的功能
    - 图标部分实现了自定义图标的引入和使用，同时打包也会是按需打包，具体查看图标部分即可
    - 封装了 tree 组件，扩展了一些功能，基本使用实现了（父子节点级联时传值还是有问题）
    - 添加了 lodash-es，还是说两字，真香
    - 添加了全局水印配置
    - 添加了 tinymce 和 echarts 插件（适配了暗色模式和国际化部分），同时添加了示例
    - 花费了很多时间重构了 nest 的后台，添加了 dto 和 entity 的声明，同时优化了 swagger 的文档
    - 后台自定义了一套返回状态码，添加了登录日志和操作日志
    - 前后台配合实现了 refresh_token 的功能
    - 前两天实现了后台配合的省地市级联面板的组件，同时配套了回显接口和后台缓存机制（心心念念的组件终于做出来了）
    - 这两天在做百度的地图组件

## 2021.11.14

- 完成的事情
  - role 页面撸了一部分了，同时也在优化 table
  - 开始正式着手后端接口配合的国际化设计了，初步设计了两张表，一张语言表，一张 message 表。同时后台也写了基础的 crud 接口，配合前台开发。locale 的设计，是 key/value + langId 的设计模式，也就是说每一条信息有几种语言就会在表中生成几条数据，所以说查询的接口做了聚合优化，花费了很多时间。同时新建修改的逻辑也是完全重写的，普通的 crud 逻辑不适用了。lang 的 crud 逻辑暂时就是最简单的
  - 给菜单加了 permission 字段，下一步就准备做元素级别的权限控制了
  - 升级了下 router 的版本，以为 keep-alive 的问题有可能就好了
- 想法
  - 下一步，趁着页面不是很多，最优先把国际化的问题解决了，要不等 role/user 等等的页面一多，国际化在统一优化就麻烦了。
  - 国际化静态部分的显示好办，难办的是 table 的 column title / form 的 label 这样的动态文字显示会比较麻烦，或许需要改动表的结构（暂时没想好方案）
  - 国际化后端处理完，也要准备一套前端国际化的方案，暂时想的就是 locale 文件夹下还是放后台返回的 json，全局定义 localeStrategy，这样就可以随意切换了
  - locale 的 key 设计暂时就是字符串，我需要一个能从树状结构生成 nestedObject 的函数，才有可能实现 key 的三段表达（这要是能做出来，表结构改动肯定不小）
  - locale 彻底完工后，就要开始优化 role 页面了，同时也是在优化 table，把 crud 的基本再封装一下，用起来更方便些。再之后就是 user 页面，然后就是权限部分的设计了（头疼，不过网上可以参考的案例还是不少的，例如我之前用过的若依，还有 vben 等等）

## 2021.11.11

- 完成的事情
  - 把 layout 下的 TheParent 移除了，发现和 TheContent 内容基本一致，没必要单独拎出来一个 vue 文件。又用 tsx 把 TheContent 重写了，添加了自定义 transistion 和 keepalive 的 app 设置以及把全屏用的 div 也移到了 content 内。后来又发现 keepAlive 的页面在热加载时有问题，仔细排查后发现，单一 path 的页面 keepAlive 时生效的，多级 path 下的 keepAlive 失效，并且 hmr 时会有报错，这个问题明天需要着重处理一下
  - tab 的 devTool 那里又重新做了一下，改动还是很大的。然后又把全局 state 的 tab 下的三个属性移除了，改用了 tab 内部的状态，这点算是一个优化吧
  - formProp 还是重做了一下，类型支持更好了，后续又把 appSettings 的表单样式简单调整了一下，像点样子了。
  - 优化了一下 appSettings 几个表单之间的禁用关系
  - 开始撸角色页面了，这个页面相比菜单，就正常许多了，有很多可以规范化的写法，可以在这个页面里初次尝试一下，包括类型的优化，可以更加健全了
- 想法
  - 借由用户页面和角色页面，把基本的 crud 页面做一个规范化的模板，同时要包括类型的支持
  - keepAlive 这个页面，明天需要好好研究研究了，这算是项目的基础，基础打不牢，后续开发会遇到很多问题的
  - 随着用户和角色页面的开发，同时也需要兼顾着开发后台了，虽然都是一些简单接口，但是规范的东西，还是不能少

## 2021.11.08

- 完成的事情
  - 移除了 i18n 的 plugin（貌似用处不大，作者也好久没更新了）
  - vite proxy 那里暂时做了一个解决方案，就是开发时是用 proxy（prefix 默认是/api）代理到后台，具体是用 rewrite 方法（后台 api 真有前缀，所以 rewrite 是把/api 重写成/dev-api/v1 这样子）。axios 那里的 baseURL，开发时就写/api 就好，proxy 会代理到后台的。打包环境下好像是没有 proxy 的说法的（个人理解哈），所以 axios 的 baseURL 是直接上真实的 api 地址
  - layout 做了下优化，主要是屏幕变小时 header 的一些变化以及左侧菜单需要放到一个 drawer 里去显示。把 header 和 side 的 inverted 属性也提到 appsettings 里了，打包时 header 的 inverted 还是失效。
  - naive 相关的 class 定义在 tailwind 的 extend 里后，使用时后半段一定要用驼峰
  - 把 html 也从 stylelint 中移除了（因为 commit 时报错了，就暴力解决了）
  - DeepMaybeRefSelf 类型还是有问题，字面量类型的都变成 string 了，今天查了 3.4 个小时，关于 ts 的一些高级用法。
- 想法
  - DeepMaybeRefSelf 这个类型，应该只需要在 vueuse 的 DeepMaybeRef 类型上把函数忽略一下就好，但是现在飘红的都是 schema 里的 boolean，字面量类型和数组类型的错误，感觉时处理数组类型那里有问题，明天测试一下
  - form 的 prop，感觉需要重写，不能用 attrs 的方式偷懒，要不类型支持和绑定值有问题
  - form 完事，就开始弄下 table，把 role 和 user 的业务页面撸一下
  - 明天花点时间好好写个 todo-list 放在开发记录里，一天一天记录，总是忘记打算或准备要做的事情
  - 又仔细看了一下，或许组件都应该做成 inher false 的类型 然后手动处理 naive 的 prop 和自己新增的 prop（如果真的要做，那就是又把 UI 文件夹从头到尾捋一遍）

## 2021.11.07

- 完成的事情
  - 在 vueuse 的 DeepMayBeRef 类型基础上优化了一个自己适用的类型，用到了 form 和 table 的 hook 函数参数类型上，一个类型一劳永逸，再也不担心回有 ref 类型的错误了
  - 面包屑的函数写冗余了，删除了一些
  - 修复了 window 上的 naive 消息组件 api 的类型
  - **阶段性成功**：清除了项目所有的类型错误（暂时）
  - 重新梳理了一下 vite 的相关配置，发现 proxy 那里写的真的好乱，明天继续优化
- 想法
  - menu 页面几个树相关的函数，类型推导还需要优化
  - 一般 proxy 代理的都是以 api 为前缀的转发到后台地址上，并且后台的真实地址是不带 api 这样的前缀，但是这个项目的后台我决定还是带 api 字眼的前缀（还包括 api 的版本），感觉增加了一些工作量
  - 环境变量的命名再好好规范一下
  - 打包后 header 的样式和开发时不一致，好像 inverted 的问题，但不清楚为什么打完包表现就不一样了
  - chunk 的分割需要研究一下
  - vben 的打包信息相关部分很有意思，可以学习一下
  - 打包流程需要研究一些，还有相关的版本更新（CI/CD？）

## 2021.11.06

- 完成的事情
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

- 完成的事情
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

- 完成的事情
  - 把 mongo 和 nest 的程序部署到 ubuntu 的服务器上了，但是还没实现流程自动化
  - menu 的 settings 基本完成
- 想法
  - 头部的 lock 和 search 想做一下，但说实话这两组件都不简单，search 想要 algolia 的风格，但我上网看了一下 algolia 一般适用于文档查询，需要再研究研究
  - lock 的话想配合后台节后实现，就需要去开发后台相关了
  - 面包屑的完成度不是很高，明天需要丰富一下
- 明天继续 settings 的部分

## 2021.10.25

- 完成的事情
  - 修复了根路由的死循环 bug
  - 抽离了 vite 的 host 到环境变量里
  - 修复了关闭多个 tab 的逻辑错误
  - 重构的**screenfull**的逻辑，把 isFullScreen 和要全屏的目标 id 设置成了全局的变量，就是为了在全屏指定元素时需要加一些样式美化一下，感觉设计不太合理
  - 开始写**AppSettings**的类型了，最有意思的整体架构部分要来了
- 明天还是想先把**AppSettings**的相关做一下，也有可能要配一下后台的部署环境（自己的另外一台机器做服务器了）

## 2021.10.22

- 是第一次写开发记录。仔细想想，真的应该早点养成这个习惯。有太多灵光一现的想法，第二天起来可能就忘了。记录是个自我提升和总结的好方法。
- 完成的事情
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
