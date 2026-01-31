---
sidebar:
  order: 8
title: Round Events
---
Round events show up in the events page when the round ends. They do not have any other functionality.

## GenericEventData

A generic event. You can set the `Text` property to the text you want to show.

### Properties

#### Kind

`Type: "GenericRoundEvent"`

Always set to "GenericRoundEvent". Used to differentiate between classes.

#### Text

`Type: string`

The text to show.

## DeathEventData

An event marking someone's death.

### Properties

#### Kind

`Type: "DeathRoundEvent"`

Always set to "DeathRoundEvent". Used to differentiate between classes.

#### Victim

`Type: Participant`

The participant who died.

## CorpseSearchedEventData

An event marking a corpse being searched.

### Properties

#### Kind

`Type: "CorpseSearchedRoundEvent"`

Always set to "CorpseSearchedRoundEvent". Used to differentiate between classes.

#### Victim

`Type: Participant`

The participant of the corpse being searched.

#### SearchedBy

`Type: Participant`

The participant who searched the corpse.

#### FoundCredits

`Type: number?`

The amount of credits stolen from the corpse. `nil` if no credits were stolen.

## DeathConfirmedEventData

An event marking a death being confirmed.

### Properties

#### Kind

`Type: "DeathConfirmedRoundEvent"`

Always set to "DeathConfirmedRoundEvent". Used to differentiate between classes.

#### Victim

`Type: Participant`

The participant who died.

#### ConfirmedBy

`Type: Participant`

The participant who confirmed the death.

## StartRoundEventData

An event marking the start of a round.

### Properties

#### Kind

`Type: "StartRoundEvent"`

Always set to "StartRoundEvent". Used to differentiate between classes.

## EndRoundEventData

An event marking the end of a round.

### Properties

#### Kind

`Type: "EndRoundEvent"`

Always set to "EndRoundEvent". Used to differentiate between classes.

#### VictoryText

`Type: string?`

The victory text.