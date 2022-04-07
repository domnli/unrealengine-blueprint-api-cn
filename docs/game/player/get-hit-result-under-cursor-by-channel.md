# GetHitResultUnderCursorbyChannel  

Performs a collision query under the mouse cursor, looking on a trace channel
以玩家所在位置为起点，鼠标光标位置为终点的路径进行碰撞检测，检测并返回路径上指定了 [Trace Channel](https://docs.unrealengine.com/4.27/zh-CN/TestingAndOptimization/PerformanceAndProfiling/UnrealInsights/Reference/Trace/) 的 Actor

Target is Player Controller
目标是玩家控制器

![get-hit-result-under-cursor-by-channel](/images/get-hit-result-under-cursor-by-channel.png =465x)

### 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#c77ff9" /> | Target | PlayerController | 玩家控制器对象引用 |
| <IconPin color="#006e65" /> | Trace Channel | ETraceTypeQuery Enum | 追踪通道枚举，在项目设置中自定义通道 |
| <IconPin color="#af0e0e" /> | Trace Complex | Boolean | 是否[复杂碰撞](https://docs.unrealengine.com/4.27/zh-CN/InteractiveExperiences/Physics/SimpleVsComplex) |


### 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#0057c5" /> | Hit Result | Hit Result Structure | 碰撞结果结构体 |
| <IconPin color="#af0e0e" /> | Return Value | Boolean |  |


参考  
[官方文档](https://docs.unrealengine.com/5.0/en-US/BlueprintAPI/Game/Player/GetHitResultUnderCursorbyChannel/)  
[WTF Is ?](https://www.youtube.com/watch?v=uMjnbnQd1dI)
