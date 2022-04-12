# Add Timeline

时间轴节点允许指定的数值以帧的形式输出。 双击打开时间轴编辑器设置关键帧、输出值类型、Tick 组等属性。

![add-timeline](./images/add-timeline.png =307x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | Play | Exec | 播放 |
| <IconExec /> | Play from Start | Exec | 从开始点播放 |
| <IconExec /> | Stop | Exec | 暂停 |
| <IconExec /> | Reverse | Exec | 反向播放 |
| <IconExec /> | Reverse from End | Exec | 从结束点反向播放 |
| <IconExec /> | Set New Time | Exec | 设置新时间，时间轴跳转到下面引脚的 New Time |
| <IconPin color="#7ef48f" /> | New Time | Float | 新时间，当调用 SetNewTime 时，时间轴将跳转到此时间


## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | Update | Exec | 更新，实时输出执行信号。 |
| <IconExec /> | Finish | Exec | 完成，当播放结束时输出一个执行信号。该引脚不会被 Stop 函数触发。 |
| <IconPin color="#fac426"/> | Direction | ETimelineDirection Enum | 输出指明当前方向的枚举 |

时间轴可以额外增加任意数量的输出数据引脚，用于反映在时间轴中创建的轨道类型，包括Float（浮点型）、Vector（向量型）和Event（事件）轨道。

参考：  
[时间轴](https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/Blueprints/UserGuide/Timelines/)  
[Tick 组](https://docs.unrealengine.com/4.27/zh-CN/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/Actors/Ticking/)
