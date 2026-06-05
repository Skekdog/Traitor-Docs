---
title: PlatformDetection
sidebar:
    order: 2.8
---
:::caution

This API is only accessible from the client.

:::

:::danger

Do not use platform detection unless there is a very strong reason to do so. Always prefer platform-agnostic implementations.

User input should exclusively be based on the input capabilities (Touchscreen, Gamepad, Keyboard, etc.) and not their platform.

This API exists for extremely niche use-cases, like estimating grahpical APIs in use. This is used by Skylands to prevent severe flickering issues with water on certain graphical APIs.

:::

The PlatformDetection API returns an Enum representing the user's platform. It will accurately detect:

- Windows
- Windows (UWP)
- Linux (via Sober)
- MacOS (OSX)

- Android
- iOS

- Xbox One
- PS5
- PS4
- MetaOS

## Functions

### Detect

Returns the detected platform. See above for supported detections. If detection is unsuccessful, `Enum.Platform.None` will be returned.

#### Returns

`Enum.Platform`