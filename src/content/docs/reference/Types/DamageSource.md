---
sidebar:
  order: 8
title: DamageSource
---
The source of damage. Can be a string, or an item.

## GeneralDamageSource

`Type: string`

- "Fall"
- "Drown"
- "Explode"
- "Burn"
- "Stab"
- "Shot"
- "Bludgeon"
- "Crush"
- "Magic"
- "Poison"
- "Other"

## NamedDamageSource

Can be a specific damage source, or any other string.

`Type: string`

## DamageSource

`Type: NamedDamageSource | AnyItem`