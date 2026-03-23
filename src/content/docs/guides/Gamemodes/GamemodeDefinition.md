---
sidebar:
  order: 2
title: GamemodeDefinition
---
The `GamemodeDefinition` is the primary data and code container for a gamemode. It specifies basic information, like the name and the creators, and it also provides hooks to implement the gamemode's behaviors. This is the structure that should be returned by your gamemode module.

## Properties

### Name

`Type: string`

The internal name of the gamemode. This should match the name of the gamemode module.

### DisplayName

`Type: string?`

The name that will be displayed in the UI. If not set, `Name` will be used instead.

### Description

`Type: string`

The description of the gamemode, which is not currently used. Despite this, you must still provide a description.

### Authors

`Type: string`

Lists the authors of the gamemode. Typically, you should use Roblox usernames, starting with an `@` symbol, and separated by commas. For example: `@username1, @username2, @username3`.

### MinimumPlayers

`Type: number | () -> number`

The minimum number of players before the round can begin. Can be a number or a function that returns a number - if a function, it will be called when the round loads.

### RequiredSlayVotes

`Type: number?`

If specified, this is the number of votes against a player needed before they are slain for RDM. If not specified, RDM slay is disabled.

### EnableFriendlyFire

`Type: boolean?`

If true, friendly fire between allies will deal damage. Otherwise, friendly fire is disabled.

### EnableKarma

`Type: boolean?`

If true, karma will be active and will reduce damage dealt by players with low karma. Players will gain karma for dealing good damage, and lose karma for dealing bad damage. If disabled, these effects do not occur.

### AvailableItems

`Type: {[string]: AnyItemDefinition}`

A dictionary specifiying all available items in the gamemode. If an item is not specified here (or in the loaded map), it will fail to load.

:::tip

You can get all standard items by using the `API.Items.GetItems()` function. Additionally, you can add more items in by creating a new table and giving it the standard items, then adding in your own items to the table.

:::

### AvailableAmmo

`Type: {[string]: AmmoDefinition}`

A dictionary specifying all available ammo in the gamemode. If an ammo is not specified here (or in the loaded map), it will fail to load.

:::tip

You can get all standard ammo by using the `API.Ammo.GetAllAmmo()` function. Additionally, you can add more ammo in by creating a new table and giving it the standard ammo, then adding in your own ammo to the table.

:::

### InteractableDefinitions

`Type: {[string]: InteractableDefinition}`

A dictionary specifying all available interactables in the gamemode. If an interactable is not specified here (or in the loaded map), it will fail to load.

:::tip

You can get all standard interactables by using the `API.StandardInteractables.GetInteractables()` function. Additionally, you can add more interactables in by creating a new table and giving it the standard interactables, then adding in your own interactables to the table.

:::

### StartingItems

`Type: {AnyItemDefinition}`

A list of items to give players when they spawn.

### Roles

`Type: {[string]: RoleDefinition}`

A dictionary of role name to definitions. This table specifies the available roles for the gamemode.

### RoleCanCallToCorpse

`Type: RoleDefinition?`

Specifies a role that can be called to investigate a corpse. If nil, no roles can be called to corpses.

## Functions

These functions should be thought of as properties, more so than hooks. They should be pure, and should not have any side-effects (that is, they return a value, and do not modify the game in any other way).

### Duration

Called when the round starts. Returns an amount of time, in seconds, that the round should last for.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| numParticipants | `number` | The number of participants in the round. |

#### Returns

`number`

### GetRoundEndMusic

Called when the round ends. Returns a `Sound` or `nil`. If returning a `Sound`, it will be played for all players.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| victor | `Victor` | The victor of the round. |
| isTimeout | `boolean` | Whether the round ended by timeout. |

#### Returns

`Sound?`

### GetVictoryEventText

:::note

This function is optional. You may omit it if you wish.

:::

Called when the round ends. Returns a `string`, which will be displayed in the event log at the end of the round. If returning `nil`, a default message will be displayed.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| victor | `Victor` | The victor of the round. |
| isTimeout | `boolean` | Whether the round ended by timeout. |

#### Returns

`string?`

### TimeoutVictor

Called when the round runs out of time. Returns a `Victor` that will be declared the victor.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |

#### Returns

`Victor`

### UnloadGamemode

:::note

This function is optional. You may omit it if you wish.

:::

Called to allow the gamemode to clean-up after itself, if needed. This is only called if the gamemode is changed mid-round.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |

### IsValidOnMap

:::note

This function is optional. You may omit it if you wish.

:::

If present, this function determines if this gamemode can be played on the given map. Can be used to prevent loading gamemodes that would not work well on certain maps, either checking their structure or by directly checking their name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| map | `MapStructure` | The map. Note that this is a `MapStructure`, not `Map`. |

#### Returns

`boolean`

## Hooks

Hooks are functions which are run on the server when a relevant event occurs. They are used to implement the gamemode's behaviors.

:::note

All hooks are optional and may be omitted if not needed.

:::

### AssignRoles

Called with a shuffled list of participants when the round starts. Used to assign roles to participants.

:::note

Some gamemodes may wish to assign roles later in the round, they may omit this hook.

:::

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| participants | `{Participant}` | A shuffled list of participants in the round. |

### OnStart

Called when the round starts.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |

### OnFinish

Called when the round ends.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |

### OnCharacterAdded

Called when a `Participant`'s character is loaded. This is also called when the gamemode is swapped with some characters already spawned in.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| participant | `Participant` | The participant whose character was loaded. |
| char | `Model` | The character. |

### OnDeath

Called when a `Participant` dies or disconnects (when alive). This hook is only called when the round is in progress; pre-game or post-game deaths will not call this hook.<br/><br/>This hook is commonly used to determine if the round has been won.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| participant | `Participant` | The participant that died or disconnected. |

### OnIdentifyCorpse

Called when a `Participant`'s corpse is identified by someone. This hook is also called when a kill is confirmed via another corpse's kill list.

:::note

Unlike `OnDeath`, this hook **will** be called even if the round is not in progress.

:::

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| corpse | `Corpse` | The corpse that was identified. |
| searcher | `Participant` | The participant that identified the corpse.

### OnItemEquipped

Called when a `Participant` equips / unequips an item.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| participant | `Participant` | The participant that equipped / unequipped the item. |
| item | `AnyItem` | The item that was equipped / unequipped. |
| equipped | `boolean` | Whether the item was equipped or unequipped. |

### AddFinishHighlights

Called when the round ends. Used to calculate and add additional highlights to the round.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |

### BeforeDamageParticipant

Called before a `Participant` takes damage. This hook returns a `boolean`, which should be true if the damage should be applied, or false otherwise. This is called before item-specific `BeforeHitParticipant` hooks, but after `BeforeHitAnything` hooks.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| participant | `Participant` | The participant that is being damaged. |
| params | `DamageParams` | The damage parameters. |

#### Returns

`boolean`

### BeforeDamageProp

Called before a `Prop` takes damage. This hook returns a `boolean`, which should be true if the damage should be applied, or false otherwise. This is called before item-specific `BeforeHitProp` hooks, but after `BeforeHitAnything` hooks.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The current round. |
| prop | `Prop` | The prop that is being damaged. |
| params | `DamageParams` | The damage parameters. |

#### Returns

`boolean`

## Schedules

Schedules are run on the relevant `RunService` event whilst the gamemode is loaded.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| round | `Round` | The round. |
| dt | `number` | The time delta. |

### Available Schedules

- `Heartbeat`