---
title: Commands
---

See also: [Loading Your Map Or Gamemode](/Traitor-Docs/guides/loading-your-asset).

When you are an admin or the host of a Labs server, you gain access to a console that can be used to run certain commands (Labs hosts have access to all commands). You can open the console using the `` ` `` (backtick) key by default. Admins and hosts may also provide limited console access to other players using the `relax` command, which lasts until they disconnect or the server shuts down.

:::caution

There is no way to "unrelax" a player once you have given them relaxed permissions.

:::

To see a list of commands, use `help`.

Command parameters are case-sensitive.

Commands are run in the format:

```
command parameter1 parameter2; command2 parameter1 parameter2...
```

Multiple commands can be run sequentially by separating them with semi-colons. Note that client-side commands will always be run before server-side commands, so the following input:

```
pause; noclip
```

will activate noclip first (as noclip is a client-side command), and then pause the round.

Where a parameter is a player, you can use the following:
- player name
- starting characters of a player name
- `@a` - All players
- `@s` - Yourself
- `@r` - Random player
- `@o` - Other players, excluding yourself

:::note

Using the starting characters of a player name will return all players matching those characters, not just the first closest match.

:::

If your parameter needs to include a space, you should replace spaces with dashes. So, for example:

```bash
giveitem Seal-Gun
```

If your parameter needs to include a dash, you should make it not need a dash. Why would you add a dash in the name. Use the display name.