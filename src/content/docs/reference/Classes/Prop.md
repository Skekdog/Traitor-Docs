---
title: Prop
sidebar:
    order: 3
---

The prop class represents a prop loaded in the current map.

See also: [Maps.Props](/Traitor-Docs/guides/maps/props).

## Properties

### Kind

`Type: "Prop"`

Always set to "Prop". Used to differentiate between classes.

### Model

`Type: MapObject`

The `MapObject` of the prop.

### Extras

`Type: Extras`

Additional data for the specific prop instance.

### Interactable

`Type: InteractableDefinition?`

Defines the interactability of this prop.

### HintTextClient

`Type: string?`

Text to display to players looking at this prop. This should be set on the client-side from the attached interactable.

### Round

`Type: Round`

A reference to the current round.

## Methods

### GetHealth

Returns the current health of the prop. Returns nil if the prop is not breakable.

#### Returns

`number?`

### SetHealth

Sets the health of the prop. No effect if the prop is not breakable.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `health` | `number` |  | The new health of the prop. |

### TryTakeDamage

Attempts to damage the prop with the provided `DamageParams`. Returns true if the prop was damaged, false otherwise.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `damageParams` | `DamageParams` |  | The damage parameters. |
| `deferDeath` | `boolean?` |  | Whether to defer OnBreak. |

#### Returns

`boolean`