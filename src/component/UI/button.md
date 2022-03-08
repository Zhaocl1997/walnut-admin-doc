# 按钮

基于 naive-ui 的[button](https://www.naiveui.com/zh-CN/os-theme/components/button)二次封装。

## Props

| 名称       | 类型    | 默认值    | 说明                                          |
| ---------- | ------- | --------- | --------------------------------------------- |
| icon       | string  | undefined | 含有 icon 的按钮，直接传入图标的字符串即可    |
| textProp   | string  | undefined | 按钮显示的文字，以 prop 形式传入              |
| retry      | number  | 0         | 封装好的重试间隔，单位是秒                    |
| debounce   | number  | 0         | 封装好的防抖(只针对 click 事件)，单位是毫秒   |
| confirm    | boolean | false     | 封装好的 popconfirm，暂没暴露 confirm message |
| auth       | string  | undefined | 权限字符串                                    |
| iconButton | boolean | false     | 图标按钮，需要提供 icon 属性                  |

## Type

```ts
import type { ButtonProps } from "naive-ui";

import { props } from "./props";

type ExtendProps = Partial<ExtractPropTypes<typeof props>>;

export interface WButtonProps extends ButtonProps, ExtendProps {}
```