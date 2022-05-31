# Set Time by Event

设置一个执行委托的定时器。设置已存在的定时器时，会使用最新的参数覆盖原有定时器参数

操作对象是 Kismet System Library

![Set Time by Event](./images/set-timer-by-event.png =365x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | In | Exec | 
| <IconDelegate /> | Event | Delegate | 需要执行的委托 |
| <IconPin color="" /> | Time | Float (单精度) | 等待多少秒后执行委托。设置为小于 0 将清除该定时器。 | 
| <IconPin color="#af0e0e" /> | Looping | Boolean | 设置为 True 表示循环执行委托，间隔为设置的 Time，设置为 False 则委托只执行一次。|
| <IconPin color="" /> | Initial Start Delay | Float (单精度) | 设置延迟初始化该定时器的秒数。 |
| <IconPin color="" /> | Initial Start Delay Variance | Float (单精度) | 使用这个参数为 Initial Start Delay 添加一些随机变化的秒数范围 |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | Out | Exec | 
| <IconPin color="#0057c5" /> | Return Value | Timer Handle Structure | 传递给其他定时器函数以操作此定时器的定时器引用。 | 