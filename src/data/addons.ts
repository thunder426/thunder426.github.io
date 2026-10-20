import type { ImageMetadata } from 'astro';

import flbisLogo from '../assets/addons/forever-leveling-bis/logo.png';
import flbisMain from '../assets/addons/forever-leveling-bis/main.png';
import flbisDungeon from '../assets/addons/forever-leveling-bis/dungeon-summary.png';
import flbisCrafting from '../assets/addons/forever-leveling-bis/crafting.png';
import flbisQuest from '../assets/addons/forever-leveling-bis/quest.png';
import flbisTooltip from '../assets/addons/forever-leveling-bis/tooltip.png';

import wahLogo from '../assets/addons/waylaid-auction-helper/logo.png';
import wahMain from '../assets/addons/waylaid-auction-helper/main.png';
import wahWrits from '../assets/addons/waylaid-auction-helper/writs.png';
import wahTrackerCrates from '../assets/addons/waylaid-auction-helper/tracker-crates.png';
import wahTrackerWrits from '../assets/addons/waylaid-auction-helper/tracker-writs.png';

import lmbyLogo from '../assets/addons/let-me-buff-you/logo.png';
import lmbyOpenWorld from '../assets/addons/let-me-buff-you/openworld.png';
import lmbyOnHover from '../assets/addons/let-me-buff-you/onhover.png';
import lmbySettings from '../assets/addons/let-me-buff-you/settings.png';

export interface Shot {
  src: ImageMetadata;
  alt: string;
}

export interface FeatureGroup {
  title: string;
  // Inline Markdown: **bold** and `code`.
  items: string[];
}

export interface Addon {
  // URL path under /addons/, the changelog file name and the accent color key in global.css.
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  command: string;
  curseforge: string;
  logo: ImageMetadata;
  hero: Shot;
  gallery: Shot[];
  features: FeatureGroup[];
  gettingStarted: string[];
  notes: string[];
  feedback: string;
  credit?: string;
}

const curseforge = (slug: string) => `https://www.curseforge.com/wow/addons/${slug}`;

