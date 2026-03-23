---
title: GameHooks
sidebar:
    order: 3
---

:::caution

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify names when using this API.

:::

The GameHooks API provides ways to hook into certain game events from any context. To add a hook:

```
GameHooks.EventName["HookName"] = function(parameters...) end
```

where EventName is one of the properties below. The parameters received are also detailed below.

## Properties

### `OnDeath`

These hooks are run when a player dies.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `round` | `Round` | | The round. |
| `participant` | `Participant` | | The player who died. |
| `defer` | `boolean` | | If true, death processing is deferred. |

### `OnItemDropped`

These hooks run when a player drops an item.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `round` | `Round` | | The round. |
| `participant` | `Participant` | | The player who dropped the item. |
| `item` | `Item` | | The item. |

### `BeforeDamageParticipant`

Runs before a player takes damage. Changes to the DamageParams object will be preserved, meaning you can do things like changing the damage.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `round` | `Round` | | The round. |
| `participant` | `Participant` | | The player who is taking damage. |
| `params` | `DamageParams` | | The DamageParams. |