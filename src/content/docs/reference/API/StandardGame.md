---
title: StandardGame
sidebar:
    order: 2.75
---

:::caution

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

The StandardGame API is used to get, create, and modify base-game definitions of items, ammo, and interactables.

:::caution

This API will only return base-game items, ammo, and interactables. It will not return any custom items, ammo, or interactables.

:::

## Properties

### ItemGroups

A table of all item groups:

- `Secondary`
- `Primary`
- `Grenade`
- `RoleWeapon`
- `RoleUtility`

## Functions

### CopyModify

Copies the specified definition and applies the specified modifications.

:::note

To set a property to `nil`, you should use a table, like so: `{__nil = true}`.

:::

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `original` | `T where T = ItemDefinition \| AmmoDefinition \| InteractableDefinition` | | The original definition. |
| `modifications` | `{[PropertyName]: PropertyValue}` | | The modifications to apply. |

#### Returns

`T where T = ItemDefinition | AmmoDefinition | InteractableDefinition`

### GetItem

Gets the specified `ItemDefinition`. Will error if the item is not found.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | | The name of the item. |

#### Returns

`ItemDefinition`

### GetItems

Gets all `ItemDefinition` objects.

#### Returns

`{[string]: ItemDefinition}`

### GetAmmo

Gets the specified `AmmoDefinition`. Will error if the ammo is not found.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | | The name of the ammo. |

#### Returns

`AmmoDefinition`

### GetAllAmmo

Gets all `AmmoDefinition` objects.

#### Returns

`{[string]: AmmoDefinition}`

### GetInteractable

Gets the specified `InteractableDefinition`. Will error if the interactable is not found.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | | The name of the interactable. |

#### Returns

`InteractableDefinition`

### GetInteractables

Gets all `InteractableDefinition` objects.

#### Returns

`{[string]: InteractableDefinition}`

## Module Functions

:::note

These functions are part of a sub-module of this API.

:::

### Highlights.OnDeath

This function can be called from within a gamemode's `OnDeath` hook. This function will add highlights relating to the death.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `round` | `Round` |  | The current round. |
| `participant` | `Participant` |  | The participant that died. |

### Highlights.OnIdentifyCorpse

This function can be called from within a gamemode's `OnIdentifyCorpse` hook. This function will add highlights relating to the identification of corpses.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `round` | `Round` |  | The current round. |
| `corpse` | `Corpse` |  | The corpse that was identified. |
| `searcher` | `Participant` |  | The participant that identified the corpse. |

### Highlights.OnFinish

This function can be called from within a gamemode's `OnFinish` hook. This function will add highlights that should be calculated at the end of the round.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `round` | `Round` |  | The current round. |