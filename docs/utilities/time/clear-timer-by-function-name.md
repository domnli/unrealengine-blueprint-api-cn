# ClearTimerByFunctionName

根据函数名称清除计时器

操作对象是 Kismet System Library

![ClearTimerByFunctionName](./images/clear-timer-by-function-name.png =265x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | In | Exec | |
| <IconPin color="#00a8f4" /> | Object | Object Reference | 实现了委托函数的对象引用。默认是当前蓝图 |
| <IconPin color="#fa01cf" /> | Function Name | String | 委托执行的函数名称. 可以是 K2 函数或者自定义事件。 |

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec /> | Out | Exec | 