# Get Actor Eyes View Point

Returns the point of view of the actor. Note that this doesn't mean the camera, but the 'eyes' of the actor. For example, for a Pawn, this would define the eye height location, and view rotation (which is different from the pawn rotation which has a zeroed pitch component). A camera first person view will typically use this view point. Most traces (weapon, AI) will be done from this view point.

操作对象是 Actor

![GetActorEyesViewPoint](./images/get-actor-eyes-view-point.png =265x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#00a8f4" /> | Target | Actor Object Reference | Actor 对象引用


## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#fac426" /> | Out Location | Vector | location of view point
| <IconPin color="#b0c6ff" /> | Out Rotation | Rotator | view rotation of actor