# Changelog

## 0.18.0

- **Bag upgrades**: every item in your bags that is an upgrade for your main spec gets a small green up arrow in its top right corner, bobbing gently. It marks exactly the items whose tooltip box turns green. It works in the game's own bags, in **EllesmereUI** bags (the bank too) and in **Baganator**, where you can move it to another corner under Icon Corners. Turn it off with the new **Bag upgrades** switch in **Settings**. With your main spec compared with **Worn + bags**, your bag items already count as gear you have, so none of them gets an arrow.
- **Item tooltips**: an upgrade's green box no longer flashes three times. It turns green and stays, and the arrow next to the gain still bobs.

## 0.17.0

- **Item tooltips**: when an item is an upgrade for your main spec, its box turns green and flashes three times, and the up arrow next to the gain bobs on a soft green glow. The main spec's box is laid out in two columns, icons under the spec icon and text under the spec name, so "#3 Main Hand" now sits with the rest of the text.
- **Weapons**: a better one-hander is an upgrade over the one you wear for every spec, including hunters, **Arms** and **Fury** warriors before Dual Wield, and **Retribution** paladins. A level 5 hunter holding an axe used to see "Not for Two-hander" on the Primitive Hatchet from **Vile Familiars**.
- **Weapon skills**: below level 10, only the weapon types your race and class start with count, plus any you've learned since. From level 10, every type your class can train counts (Polearms from 20). A level 5 Orc hunter's Primitive Walking Stick says **Usable at level 10** and isn't the quest's best pick until you learn Staves. Gear you can only use later shows its score and that level, with no gain.
- Gear none of your spec's setups uses is compared with what you wear in a setup your class can hold: a shield for an **Arms** warrior is a loss next to a two-hander and an upgrade next to a lone one-hander. Off-hand weapons say **Can't equip** for classes that never dual wield, and **Usable at level 20** (rogues 10) before Dual Wield.
- Miscellaneous weapons such as the Skinning Knife count for every class. A hunter's Skinning Knife used to say **Can't equip**.
- **Class and race limits** now come from the game itself, not from Wowhead, which copies a quest's limits onto its rewards: over 1,100 items lose a wrong limit. The Primitive Hand Blade and Primitive Walking Stick from **Vile Familiars** are no longer warlock only, and Alliance quest daggers no longer say **Other races only**. Quest rewards still follow the quest's own limits, so a warlock quest's reward is still only suggested to warlocks.
- **Quest rewards**: in a quest giver's window, the best pick's green outline and the upgrade mark in the right column are no longer cut off at the edge. Once you click the best pick, the game's gold highlight frames it instead of the green outline.
- The item count and data date in the title bar moved into a bubble that shows when you hover the title.

## 0.16.0

- **Equip best**: a new button on the **My gear** title bar puts on the best of what you carry for your main spec, in every slot where it beats what you wear (not in combat). Hover it to see each swap with its gain, a two-hander that needs a free bag slot first, and upgrades left out because they bind when equipped. Trinkets are left alone.
- **My gear**: when what you wear beats the Equipment Manager set your main spec is compared with, the title bar says **Better than** and the set's name, with a **Save** button that saves your gear to the set (slots the set ignores stay ignored). It used to say **Not wearing** and offer **Wear**, which undid Equip best. Right after Equip best, a question under Save offers to save straight away.
- **Item tooltips**: an off spec's row now says **Best you have**, **In** and the set's name, or **Equipped** when the item is already part of its gear, instead of showing a green check mark.
- **Stat weights** now assume the gear a normal player has at each level: quest rewards, dungeon drops with a 10% or better chance, and your class's own armor crafts, instead of the very best item for each slot. Casters and hybrids low on mana cast cheaper spells instead of stopping to drink when that's faster. The biggest changes:
  - Stamina is worth much more at levels 1–9 for melee classes and hunters.
  - Hit counts again at level 60 for **Retribution**, **Enhancement**, **Arms** and hunters. The old model assumed you were already at the hit cap.
  - Intellect is worth more for low-level healers, most of all for **Holy** paladins and **Restoration** shamans at levels 1–9.
