# Event ActorBeginOverlap

当此 Actor 与另一个 Actor 重叠时触发该事件，例如玩家走到一个触发装置上。对于物体发生阻挡碰撞的事件，例如玩家撞墙，请参阅 ‘Hit’ 事件。
注意：如需生成组件的重叠事件，必须将组件的 bGenerateOverlapEvents 设置为 true。

操作对象是 Actor

![](./images/event-actor-begin-overlap.png =275x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconDelegate /> | Output Delegate | Delegate | 委托，一般被受托方调用。|
| <IconExec /> | Out | Exec | 
| <IconPin color="#00a8f4" /> | Other Actor | Actor Object Reference | 