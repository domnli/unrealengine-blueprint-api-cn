# Event PointDamage

该 Actor 受到点状伤害时触发该事件。该事件只能在服务端触发。

操作对象是拥有[网络授权](https://docs.unrealengine.com/4.27/en-US/BlueprintAPI/Networking_1/HasAuthority/)的 Actor

![](./images/event-point-damage.png =245x)

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
| <IconPin color="#fac426" /> | Hit Location | Vector | 攻击点（世界）坐标
| <IconPin color="#fac426" /> | Hit Normal | Vector | 击中点的法线
| <IconPin color="#00a8f4" /> | Hit Component | Primitive Component Object Reference | 
| <IconPin color="#c77ff9" /> | Bone Name | Name |
| <IconPin color="#fac426" /> | Shot from Direction | Vector | |
| <IconPin color="#00a8f4" /> | Instigated By | Controller Object Reference | 伤害源 Controller | 
| <IconPin color="#00a8f4" /> | Damage Causer | Actor Object Reference | 伤害源 Actor | 
| <IconPin color="#0057c5" /> | Hit Info | Hit Result Structure (by ref) |