- **My gear**: a best-in-slot row's glow pulses three times when a new best-in-slot item goes on, then stays lit instead of pulsing all the time. The tier color fades out before the item name, so blue item names are easy to read.
- **Best in slot**: section headers are white, so they no longer look like the item and quest names under them. **Equipped** marks best-in-slot items in orange by the same rule as My gear (within 3% of the best).
- New look: the window's close button is a flat cross that lights up in your accent color. **My gear**, **Stat weights** and **Settings** stay lit while their panel is open, and the panels beside the window share its title band. The Stat weights boxes are flat, with the weights right-aligned.
- Less text: the Equipped header is just "Equipped" and quest rows drop "Quest:". **Dungeon loot** has no column headers, so the list shows one more line. In its Quests view, "in your quest log" is now "in log", the faction shows only on the other faction's quests, and your quests without gear rewards fold behind one line. **Crafting patterns** drops the pattern counts on its headers and the "Showing x of y patterns" line.
- Fixed a Lua error ("a secret number value") when hovering a bag item in a dungeon or in combat.

## 0.15.1

- **Rogues** can use one-handed axes. The addon used to mark them **can't use**, so they never showed up in a rogue's **Best in slot** lists, item tooltips or quest reward marks. Two-handed axes are still for warriors, paladins, hunters and shamans only.

## 0.15.0

- **Compare with**: choose what each spec's items are compared with, in Settings' **Specs** box: **Worn**, **Worn + bags** (the best of what you wear and carry for that spec), or one of your **Equipment Manager** sets, such as a tank set for **Protection**. Your main spec is compared with what you wear by default. An off spec gets its own **Compare with** under its switch while it's on, Worn + bags by default.
- **Item tooltips**: each off spec now shows its gain or loss over its own gear before its score, or a check mark when the item is already part of it. When the item is in the gear your main spec is compared with, its line says **Best you have** or **In** and the set's name.
- A set's items are read wherever the Equipment Manager keeps them: worn or in your bags, random suffixes such as "of the Bear" included, or in the bank. A slot the set ignores keeps what you wear.
- **Quest rewards**: the upgrade marks and the best pick follow each spec's choice too.
- **My gear**: when your main spec is compared with a set you aren't wearing, the panel's title bar says **Not wearing** and the set's name (hover it to see which slots differ), with a **Wear** button that puts the set on (not in combat).
- **Settings**: **Show top** and **Armor type** are grouped in a **Filters** box, and Scale, Background, Accent color, Font and Text size in a **Display** box. Both fold up to their titles and stay the way you leave them. Clicking a Best in slot section header opens Settings with Filters unfolded.
- Traditional Chinese names of Ebon Shiv, Radiant Circlet and Imperial Plate Chest now match the game.
- **Reset to defaults** now redraws the window's lists right away.

## 0.14.0

- **Quest rewards** are marked in the game's own quest windows: when a quest giver offers a quest or you turn it in, in the quest log, and in the map's quest details. A reward that is an upgrade for your main spec, a choice or an item you always get, shows a mark in its top right corner: the green up arrow from item tooltips rises and fades, then your spec's icon shows.
- The **best pick** among a quest's reward choices, the biggest upgrade, gets a green outline, and its tooltip says so. When no choice is an upgrade for any of your specs, the one that sells to a vendor for the most is marked in gold, with a coin.
- **Off-spec upgrades**: when no reward is an upgrade for your main spec, your off specs are checked, each against the best you wear and carry in your bags for that spec, and their upgrades get the same mark with the off spec's icon. The marks update when your bags change.
- The quest log's list on the map shows the same mark after the title of each quest with an upgrade among its rewards.
- **Settings**: **Main spec** and **Off spec** sit in a **Specs** box of their own, since item tooltips and quest rewards both go by them, and it shows even with item tooltips off. Under it are switches for **Item tooltips**, **Quest rewards** and **Off-spec upgrades**, all on by default.
- Item tooltips: with nothing in your off hand, an off-hand item's gain is now just its own score; it used to add your main hand's too.

## 0.13.3

- **Item tooltips** look cleaner: the Forever Leveling BiS block sits on a faint orange band, its title starts at the left edge, and it now comes after other addons' lines, such as Baganator's item counts and Auctionator's prices, instead of in the middle of them. In the window, an item's sources start a little below the block.
- **Settings**: the item tooltip settings are grouped in a box of their own, with an on/off switch in its title instead of the Show score / Hide buttons. Turned off, the box folds up to its title.
- New **Font** setting, shown when you use EllesmereUI or ElvUI: **UI font** (the default) uses that addon's font and changes as soon as you change it there; **Blizzard font** uses the game's own. Hover a choice to see which font it is.
- Hover tips in the window all look alike: the same text size, wrapping onto a second line instead of shrinking, on a lightly tinted background so they stand out from the text around them.

