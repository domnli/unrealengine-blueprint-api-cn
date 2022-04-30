# Find Nearest Actor

返回距离设置的原点最近的 Actor，从指定的 Actor 数组中查找。

操作对象是 [Gameplay Statics](https://docs.unrealengine.com/4.27/en-US/API/Runtime/Engine/Kismet/UGameplayStatics/)

![FindNearestActor](./images/find-nearest-actor.png =265x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#fac426" /> | Origin | Vector | 原点
| <IconArray color="#00a8f4" /> | Actors to Check | Array of Actor Object References | 从该数组中查找 |



## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin /> | Distance | Float (single-precision) | 最近的 Actor 离原点的距离
| <IconPin color="#00a8f4" /> | Return Value | Actor Object Reference | 距离最近的 Actor