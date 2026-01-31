---
sidebar:
  order: 4.5
title: ItemComponents
---

Item components define the properties and behaviours of items. When an item is instantiated, it will inherit a base set of item components which can be modified on the item without modifying the original table.

## Properties

### Name

`Type: string`

The internal name of the item.

### DisplayName

`Type: string?`

The display name of the item. If not set, the `Name` is used instead.

### Description

`Type: string`

The description of the item, displayed in the shop.

### IconContent

`Type: Content`

The asset used for the item's icon.

### IsPixelIcon

`Type: boolean?`

If `true`, the icon will use a ResampleMode of Pixelated.

### Cost

`Type: number?`

The number of credits this item costs to purchase. If `nil`, the item costs no credits to purchase.

### MaxStock

`Type: number?`

The maximum number of times a player can purchase this item in one round. If `nil`, there is no limit.

### IsEvilItem

`Type: boolean?`

If `true`, this item will mark non-evil players as a free kill when held.

### Model

`Type: MapObject?`

The item model. The same model is used for the viewmodel and for the third-person item.

### HoldAnimation

`Type: Content?`

The animation asset to use when this item is equipped.

### UnequipDisabled

`Type: boolean?`

If `true`, the item cannot be unequipped.

### DropDisabled

`Type: boolean?`

If `true`, the item cannot be dropped, though it can still be unequipped.

### PregameDisabled

If `true`, the item cannot be used prior to the round starting.

### ItemGroup

`Type: ItemGroup?`

The item group of the item. A player can only have one item of each group in their inventory at a time.

### Spread

`Type: number?`

The spread, in arbitrary units, of the item. This is used by the weapon presets; however, you may also choose to use it in custom item behaviour.

### RecoilX

`Type: number?`

The horizontal recoil in arbitrary units. This is used by the weapon presets; however, you may also choose to use it in custom item behaviour.

### RecoilY

`Type: number?`

The vertical recoil in arbitrary units. This is used by the weapon presets; however, you may also choose to use it in custom item behaviour.

### IsSilent

`Type: boolean?`

If `true`, the item is silent and will not flash player screens red when hit. It will also not allow near-miss self-defense to be triggered.

### CanHeadshot

`Type: boolean?`

If `true`, players can be headshot by this item, and will not scream when killed by a headshot.

### AmmoDefinition

`Type: AmmoDefinition?`

The ammo that this item uses.

### Ammo

`Type: number?`

The amount of ammo currently available in the item. If `nil`, weapon presets will not check that there is enough ammo, and will always allow the item to be fired.

### ReloadDuration

`Type: number?`

The time, in seconds, that it takes to reload the item. Weapon presets do not allow items to be used whilst they are reloading.

### ReloadAnimation

`Type: Content?`

An animation asset to use when reloading the item. If `nil`, a default not-animation will be used.

### ReloadSound

`Type: Sound?`

The sound to play when reloading.

### IsReloading

`Type: boolean?`

When `true`, the item is reloading. Weapon presets do not allow the item to be used while it is reloading.

### Damage

`Type: DamageInfo | number?`

If this is a table, damage will be applied depending on the body part that is hit. Props take damage based on the name of the part that was hit - as such, it is possible to have a prop that takes head damage or limb damage depending on where it is hit. By default, limb damage is used.

If this is a number, the amount of damage applied is constant regardless of what is hit.

:::note

The final damage applied will depend on several factors, such as damage fall-off, karma, or gamemode effects.

:::

### DamageKind

`Type: GeneralDamageSource?`

The kind of damage that is applied. This is displayed in death events and on corpses. If `nil`, this defaults to `Other`.

### FalloffStart

`Type: number?`

The distance, in studs, before damage begins to drop-off.

### FalloffEnd

`Type: number?`

The distance, in studs, before damage drops-off to 0.

### ImpulseForce

`Type: number?`

The impulse to apply on parts hit by this item. This amount is multiplied by the part's mass.

### Projectile

`Type: MapObject?`

The projectile used.

### ProjectileCount

`Type: number?`

