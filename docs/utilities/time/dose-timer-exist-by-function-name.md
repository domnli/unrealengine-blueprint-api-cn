# Does Timer Exist By Function Name

如果给定的委托函数有定时器，则返回 true，否则返回 false

操作对象是 Kismet System Library

![DoesTimerExistByFunctionName](./images/does-timer-exist-by-function-name.png =265x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#00a8f4" /> | Object | Object Reference | 实现了委托函数的对象引用，默认是蓝图本身 |
| <IconPin color="#fa01cf" /> | Function Name | String | 委托执行的函数名称. 可以是 K2 函数或者自定义事件。 |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#af0e0e" /> | Return Value | Boolean | 定时器存在则返回 true，否则返回 false |