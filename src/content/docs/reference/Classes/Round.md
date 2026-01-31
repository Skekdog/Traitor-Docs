---
title: Round
sidebar:
    order: 1
---
The `round` represents the current state of the game. There is only ever one round at a time; you can get the current round in code using the [`GetRound`](/Traitor-Docs/reference/api/getround/) API.

## Types

```lua
type VictoryData = {
	Victor: Victor,
	DidTimeout: boolean,
	EndedAt: number,
	Music: Sound?,
},
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `Gamemode` | `GamemodeDefinition` | The current gamemode. Readonly. |
| `Extras` | `{[any]: any}` | Extra information about the round. |
| `Highlights` | `{[string]: Highlight}` | The highlights for the round. The key is the highlight group. |
| `ElapsedPhaseTime` | `number` | The amount of time that has passed in the current phase. Resets when the phase changes. |
| `PhaseLength` | `number` | The max duration of the current phase. |
| `VictoryData` | `VictoryData?` | The victory data for the round. Readonly. |
| `MinimumRequiredPlayers` | `number` | The minimum number of players required to start the game. This gets set by the gamemode when the round first loads. |

## Methods

### GetItemDefinition

Returns the item definition given the name of the item. When an maps and gamemodes define items with the same name, map item definitions are prioritised over gamemode item definitions.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` |  | The name of the item. |

#### Returns

`AnyItemDefinition?`

### GetAmmoDefinition

Returns the ammo definition given the name of the ammo. When an maps and gamemodes define ammo with the same name, map ammo definitions are prioritised over gamemode ammo definitions.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` |  | The name of the ammo. |

#### Returns

`AnyAmmoDefinition?`

### GetInteractableDefinition

Returns a defined interactable given the name of the interactable. When an maps and gamemodes define interactables with the same name, map interactable definitions are prioritised over gamemode interactable definitions.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` |  | The name of the interactable. |

#### Returns

`InteractableDefinition?`

### LoadMap

Loads a map.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `map` | `Map` |  | The map. |

### GetMap

Returns the current map. Errors if no map is loaded (which should never happen).

#### Returns

`Map`

### GetItems

Returns a dictionary of all `MapObjects` to loaded `Items`.

#### Returns

`{[MapObject]: AnyItem}`

### GetItem

Returns the `Item` given the `MapObject`. Returns `nil` if the item is not loaded.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `MapObject` | `MapObject` |  | The map object. |

#### Returns

`AnyItem?`

### LoadItem

Loads an item given a MapObject. If the item is already loaded, returns the existing item.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `MapObject` | `MapObject` |  | The map object. |

#### Returns

`AnyItem`

### GetAmmoBoxes

Returns a dictionary of all `MapObjects` to loaded `AmmoBoxes`.

#### Returns

`{[MapObject]: AmmoBox}`

### GetAmmoBox

Returns the `AmmoBox` given the `MapObject`. Returns `nil` if the ammo box is not loaded.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `MapObject` | `MapObject` |  | The map object. |

#### Returns

`AmmoBox?`

### GetInteractables

Returns a dictionary of all `MapObjects` to loaded `Interactables`.

#### Returns

`{[MapObject]: Interactable}`

### GetInteractable

Returns the `Interactable` given the `MapObject`. Returns `nil` if the interactable is not loaded.

### AddInteractable

Loads a defined interactable in the round. Returns the loaded interactable.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `definition` | `InteractableDefinition` |  | The interactable definition. |
| `MapObject` | `MapObject?` |  | The map object. Can be nil. |
| `deferLoad` | `boolean?` | `false` | Whether to defer the server load hook of the interactable. No effect on the client load. |

#### Returns

`Interactable`

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `MapObject` | `MapObject` |  | The map object. |

#### Returns

`Interactable?`

### GetProps

Returns a dictionary of all `MapObjects` to loaded `Props`.

#### Returns

`{[MapObject]: Prop}`

### GetProp

Returns the `Prop` given the `MapObject`. Returns `nil` if the prop is not loaded.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `MapObject` | `MapObject` |  | The map object. |

#### Returns

`Prop?`

### LoadProp

Loads a prop given a MapObject. If the prop is already loaded, returns the existing prop.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `MapObject` | `MapObject` |  | The map object. |

#### Returns

`Prop`

### GetParticipants

Returns a dictionary of usernames to participants.

#### Returns

`{string: Participant}`

### GetParticipant

Returns the participant given the username, player object, character model, or instance of their character model. Returns `nil` if the participant is not found.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `identifier` | `Instance \| string` |  | The participant's name, player object, character model, or instance of their character model. |

#### Returns

`Participant?`

### AddPlayer

Loads a player to the round, optionally with karma. Returns the participant.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `player` | `Player` |  | The player to load. |
| `karma` | `number?` | 1000 | The player's karma. |

#### Returns

`Participant`

### RemoveParticipant

Removes a participant from the round.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `participant` | `Participant` |  | The participant to remove. |
| `isRejoining` | `boolean` | | True if this participant is going to be re-added after being removed. |

#### Returns

`()`

### AddEvent

Adds an event to the event log. Note this accepts event data, not events.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `event` | `RoundEventData` |  | The event to add. |

#### Returns

`()`

### GetEventLog

Returns the event log. Note, the event log does not store event data, but rather events.

#### Returns

`{Event}`

### AddHighlight

Adds a highlight to the round. Highlights are stored by group - if a highlight group already exists, it will be overwritten if the new highlight has a higher priority.


#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `highlight` | `Highlight` |  | The highlight to add. |

#### Returns

`()`

### GetPhase

Returns the current phase of the round.

#### Returns

`Phase`

### SetPhase

Changes the phase of the round, for a specified duration, with an optional callback. Preparing, playing, and highlights phases have default callbacks; intermission and waiting do not.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `phase` | `Phase` |  | The phase to change to. |
| `duration` | `number` |  | The duration of the phase. |
| `callback` | `false | () -> ()?` |  | The callback to run when the phase ends. Leave `nil` for default callback, or `false` for no callback. |

#### Returns

`()`

### IsPreGame

Returns true if the round is in the waiting or preparing phase.

#### Returns

`boolean`

### IsInProgress

Returns true if the round is in the playing phase.

#### Returns

`boolean`

### IsPostGame

Returns true if the round is in the highlights or intermission phase.

#### Returns

`boolean`

### Pause

Pauses or unpauses the round.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `paused` | `boolean` |  | Whether to pause or unpause the round. |

#### Returns

`()`

### IsPaused

Returns true if the round is paused.

#### Returns

`boolean`

### Finish

Ends the round with a victory for a certain participant or role. Also specifies if the round ended in a timeout.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `victor` | `Victor` |  | The victor of the round. |
| `didTimeout` | `boolean` |  | True if the round ended in a timeout. |

#### Returns

`()`

### GetRoleFromRoleName

Returns the role given the role name. Errors if the role is not found.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `roleName` | `string` |  | The role name. |

#### Returns

`Role`

### GetParticipantsWithRole

Returns all participants with a certain role.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `role` | `Role` |  | The role. |

#### Returns

`{Participant}`

### SendMessage

Sends a message (notification or chat message) to a player or group of players.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `to` | `{Player} \| Player?` | `all players` | The players to send the message to. |
| `message` | `string` |  | The message to send. |
| `kind` | `MessageKind?` | `"All"` | The kind of message to send. |

#### Returns

`()`
