# AttachComponentToComponent

附加目标组件到另一个场景组件，可以指定插槽。无论组件是否已经附加到指定的场景组件上，都可以调用该函数

目标是场景组件

![AttachComponentToComponent](./images/attach-component-to-component.png =470x) 

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec/> | In | Exec |  |
| <IconPin color="#00a8f4"/> | Target | 场景组件、对象引用 |  |
| <IconPin color="#00a8f4"/> | Parent | 场景组件、对象引用 | 附加到的父组件 |
| <IconPin color="#c77ff9"/> | Socket Name | 插槽名称 | 可选，附加到父组件的指定插槽上 |
| <IconPin color="#006e65"/> | Location Rule | 位置附加规则 | 当附加的时候如何处理位置
| <IconPin color="#006e65"/> | Rotation Rule | 旋转附加规则 | 当附加的时候如何处理旋转
| <IconPin color="#006e65"/> | Scale Rule | 缩放附加规则 | 当附加的时候如何处理缩放
| <IconPin color="#af0e0e"/> | Weld Simulated Bodies | 布尔 | 是否与父组件绑定物理模拟


## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec/> | Out | Exec |  |
| <IconPin color="#af0e0e" /> | Return Value | 布尔 | 如果为 True，则表示附加成功或者已经附加过，如果为 False，表示附加失败，父组件没有任何变化