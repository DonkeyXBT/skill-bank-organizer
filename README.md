# Skill Bank Organizer

RuneLite plugin that **scans your bank** and splits it into **one page per skill**.

Docs site: **[donkeyxbt.github.io/skill-bank-organizer](https://donkeyxbt.github.io/skill-bank-organizer/)**

Java source lives in [`plugin/skill-bank-organizer`](plugin/skill-bank-organizer).

## What it does

Open your bank. Every stack is matched to a skill (and a **Raids** kit page). Each page shows:

- Best tools you already have, and what’s next
- Training methods and the supplies they need
- Matching items currently in the bank
- A **rebuild order** — drag into that order by hand

Right-click a bank item → **Send to Woodcutting** (or Raids, Magic, …). That opens the page and writes a Bank Tag (`#woodcutting`, `#raids`). **The plugin never moves items** — Jagex does not allow that.

## Suggested tabs

| Tab | Name | Skills |
| --- | --- | --- |
| 1 | Melee | Attack, Strength, Defence |
| 2 | Ranged | Ranged |
| 3 | Magic | Magic, Runecraft |
| 4 | Prayer | Prayer |
| 5 | Potions & HP | Herblore, Hitpoints |
| 6 | Crafting | Crafting, Fletching, Smithing, Construction |
| 7 | Food | Fishing, Cooking |
| 8 | Gathering | Mining, Woodcutting, Firemaking, Hunter, Farming |
| 9 | Raids & utility | Raids, Agility, Thieving, Slayer, leftover |

## Install

1. IntelliJ IDEA + JDK 11+
2. **File → Open** `plugin/skill-bank-organizer` as a Gradle project
3. Run the `run` Gradle task
4. Enable **Skill Bank Organizer**
5. Open your bank

See [plugin/skill-bank-organizer/README.md](plugin/skill-bank-organizer/README.md) for sideload detail.

Not affiliated with Jagex. Information only.
