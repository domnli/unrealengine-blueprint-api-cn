# Set View Target With Blend

通过参数控制视图混合的方式

操作对象是 Player Controller

![](./images/set-view-target-with-blend.png =396x329)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | In | Exec |
| <IconPin color="#00a8f4" /> | Target | Player Controller Object Reference | 
| <IconPin color="#00a8f4" /> | New View Target | Actor Object Reference | new actor to set as view target |
| <IconPin color="#7ef48f" /> | Blend Time | Float | time taken to blend |
| <IconPin color="#006e65" /> | Blend Func | EViewTargetBlendFunction Enum | 设置混合函数枚举 Cubic, Linear etc |
| <IconPin color="#7ef48f" /> | Blend Exp | Float | Exponent, used by certain blend functions to control the shape of the curve. |
| <IconPin color="#af0e0e" /> | Lock Outgoing | Boolean | If true, lock outgoing viewtarget to last frame's camera position for the remainder of the blend. |


## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | Out | Exec |