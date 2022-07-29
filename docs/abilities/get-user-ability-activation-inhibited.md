# Get User Ability Activation Inhibited

This is meant to be used to inhibit activating an ability from an input perspective. (E.g., the menu is pulled up, another game mechanism is consuming all input, etc) This should only be called on locally owned players. This should not be used to game mechanics like silences or disables. Those should be done through gameplay effects.

操作对象是 Ability System Component

![](./images/.png =365x)

## 输入
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#00a8f4" /> | Target | Ability System Component Object Reference | 

## 输出
| 引脚 | 参数 | 类型 | 描述 |
| -- | -- | -- | -- |
| <IconPin color="#af0e0e" /> | Return Value | Boolean | This is meant to be used to inhibit activating an ability from an input perspective. (E.g., the menu is pulled up, another game mechanism is consuming all input, etc) This should only be called on locally owned players. This should not be used to game mechanics like silences or disables. Those should be done through gameplay effects. | 