## 0.13.2

- Item data updated for the October 16 beta build:
  - Encroacher's Claim, Pathfinder's Clearway and Traveler's Shawl are rare again, with more stats, and Keen Skinning Knife, Wildgore Greatsword and Walton's Second-Favorite Gun rise to item level 19–20.
  - The Protector's Chain set has less defense and Crusader's Chain Leggings less Strength. Bold Dirk and Runecloth Cuffs drop to item level 57 (level 52 to wear), and Crystal Thread Cloak, Pelt Pants and Replica Crescent Necklace lose a few item levels. Farmer's Shovel is now uncommon.
- New quest rewards: the eight thrown knives this build added as reward choices, such as Footman's Pocketknife (Riverpaw Gnoll Bounty), Dragonmaw Skinflayer (Defeat Nek'rosh), Yeti Skinner (Bartolo's Yeti Fur Cloak) and Goblin Switchblade (Venture Company Mining). Some older rewards that were missing are listed too, such as Mark of the Champion, Cenarion Reservist's Pants, Moonsight Rifle and Precision Bow.
- Quest rewards now follow the game's own quest data: Enchanted Moonstalker Cloak is gone (A Lost Master only hands it to you to deliver), and so are the old rewards of Wildmane Cleansing and Meddlesome Mages.
- Wand damage matches the game (Dancing Flame, Sizzle Stick), and quest rewards the game lets you wear at any level no longer wait for an old level requirement: Crystal Thread Cloak shows from level 26 instead of 30.

## 0.13.1

- **Stat weights** follow the WoW: Forever beta builds of October 8 and 15: the Seal of Righteousness, Judgement, Consecration and Champion of the Light fixes, the Arcane Blast and Fire Power redesigns, the new Elemental and Shadow talents, hunter pets using your crit chance, and the new rage rules. The specs that changed most:
  - **Retribution** paladin: Intellect is worth about a third of what it was at levels 40–44 and half at 60, and Holy spell damage a third less at 40–44.
  - **Bear** druid: Swipe now scales with attack power, so Strength and attack power gain on everything else; Stamina, Agility and dodge count 15–50% less next to them.
  - **Beast Mastery** hunter: crit is worth almost twice as much from level 40, since your pet now crits at your crit chance. **Marksmanship** and **Survival** crit go up 10–25%.
  - **Protection** paladin: from level 40, Stamina and dodge are worth 20–40% more and Intellect less.
  - **Shadow** priest: Spirit and mana per 5 sec are worth a quarter to a third less (shorter Devouring Plague and Vampiric Embrace cooldowns), Spirit less than half at 60; Stamina no longer counts from level 40.
  - **Affliction** warlock: hit is worth almost nothing from level 20, as the hit talent now comes earlier.
  - **Arcane** mage: Intellect is worth 2–3 times as much at levels 30–54 (Arcane Blast and Arcane Wrath turn it into spell damage).
- Humans, Orcs and Dwarves no longer get a bonus for swords, axes or maces: the October 15 build made those racials flat bonuses (Ruthless, Savage, Earth Fury), so they don't change which weapon is best.
- Healers value crit a little more: Rejuvenation, Wild Growth, Renew and Riptide can now crit on every tick.

## 0.13.0

- **繁體中文**: on a Traditional Chinese (zhTW) client the window, item tooltips and quest panel are now in Traditional Chinese, with Taiwan's terms. Item and quest names are the zhTW client's own; NPC and object names are converted from Simplified Chinese.
- **Item tooltips**: your main spec and your other specs each sit in a framed box of their own, instead of under an "Other specs" heading. With EllesmereUI, the block's text no longer turns smaller partway down.
- Quest requirements now come from the game's own quest data (October 15 beta build). Race limits follow the game: Windshaper Skyborne now get Horde quests such as Compendium of the Fallen, and several racial starting-area quests are open to every race of their faction. 24 quests above the beta's level cap, such as Valley of Bones and Greater Friend of the Library, need level 35 (they were listed at 30). The centaur clan quests in **Desolace** also show the reputation you lose with the rival clan.
- A Blizzard hotfix lowered six items, now listed with their new stats: Encroacher's Claim, Pathfinder's Clearway and Traveler's Shawl are uncommon, and Keen Skinning Knife, Wildgore Greatsword and Walton's Second-Favorite Gun are item level 18. New **Uldaman** drops: Rockshard Pauldrons (Ancient Stone Keeper) and Grimlok's Charge (Grimlok).
- More quest chains: Klockmort's Essentials leads into Essential Artificials, and Castpipe's Task into Data Rescue.
- Map pins for Shylamiir and High Sorcerer Andromath point at where they stand in **Stormwind**.

## 0.12.0

- **Item tooltips** anywhere in the game, and in the window, now end with a Forever Leveling BiS block: a row per spec with a bar for how close the item comes to the best for its slot, the spec's icon and its score. For your main spec it also shows the gain or loss over what you wear and the item's rank. Weapons are judged in the weapon setup of each spec that uses them, and gear you can't use says why (Can't equip, Other classes only, Needs a profession skill). Turn it on or off under **Item tooltips** in **Settings**, and pick the specs it scores with **Main spec** and **Off spec**.
- The **Auto** weapon setup is gone. Casters and healers get the best of their spec's setups, since their weights are the same; melee and **Enhancement** pick theirs under Weapons.
- Selectors show a small arrow instead of arrow buttons, number boxes say "Scroll to change" when you hover them, and the Talent spec box shows each spec's icon. Talent spec, Weapons and Race no longer have explanation tooltips.
- Quest XP, money, levels and rewards are now read from the game (October 12 beta build). Many dungeon quests give about twice the XP listed before, such as The Defias Brotherhood (6,200), The Stockade Riots (4,950) and Crime and Punishment (4,400), and Chol'aruk the Ravener pays 50 silver.
- Gear from dungeons that aren't open on the beta yet is hidden until they open: **Blackrock Depths**, **Maraudon**, **Zul'Farrak**, **Stratholme**, **The Temple of Atal'Hakkar**, **Scholomance** and a few items from **Razorfen Downs**, the **Scarlet Monastery Cathedral** and **Blackrock Spire**. New drops: Triune Amulet (High Inquisitor Whitemane) and Nordic Longshank (Baelog, **Uldaman**).
- Chinese clients: about 200 item names and 180 quest names that showed in English at first now show in Chinese right away.

