# Event Hit

当此 Actor 撞到一个阻挡对象或阻挡另一个 Actor 撞到它的触发该事件。比如角色移动时，使用 [Set Location]()
时设置 'sweep' 为 true，或者开启了物理模拟。对于对象重叠事件（比如走进触发装置），请参阅 ['Overlap'](./event-actor-begin-overlap.md) 事件。注意：如需捕获通过物理模拟产生的碰撞事件，需要启用 'Simulation Generates Hit Events'。注意：当从另一个对象的运动中接收到该命中事件时（bSelfMoved 为 false 时），'Hit.Normal' 和 'Hit.ImpactNormal' 的方向将被调整为表示另一个对象对该对象的力。注意：NormalImpulse 只对开启了物理模拟的物体有效，对于开启了 'sweep' 的组件的阻挡碰撞，该值为 0。 

操作对象是 Actor

![](./images/event-hit.png =225x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconDelegate /> | Output Delegate | Delegate | 委托，一般被受托方调用。|
| <IconExec /> | Out | Exec | 
| <IconPin color="#00a8f4" /> | My Comp | Primitive Component Object Reference | 当前 Actor 的 Primitive Component 引用 |
| <IconPin color="#00a8f4" /> | Other | Actor Object Reference | 碰撞来源的 Actor 引用 |
| <IconPin color="#00a8f4" /> | Other Comp | Primitive Component Object Reference | 碰撞来源的 Primitive Component 引用 |
| <IconPin color="#af0e0e" /> | Self Moved | Boolean | 是否移动 |
| <IconPin color="#fac426" /> | Hit Location | Vector | 碰撞方向 |
| <IconPin color="#fac426" /> | Hit Normal | Vector |  |
| <IconPin color="#fac426" /> | Normal Impulse | Vector | 碰撞冲量 |
| <IconPin color="#0057c5" /> | Hit | Hit Result Structure (by ref) | [碰撞结果结构体]() |