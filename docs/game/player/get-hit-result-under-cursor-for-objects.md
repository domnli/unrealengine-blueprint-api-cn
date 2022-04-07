# GetHitResultUnderCursorforObjects

Performs a collision query under the mouse cursor, looking for object types
以玩家当前位置为起点，鼠标光标所在位置为终点的路径进行碰撞检测，检测路径上是否存在给定的对象类型的 Actor

Target is Player Controller
目标是玩家控制器

![get-hit-result-under-cursor-by-channel](/images/get-hit-result-under-cursor-for-objects.png =465x)

### 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#c77ff9" /> | Target | PlayerController | 玩家控制器对象引用 |
| <IconArray color="#006e65" /> | Object Types | Array of EObjectTypeQuery Enums | 对象类型数组，对象类型可在项目设置中定义 |
| <IconPin color="#af0e0e" /> | Trace Complex | Boolean | 玩家控制器对象引用 |


### 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#0057c5" /> | Hit Result | Hit Result Structure | 碰撞结果结构体 |
| <IconPin color="#af0e0e" /> | Return Value | Boolean |  |


参考  
[官方文档](https://docs.unrealengine.com/5.0/en-US/BlueprintAPI/Game/Player/GetHitResultUnderCursorforObject-/)  
[WTF Is ?](https://www.youtube.com/watch?v=uMjnbnQd1dI)
