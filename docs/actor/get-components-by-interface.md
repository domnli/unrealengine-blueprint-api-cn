# GetComponentsByInterface

获取 Actor 下所有实现了给定接口的组件。

操作对象是 Actor

![get-components-by-interface](./images/get-component-by-interface.png =365x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#00a8f4" /> | Target | Actor Object Reference | Actor 对象引用 |
| <IconPin color="#5700b6" /> | Interface | Interface | 给定的接口 |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconArray color="#00a8f4" /> | Return Value | Array of Actor Component Object References | 组件数组