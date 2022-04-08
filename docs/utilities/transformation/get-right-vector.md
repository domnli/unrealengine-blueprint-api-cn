# GetRightVector

Get the right (Y) unit direction vector from this component, in world space.

目标是场景组件（Scene Component）

![GetWorldLocation](/images/utilities/transformation/get-right-vector.png =265x127)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#00a8f4"/> | Target | SceneComponent、ObjectReference | 场景组件、对象引用 |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#fac426"/> | Return Value | Vector 向量 | 在世界坐标中获取给定组件的向右 (Y) 的单位方向向量。 |