---
title: ProcessHit
sidebar:
    order: 3.1
---

:::caution

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

Provides functions to process a hit.

## Functions

### GetBodyPart

Given a part, returns the category of body part it falls into. Unknown body parts are classed as "Limb".

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `part` | `BasePart` | | The part. |

#### Returns

`"Limb" | "Body" | "Head"`

### GetItemDamage

Gets damage that an item will do to a given part, accounting for damage falloff (if relevant).

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item \| ExplosionParams` | | The item. |
| `hitPart` | `BasePart` | | The origin of the hit. |
| `origin` | `Vector3` | | The participant responsible for the hit. |

#### Returns

`number`

The damage.

### Part

Processes a hit on a part, additionally processing prop / participant hit if needed.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item \| ExplosionParams` | | The item. |
| `attacker` | `Participant` | | The attacker. |
| `hitPart` | `BasePart` | | The part that was hit. |
| `hitPosition` | `Vector3` | | The hit position. |
| `normal` | `Vector3?` | | The hit normal. |
| `origin` | `Vector3` | | The origin of the hit. |
| `relativeHitCFrame` | `CFrame?` | | The relative hit CFrame, in object space. |
| `projectile` | `MapObject?` | | The projectile. |

#### Returns

`"Part" | "Prop" | "Participant"?`

The type of thing that was hit. Nil if the hit is invalid.

### Participant

Processes a hit on a participant.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item \| ExplosionParams` | | The item. |
| `attacker` | `Participant?` | | The attacker. Can be nil if the hit is from an explosion. |
| `victim` | `Participant` | | The target. |
| `hitPart` | `BasePart` | | The part that was hit. |
| `hitPosition` | `Vector3` | | The hit position. |
| `normal` | `Vector3?` | | The hit normal. |
| `origin` | `Vector3` | | The origin of the hit. |
| `relativeHitCFrame` | `CFrame?` | | The relative hit CFrame, in object space. |
| `projectile` | `MapObject?` | | The projectile. |

### Prop

Processes a hit on a prop.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item \| ExplosionParams` | | The item. |
| `attacker` | `Participant?` | | The attacker. Can be nil if the hit is from an explosion. |
| `prop` | `Prop` | | The target prop. |
| `hitPart` | `BasePart` | | The part that was hit. |
| `hitPosition` | `Vector3` | | The hit position. |
| `normal` | `Vector3?` | | The hit normal. |
| `origin` | `Vector3` | | The origin of the hit. |
| `relativeHitCFrame` | `CFrame?` | | The relative hit CFrame, in object space. |
| `projectile` | `MapObject?` | | The projectile. |