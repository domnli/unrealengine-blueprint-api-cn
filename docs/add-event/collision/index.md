# Actor

### 操作  
| 名称 | 描述 |
|--|--|
| [Event ActorBeginOverlap](./event-actor-begin-overlap.md) | 当此 Actor 与另一个 Actor 重叠时触发该事件，例如玩家走到一个触发装置上。对于物体发生阻挡碰撞的事件，例如玩家撞墙，请参阅 ‘Hit’ 事件。注意：如需生成组件的重叠事件，必须将组件的 bGenerateOverlapEvents 设置为 true。 操作对象是 Actor |
| [Event ActorEndOverlap](./event-actor-end-overlap.md) | 当 Actor 与另一个 Actor 分开不再重叠时触发该事件。注意：如需生成组件的重叠事件，必须将组件的 bGenerateOverlapEvents 设置为 true。操作对象是 Actor |
| [Event Hit](./event-hit.md) | 当此 Actor 撞到一个阻挡对象或阻挡另一个 Actor 撞到它的触发该事件。比如角色移动时，使用 [Set Location]()
时设置 'sweep' 为 true，或者开启了物理模拟。对于对象重叠事件（比如走进触发装置），请参阅 ['Overlap'](./event-actor-begin-overlap.md) 事件。注意：如需捕获通过物理模拟产生的碰撞事件，需要启用 'Simulation Generates Hit Events'。注意：当从另一个对象的运动中接收到该命中事件时（bSelfMoved 为 false），'Hit.Normal' 和 'Hit.ImpactNormal' 的方向将被调整为表示另一个对象对该对象的力。注意：NormalImpulse 只对开启了物理模拟的物体有效，对于开启了 'sweep' 的组件的阻挡碰撞，该值为 0。 操作对象是 Actor |

参考
[Event hit](https://docs.unrealengine.com/4.27/en-US/BlueprintAPI/AddEvent/Collision/EventHit/)