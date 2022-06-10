# Actor

### 操作  
| 名称 | 描述 |
|--|--|
| [Event ActorBeginOverlap](./event-actor-begin-overlap.md) | 当此 Actor 与另一个 Actor 重叠时触发该事件，例如玩家走到一个触发装置上。对于物体发生阻挡碰撞的事件，例如玩家撞墙，请参阅 ‘Hit’ 事件。注意：如需生成组件的重叠事件，必须将组件的 bGenerateOverlapEvents 设置为 true。 操作对象是 Actor |
| [Event ActorEndOverlap](./event-actor-end-overlap.md) | 当 Actor 与另一个 Actor 分开不再重叠时触发该事件。注意：如需生成组件的重叠事件，必须将组件的 bGenerateOverlapEvents 设置为 true。操作对象是 Actor |

参考