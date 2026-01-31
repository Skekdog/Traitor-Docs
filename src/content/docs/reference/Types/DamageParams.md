---
sidebar:
  order: 1
title: DamageParams
---
`DamageParams` is a table that contains parameters for dealing damage to props or participants. When a `DamageParams` is passed to a function, you are able to modify the parameters.

## Properties

### Amount

`Type: number`

The amount of damage to deal.

### Attacker

`Type: Participant?`

The attacking participant.

### Source

`Type: DamageSource`

The damage source.

### IsHeadshot

`Type: boolean?`

If true, and the damage is fatal, the death will count as a headshot, meaning death screams will be muted and the corpse will display a headshot.

### Origin

`Type: Vector3?`

The position from where the damage was dealt (i.e, the attacker's position if the participant is being shot).

### HitPosition

`Type: Vector3?`

The position where the damage was dealt (i.e, the position where the bullet hit the participant).

### HitPart

`Type: BasePart?`

The part where the damage was dealt (i.e, the part where the bullet hit the participant).

### IgnoreKarma

`Type: boolean?`

If true, karma will not be affected by the damage.

:::note

This does **not** determine whether karma will affect the damage dealt.

:::

### IgnoreSelfDefense

`Type: boolean?`

If true, this will not apply self-defense against the attacker.

### IgnoreScore

`Type: boolean?`

:::note

This does not currently function.

:::

If true, score will not be affected by the damage.