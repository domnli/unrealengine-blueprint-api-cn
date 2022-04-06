# GetAllActorsWithTag

在场景中寻找拥有指定标签的所有 Actor，此操作速度较慢，请谨慎使用，不建议每帧使用

目标是 Gameplay Static

![get-all-actors-with-tag.png](/images/get-all-actors-with-tag.png =265x)

### 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec/> | In | 执行流 |  |
| <IconPin color="#c77ff9" /> | Tag | 字符串 | 查找的标签名称，不设置则结果数组为空。<br/>此标签是 Actor 上定义的标签，而不是用于分组和分类的组件标签 |


### 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconExec/> | Out | 执行流 |  |
| <IconArray color="#00a8f4"/> | Out Actors | Actor 的对象引用数组 | 定义了指定标签的 Actor 数组对象引用 |


### 参考

[官方文档](https://docs.unrealengine.com/4.27/en-US/BlueprintAPI/Utilities/GetAllActorswithTag/)