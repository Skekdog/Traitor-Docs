---
title: IsHostileParticipant
sidebar:
    order: 4
---

:::caution

This API is only accessible from the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Intended to be used with planted interactables. It will check the prop's Extras field for an associated player and return true if the specified player is not an ally.

Returns true if the specified player is not allied with the associated player. Also returns true if there is no associated player with the prop.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `prop` | `Prop` | | The prop. |
| `participant` | `Participant` | | The participant to check. |

#### Returns

`boolean`