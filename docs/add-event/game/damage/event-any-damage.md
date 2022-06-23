# Event AnyDamage

该 Actor 受到任何伤害都会触发该事件。该事件只能在服务端触发。

操作对象是拥有[网络权限](https://docs.unrealengine.com/4.27/en-US/BlueprintAPI/Networking_1/HasAuthority/)的 Actor

![](./images/event-any-damage.png =235x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconDelegate /> | Output Delegate | Delegate | 委托，一般被受托方调用。
| <IconExec /> | Out | Exec | 
| <IconPin color="#7ef48f" /> | Damage | Float | 伤害数值 | 
| <IconPin color="#00a8f4" /> | Damage Type | Damage Type Object Reference | 伤害类型 | 
| <IconPin color="#00a8f4" /> | Instigated By | Controller Object Reference | 伤害源 Controller | 
| <IconPin color="#00a8f4" /> | Damage Causer | Actor Object Reference | 伤害源 Actor | 
