---
title: Audio
sidebar:
    order: 8
---

:::note

This API can be used from both the client and the server.

:::

The Audio API is used to create and play sounds. It will cache sounds when possible, to improve performance.

## Types

### AudioProperties

```luau
export type AudioProperties = {
	Content: Content,

	Name: string?,

	Volume: number?,

	RolloffStart: number?,
	RolloffEnd: number?,

	PlaybackRegion: NumberRange?,
	TimePosition: number?,

	Effects: {SoundEffect}?,
}
```

Specifies properties for creating a `Sound` instance.

:::caution

Property names do not necessarily match property names on the `Sound` Instance!

:::

### PlayInTarget

```luau
export type PlayInTarget = BasePart | Attachment | SoundService | Folder
```

## Functions

### MakeSound

Creates a sound with the given properties.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `properties` | `AudioProperties` | | The properties of the sound. Some additional properties will be set by default. Note that property names do not necessarily match the property name of the `Sound` Instance. |

#### Returns

`Sound`

### PlayAt

Plays a sound at the given vector position.

:::tip

Currently, sounds played using `Audio.PlayAt` will never be cached - as such, you should prefer to use `Audio.PlayIn` when possible.

:::

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `referenceSound` | `Sound` | | The sound. |
| `position` | `Vector3` | | The position to play the sound at. |
| `noClone` | `boolean?` | | If true, the provided sound instance will be used directly, instead of a clone being used. |
| `to` | `Player?` | | A specific player to play the sound to. Must only be used on the server. |

### PlayIn

Plays a sound in the given instance. Sounds will be cached, unless specified otherwise.

:::caution

Providing anything other than a `BasePart` or `Attachment` will cause a 2D sound to be played.

:::

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `referenceSound` | `Sound` | | The sound. |
| `instance` | `PlayInTarget` | | The instance to play the sound in. |
| `noClone` | `boolean?` | | If true, the provided sound instance will be used directly, instead of a clone being used. |
| `noCache` | `boolean?` | | If true, the sound will not be cached. |
| `to` | `Player?` | | A specific player to play the sound to. Must only be used on the server. |

### Play2D

Plays a 2D sound. 2D sounds can be heard from everywhere. Sounds will be cached unless otherwise specified.

:::caution

Maps are cloned when they are loaded. This means that 2D sounds played by maps will not be cached correctly when using this function. Either disable caching or use `Audio.Play2DMap` instead.

:::

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `referenceSound` | `Sound` | | The sound. |
| `noClone` | `boolean?` | | If true, the provided sound instance will be used directly, instead of a clone being used. |
| `noCache` | `boolean?` | | If true, the sound will not be cached. |
| `to` | `Player?` | | A specific player to play the sound to. Must only be used on the server. |

### Play2DMap

Plays a 2D sound. 2D sounds can be heard from everywhere. Sounds will be cached unless otherwise specified.

This function will correctly cache sounds accounting for the fact that maps are cloned when loaded. Maps should not use `Audio.Play2D` unless they disable caching.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `referenceSound` | `Sound` | | The sound. |
| `map` | `Folder` | | A folder in the map, or the map root itself. |
| `noClone` | `boolean?` | | If true, the provided sound instance will be used directly, instead of a clone being used. |
| `noCache` | `boolean?` | | If true, the sound will not be cached. |
| `to` | `Player?` | | A specific player to play the sound to. Must only be used on the server. |

### InvalidateCache

Clears the cache for a specific reference sound. This **must** be used when a reference sound is modified, such as by changing the volume.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `referenceSound` | `Sound` | | The sound. |