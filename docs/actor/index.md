# Actor

### 操作  
| 名称 | 描述 |
|--|--|
| [Actor Has Tag](./actor-has-tag.md) | 判断此 Actor 的标签数组中是否包含给定的标签 |
| [Destroy Actor](./destroy-actor.md) | 销毁对象 |
| [Find Nearest Actor](./find-nearest-actor.md)| Returns an Actor nearest to Origin from ActorsToCheck array. |
| [Get Actor Eyes View Point](./get-actor-eyes-view-point.md) | 返回此 Actor 的视点。注意这并非指相机，而是 Actor 的“眼睛”。举例而言，对一个 Pawn 来说，此项将定义眼睛高度位置和视图旋转（其与拥有归零 Pitch 组件的 Pawn 旋转有所不同）。相机第一人称视图通常使用此视点。多数检测（武器、AI）都将从此视点开始。 |
| [Get Component By Class](./get-component-by-class.md) | 搜索 Actor 的组件集合并且返回第一个与指定类匹配的组件 |
| [Get Components by Interface](./get-components-by-interface.md) | 获取 Actor 下所有实现了给定接口的组件。 |
| [Get Components by Tag](./get-components-by-tag.md) | 获取所有继承了给定类，并且包含给定的标签名称的组件。 |
| [Get Game Time Since Creation](./get-game-time-since-creation.md) | 获取 Actor 在游戏中从创建到当前时间的秒数

### 子目录
| 名称 | 描述 |
|--|--|
| [Tick](./tick/) | Tick |