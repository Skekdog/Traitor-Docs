---
title: BlockFriendlyDamage
sidebar:
    order: 4
---

:::caution

This API is only accessible from the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Returns a function that plays a break sound (one that is specified or the default sound) when called. Intended for use in the OnBreakServer function of interactables.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sound` | `Sound?` | | The sound. |

#### Returns

`(prop: Prop) -> ()`