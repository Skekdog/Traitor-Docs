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

Intended to be used as a BeforeTakeDamage hook for a planted interactable. It will check the prop's Extras field for an associated player and prevent damage to the props from allies.

Returns true if damage should be allowed, i.e, hostile damage source. Also returns true if there is no associated player with either the damage or the prop.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `prop` | `Prop` | | The prop. |
| `params` | `DamageParams` | | The damage parameters. |

#### Returns

`boolean`