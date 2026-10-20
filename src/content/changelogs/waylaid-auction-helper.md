# Changelog

## 0.5.0

Craftsman's Writs: the cheapest way to your trade faction's next standing.

- A **Reputation** tab in the window plans reputation with your side's trade faction (Azeroth Commerce Authority or Durotar Supply and Logistics). Pick the standing to reach (click: the next one, right-click: the one before), press **Scan**, and it lists the cheapest Craftsman's Writs to do today, each with the item it wants, such as 200 Crafted Solid Shot. Writs and items in your bags and mail count as free, and writs you did today are left out.
- The tracker has **Crates** and **Writs** tabs. On Writs, its **Use** button opens the next writ whose item you hold so you can accept its delivery, and it lists the writs you did today until the daily reset.
- Writ tooltips, wherever a writ shows (bags, the auction house, chat links): what it wants, how many you have, the reputation it pays, what the rest costs on the auction house and whether you did it today. The item a writ wants names its writ, and a sealed writ such as Sealed Journeyman's Writ says what it opens into and how many writs of its rank you did today.
- Turning in a writ records the reputation you actually got, so a reputation bonus shows up in the plan.
- Clicking a Buy line opens the buy frame reliably: it waits while the auction house is busy and refreshes the listings if they don't come.
- Buy lines show the price each when it doesn't climb, and one unit just its price, instead of always a "max" price.
- Scans skip the materials of crates nobody sells and you don't have.
- The checkboxes no longer run into the Scan button in Chinese.

## 0.4.1

- A **Minimap button** checkbox in the window hides the minimap button. The tracker and the window are still in the minimap's addon menu (click: tracker, right-click: window), and `/wh` opens the window.

## 0.4.0

A tracker for after the auction house.

- After a scan, a small tracker follows your progress once you leave the auction house: what is still to buy, what waits in the mail, the crates you can fill and the Sealed Crates to turn in.
- A **Fill** button on the tracker fills the next crate with a bundle from your bags, one click per crate.
- What you buy counts as soon as you buy it: the plan ticks it off as in the mail instead of telling you to buy it again.
- What you have is ticked in the plan, green in your bags and gold in the mail, in a shorter line that no longer gets cut off.
- Close the tracker with its X until you next leave the auction house, or turn it off with the **Tracker** checkbox in the window.
- A minimap button: click it to show or hide the tracker at any time, right-click it for the window, drag it to move it. The tracker is also in the minimap's addon menu.

## 0.3.0

Traditional Chinese, and buying straight from the plan.

- Traditional Chinese (繁體中文) on a Traditional Chinese client, with the game's own item names and terms (商人貢獻點, 遭攔截的木箱).
- Clicking a Buy line opens the auction house's buy frame with the plan's quantity already filled in.
- `/wh` only opens and closes the window; everything else is in the window. The language follows the game client, and the window always opens beside the auction house.
- Favor per Sealed Crate can no longer be set by hand. Turning one in still updates it.

## 0.2.0

A cleaner window.

- A bar shows your favor toward the goal: what you have, what your Sealed Crates add and what the cheapest plan adds.
- The Scan button stands out when it's ready, fills up as a scan runs and shows how old the prices are.
- Checkboxes for using bag items and for crates at your level.
- Money shows with gold, silver and copper icons, as in the auction house.
- The plan lists its columns and ends in a Total line; cost per favor sits in the same column for the plan and for each crate on its own.
- Lines to buy are marked in gold, and crate names show their quality color.
- A scrollbar for the list, which now fills the auction house's height when the window opens beside it.
- New title bar with the addon's logo and a flat close button.
- Chinese text no longer crowds the list.

## 0.1.0

First release.

- **Scan** the auction house for Waylaid Crates and every material that fills them. A couple of batched searches price everything at once, then the addon searches full listings only for what the cheapest plan uses, so a scan takes a few seconds.
- **Plan**: the cheapest mix of crates and bundles that reaches your Merchant's Favor goal, one line per thing to buy with its quantity, the highest unit price you'll pay and the total. Click a line to open that item in the auction house.
- Your current favor, Sealed Crates in your bags, and crates and materials you already carry count toward the goal (a button in the window turns this off).
- Every crate type listed by its cost per favor, including crates nobody is selling.
- Learns the real favor per Sealed Crate when you turn one in, filling in the Expert and Artisan values and any favor bonus you have.
- English and Simplified Chinese, following the game client.
