---
title: Using APIs
sidebar:
    order: 2
---

# Types and Autocomplete

To get type-checking and autocomplete for APIs, you should load the API Reference in the SDK plugin.

# Using in Scripts

The public APIs are designed to be easily accessible and usable no matter the context. To use an API, you can import it like so:

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local APIName = require(ReplicatedStorage.API.APIName)
```

When you have imported an API, you can then proceed to use it as documented. In general, this is either:

```lua
API.FunctionName(params) -- for module APIs
-- or
API(params) -- for function APIs
```

In the end, you will end up with something like this:

```lua
-- At the top of the script
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Combat = require(ReplicatedStorage.API.Combat)

-- ...somewhere else in the script
Combat.MakeExplosion(explosionParams)
```