The number of projectiles to spawn. This also determines the number of rays to cast for hitscan weapons.

### ProjectileSpeed

`Type: number?`

The speed, in studs per second, of the projectile, if it is tweened. Physically simulated projectiles instead use this as the impulse to apply, multiplied by the mass of the projectile.

### IsProjectileSimulated

`Type: boolean?`

If `true`, projectiles will use the physics engine to register hits. Projectiles are hitscan by default.

### MaxBounces

`Type: number?`

The maximum number of times to bounce before the projectile despawns. If `nil`, the projectile may only bounce once.

### ShouldPlayersStopBounces

`Type: boolean?`

If `true`, the projectile will despawn when making contact with a player, regardless of the number of times it has bounced.

### FuseTime

`Type: number?`

The time, in seconds, before the projectile detonates. If negative, the projectile detonates on impact.

### IsAimable

`Type: boolean?`

If `true`, weapon presets will allow this item to be aimed.

### AimFOV

`Type: number?`

The FOV to use when aiming. If `nil`, the FOV will remain unchanged.

### AimSpreadMultiplier

`Type: number?`

The value to multiply the spread value by when aiming. If `nil`, spread is unchanged when aiming.

### AimAnimation

`Type: Content?`

The animation to use when aiming the item.

### IsScopable

`Type: boolean?`

If `true`, a scope overlay will appear when aiming with this item.

### IsScopeRequired

`Type: boolean?`

If `true`, the item cannot be used unless scoped in.

### HasMuzzleFlash

`Type: boolean?`

If `true`, the item has muzzle flash.

### LaserColor

`Type: Color3?`

The colour of the laser that the item uses when held. If `nil`, the item has no laser.

### MaxDistance

`Type: number?`

The maximum distance that hitscan rays will be cast.

### CheckInitialIntersection

`Type: boolean?`

If `true`, hitscan rays will check for any overlapping parts, and will use a boxcast to determine hits.

### IsSingleUse

`Type: boolean?`

If `true`, this item can only be used once. Once used, it will disappear from the inventory.

### ExplosionInfo

`Type: ExplosionInfo?`

The properties of the explosion to create when exploding.

### PrimaryToggled

`Type: boolean?`

If `true`, primary fire cannot be held down to trigger primary fire repeatedly.

### PrimaryInterval

`Type: number?`

The time, in seconds, between each primary fire. If `nil`, there is no delay.

### PrimaryLastUse

`Type: number?`

The relative timestamp indicating the last time that primary fire was used.

### PrimaryDisabled

`Type: boolean?`

If `true`, primary fire cannot be used.

### PrimaryHint

`Type: string?`

The text to display for primary fire.

### PrimaryAnimation

`Type: Content?`

The animation asset to use when primary firing.

### PrimarySound

`Type: Sound?`

The sound to play when primary firing.

### HitSound

`Type: Sound?`

The sound to play when hitting something. If `nil`, default hitsounds will be used, depending on the hit material.

### AlternateToggled

`Type: boolean?`

If `true`, alternate fire cannot be held down to trigger alternate fire repeatedly.

### AlternateInterval

`Type: number?`

The time, in seconds, between each alternate fire. If `nil`, there is no delay.

### AlternateLastUse

`Type: number?`

The relative timestamp indicating the last time that alternate fire was used.

### AlternateDisabled

`Type: boolean?`

If `true`, alternate fire cannot be used.

### AlternateHint

`Type: string?`

The text to display for alternate fire.

### AlternateAnimation

`Type: Content?`

The animation asset to use when alternate firing.

### AlternateSound

`Type: Sound?`

The sound to play when alternate firing.

## Functions

Functions are used to provide behaviour to items. All functions are optional.

### PrimaryFireClient

Specifies client-side primary fire behaviour. This function should use the `Item:SetServerData()` method to send data to the server.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| origin | `Vector3` | The origin. |
| direction | `Vector3` | The direction. |

#### Returns

`string | {string} | boolean`

If returning a string or list of strings, the primary fire will be prevented with a hit rejection message. If returning a boolean, the primary fire will be blocked with no message if `false` - if `true`, the primary fire will go ahead.

