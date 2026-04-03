---
title: Message
sidebar:
    order: 2.8
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

The Message module is used to display messages to players.

## Types

### ReplicationTarget

```luau
export type ReplicationTarget = Player | {[any]: Player} | "All"
```

A specific player, a list of players (with numeric keys or otherwise), or all players.

## Functions

### Notification

Displays a notification in the top-right corner of the screen.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| message | `string` | | The message. |
| isTeamMessage | `boolean?` | | If true, the notification will use a separate team panel. |
| target | `ReplicationTarget?` | | The targets to show the message to. Must be specified on the server, must not be specified on the client. |

### Popup

Displays a popup appearing from the bottom of the screen.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| message | `string` | | The message. |
| target | `ReplicationTarget?` | | The targets to show the message to. Must be specified on the server, must not be specified on the client. |

### Chat

Displays a chat message.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| message | `string` | | The message. |
| target | `ReplicationTarget?` | | The targets to show the message to. Must be specified on the server, must not be specified on the client. |

### Screen

Displays a popup message with a specified format.

#### Types

##### ScreenMessageFormat

```luau
export type ScreenMessageFormat = "Standard" | "Error" | "Info" | "Success" | "Warn"
```

- `Standard`: A standard message in white text with a black stroke.
- `Error`: An error message in red text.
- `Info`: An info message in blue text.
- `Success`: A success message in green text.
- `Warn`: A warning message in orange text.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| message | `string` | | The message. |
| format | `ScreenMessageFormat` | | The format; see above. |
| overrides | `{LabelProperties: {[string]: any}}?` | | Specific properties to override, if desired. |
| target | `ReplicationTarget?` | | The targets to show the message to. Must be specified on the server, must not be specified on the client. |