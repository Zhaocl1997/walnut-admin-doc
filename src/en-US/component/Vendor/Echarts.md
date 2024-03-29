# 图表

采用的是[ECharts](https://github.com/apache/echarts)的 `v5`。适配了暗色模式和国际化，同时做了 `resize` 的处理。默认使用的是按需加载的方法，在`resources`文件夹下的`onDemand.ts`文件中定义了使用到的 echarts 组件。如果有需求进行变动，自行查阅文档即可。同时做了`reducedMotion`适配。

:::info
无需引入，可直接使用
:::

## Usage

最简单的用法，就是直接传入 option。option 的类型，直接使用`EChartsOption`即可，全局定义的类型。

```vue
<template>
  <w-echarts :option="option" />
</template>
```

## Props

| 名称   | 类型          | 默认值 | 说明        |
| ------ | ------------- | ------ | ----------- |
| option | EChartsOption | -      | echart 配置 |
| height | string        | 400px  | 图表高度    |
| width  | string        | 100%   | 图表宽度    |

## Type

```ts
interface WEchartsProps {
  option: EChartsOption
  height?: string
  width?: string
}
```

## TODO

- 通用：支持 cdn 用法，为那些需要减小打包体积的开发者
