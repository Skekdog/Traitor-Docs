---
title: Camera
sidebar:
    order: 2.8
---
:::caution

This API is only accessible from the client.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

The Camera API is used to manipulate the player's perspective.

## Functions

### IsFirstPerson

Returns true if the player is in first person. Does not account for zooming into first person when in third person.

#### Returns

`boolean`

### EnterAnimationView

Changes the camera into a perspective used for showing third-person animation.

#### Returns

`()`

### EnterFirstPerson

Returns the camera to first-person.

#### Returns

`()`

### EnterThirdPerson

Changes the camera into third-person, with largely free camera movement.

#### Returns

`()`