# Get AIController

该函数的工作方式是，如果传入的 Actor 是一个 Pawn，那么该函数将 Pawn 的 Controller 强制转换为 AIController 并返回。否则该函数将 Actor 强转为 AIController 并返回。

操作对象是 AIBlueprint Helper Library

![](./images/.png =320x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="00a8f4" /> | Controled Actor | Actor Object Reference | 
| <IconArray color="#00a8f4" /> |  |  |  |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="00a8f4" /> | Return Value | AIController Object Reference | 该函数的工作方式是，如果传入的 Actor 是一个 Pawn，那么该函数将 Pawn 的 Controller 强制转换为 AIController 并返回。否则该函数将 Actor 强转为 AIController 并返回。|