export const addons: Addon[] = [
  {
    slug: 'forever-leveling-bis',
    name: 'Forever Leveling BiS',
    tagline: 'The best gear for your level in WoW: Forever, and where to get it.',
    summary:
      'Quest rewards, dungeon drops and crafted items for every slot, ranked for your class, talent spec and level, and compared with the gear you wear.',
    command: '/bis',
    curseforge: curseforge('forever-leveling-bis'),
    logo: flbisLogo,
    hero: { src: flbisMain, alt: 'The Best in slot tab beside the My gear and Settings panels, for a level 30 Protection Paladin' },
    gallery: [
      { src: flbisDungeon, alt: 'Dungeon loot summary: upgrades now, quests to pick up before you go, and what is coming up' },
      { src: flbisCrafting, alt: 'Crafting patterns, with where to learn each one and the upgrades it makes' },
      { src: flbisQuest, alt: 'Quest panel with the quest giver, chain steps and the best reward highlighted' },
      { src: flbisTooltip, alt: 'Item tooltip showing the gain over worn gear for the main spec and each off spec' },
    ],
    features: [
      {
        title: 'Best in slot',
        items: [
          'The top quest, dungeon and crafted items for every slot, ranked separately',
          'The gain of each item over what you wear, and a check mark when you already wear the best',
          '**Equip best** puts on the best of what you carry in one click',
          'A green arrow on bag items that beat what you wear, in the game\'s bags, EllesmereUI and Baganator',
          '**Look ahead** shows upgrades unlocking over the next few levels',
          'Scores in every item tooltip, for your main and off spec',
        ],
      },
      {
        title: 'Dungeon loot',
        items: [
          'Every dungeon by level, with how many upgrades it has for you',
          'A summary per dungeon: upgrades now, quests to pick up before you go, what\'s coming up',
          'Boss drops and quest rewards ranked for you',
        ],
      },
      {
        title: 'Crafting patterns',
        items: [
          'Rare and epic patterns in Blacksmithing, Leatherworking, Tailoring, Engineering and Enchanting',
          'Where to learn each one, its cost and the skill it needs',
          'Which ones make an upgrade for you',
        ],
      },
      {
        title: 'Quests and map pins',
        items: [
          'Quest giver, coordinates, chain steps and your progress, with the best reward highlighted',
          'Upgrades marked in the game\'s own quest windows and quest log',
          'Right-click a reward to pin your next quest giver on the map (TomTom supported)',
        ],
      },
    ],
    gettingStarted: [
      'Type `/bis` or click the minimap button.',
      'Pick your **Talent spec** at the top. WoW: Forever can\'t detect it yet.',
      'Click a slot, and turn on **My gear** to compare with what you wear.',
    ],
    notes: [
      'Stat weights are estimates from a leveling model, and you can edit them in game.',
      'Some new Forever dungeons have no published loot tables yet. They\'ll come in updates.',
      'Crafting patterns from other vendors, world drops, quests and raids aren\'t listed.',
    ],
    feedback:
      'Spot a wrong ranking or a missing item? Leave a comment on CurseForge with your class, spec and level, and the item\'s name and where it comes from.',
    credit: 'Data from Wowhead\'s WoW: Forever database, checked against the game client.',
  },
  {
    slug: 'waylaid-auction-helper',
    name: 'Waylaid Auction Helper',
    tagline: 'The cheapest way to earn Merchant\'s Favor and trade reputation in WoW: Forever.',
    summary:
      'Scans the auction house for Waylaid Crates and the bundles that fill them, then tells you which crates to buy, which bundle to fill each one with and how many of each, for the lowest total gold. Its Reputation tab does the same for Craftsman\'s Writs.',
    command: '/wh',
    curseforge: curseforge('waylaid-auction-helper'),
    logo: wahLogo,
    hero: { src: wahMain, alt: 'The cheapest plan for 100 Merchant\'s Favor, beside the auction house' },
    gallery: [
      { src: wahWrits, alt: 'Reputation tab: the cheapest Craftsman\'s Writs to reach Friendly, each with the item it wants' },
      { src: wahTrackerCrates, alt: 'The tracker after shopping: everything is in your bags, with a button to fill the next crate' },
      { src: wahTrackerWrits, alt: 'The tracker\'s Writs tab, listing the writs still to do and the ones done today' },
    ],
    features: [
      {
        title: 'The cheapest plan',
        items: [
          'Every mix of crates and bundles compared. A green crafting crate pays double favor, but its bundle may cost more than two white crates\' worth',
          '**Real prices**: the 21st Copper Bar can cost more than the 20th, so each unit is charged at its listing price',
          'Your favor, your Sealed Crates and the crates and materials you carry count first',
          'Crates above your level are left out (**Only my level**)',
        ],
      },
      {
        title: 'Following the plan',
        items: [
          'A tracker goes from **buy** to **collect your mail** to **fill the crates** to **turn in**, and says "Goal reached" when you\'re done',
          'A **Fill** button fills the next crate from your bags, one click per crate',
          'Every crate type ranked by cost per favor, including crates nobody is selling right now',
        ],
      },
      {
        title: 'Reputation from writs',
        items: [
          'Plans reputation with Azeroth Commerce Authority or Durotar Supply and Logistics: pick the standing to reach and press **Scan**',
          'The cheapest Craftsman\'s Writs to do today, each with the item it wants',
          'Writ tooltips: what a writ wants, the reputation it pays and whether you did it today',
        ],
      },
    ],
    gettingStarted: [
      'Open the auction house. The window opens beside it, or type `/wh` to open it anywhere else.',
      'Set your **Goal**: how much Merchant\'s Favor you want to have (default 30).',
      'Press **Scan**. A scan takes a few seconds.',
      'Click each Buy line and buy what the plan lists.',
      'Leave the auction house and follow the tracker: collect your mail, press **Fill** for each crate, and turn in the Sealed Crates.',
    ],
    notes: [
      'For reputation, open the **Reputation** tab, pick the standing and press **Scan**. The tracker\'s **Use** button then takes you through the writs.',
      'Some beta builds don\'t load saved settings at the next login. If your goal and settings reset, that\'s the game, not the addon.',
    ],
    feedback: 'Found a problem? Leave a comment on CurseForge with what you expected and what the plan said.',
    credit: 'Crate, bundle and writ data from Wowhead\'s WoW: Forever database.',
  },
  {
    slug: 'let-me-buff-you',
    name: 'Let Me Buff You',
    tagline: 'Buff strangers in the open world without targeting anyone.',
    summary:
      'Hover a player and press your key. The addon casts the buff they\'re missing, at a rank their level can take. An icon over each friendly player\'s nameplate shows who still needs one of your buffs.',
    command: '/lmby',
    curseforge: curseforge('letmebuffyou'),
    logo: lmbyLogo,
    hero: { src: lmbyOpenWorld, alt: 'Buff icons over the nameplates of players in a town, showing who still needs a buff' },
    gallery: [
      { src: lmbyOnHover, alt: 'The icon over the hovered player glows, so you can see who your key will buff' },
      { src: lmbySettings, alt: 'Settings on a Paladin: hotkeys, the blessing order for each class, and display options' },
    ],
    features: [
      {
        title: 'Hover and press',
        items: [
          'One key per buff, plus a **Next missing buff** key that casts whatever the player under the mouse is missing',
          'Works on players in the world, on nameplates and on unit frames',
          'Picks the rank for the player\'s level: a level 20 gets Arcane Intellect rank 3, not a rank they\'re too low to take',
          'Any key works, with Alt, Ctrl or Shift, as do mouse buttons 3 to 5 and the mouse wheel',
        ],
      },
      {
        title: 'Who still needs a buff',
        items: [
          'An icon over the nameplate for each buff you can still give, and a "Needs:" line on the player\'s tooltip',
          'Someone else\'s equal or stronger buff counts as covered. A weaker rank still counts as missing',
          'PvP-flagged players are skipped while you aren\'t flagged, so you don\'t get flagged by accident',
          'Optional: no icons in capital cities, where crowds would fill your screen with them',
        ],
      },
      {
        title: 'Paladins',
        items: [
          'Up to four blessings per class, in order. You give the first one no other Paladin has given yet, so several Paladins running the addon fill them in turn',
          'A Salvation switch per class, for players in your party or raid',
        ],
      },
      {
        title: 'Buffs',
        items: [
          '**Mage:** Arcane Intellect',
          '**Priest:** Power Word: Fortitude, Divine Spirit, Shadow Protection',
          '**Druid:** Mark of the Wild, Thorns',
          '**Paladin:** Blessing of Might, Wisdom, Kings, Salvation and Light',
        ],
      },
    ],
    gettingStarted: [
      'Click the minimap button or type `/lmby` to open the settings.',
      'Click a key box, then press the key you want.',
      'Turn on friendly nameplates (**Shift+V**) to see the icons.',
      'Optional: tick **Click icons to cast** to buff people by clicking their icons.',
    ],
    notes: [
      'Addons can\'t check buffs during combat, so in combat each key casts its buff\'s highest rank on the player under the mouse.',
      'Typing `/lmby debug` makes the addon print what it\'s doing in chat. Paste those lines into a bug report.',
    ],
    feedback: 'Found a problem? Leave a comment on CurseForge with the `/lmby debug` lines.',
  },
];

export const languages = ['English', '简体中文', '繁體中文'];
