---
title: Server
sidebar:
    order: 3.1
---

:::caution

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

Provides server functionality for item behaviour.

## Functions

### CreateExplosion

Creates an explosion.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `round` | `Round` | | The current round. |
| `params` | `ExplosionParams` | | The data of the explosion. |
| `sound` | `Sound?` | | The sound to play for the explosion. |

### ProcessHitscan

Processes a hitscan request.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |
| `origin` | `Vector3` | | The origin of the hit. |
| `participant` | `Participant` | | The participant responsible for the hit. |
| `hitNumber` | `number` | | The hit number, when multiple hits are processed at once, such as from firing a shotgun. |
| `hitscan` | `BehaviourTypes.HitscanResult` | | The hitscan data to use. |

#### Returns

`string?`

Returns a string if the hit is rejected.

### SimulateProjectile

Spawns a physics-simulated projectile.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |
| `participant` | `Participant` | | The participant responsible for the hit. |
| `origin` | `Vector3` | | The origin for the projectile. |
| `direction` | `Vector3` | | The direction of the projectile. |

### ApplyNearMissSelfDefense

Determines which players to apply near-miss self defense to, and applies it.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `origin` | `Vector3` | | The origin for the projectile. |
| `direction` | `Vector3` | | The direction of the projectile. |
| `participant` | `Participant` | | The participant responsible for the near-miss. |

### PrimaryFire

Process a primary fire request.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |
| `origin` | `Vector3` | | The origin for the projectile. |
| `direction` | `Vector3` | | The direction of the projectile. |
| `participant` | `Participant` | | The participant responsible for the near-miss. |
| `data` | `unknown` | | The client-supplied data for the hit. |

#### Returns

`{string} | string?`

If returning a string or table of strings, the primary fire was rejected with the provided reason.