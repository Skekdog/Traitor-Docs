---
title: ReplicateAssociatedPlayer
sidebar:
    order: 4
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API directly returns a function. You should not specify a function name.

:::

Intended to be used with planted interactables. It will check the prop's Extras field for an associated player and replicate the player to all clients. The client can then access this player via the `Prop.Extras.Player` field. Note that this field may be nil.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `prop` | `Prop` | | The prop. |