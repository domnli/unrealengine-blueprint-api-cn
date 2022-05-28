# Event Tick

如果 Actor 启用了每帧通知，每帧都会触发该事件。

操作对象是 Actor

![](./images/event-tick.png =213x165)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconDelegate /> | Output Delegate | Delegate | 委托，一般被受托方调用。
| <IconExec /> | Out | Exec | 
| <IconPin color="" /> | Delta Seconds | Float (单精度) | 秒的增量，两帧之间精确的秒间隔 |