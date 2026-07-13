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

Maps must also contain a Metadata module. This must be a ModuleScript containing the following:

```lua
--!strict

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Types = require(ReplicatedStorage.API.Types)

local metadata: Types.MapMetadata = {
	DisplayName = nil,
	Description = "DESCRIPTION",
	Authors = "AUTHORS",
	Icon = Content.none,
}

return metadata
```

You may replace each property as you see fit. To set a custom icon for your map, use `Content.fromAssetId(ICON_ASSET_ID_HERE)`.