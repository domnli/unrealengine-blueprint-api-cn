# Actor

### 操作  
| 名称 | 描述 |
|--|--|
| [ActorHasTag](./actor-has-tag.md) | 判断此 Actor 的标签数组中是否包含给定的标签 |
| [DestroyActor](./destroy-actor.md) | 销毁对象 |
| [FindNearestActor](./find-nearest-actor.md)| Returns an Actor nearest to Origin from ActorsToCheck array. |
| [GetActorEyesViewPoint](./get-actor-eyes-view-point.md) | 返回此 Actor 的视点。注意这并非指相机，而是 Actor 的“眼睛”。举例而言，对一个 Pawn 来说，此项将定义眼睛高度位置和视图旋转（其与拥有归零 Pitch 组件的 Pawn 旋转有所不同）。相机第一人称视图通常使用此视点。多数检测（武器、AI）都将从此视点开始。 |