# AI MoveTo

控制拥有 AIController 的 Pawn 移动到特定位置的简易命令

![](./images/ai-move-to.png =365x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | In | Exec |
| <IconPin color="#00a8f4" /> | Pawn | Pawn Object Reference | Pawn 引用 |
| <IconPin color="#fac426" /> | Destination | Vector | 位置坐标 |
| <IconPin color="#00a8f4" /> | Target Actor | Actor Object Reference | Actor 引用 |
| <IconPin color="#7ef48f" /> | Acceptance Radius | Float | 可接受半径误差 |
| <IconPin color="#af0e0e" /> | Stop on Overlap | Boolean | 设置是否在重叠事件发生时停止移动 |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | Out | Exec |
| <IconExec /> | On Success | Exec | On Success |
| <IconExec /> | On Fail | Exec | On Fail |
| <IconPin color="#006e65" /> | Movement Result | EPathFollowingResult Enum | Movement Result |