## 0.11.0

- New **Settings** panel: the **Settings** button in the title bar (or `/bis settings`) opens it beside the window. Change the window's **Scale** (on top of the game's UI scale), its **Background** opacity, the **Accent color** of selected tabs, rows and buttons (gold or your class's color) and the **Text size**. Text in the window is now a point smaller than the game's by default, since the rows were cramped (Smaller, Small, Normal or Large; on a Chinese client every choice is one point smaller still). **Reset position** brings the window back to the top center, **Reset to defaults** clears everything. Saved for all characters.
- **Show top** and the **Armor type** switch moved from the window into Settings. Armor type: Class type now applies on every tab, Dungeon loot included. The top row has more room, with a wider Weapons box. Best in slot section headers read "top 5 of 15 usable" when a source has more items than it shows; hover one to see why, click it to open Settings.
- **My gear** has a header, level with the window's top: your character's name, level, race and class, a bar for how close your worn gear is to the best item for every slot at your level, and a legend of the row colors (BiS, 85%+, 50%+). Hover the bar or legend for the scores and how many slots have each color.
- The "vs worn" column shows a grey **0.0** for the item you wear and for an item that scores the same as yours, instead of "0" and "=".
- **Excavation Site: Wetlands**: Pick up before you go no longer lists quests you can't take before going in. Heartwoven and Fallen in the Fen are given inside the dungeon, and Prehistoric Prism and Earthen Echo only for the Titan Relic the Relic Guardian drops. Seeking Caitlin is now the optional first step of Lost in the Thicket Things, so Pin giver points at Caitlin Grassman, not Llana in Ashenvale; the quest panel marks it "(optional)". Chain steps you've already passed are no longer offered, so a skipped breadcrumb such as Dragonmaw Rumors drops off once you've taken Open the Maw.
- Stat weights: hit, crit, haste, armor penetration, dodge, parry and block rating are no longer listed, since no WoW: Forever item has them.
- Chinese clients: the reward line of quest tooltips no longer starts with two boxes ("从" was garbled).
- While planning another class, its spec no longer shows in orange as "not picked yet".

## 0.10.0

- Best in slot: the gear you wear now counts as yours. A worn item ranks in its slot's list even when the addon doesn't list it as a quest, dungeon or crafted item (vendor and world-drop gear, bind-on-equip items, a quest reward you took early), so it can be the slot's best. Look-ahead upgrades, Auto weapon setup and the ranks on the Dungeon loot tab and in the quest panel are measured against it, and a worn item is never shown as an upgrade. The Quest, Dungeon and Crafted lists still only show what each source offers. Worn weapons count only for the hand they're in. This only applies while planning your own class.
- **Uldaman**: Baelog, Eric "The Swift", Olaf and Galgann Firehammer now have their loot (Baelog's Shortbow, Horned Viking Helmet, Battered Viking Shield, Flameseer Mantle), and Ironaya and the Ancient Stone Keeper drop Ironshod Bludgeon and Cragfists. **Razorfen Kraul**: Roogug drops Thornweaver Drape, Geomancer Headdress and Roogug's Severed Head. **The Stockade**: Dextren Ward drops Graverobber's Shovel, Boneslicer and Nightskulker Ring. **Ruins of Lordaeron**: Stone Watcher drops Rotmender's Gloves, and the trash drops Sword of the Fallen, Rotmender's Garb, Rotmender's Sash and Death Bindings. Herod in the Scarlet Monastery Armory drops Herod's Shoulder.
- New quest rewards, such as Truthseeker's Bow and Crest of Elucidation (Greater Friend of the Library), Well-Weathered Cloak (Terror of the Desert Skies), Soldier's Visor (No Honor Among Thieves), Quilboar Blaster (The Crone of the Kraul), Medal of Courage and Larcenist's Belt.
- Item data checked against the October 9 beta build: Talvash's Gold Ring, Nogg's Gold Ring, Outlaw Sabre, Witch's Finger and Dreamer's Chestguard are rare again, with higher stats. 16 Desolace quest rewards, such as Centaur Spear and Ceremonial Centaur Blanket, need level 35 (they were listed at 1 or 30). The level 60 Spiritcaller and Glory pieces are for shamans and warriors only.
- Excavator's Brand, Spirewind Fetter and Lodestone Hoop are no longer listed as boss loot. They're world drops that bosses drop only rarely.
- The window updates when you accept, turn in or abandon a quest, so quest progress and "Pick up before you go" stay current.
- A level you preview ahead is cleared once your character reaches it.
- Best in slot sections scroll when they're taller than the screen (top 10 with look ahead).
- My gear, Stat weights and the quest panel no longer open on top of each other or off screen: a panel without room flips to the other side of the window.
- The Dungeon loot tab picks the dungeon for your level again when your level changes. A dungeon you picked stays until then.
- The quest panel and My gear no longer keep waiting on an item the server never sends.

## 0.9.0

- **Enhancement** shamans: stat weights from level 20 assumed you dual wield, which shamans can't do on WoW: Forever. Weapon DPS on a two-hander was undervalued by about 30%. Enhancement now has weights for each weapon setup: **Two-hander** (played with Windfury from 30) and **1H + shield** (played with Flametongue), which values spell damage, fire power and Intellect more. Pick one under Weapons, or Auto to use whichever gears you better. The Weapons box shows the icon of the imbue the weights assume for your level (Rockbiter, Windfury or Flametongue), and its list, tooltip and the Stat weights panel name it.
- With a two-hander, Enhancement now values spell damage 25–35% less from level 30 on. The weights no longer assume that every mob you fight hits you in melee and triggers Lightning Shield: about 30% of mobs are casters or ranged. Dungeons also count for 30%, since the tank takes the hits there.
- Dungeon loot and Crafting patterns tabs: a calmer look. Rows no longer get green or blue backgrounds. Green now only means a gain, shown as **+X.X** in the score column. An item you wear has a green tick before its name, on the Best in slot tab too, and its **0** is grey. Gear you can't use no longer says "can't use", "not class armor" or "quest not open" in the rank column. It's left blank, or shows a grey **lvl N** when you can use it later, and the reason is in its tooltip. Such gear now keeps its quality color, dimmed, instead of turning grey. Headers that fold use a flat plus and minus instead of the game's beveled buttons. Boss and quest headers no longer count upgrades or usable items or say "nothing for you" on the right. A boss or quest with nothing for you is greyed out. Ranks are white in your top list and grey below it. Boss, quest and section headers all use one plain gold style with a faint underline, without the blue, gold or green markers.
- Dungeon loot tab, Quests view: the other faction's quests are hidden, even with All loot. A **Show Horde quests (N)** line (or Alliance) at the end of the list shows them below it, with all their rewards. They're hidden again the next time you log in.
- Quest panel: the title no longer leaves an empty space on the left. That space is for the back button, which only shows after you open one quest from another.

## 0.8.0

- **City of Dalaran** now has its boss loot: 24 drops from Arcane Anomaly, Fel Ancient, Mana Devourer, Arcanic Enigma, Unstable Sentinel, Shade of the Archmage, Lyn the Ignored and Atrexis the Grave Knight. It only listed its quest rewards before. Mana Wraith's loot isn't known yet.
- Updated for the October 8 beta build, which lowered many dungeon quest rewards from rare to uncommon, with lower stats, armor and weapon damage. About 85 of them changed, such as Ambassador's Boots, Darkshire Mail Leggings, Prospector Gloves, Hornbeam Heft and Daewyn's Girdle. Scholarly Robes went the other way, to rare.
- Item stats are now checked against the game itself, since Wowhead's data still has the old values for many items. About 350 items changed, including mana per 5 seconds on 116 items (such as Leech Pants), ranged attack power on rifles and bows, shield block value, and the "reduces chance to be dodged or parried" effect on some weapons. These are now counted in the rankings.
- "Mage-Eye" Blunderbuss is no longer listed as a reward of The Crone of the Kraul, which no longer gives it. 13 items that aren't in WoW: Forever, such as Invoker's Mantle and Mark of the Champion, are no longer listed.

## 0.7.0

- Protection and healer specs have one profile again. **Protection** replaces Prot (Dungeon) and Prot (Solo): the two valued Stamina too differently (above everything for dungeons, close to nothing solo), so Protection's weights are now the average of both. **Holy**, **Discipline** and **Restoration** replace Heal and Solo and use the healing weights. A character that had a Solo profile picked switches to its spec.

## 0.6.1

- Chinese client: 85 quests, mostly from the new Forever dungeons such as Excavation Site: Wetlands, showed as "未知" (Unknown). They now show the game's own Chinese title, or the English name where the game has none. Wowhead has no Chinese name for them yet.

## 0.6.0

- World drops are no longer listed as dungeon trash drops. 66 bind-on-equip items that only turn up in a dungeon now and then, such as Vendetta, Night Reaver and Headsplitter, are left out. The dungeons' own bind-on-equip trash drops (the Deadmines Defias gear, the Scarlet set, the Tier 0 belts and bracers) stay, marked **(BoE)** after their source. Drop chances are no longer shown next to sources.
- Dungeon loot tab, Bosses and Quests views: fewer columns. The slot (or weapon type) now comes first, as in the Summary, and the Type and Req columns are gone: an item above your level already says "lvl N" or "level too high". The rank column shows just the rank ("#3"); hover an item for the full ranking. Item names get more room.
- Dungeon loot tab, Bosses and Quests views: each boss and quest header now has a colored marker and underline, as on the Crafting patterns tab (blue for bosses, gold for quests; faded when it has nothing for you), and a small gap above it, so it's clear which items belong to it. Row striping restarts under each header.
- An item you already wear now shows **0** in the vs worn column instead of "worn", which didn't fit in Chinese (已装备). The quest panel still says worn.
- Forever's crafted Leather Helms (Brawler's, Defender's and four others) are no longer listed as loot of Gelihast, Kam Deepfury and other bosses. Those bosses drop the patterns, not the helms.

- Gear with "+1% chance to hit" or "+1% critical strike chance" (such as Frost Tiger Blade) is now ranked with its hit and crit. On Forever these are flat percentages, and the addon's data had dropped them from 115 hit and 141 crit items. Shield block, dodge and parry chance (45 items) are counted too, for tanks. Hovering an item shows what these percentages add to its score, and the Stat weights panel has a **+1% hit** weight next to **+1% crit** (which now covers item crit as well as racial weapon crit), plus **+1% dodge**, **+1% parry** and **+1% block**.

## 0.5.1

- Gnomeregan: Data Rescue and Essential Artificials are no longer shown as the second step of a chain. Take them straight from Master Mechanic Castpipe and Klockmort Spannerspan in Ironforge. Their lead-in quests (Castpipe's Task, Klockmort's Essentials), the Sparklematic 5200 turn-ins, Grime-Encrusted Ring and Return of the Ring are no longer listed with the dungeon.
- Dungeon loot tab: the Summary's quests to pick up before you go no longer list quests you accept inside the dungeon, such as A Fine Mess (Gnomeregan) or Blackfathom Villainy. For a chain it shows your latest step still to pick up outside, so Blackfathom Deeps now lists In Search of Thaelrid. These quests and their gear still show in the Quests view.
- Quests in your quest log are now marked in purple instead of gold, which marks Neutral quests.

## 0.5.0

- **Simplified Chinese**: the addon now follows the game's text language. On a Chinese (zhCN) client the whole window is in Chinese: tabs, buttons, tooltips, chat messages, slots, stats and specs, plus the names of items, quests, NPCs, bosses, zones and dungeons, factions, racial traits and spells. Every other client gets English, as before.
- Map pins now work on non-English clients: zones are matched to the game's maps by their name in the game's language. They used to need an English client.
- Quest panel Wowhead links point to Wowhead's Chinese site on a Chinese client.
- Crafting patterns: the Waylaid Supplies vendor header no longer names the vendor and its zone. Hover a pattern to see them.
- Stat weights panel: removed the help line above the weights.
- Wailing Caverns no longer lists Waking Naralex and When Dreams Turn to Nightmares.
- The Fury Runs Deep (The Stockade) is now a chain after its Wetlands prerequisite, The Dark Iron War, and its rewards are suggested from level 25, the prerequisite's required level, instead of 24.
- Quests open to both factions are now marked **Neutral** (on the Dungeon loot tab, in quest tooltips and in the quest panel), as are quests the data gives no faction, which were unmarked.

## 0.4.0

- New **Crafting patterns** tab: pick a profession on the left (it opens on yours; the list shows your skill and how many patterns make an upgrade for you) to see its patterns for rare and epic gear, grouped by how to learn them. **Waylaid Supplies vendor** patterns show their Merchant's Favor price and your faction's vendor, **Trainer** patterns their training cost, and **Dungeon drops** sit under a header per dungeon with the boss (or trash) that drops them; click a dungeon header to open it on the Dungeon loot tab. Each pattern shows the skill it needs (green once you have it, red until then) and its item's rank and gain for you. Hover a pattern for every way to learn it. The **Filters** box under the professions has **Show** and **Slot**: by default the tab lists only gear you can use at your level (your profession skill doesn't matter), **All patterns** lists the rest greyed out, and a slot chip narrows the list to one slot. Patterns learned only some other way (other vendors, world drops, quests, raids) aren't listed.
- Dungeon loot tab: the Quests view and the Summary's quests to pick up now list every quest of the dungeon, not only the ones with a gear reward: your faction's first, then those for both factions, then the other faction's, lowest level first in each. A quest chain shows once, under its quest with gear (or its last step there), with the gear of all its steps; hovering it or **Pin giver** still leads to your next step. Quests offered in several versions of the same name (repeatable turn-ins) also show once. A quest you've completed or have in your quest log now says so even when its gear has nothing for you. Quests Wowhead hasn't confirmed in Forever (such as The Heart of the Void) are left out, here and as a source of gear: 10 items only such quests rewarded are no longer ranked. Quests without gear say "no gear reward" (or "no ranked gear" when they reward items the addon doesn't rank); hover or click them for their quest giver, chain and other rewards as usual. In Scarlet Monastery and Blackrock Spire, quests the addon can't place in one wing show in every wing.
- Quest rewards Forever lowered from rare to uncommon (Tarnished Locket and 20 others, mostly from Hall of Thanes, Ragefire Chasm, The Deadmines and Ruins of Lordaeron) now show as uncommon with their lowered stats; they were ranked with their old, higher stats. The Ruins of Lordaeron rewards whose stats were cut are fixed too. Item names now take their color from the game once it has the item, so a quality change shows even before the addon's data catches up.

