# Get Actor Eyes View Point

返回此 Actor 的视点。注意这并非指相机，而是 Actor 的“眼睛”。举例而言，对一个 Pawn 来说，此项将定义眼睛高度位置和视图旋转（其与拥有归零 Pitch 组件的 Pawn 旋转有所不同）。相机第一人称视图通常使用此视点。多数检测（武器、AI）都将从此视点开始。

操作对象是 Actor

![GetActorEyesViewPoint](./images/get-actor-eyes-view-point.png =265x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#00a8f4" /> | Target | Actor Object Reference | Actor 对象引用


## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#fac426" /> | Out Location | Vector | 视点位置
| <IconPin color="#b0c6ff" /> | Out Rotation | Rotator | Actor 的视图旋转