---
title: BehaviourTypes
sidebar:
    order: 3.1
---

:::note

This API can be used from both the client and the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

Contains functions that check that a given object is of a request type. These are safe to use on unverified data from the client.

## Types

### HitscanResult

```lua
export type HitscanResult = {
	Hit: {
		Part: BasePart,
		Normal: Vector3,
		RelativeCFrame: CFrame,
	}?,
	Position: Vector3,
}
```

### Request

```lua
export type Request = {HitscanResult}?
```

## Functions

### IsHitscanRequest

Returns true if the provided data is a valid hitscan.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `any` | | The data. |

#### Returns

`boolean`

### IsRequest

Returns true if the provided data is a valid request. Note that nil is a valid request.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `any` | | The data. |

#### Returns

`boolean`