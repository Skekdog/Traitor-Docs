---
title: PlaySound
sidebar:
    order: 8
---

:::note

This API can be used from both the client and the server.

:::

:::caution

This API uses metatables to act as both a module and a function.

:::

The PlaySound API is a versatile API for playing sounds. When called as a function, it will use the `PlaySound.PlaySound` function.

## Types

### SoundId

```luau
export type SoundId = number | Sound | string
```

### SoundProperties

```luau
export type SoundProperties = {
	Volume: number?,
	RollOffMinDistance: number?,
	RollOffMaxDistance: number?,
	SoundGroup: SoundGroup?,
	PlaybackRegion: NumberRange?,
	TimePosition: number?,
	Looped: boolean?,
}
```

## Functions

### MakeSound

Picks a random sound (or the specified sound) and creates a sound for it, applying the specified properties. Returns a new `Sound`.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sound` | `SoundId \| {SoundId}` | | The sound to create. When a table is provided, a random sound will be selected from the table. |
| `props` | `SoundProperties?` | `{}` | The properties to apply to the sound. |

#### Returns
`Sound`

### PlaySound

:::note

This function is called when the PlaySound API is used as a function.

:::

Creates a sound, using the `MakeSound` function, and plays it at the specified location.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sound` | `SoundId \| {SoundId}` | | The sound to create. When a table is provided, a random sound will be selected from the table. |
| `position` | `Vector3?` | | The position to play the sound at. Only one of `position` or `parent` can be specified. |
| `parent` | `Instance?` | `SoundService?` | The parent instance to attach the sound to. Only one of `position` or `parent` can be specified. If neither is specified, the `Sound` will be parented to `SoundService`. |
| `props` | `SoundProperties?` | `{}` | The properties to apply to the sound. |

#### Returns
`Sound`