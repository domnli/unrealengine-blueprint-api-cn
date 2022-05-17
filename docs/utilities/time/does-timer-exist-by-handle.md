# DoesTimerExistByHandle

如果给定的 Handle 存在定时器，则返回 true，否则返回 false

操作对象是 Kismet System Library

![does-timer-exist-by-handle](./images/does-timer-exist-by-handle.png =265x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#0057c5" /> | Handle | Timer Handle Structure | 检测该 Handle 是否存在定时器。 |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#af0e0e" /> | Return Value | Boolean | 如果定时器存在，则返回 true |