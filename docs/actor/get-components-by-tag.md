# GetComponentsByTag

获取所有继承了给定类，并且包含给定的标签名称的组件

操作对象是 Actor

![GetComponentsByTag](./images/get-components-by-tag.png =365x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#00a8f4" /> | Target | Actor Object Reference | Actor 对象引用 |
| <IconPin color="#5700b6" /> | Component Class | Actor Component Class Reference | Actor 组件的类引用 |
| <IconPin color="#c77ff9" /> | Tag | String | 标签名称

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconArray color="#00a8f4" /> | Return Value | Array of Actor Component Object References | 组件数组