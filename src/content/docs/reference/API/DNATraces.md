---
title: DNATraces
sidebar:
    order: 2.8
---

:::caution

This API is only accessible from the server.

:::

:::tip

This API is a module. You should specify function names when using this API.

:::

The DNATraces API is used to manage DNA traces on different objects. It can be applied to any object with an Extras field, such as props, participant, items, and others.

## Types

### HasDNATraces

```luau
export type HasDNATraces = {
	Extras: {
		DNATraces: {DNATrace}?,
		[any]: never,
	},
}
```

### DNATrace

```luau
export type DNATrace = {
	Object: Instance,
	Target: string,
	ExpiresAt: number?,
	Icon: Content,
}
```

## Functions

### Add

Adds a DNA trace to an object.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| object | `HasDNATraces` | | The object. |
| target | `Participant` | | The participant associated with the trace. |
| duration | `number?` | | The time until the DNA trace decays. |
| icon | `Content` | | The icon to show. |
| instance | `Instance` | | The instance associated with the object. |

### Remove

Removes all DNA traces from the specified object.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| object | `HasDNATraces` | | The object. |

### Get

Returns the list of DNA traces on the object.

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| object | `HasDNATraces` | | The object. |

#### Returns

`{DNATrace}`

### HasEquivalentTrace

Returns true if the specified list of traces has an equivalent trace (same object and target).

#### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| traces | `{DNATrace}` | | The traces to check. |
| trace | `DNATrace` | | The trace. |

#### Returns

`boolean`