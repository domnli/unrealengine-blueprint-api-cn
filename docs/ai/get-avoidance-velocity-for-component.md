# Get Avoidance Velocity for Component

计算组件的躲避速度（避免与提供的组件发生碰撞）

操作对象是 Avoidance Manager

![](./images/get-avoidance-velocity-for-component.png =365x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | In | Exec |
| <IconPin color="00a8f4" /> | Target | Avoidance Manager Object Reference | 开启了躲避管理的对象引用 |
| <IconPin color="00a8f4" /> | Movement Comp | Movement Component Object Reference | 移动组件对象引用 |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | Out | Exec |
| <IconPin color="#fac426" /> | Return Value | Vector | 计算组件的闪避速度（避免与提供的组件发生碰撞） |