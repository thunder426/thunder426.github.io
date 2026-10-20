# Changelog

## 0.5.0

- **Hide icons in capital cities** (setting, off by default): no nameplate icons in Stormwind, Ironforge, Darnassus, Orgrimmar, Thunder Bluff and Undercity, where crowds would fill your screen with them. Your hotkeys and the "Needs:" tooltip line still work there.

## 0.4.0

- **Paladins**: Salvation now goes on beside your other blessing, as Forever allows, so it's no longer one of a class's picks. Each class has a **Salvation switch** at the end of its row instead, on by default for classes that don't tank. Your own Salvation no longer stops you giving another blessing, and with your own blessing up a player can still show a Salvation icon. The blessing order now has four slots. Your saved order carries over: a class whose order had Salvation gets the switch on.
- **Salvation is for your group only**, as on Forever: players outside your party or raid get no Salvation icon, and the Salvation key tells you they aren't in your group.
- **Simplified and Traditional Chinese**: the settings window, messages, tooltips and the addon list follow your game client's language.

## 0.3.0

- **Icon glow**: the nameplate icon of the player you're hovering glows, so you can see who your key will buff.
- **Hover an icon to buff**: hover a buff icon over a nameplate and press your key. **Next missing buff** gives that player that icon's buff. Clicks on an icon still go through to the world. Out of combat only.
- **Click icons to cast** (setting, off by default): a hovered nameplate icon grows, and a left click gives that player that buff. Out of combat only.
- Unless the player under an icon is your target, your focus or in your group, a click or key press on their icon targets them for the cast and then puts your old target back. The game doesn't let addons cast on a player through their nameplate.
- `/lmby debug` prints what the addon is doing in chat, for bug reports.

## 0.2.0

- **Paladins**: up to five blessings per class instead of two, in priority order. You give the first one no other Paladin has given yet. New defaults add Light, and Salvation for classes that don't tank.

## 0.1.0

First release.

- **Hover-cast keys**: one key per buff, plus a **Next missing buff** key. Hover a player (in the world, on a nameplate or a unit frame) and press it; with nothing under the mouse it buffs your friendly target, then you.
- **Rank for the player's level**, so low-level players get a rank they can take.
- **Nameplate icons** over friendly players for each buff you can still give them, and a "Needs:" line on their tooltip. Someone else's equal or stronger buff counts as covered, including group, NPC and item versions; a weaker rank still counts as missing.
- **Paladins**: a first and second blessing for each class, and no icon while your own blessing is up.
- Skips PvP-flagged players while you aren't flagged, and Intellect and Spirit for classes without mana.
- Optional: group versions on your own group, treating buffs about to run out as missing.
- Settings with `/lmby`, the minimap button (drag it to move it) or the addon menu by the minimap.
