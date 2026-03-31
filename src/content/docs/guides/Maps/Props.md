---
sidebar:
  order: 4
title: Props
---
Most maps will want to have props - props are thing that players can grab with the Magneto Stick, that can (or cannot) be destroyed, and that can (or cannot) be moved around. Props can have special behaviour when taking damage, or when destroyed.

See also: [`Classes.Prop`](/Traitor-Docs/reference/classes/prop)

## Making a Prop

Props can take two forms: a single `BasePart`, or a `Model`. In either case, you must add the `Prop` tag to the `BasePart` or `Model` to make it a prop. Props must be in the `Dynamic` map folder, but you can place them in any sub-folder within `Dynamic`.

Done!

If you want to make your prop breakable, you should add an attribute named `Health`, and set it to a number.

## Special Behaviour

If your prop is breakable, you can have special behaviour for when it takes damage and for when it is destroyed. To do this, add a `OnDamage` and/or `OnBreak` `ModuleScript` to your prop.

These modules should return a function which will run when the relevant event occurs. The function should have the following signature:

```luau
OnBreak: function(prop: Types.Prop, params: Types.DamageParams): ()
OnDamage: function(prop: Types.Prop, params: Types.DamageParams): boolean?
```

The returned boolean for `OnDamage` determines whether the prop should actually take damage. The parameter types are covered in the classes section of the docs.

### Prefabs

There are a number of prefabs available for prop behaviour. You can use these by setting your OnBreak / OnDamage module to the following code:

```luau
return require(game:GetService("ReplicatedStorage").Shared.MapPrefabs.PrefabName)
```

Prefabs:<br/>
Currently only one prefab exists.
- `Window` - Shatter the window when it is destroyed.

:::note
If you are coming from TT2, most map prefabs from there should also be available here. You should still use the TT2 path for the module require, so:
```luau
return require(game:GetService("ReplicatedStorage").Assets.MapPrefabs.PrefabName)
```
:::

### Examples

```luau
--!strict
-- Prop.OnBreak
-- When this prop is broken, it will make the attacker a free kill if they are not evil (a Traitor).
-- An example usage of this is for a traitor tester.

return function(prop: Types.Prop, params: Types.DamageParams): ()
	if params.Attacker and not params.Attacker:IsEvil() then
		params.Attacker:SetFreeKill("destroyed the prop")
	end
end
```