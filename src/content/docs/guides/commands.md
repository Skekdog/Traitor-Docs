---
title: Commands
---

See also: [Loading Your Map Or Gamemode](/Traitor-Docs/guides/loading-your-asset).

When you are the host of a test place server (i.e, you were the first to join, or inherited it from the previous host), or are the host of a Labs server, you gain access to a console that can be used to run certain commands (Labs hosts have access to all commands). You can open the console using the `` ` `` (backtick) key by default.

Commands are case-sensitive, as are parameters. To see a list of commands, use `help`.

Commands are run in the format:

```bash
command parameter1 parameter2 parameter3 parameter4...
```

Where a parameter is a player, you can use the following:
- player name
- `@a` - All players
- `@s` - Yourself
- `@r` - Random player

If your parameter needs to include a space, you should replace spaces with dashes. So, for example:

```bash
giveitem Seal-Gun
```

If your parameter needs to include a dash, you should make it not need a dash. Why would you add a dash in the name. Use the display name.