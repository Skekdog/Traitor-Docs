---
sidebar:
  order: 10
title: ActionNodes
---

# Action Nodes

Action Nodes are special interactions that players with an `IsEvil` role can trigger. They are billboard in 3D space and can be triggered within a certain distance, optionally for a cost. Most often, they are used to create traitor doors or traitor traps.

To create an action node, create a `Part` with a `Script` child. The script should have the following effect:

```luau
--!strict

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TweenService = game:GetService("TweenService")
local Types = require(ReplicatedStorage.API.Types)
local ActionNodeType = require(ReplicatedStorage.Shared.Actions.ActionNodeType)
local ActionNode = require(ReplicatedStorage.Shared.MapPrefabs.ActionNode)

local TITLE = "Traitor Room (Don't press with innocents around!)" -- Shown when hovering
local COST = 0 -- The credit cost of the action
local COOLDOWN = 3 -- The cooldown of the action, in seconds
local RADIUS = 100 -- The radius within which the action can be triggered

local door = script.Parent
local tweenInfo = TweenInfo.new(
	1,
	Enum.EasingStyle.Linear,
	Enum.EasingDirection.Out,
	0,
	false,
	0
)
local doorOpen = TweenService:Create(door, tweenInfo, {CFrame = door.CFrame * CFrame.new(0, -8.5, 0)})
local doorClose = TweenService:Create(door, tweenInfo, {CFrame = door.CFrame})

-- This is the function that is called when the action is triggered
local function action(participant: Types.Participant): ()
	doorOpen:Play()
	doorOpen.Completed:Wait()
	task.wait(1)
	doorClose:Play()
end

-- This specifies the parameters of the action, as defined above.
local params: ActionNodeType.ActionNodeParams = {
	Adornee = script.Parent,
	Title = TITLE,
	Cost = COST,
	Cooldown = COOLDOWN,
	Radius = RADIUS,
	Action = action
}

-- This sets up the action node at the params.Adornee part.
ActionNode(params)
```