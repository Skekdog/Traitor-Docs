---
sidebar:
  order: 2
title: Structure
---
:::note

The best way to learn the map structure is by example - you may find examples in the SDK plugin.

:::

Your map should follow this structure:

```
- Map (Folder)
	- Static (Folder)
	- Dynamic (Folder)
	- PlayerSpawns (Folder)
```

All of these folders are required, even if you don't use them.

Static geometry should be placed in the Static folder. This folder will be loaded once per map rotation; therefore, parts here should be anchored and unmoving. Parts which do move, like props, items, doors, and other movable objects should be placed in the Dynamic folder - this folder will be reloaded every round. You can follow this through for scripts as well - scripts in the Dynamic folder will be reloaded every round, and scripts in the Static folder will be loaded once per map rotation.

The PlayerSpawns folder should contain parts positioned where you want players to spawn at. These parts are made invisible when the map loads.

Maps also must have certain attributes on the root folder:

| Attribute | Type | Description |
| --- | --- | --- |
| `Authors` | string | The map creators. Usually, users are referenced by their username, prefixed by an "@". |
| `Icon` | string | The map's icon shown in voting. This should be an asset string, in the form `rbxassetid://ID`. |
| `Description` | string | The map's description. This is not currently shown anywhere, but it may be used in the future. |
| `DisplayName` | string? | The map's display name. This is shown in voting. If not specified, the root folder name will be used. |