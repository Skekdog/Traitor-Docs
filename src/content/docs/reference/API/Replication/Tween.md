---
title: Tween
sidebar:
    order: 2.8
---

:::caution

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

The Tween API is used to smoothly tween things for all clients. This API should be used instead of TweenService directly when trying to tween things for all players, as playing tweens on the server-side results in choppy animation for clients.

## Functions

### `Tween`

Tweens the specified instance with the specified parameters. Same parameters as `TweenService:Create()`.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `instance` | `Instance` | | The instance to tween. |
| `tweenInfo` | `TweenInfo` | | The TweenInfo. |
| `properties` | `{[string]: unknown}`| | The properties. |