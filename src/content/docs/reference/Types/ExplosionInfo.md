---
sidebar:
  order: 1.5
title: ExplosionInfo
---
`ExplosionInfo` is a table that contains basic properties about an explosion.

See also: [`ExplosionParams`](/Traitor-Docs/reference/classes/explosionparams).

## Properties

### Amount

`Type: number`

The base amount of damage to deal.

### FalloffBegin

`Type: number`

The distance at which the damage falloff begins.

### FalloffEnd

`Type: number`

The distance at which the damage falloff ends (and damage is now 0).

### Pressure

`Type: number`

The pressure of the explosion. This sets `Explosion.Pressure`.

### VisualRadius

`Type: number`

The visual radius of the explosion. This sets `Explosion.BlastRadius`.

### IgnoreSelfDefense

`Type: boolean?`

If true, self-defense will not be applied to players caught in the explosion.

### IgnoreKarma

`Type: boolean?`

If true, the player who triggered the explosion will not have their karma affected, and damage will not be affected by karma.

### IgnoreScore

`Type: boolean?`

If true, the player who triggered the explosion will not have their score affected. Currently non-functional.

## Hooks

### BeforeHitAnything

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `ItemBeforeHit` |  | The item. |
| `round` | `Round` |  | The current round. |
| `hitPart` | `BasePart` |  | The part that was hit. |
| `params` | `DamageParams` |  | The damage parameters. |

### BeforeHitProp

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `ItemBeforeHit` |  | The item. |
| `round` | `Round` |  | The current round. |
| `prop` | `Prop` |  | The prop that is being damaged. |
| `params` | `DamageParams` |  | The damage parameters. |

### BeforeHitParticipant

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `ItemBeforeHit` |  | The item. |
| `round` | `Round` |  | The current round. |
| `hitParticipant` | `Participant` |  | The participant that was hit. |
| `params` | `DamageParams` |  | The damage parameters. |