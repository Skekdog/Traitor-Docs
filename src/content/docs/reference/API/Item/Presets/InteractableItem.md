---
title: InteractableItem
sidebar:
    order: 1
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Creates a new set of item components that is set to act like an interactable item, like the C4 or the Decoy.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `components` | `ItemComponents` | | The additional data to provide. |
| `allowThrow` | `boolean` | | If true, the item can be deployed by throwing it. |
| `allowPlant` | `boolean` | | If true, the item can be deployed by planting it on a wall. |
| `onThrow` | `(interactable: Types.Prop, participant: Types.Participant) -> ()?` | | The function to run when the item is thrown. |
| `onPlant` | `(interactable: Types.Prop, raycastResult: RaycastResult, weldConstraint: WeldConstraint, participant: Types.Participant) -> ()?` | | The function to run when the item is planted. |

#### Returns

`Type: ItemComponents`