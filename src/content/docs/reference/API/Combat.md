---
title: Combat
sidebar:
    order: 3
---

:::caution

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

## Types

### `CombatAPIExplosionParams`

```luau
export type CombatAPIExplosionParams = {
	Position: Vector3,
	Damage: number,
	FalloffBegin: number?,
	FalloffEnd: number,
	Attacker: Participant?,
	IgnoreKarma: boolean?,
	Pressure: number?,
	VisualRadius: number?,
	BeforeHitParticipant: BeforeHitParticipant?,
	Sound: Sound?,
}
```

## Functions

### `MakeExplosion`

Creates an explosion at the specified position with the specified damage, radius, and sound.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `params` | `CombatAPIExplosionParams` | `FalloffBegin = 0, Pressure = Damage * 50, IgnoreKarma = false, VisualRadius = FalloffEnd, Sound = default explosion sound` | The parameters for the explosion. |

#### Returns
`()`