### PrimaryFireServer

Specifies server-side primary fire behaviour. This function is supplied with data from the client via the `Item:SetServerData()` method. Whilst the origin and direction are validated, this data is not and should be verified to prevent exploits.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| origin | `Vector3` | The origin. |
| direction | `Vector3` | The direction. |
| participant | `Participant` | The participant. |
| data | `unknown` | The data provided by the client. |

#### Returns

`string | {string}?`

If returning a string or list of strings, the hit will be rejected with the provided message. If returning `nil`, the hit will be allowed.

### PrimaryActivatedClient

Called on the client once when primary fire begins.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |

### PrimaryDeactivatedClient

Called on the client once when primary fire stops.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |

### AlternateFireClient

Specifies client-side alternate fire behaviour. This function should use the `Item:SetServerData()` method to send data to the server.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| origin | `Vector3` | The origin. |
| direction | `Vector3` | The direction. |

#### Returns

`string | {string} | boolean`

If returning a string or list of strings, the alternate fire will be prevented with a hit rejection message. If returning a boolean, the alternate fire will be blocked with no message if `false` - if `true`, the alternate fire will go ahead.

### AlternateFireServer

Specifies server-side alternate fire behaviour. This function is supplied with data from the client via the `Item:SetServerData()` method. Whilst the origin and direction are validated, this data is not and should be verified to prevent exploits.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| origin | `Vector3` | The origin. |
| direction | `Vector3` | The direction. |
| participant | `Participant` | The participant. |
| data | `unknown` | The data provided by the client. |

#### Returns

`string | {string}?`

If returning a string or list of strings, the hit will be rejected with the provided message. If returning `nil`, the hit will be allowed.

### AlternateActivatedClient

Called on the client once when alternate fire begins.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |

### AlternateDeactivatedClient

Called on the client once when alternate fire stops.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |

## Schedules

Schedules are run on the relevant `RunService` event whenever the item is equipped. Passive items are always equipped.

All schedules are optional, return nothing, and are run with the following parameters:

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| dt | `number` | The time delta. |

### Available Schedules

- `HeartbeatClient`
- `PreSimulationClient`
- `PostSimulationClient`
- `PreRenderClient`
- `PreAnimationClient`

## Hooks

Hooks are called on (or before) a specific event occuring. All hooks are optional.

### BeforeHitAnything

Runs before hitting anything. The part that was hit, along with other relevant info, can be retrieved from the supplied `DamageParams`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| params | `DamageParams` | The initial `DamageParams`. |
| round | `Round` | The current round. |

#### Returns

`boolean`

If `true`, the hit will continue to be processed; if `false`, the hit will be aborted.

### BeforeHitParticipant

Runs before hitting a participant. The part that was hit, along with other relevant info, can be retrieved from the supplied `DamageParams`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| params | `DamageParams` | The initial `DamageParams`. |
| participant | `Participant` | The participant that was hit. |

#### Returns

`boolean`

If `true`, the hit will continue to be processed; if `false`, the hit will be aborted.

### BeforeHitProp

Runs before hitting a prop. The part that was hit, along with other relevant info, can be retrieved from the supplied `DamageParams`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| params | `DamageParams` | The initial `DamageParams`. |
| prop | `Prop` | The prop that was hit. |

#### Returns

`boolean`

If `true`, the hit will continue to be processed; if `false`, the hit will be aborted.

### OnEquipClient

Called on the client whenever the item is equipped. Passive items are equipped when they are given to the player.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |

### OnUnequipClient

Called on the client whenever the item is unequipped. This includes the item being dropped intentionally or due to death. Passive items are unequipped on death or when removed by commands.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |

### OnEquipServer

Called on the server whenever the item is equipped. Passive items are equipped when they are given to the player.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| participant | `Participant` | The participant who equipped the item. |

### OnUnequipServer

Called on the server whenever the item is unequipped. This includes the item being dropped intentionally or due to death. Passive items are unequipped on death or when removed by commands.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | `Item` | The item. |
| participant | `Participant` | The participant who unequipped the item. |