---
sidebar:
  order: 100
title: OtherTypes
---

# Other Types

This page documents other types that aren't significant enough to be their own page.

## ScoreTable

Maps a reason to a score amount.

`Type: {[string]: number?}`

## ItemPurchases

Maps an item name to the number of times it has been purchased. Used by the `Participant` class.

`Type: {[string]: number?}`

## ItemPurchaseResult

The result of an attempt to make an item purchase.

`Type: "Success" | "NotEnoughCredits" | "SlotOccupied" | "NotInStock" | "InvalidItemForRole" | "NotInRound"`