## 0.3.0

- Arms Warrior now starts from the same stat weights as Fury. Weights you edited in the window are kept.
- Dungeon loot tab redesign. Each dungeon opens on a new **Summary**: its best upgrade per slot over what you wear (biggest gain first, one choice per quest), every dungeon quest you haven't picked up or completed yet with a **Pin giver** button, and look-ahead upgrades coming up. Boss drops and quest rewards now have their own **Bosses** and **Quests** views instead of one long list.
- Bosses view: each boss header shows its upgrades for you and folds on click. Trash drops and drop chances (too inaccurate to go by) are no longer shown on the Dungeon loot tab. Items show their gain over your worn gear, and upgrades are tinted green. Quests view: the best pick of each quest's choices is tinted, and a quest's completed / in your log state shows on its header.
- The confusing "Showing: all loot / usable only" button is now a **Show: For me / All loot** switch with both options in view, and the Best in slot tab's armor button is now an **Armor: Class type / All types** switch the same way. For me also shrinks bosses and quests with nothing for you to one line.
- The dungeon list shows each dungeon's upgrade count and greys out dungeons outside your level range. The loot list has a scroll bar.
- Removed the status line under the selectors. An unpicked talent spec now shows in orange in the Talent spec box, Weapons shows the setup Auto picked ("Auto: Dual wield", hover for each setup's total), and a spec without stat weights says so in the Best in slot lists.

## 0.2.0

- Compare with your worn gear: the **My gear** button (top of the window) toggles a side panel listing what you wear in each slot, with its score. Hover an item for its tooltip; click a slot to open it on the Best in slot tab. On the Best in slot tab, the selected slot's worn items show above the lists, every ranked item shows its score against the item it would replace (for rings and trinkets, the weaker of the two), and slots where you already wear the best item get a check mark. Worn items that aren't in the addon's data (vendor gear, world drops) and random-suffix items ("of the Bear") are scored from the game's own item stats. Worn gear is scored and compared only while the window shows your own class.
- Quest rewards now respect the quest's own level requirement even when the item has none: class and profession quests no longer show up as usable before you can take them, and the Dungeon loot tab's Req column shows the quest's level for quest rewards.
- Look ahead now keeps your rankings at your current level and adds green upgrade rows under each source's list: the Quest, Dungeon and Crafted upgrades you can get within the next few levels, in the order they unlock, each with the level it unlocks at and how much it beats that source's best before it. Slots with an upgrade on the way show its level in the slot list, and the Dungeon loot tab marks these items too. Before, items above your level were mixed into the rankings with no way to tell them apart.
- Quest panel: click a quest name (gold, in the Quest list) or a quest header on the Dungeon loot tab to open a panel beside the window with the quest's level, faction, dungeon/elite type, class or race limits, zone and quest giver with coordinates; all its rewards (choose-one items ranked for you with their gain over your worn gear and the best pick highlighted, items you always get, spells learned, money, experience and reputation); and for a chain, every step in order with your progress (done, in quest log, next for you). Click a step to see that quest, right-click it to pin its quest giver. Buttons pin your next step or this quest's giver, and give Wowhead links for the quest and its quest giver to copy into your browser. Faction and class versions of a step are narrowed to the ones your profile can take.
- Hovering a quest name shows a short quest tooltip (level, faction, quest giver, chain step, rewards). The Dungeon loot tab now lists quest rewards under one header per quest, with the quest's faction at the right.
- Right-click a quest reward (or a quest header on the Dungeon loot tab) to pin the quest giver of your next step on the map: in a chain, the step after the last one you've completed or picked up. The pin is tracked, TomTom gets a waypoint too when installed, and the world map opens there.
- Class armor type toggle on the Best in slot tab: only lists your class's own armor type, e.g. mail for a warrior before 40 and plate from 40.
- Minimap button with the addon's own icon: click to open the window, drag to move it around the minimap.
- Dungeon loot now comes from Wowhead alone (it no longer uses wowtbc.gg), with Wowhead's drop chances. Some dungeons gain drops Wowhead lists, such as the dungeon set pieces in Stratholme and Scholomance.
- Removed the `/bis rank`, `/bis spec`, `/bis weapons`, `/bis reset` and `/bis info` commands; everything is in the window. `/bis` and `/flbis` still open it.

## 0.1.0

First public beta.

- Best item per slot for your race, class, talent spec and level, from quest rewards, dungeon drops and crafted gear.
- Top 1–10 items per source for each slot, each source ranked on its own, with an optional look-ahead of a few levels.
- Weapon setups (two-hander, dual wield, 1H + shield, 1H + held off-hand, or Auto).
- Stat weights you can edit per class and spec in game.
- Dungeon loot browser with drop chances, boss levels, and each item's rank for your profile.
- Preview another class, race, spec or level without logging in on that character.
- Opens with `/bis`, `/flbis`, or the addon compartment button by the minimap.
