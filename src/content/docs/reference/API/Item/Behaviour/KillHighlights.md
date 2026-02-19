---
title: KillHighlights
sidebar:
    order: 8
---

:::note

This API can be used from both the client and the server.

:::

:::caution

This API uses metatables to act as both a module and a function.

:::

The KillHighlights API allow you to specify round highlights that should be awarded when kills are achieved with a particular item. When called as a function, `ItemKillHighlights` will be called.

## Types

### ItemKillHighlight

```lua
export type ItemKillHighlight = {
	Title: string,
	Description: string,
	Priority: number,
	Threshold: number,
}
```

## Functions

### GetIdentifier

Gets the string which is used in the `Extras` table of a participant to count the number of kills they achieved with this item.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `itemName` | `string` | | The item name. |

#### Returns

`string`

### ItemKillHighlights

Returns a `BeforeHitParticipant` function that, when called, will log a kill that occured (if it did), and award relevant highlights to the killer.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `...` | `...ItemKillHighlight` | | The ItemKillHighlights to use. This parameter is variadic, meaning you can specify multiple highlights by adding more as parameters. |

#### Returns

`BeforeHitParticipant`