---
title: Item
sidebar:
    order: 3.5
---

The item class represents an instance of an item. Components are initially replicated from the server to the client when an item is picked up, but subsequent changes to components on the server will not replicate until the item is picked up again. Changes to components on the client-side will be lost when the item is dropped.

:::note

Components are set and retrieved using `Item.ComponentName` and `Item.ComponentName = SomeValue`. You should not generally use `Item.Base` or `Item.Components`.

:::

## Properties

### Kind

`Type: "Item"`

Always set to "Interactable". Used to differentiate between classes.

### Extras

`Type: {[any]: any}`

Used to store additional information about the item.

### Base

`Type: ItemComponents`

The base item components used by this item.

### Components

`Type: ItemComponents`

Stores the per-item components.

## Methods

### GetServerData

Retrieves the data that will be sent to the server.

:::caution

This does not work on the server. You should use the `data` parameter in the item hooks instead.

:::

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| action | `"Primary" \| "Alternate"` | The firing action to retrieve data for. |

#### Returns

`unknown`

### SetServerData

Sets data to be sent to the server.

:::caution

This does not work on the server.

:::

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| action | `"Primary" \| "Alternate"` | The firing action to set data for. |
| data | `unknown` | The data to set. |

### ResetLastUse

Resets the last use time for the specified action, bypassing the cooldown.

:::caution

Due to the aforementioned replication rules, this will not work when used on the server.

:::

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| action | `"Primary" \| "Alternate"` | The firing action to set data for. |