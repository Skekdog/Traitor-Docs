---
title: Client
sidebar:
    order: 3.1
---

:::note

This API is only accessible from the client.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

Provides client functionality for item behaviour.

## Functions

### DeductAmmo

Decreases the ammo of the item by 1, updating UI.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

### ApplyInterval

Sets the last use timestamp for the item.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |
| `action` | `"Primary" \| "Alternate"` | The action.

### MuzzleFlash

Does the muzzle flash for an item, if applicable.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

### Recoil

Recoils from an item.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

### PlayEmptyClipSound

Plays the empty clip sound.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

### PrimaryFire

Performs the primary fire action on the client, setting server data. This function does not itself replicate the fire to the server.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |
| `origin` | `Vector3` | | The origin. |
| `direction` | `Vector3` | | The direction, not accounting for spread. |
| `noEffects` | `boolean?` | | If true, the item state will not change, and visual effects will not be played. The item's server data will still be set (regardless of `noEffects`, this is not yet replicated).

#### Returns

`string | {string} | boolean`

If returning a string, or table of strings, the primary fire was rejected with the provided reason(s). If returning a boolean, true indicates that the primary fire was successful, false indicates it was rejected with no further reason.

### Aim

Aims the item if possible.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

#### Returns

`boolean`

Always returns true.

### TryReloadWeapon

Attempts to reload the weapon. Returns true if successful, false if not.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `item` | `Item` | | The item. |

#### Returns

`boolean`

### ServerFire

Tells the server that an action was performed.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `action` | `"Primary" \| "Alternate"` | The action. |
| `item` | `Item` | | The item. |
| `origin` | `Vector3` | | The origin. |
| `direction` | `Vector3` | | The direction, adjusted for spread |