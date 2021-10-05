---
title: x6-react - 基于react的图编辑框架
group:
  path: /
nav:
  title: 组件
  path: /components
---

## 安装和初始化

```typescript | pure
import { Graph } from 'xu-x6-react';

return <Graph />;
```

## DEMO

### List

<code src="./demos/base.tsx" title="base" />


## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 不同类型的骨架屏 | `'list' \| 'result' \| 'descriptions'` | list |
| active | 是否显示动态 | boolean | true |
| pageHeader | 是否显示 pageHeader 的骨架屏 descriptions 和 list 有效 | - | - |
| statistic | 统计信息骨架屏的数量 | `number` \| `false` | - |
| list | 列表的骨架屏，可以控制数量 | `number` \| `false` | - |
| toolbar | 列表的操作栏骨架屏 | boolean | - |
| renderFormItem | 自定义 `mode=update 或 edit` 下的 dom 表现，一般用于渲染编辑框 | - | - |
| render | 自定义 `mode=read` 下的 dom 表现，只是单纯的表现形式 | - | - |
