---
sidebar:
  order: 6
title: Interactables
---

An interactable is a special kind of prop that a player can interact with. To make something into an interactable, you should add the `Interactable` tag to it.

Interactable models, including defined interactables, can have a `DisplayName` attribute, this will override the name displayed to the player. For defined interactables, if a display name attribute is set, it will be used instead of the definition's display name.

:::note

You also need the `Prop` tag.

:::

Now, there are three kinds of interactables: prefabs, defined interactables, and runtime interactables.

## Prefabs

To make a part into a prefab interactable, you should add an additional tag, which is the name of the prefab. For example, to make a door, you should add the `Door` tag.<br/>
Currently, there are two prefab interactables:
- Door
- Ladder

### Doors

There are two types of doors: hinge doors and sliding doors. Hinge doors are created by added an `Attachment` with the name `DoorPivot` to the primary part of the door, which (unsurprisingly) acts as the hinge for the door. Sliding doors do not have a `DoorPivot`, and instead are created by setting the `DoorKind` attribute (on the door model, not the primary part) to `Slide`.

Doors have a number of attributes which can be used for customisation. These attributes are all set on the door model, which may be a part or a model:

- `DoorKind`: `Hinge` or `Slide`

- `Duration`: The time it takes to open or close the door, in seconds. Defaults to 0.75s.
- `OpeningDuration`: The time it takes to open the door, in seconds. If set, overrides `Duration`.
- `ClosingDuration`: The time it takes to close the door, in seconds. If set, overrides `Duration`.

- `HingeRestrictDirection`: If true, the door will only open in a counter-clockwise direction.
- `HingeRestrictDirectionClockwise`: If true, the door will only open in a clockwise direction.

- `HingeOpenAngleCCW`: The angle, in degrees, that the door will open at when opened counter-clockwise. Defaults to -90.
- `HingeOpenAngleCW`: The angle, in degrees, that the door will open at when opened clockwise. Defaults to 90.

- `AutoCloseAfter`: The time after the door has fully opened after which it will automatically close, in seconds. By default, doors will not close automatically.
- `Locked`: If true, the door cannot be opened by players. It may still be possible to open the door programmatically.

- `EasingStyle`: The easing style to use when opening or closing the door. Defaults to `Linear`.
- `EasingDirection`: The easing direction to use when opening or closing the door. Defaults to `In`.

Additionally, sliding doors have a `SlideAxis` attribute, a `Vector3` which determines the axis along which the door slides.

Doors can also have customised open and close sounds. To do this, you should add a `Sounds` folder to the door model, with two subfolders, `Open` and `Close`. These folders should contain one or more `Sound` objects.

### Ladders

Unlike other interactables, ladders do not have to be under `Dynamic`. Players will climb ladders automatically when they touch them. Typically, ladders should be taller than their actual height, but shorter at the bottom.<br/>
If your ladder acts strangely, double-check the orientation.

## Defined Interactables

:::tip
Defined interactables usually require some level of scripting knowledge; however, they are not complicated if you do have some scripting capability.
:::

Defined interactables are designed to be used in multiple places around a map, using the same code. All current game interactables, like the Radio and the C4, are defined.

To make a defined interactable, you should create a ModuleScript in your map. Give it an appropriate name (usually the name of the interactable, although it doesn't strictly matter).

Now, you should require the module in your MapScript and add it to the InteractableDefinitions table:
```lua
TerrainColors = ...,

InteractableDefinitions = {
	InteractableName = require(script.Path.To.Your.Module)
},

AvailableItems = ...,
```
This will register all props with the Interactable tag and the matching name as having this interactable definition.

If you attempt to load your map now, it will break. You now need to define the interactable, so head back into your module and get coding!

The module should return an `InteractableDefinition`:
```lua
export type InteractableDefinition = {
    Name: string, -- This must match the name of the interactable in the map.
    DisplayName: string?, -- Overrides the name when displayed to players.

    NoActionHint: boolean?, -- If true, hides the action hint.
    HideName: boolean?, -- If true, hides the name. Unlike in runtime interactables, this property is not overriden by DisplayName.

    DefaultHintText: string?, -- Sets the default hint shown to players.

    Model: MapObject?, -- When defining interactables for maps, you should leave this `nil`.

    IsContinuousInteraction: boolean, -- If true, OnInteract will be called repeatedly until the player releases the interaction key or moves out of range.
    InteractionRange: number, -- The maximum distance at which the player can interact with the interactable.

    OnInteractClient: ((object: Prop) -> ())?, -- Called on the client when the player interacts with the interactable.
    OnInteractServer: ((object: Prop, participant: Participant) -> ())?, -- Called on the server when the participant interacts with the interactable.

    OnLoadClient: ((object: Prop) -> ())?, -- Called on the client when the interactable is first loaded in the map.
    OnLoadServer: ((object: Prop) -> ())?, -- Called on the server when the interactable is first loaded in the map.

    OnBreakServer: ((object: Prop, params: DamageParams) -> ())?, -- Called on the server when the interactable is destroyed.

    BeforeTakeDamage: ((object: Prop, params: DamageParams) -> boolean)?, -- Called on the server before the interactable takes damage. If this returns false, the damage will not be applied.
}
```

## Runtime Interactables

:::tip
Like defined interactables, runtime interactables require some level of scripting knowledge; however, they are not complicated if you do have some scripting capability, and they are somewhat easier to understand than defined interactables.
:::

Runtime Interactables do not use a centralized definition; instead, their properties are defined as attributes, and their behaviour is provided by two `ModuleScripts`, one for the client and one for the server.

To turn a prop into a runtime interactable, give it the `Interactable` tag and add an attribute, named `Button`, and set it to the boolean: `true`.

Additional attributes:
- `DisplayName`: `string?`
- `UseText`: `string?` - This is the equivalent of DefaultHintText in defined interactables.
- `ShowName`: `boolean?` - By default, runtime interactables do not show their name. However, you can set DisplayName to a string or ShowName to true to show the name.

:::note
Runtime interactables currently cannot set a custom interaction range, it is always set to 7.5.
:::

The client `ModuleScript` **must** be named `ButtonClient`. It should return a table of the following type:
```lua
export type ButtonClient = {
	Began = () -> (),
}
```

The server `ModuleScript` **must** be named `ButtonServer`. It should return a table of the following type:
```lua
export type ButtonServer = {
	Began = (player: Player) -> (),
}
```

:::caution
Unlike other map code, ButtonServer receives a `Player` instance instead of a `Participant`.
:::