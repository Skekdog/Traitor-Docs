---
title: Checks
sidebar:
    order: 3.1
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

Contains a set of functions to check that an item can be used.

## Functions

### Ammo

Returns true if the item has enough ammo. Returns true if ammo is nil.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

#### Returns

`boolean`

### Scoped

Returns true if scoped-in on a ScopeRequired item. This only functions the client. Returns true if not ScopeRequired.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

#### Returns

`boolean`

### Reloading

Returns true if not reloading.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

#### Returns

`boolean`

### ActionEnabled

Returns true if the specified action is enabled.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |
| `action` | `"Primary" \| "Alternate" | The action to check. |

#### Returns

`boolean`

### GamePhase

Returns true if the game-phase is valid.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |
| `phase` | `Phase` | | The current round phase. |

#### Returns

`boolean`

### Interval

Returns true if the not firing too quickly.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

#### Returns

`boolean`

### TargetDistance

Returns true if the target is within valid distance.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |
| `origin` | `Vector3` | | The origin of the action. |
| `destination` | `Vector3` | | The target position. |
| `target` | `BasePart?` | | The target part. |

#### Returns

`boolean`

### RaycastStatic

Returns true if the target is not obscured by static geometry.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |
| `participant` | `Participant` | | The participant who did the action. |
| `origin` | `Vector3` | | The origin of the action. |
| `destination` | `Vector3` | | The target position. |
| `target` | `BasePart?` | | The target part. |

#### Returns

`boolean`