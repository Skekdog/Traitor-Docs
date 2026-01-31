---
title: ExplosionParams
sidebar:
    order: 7
---
`ExplosionParams` contains the specific info about an explosion that is about to occur.

## Properties

### Kind

`Type: "ExplosionParams"`

Always set to "ExplosionParams". Used to differentiate between classes.

### Definition

`Type: ExplosionInfo`

The definition of the explosion.

### Attacker

`Type: Participant?`

The participant that caused the explosion.

### Position

`Type: Vector3`

The position of the explosion.

## Methods

### RunBeforeHit

Runs all relevant before hit hooks. Returns a boolean, which is true if the hit should proceed.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `ItemBeforeHit` |  | The item. |
| `round` | `Round` |  | The current round. |
| `hitPart` | `BasePart` |  | The part that was hit. |
| `params` | `DamageParams` |  | The damage parameters. |

#### Returns

`boolean`