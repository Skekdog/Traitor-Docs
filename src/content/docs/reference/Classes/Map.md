---
title: Map
sidebar:
    order: 4
---
Represents a map. Used to access the active structure of the map, and to get map info.

See also: [`Maps.Intro`](/Traitor-Docs/guides/maps/intro)

## Properties

### Structure

`Type: Instance`

The map's loaded structure, as detailed in [Structure](/Traitor-Docs/guides/maps/structure).

### Name

`Type: string`

The map name.

### DisplayName

`Type: string?`

The map display name.

### Description

`Type: string`

The map description.

### Authors

`Type: string`

The map authors.

### Icon

`Type: Content`

The map icon.

### Gravity

`Type: number`

The map gravity. Defaults to 80.

### InteractableDefinitions

`Type: {[string]: InteractableDefinition}`

A map of custom interactable names to their definitions.

### ItemDefinitions

`Type: {[string]: ItemDefinition}`

A map of custom item names to their definitions.

### AmmoDefinitions

`Type: {[string]: AmmoDefinition}`

A map of custom ammo names to their definitions.