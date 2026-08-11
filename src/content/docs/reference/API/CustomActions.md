---
title: CustomActions
sidebar:
    order: 2.8
---

:::caution

This API is only accessible from the client.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

The CustomActions API is used to add and remove actions for the player. Currently, this is used by the Disguiser item and the Framed gamemode to implemented marking.

## Functions

### Register

Registers a custom action, in the specified slot. If the slot is not available, the next slot will be used.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | | The name of the action. |
| callback | `() -> ()` | | The callback to run when the action is triggered. |
| preferredSlot | `number?` | | The slot to register the action in. |
| displayName | `string?` | | The name to show the user. |

#### Returns

`()`

### Unregister

Unregisters a custom action. Does nothing if the action is not already registered.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | | The name of the action. |

#### Returns

`()`

### Trigger

Triggers a custom action with the specified name. Errors if the action isn't registered.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | | The name of the action. |