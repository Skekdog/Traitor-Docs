---
sidebar:
  order: 0.5
title: Item Groups
---
There are several types used to specify different groups of items.

## Runtime Items

### GunMeleeWeapon

`Type: GunWeapon | MeleeWeapon`

### AnyWeapon

`Type: GunWeapon | GrenadeWeapon | MeleeWeapon`

### AnyItem

`Type: Item | AnyWeapon`

### ItemBeforeHit

`Type: AnyWeapon | ExplosionParams`

## Definitions

### AnyItemDefinition

`Type: ItemDefinition | GunWeaponDefinition | MeleeWeaponDefinition | GrenadeWeaponDefinition`

### ItemDefinitionOnHitClient

`Type: GunWeaponDefinition | MeleeWeaponDefinition | GrenadeWeaponDefinition`