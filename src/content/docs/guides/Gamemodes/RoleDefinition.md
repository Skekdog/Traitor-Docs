---
sidebar:
  order: 3
title: RoleDefinition
---
Roles are... well they're roles. Gamemodes can define roles and specify them in the `Roles` field of the `GamemodeDefinition`.

See also: [`Classes.Role`](/Traitor-Docs/reference/classes/role)

## Properties

### Kind

`Type: "RoleDefinition"`

Always set to "RoleDefinition". Used to differentiate between classes.

### Name

`Type: string`

The internal name of the role. This should match the key used in the `Roles` field of the `GamemodeDefinition`.

### DisplayName

`Type: string?`

The display name of the role. If not set, the name will be used as the display name.

### Description

`Type: string`

The description of the role. This is shown as a hint when a player is assigned this role.

### Color

`Type: Color3`

The color of the role. This is used to color the role in the UI.

### Sound

`Type: Sound`

The sound that plays for players when they receive this role.

### IsExclamatory

`Type: boolean?`

If true, mentions of this role will have an exclamation mark where appropriate. Additionally, the number of exclamatory roles is announced when the round begins. And also players assigned an exclamatory role will receive a list of their comrades when the round begins.

Yes this property does a lot. I'll make it more granular in the future.

### PluralName

`Type: string?`

The plural form of the role name. If not set, the singular name will be used, with an "s" appended to the end.

### IsEvil

`Type: boolean?`

If true, this role is evil. Gamemodes and maps often use this to determine whether a player should have be allowed to do certain actions.

:::note

This does **not** mean that a role is freely killable.

:::

### Allegiance

`Type: VictorType`

The allegiance of the role. This determines who is considered the winner when the round ends.

### StartingItems

`Type: {AnyItemDefinition}?`

A list of items that this role starts with.

### StartingCredits

`Type: number?`

The number of credits that this role starts with. This is added on to their current credits.

### EquipmentShop

`Type: {AnyItemDefinition}?`

A list of items that this role can buy from the equipment shop.

### ShouldAnnounceDisconnect

`Type: boolean?`

If true, an public announcement is made when a player with this role disconnects, revealing their role.

### CanStealCreditsFromCorpses

`Type: boolean?`

If true, this role can steal credits from corpses.

### CanSeeMissingInAction

`Type: boolean?`

If true, this role will see a list of players who are dead, but no confirmed dead, as missing in action. Otherwise, these players are shown as alive.

### CanTeamChat

`Type: boolean?`

If true, players with this role can privately chat to others with this role. This only applies to the specific role, not the allegiance.

### AwardCreditsToRolesOnDeath

`Type: {[RoleName]: number}?`

A map of roles to the number of credits they get when a player with this role dies.

### CorpseHidesSelfDefense

`Type: boolean?`

If true, self defense is never shown on the corpse of this role.

### CorpseSearchResultsPublicised

`Type: boolean?`

If true, all players are able to see the results of a corpse search when a player with this role searches a corpse.

### WalkSpeed

`Type: number?`

Sets the walk speed for this role. If not set, the default walk speed is used.

### JumpPower

`Type: number?`

Sets the jump power for this role. If not set, the default jump power is used.

### Health

`Type: number?`

Sets the health for this role. If not set, the default health is used.

### Accessories

`Type: {string}?`

A list of asset strings that this role will wear.

### DamageKarmaMultiplier

`Type: number?`

Dealing incorrect damage to this role will multiply the karma loss by this value. Defaults to 1.

### Allies

`Type: {RoleName}?`

A list of roles that are considered allies. Damage to allies is considered incorrect (with exceptions).

### RevealedRoles

`Type: {RoleName}?`

A list of roles that are automatically revealed to this role.

### HighlightedRoles

`Type: {RoleName}?`

A list of roles that are automatically highlighted for this role.

## Hooks

Hooks are called on (or before) a specific event occuring. All hooks are optional.

### OnRoleAssignedServer

Runs when a player receives this role.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| roleDefinition | `RoleDefinition` | The role. |
| participant | `Participant` | The participant. |