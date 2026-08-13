---
title: Common Mistakes
sidebar:
    order: 4
---

## Mistakes

### Player stuck after equipping an item

Check that the item model is not anchored. For multi-part items, make sure all parts are unanchored.

### Items fall through the map

Check the item model `CanCollide` property is set to true and that the `CollisionGroup` property is set to `Default`. For multi-part items, check these properties on all relevant parts.

## Errors

When loading your custom content, you may encounter an written error. This page lists some common ones and what you can do to fix them.

### Item {name} does not exist in map or gamemode

The content has something tagged as an `Item`, and that item could not be found in the map or the currently loaded gamemode. If you are making a map, check that you did not accidentally make a typo in the item name and that you did not apply the `Item` tag to an ammo box (as those should only be tagged as `AmmoBox`).


### You do not have permission to load this asset

Double-check to make sure you have entered the correct asset id. Only assets uploaded via the SDK plugin may be loaded. Assets cannot be loaded if you are not one of the key-holders for that asset. If you were recently added to a key, you will need to republish the asset.