---
title: Raycasts
sidebar:
    order: 3.1
---

:::note

This API is only accessible from the client.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

Provides client raycasting functionality.

## Functions

### GetRaycastDirection

Gets the direction for a raycast, given a camera direction and spread value.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `Vector3` | | The initial camera direction. |
| `spread` | `number` | | The spread value. |

#### Returns

`Vector3`

### DeriveTargetPosition

Determines the target position where a ray would land if it does not hit anything.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `origin` | `Vector3` | | The origin. |
| `direction` | `Vector3` | | The direction. |
| `range` | `number` | | The range. |

#### Returns

`Vector3`
### GetDefaultRaycastParams

Returns the default RaycastParams that should be used for item raycasts.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `...ignore` | `...Instance` | | Instances to ignore. This is a var arg so you may specify multiple instances. |

#### Returns

`RaycastParams`

### GetOrigin

Returns the origin to use for an action.

#### Returns

`Vector3`

### GetDirection

Returns the direction, without spread, to use for an action.

#### Returns

`Vector3`

### Hitscan

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `params` | `RaycastParams` | | The RaycastParams to use. |
| `origin` | `Vector3` | | The origin. |
| `direction` | `Vector3` | | The direction, adjusted for spread. |
| `range` | `number` | | The range. |
| `checkInitialOverlap` | `boolean?` | | If true, the origin volume will be checked for hits. Typically used for melee weapons. |
| `fallbackToBlockcast` | `boolean?` | | If true, a blockcast will be used if no hit is found by a raycast. Typically used for melee weapons. |

#### Returns

`BehaviourTypes.HitscanResult`