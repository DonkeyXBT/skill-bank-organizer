import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Download, i as Minus, n as Search, o as Check, r as ScanLine, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CLD4C-iv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[opacity,transform,background-color] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-gold text-bg hover:opacity-90",
			secondary: "bg-slot text-ink border border-line hover:bg-panel",
			ghost: "text-muted hover:text-ink hover:bg-slot"
		},
		size: {
			default: "h-11 px-4 text-sm",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-5 text-base"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var skill_catalog_default = {
	version: 1,
	tabs: [
		{
			"id": 1,
			"name": "Melee",
			"skills": [
				"ATTACK",
				"STRENGTH",
				"DEFENCE"
			]
		},
		{
			"id": 2,
			"name": "Ranged",
			"skills": ["RANGED"]
		},
		{
			"id": 3,
			"name": "Magic",
			"skills": ["MAGIC", "RUNECRAFT"]
		},
		{
			"id": 4,
			"name": "Prayer",
			"skills": ["PRAYER"]
		},
		{
			"id": 5,
			"name": "Potions & HP",
			"skills": ["HERBLORE", "HITPOINTS"]
		},
		{
			"id": 6,
			"name": "Crafting",
			"skills": [
				"CRAFTING",
				"FLETCHING",
				"SMITHING",
				"CONSTRUCTION"
			]
		},
		{
			"id": 7,
			"name": "Food",
			"skills": ["FISHING", "COOKING"]
		},
		{
			"id": 8,
			"name": "Gathering",
			"skills": [
				"MINING",
				"WOODCUTTING",
				"FIREMAKING",
				"HUNTER",
				"FARMING"
			]
		},
		{
			"id": 9,
			"name": "Raids & utility",
			"skills": [
				"RAIDS",
				"AGILITY",
				"THIEVING",
				"SLAYER",
				"OTHER"
			]
		}
	],
	skills: [
		{
			"id": "ATTACK",
			"name": "Attack",
			"rsSkill": "ATTACK",
			"blurb": "Melee weapons. Keep scimitars, whips, fangs and stab weapons here.",
			"tools": [
				{
					"id": 1321,
					"name": "Bronze scimitar",
					"level": 1
				},
				{
					"id": 1323,
					"name": "Iron scimitar",
					"level": 1
				},
				{
					"id": 1325,
					"name": "Steel scimitar",
					"level": 5
				},
				{
					"id": 1327,
					"name": "Black scimitar",
					"level": 10
				},
				{
					"id": 1329,
					"name": "Mithril scimitar",
					"level": 20
				},
				{
					"id": 1331,
					"name": "Adamant scimitar",
					"level": 30
				},
				{
					"id": 1333,
					"name": "Rune scimitar",
					"level": 40
				},
				{
					"id": 4587,
					"name": "Dragon scimitar",
					"level": 60
				},
				{
					"id": 4151,
					"name": "Abyssal whip",
					"level": 70
				},
				{
					"id": 12006,
					"name": "Abyssal tentacle",
					"level": 75
				},
				{
					"id": 26219,
					"name": "Osmumten's fang",
					"level": 82
				}
			],
			"methods": [{
				"name": "Crabs (sand / ammonite / rock)",
				"level": "1–70",
				"why": "AFK Attack with the best scimitar you can wield.",
				"items": [{
					"name": "Scimitar",
					"hint": "Best scimitar you can equip"
				}, {
					"id": 385,
					"name": "Shark",
					"optional": true,
					"hint": "Light food"
				}]
			}, {
				"name": "Slayer with whip / fang",
				"level": "70–99",
				"why": "Best long-term Attack XP while clearing tasks.",
				"items": [
					{
						"id": 4151,
						"name": "Abyssal whip",
						"optional": true
					},
					{
						"id": 26219,
						"name": "Osmumten's fang",
						"optional": true
					},
					{
						"id": 4155,
						"name": "Enchanted gem",
						"optional": true
					}
				]
			}],
			"matchAny": [{ "nameContains": [
				"scimitar",
				"whip",
				"tentacle",
				"rapier",
				"hasta",
				"shortsword",
				"longsword",
				"godsword",
				"voidwaker",
				"emberlight",
				"osmumten",
				"saeldor",
				"ghrazi"
			] }, { "ids": [
				4151,
				12006,
				22324,
				26219,
				13652,
				11802,
				11804,
				11806,
				11808,
				4587
			] }]
		},
		{
			"id": "STRENGTH",
			"name": "Strength",
			"rsSkill": "STRENGTH",
			"blurb": "Crush and Strength-training weapons: warhammers, mauls, bludgeon, granite.",
			"tools": [
				{
					"id": 1337,
					"name": "Bronze warhammer",
					"level": 1
				},
				{
					"id": 1339,
					"name": "Iron warhammer",
					"level": 1
				},
				{
					"id": 1341,
					"name": "Steel warhammer",
					"level": 5
				},
				{
					"id": 1345,
					"name": "Mithril warhammer",
					"level": 20
				},
				{
					"id": 1347,
					"name": "Rune warhammer",
					"level": 40
				},
				{
					"id": 13576,
					"name": "Dragon warhammer",
					"level": 60
				},
				{
					"id": 4153,
					"name": "Granite maul",
					"level": 50
				},
				{
					"id": 13263,
					"name": "Abyssal bludgeon",
					"level": 70
				},
				{
					"id": 21003,
					"name": "Elder maul",
					"level": 75
				}
			],
			"methods": [{
				"name": "Aggressive on crabs",
				"level": "1–70",
				"why": "Set attack style to Aggressive. Warhammer or scimitar both work.",
				"items": [{
					"name": "Warhammer",
					"hint": "Or any melee weapon on Aggressive"
				}]
			}, {
				"name": "Bludgeon / elder maul",
				"level": "70–99",
				"why": "Highest Strength XP per hour on crushable tasks.",
				"items": [{
					"id": 13263,
					"name": "Abyssal bludgeon",
					"optional": true
				}, {
					"id": 21003,
					"name": "Elder maul",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"warhammer",
				"maul",
				"bludgeon",
				"battleaxe",
				"greataxe",
				"granite",
				"halberd",
				"thrownaxe"
			] }, { "ids": [
				4153,
				13263,
				21003,
				13576,
				1377
			] }]
		},
		{
			"id": "DEFENCE",
			"name": "Defence",
			"rsSkill": "DEFENCE",
			"blurb": "Armour, defenders and tank gear. Group by metal, then by raid/boss sets.",
			"tools": [
				{
					"id": 1117,
					"name": "Bronze platebody",
					"level": 1
				},
				{
					"id": 1115,
					"name": "Iron platebody",
					"level": 1
				},
				{
					"id": 1119,
					"name": "Steel platebody",
					"level": 5
				},
				{
					"id": 1121,
					"name": "Mithril platebody",
					"level": 20
				},
				{
					"id": 1123,
					"name": "Adamant platebody",
					"level": 30
				},
				{
					"id": 1127,
					"name": "Rune platebody",
					"level": 40
				},
				{
					"id": 3140,
					"name": "Dragon chainbody",
					"level": 60
				},
				{
					"id": 11832,
					"name": "Bandos chestplate",
					"level": 65
				},
				{
					"id": 12954,
					"name": "Dragon defender",
					"level": 60
				},
				{
					"id": 22322,
					"name": "Avernic defender",
					"level": 70
				}
			],
			"methods": [{
				"name": "Defensive on crabs or slayer",
				"level": "1–99",
				"why": "Train Defence on the same monsters as Attack, defensive style.",
				"items": [{
					"name": "Platebody",
					"hint": "Best melee body you can wear"
				}, {
					"name": "Defender",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"platebody",
				"platelegs",
				"plateskirt",
				"full helm",
				"kiteshield",
				"defender",
				"chainbody",
				"chainskirt",
				"berserker helm",
				"helm of neitiznot",
				"fighter torso",
				"bandos",
				"torag",
				"dharok",
				"guthan",
				"verac",
				"karil's",
				"ahrim",
				"justiciar",
				"inquisitor",
				"ancestral",
				"void knight"
			] }, { "ids": [
				12954,
				22322,
				11832,
				11834,
				3140,
				10551
			] }]
		},
		{
			"id": "RANGED",
			"name": "Ranged",
			"rsSkill": "RANGED",
			"blurb": "Bows, crossbows, darts, chins, ammo and Ranged armour.",
			"tools": [
				{
					"id": 841,
					"name": "Shortbow",
					"level": 1
				},
				{
					"id": 853,
					"name": "Maple shortbow",
					"level": 30
				},
				{
					"id": 861,
					"name": "Magic shortbow",
					"level": 50
				},
				{
					"id": 11235,
					"name": "Dark bow",
					"level": 60
				},
				{
					"id": 20997,
					"name": "Twisted bow",
					"level": 75
				},
				{
					"id": 9185,
					"name": "Rune crossbow",
					"level": 61
				},
				{
					"id": 21902,
					"name": "Dragon hunter crossbow",
					"level": 65
				},
				{
					"id": 26374,
					"name": "Zaryte crossbow",
					"level": 80
				},
				{
					"id": 12926,
					"name": "Toxic blowpipe",
					"level": 75
				}
			],
			"methods": [
				{
					"name": "Darts / knives (early)",
					"level": "1–50",
					"why": "Cheap and fast. Iron or steel darts at Ammonite Crabs.",
					"items": [{
						"name": "Darts",
						"hint": "Iron or steel"
					}, {
						"name": "Knives",
						"optional": true
					}]
				},
				{
					"name": "Broad bolts / cannon",
					"level": "55–75",
					"why": "Slayer with a rune crossbow and broad bolts. Cannon for bursting tasks.",
					"items": [
						{
							"id": 9185,
							"name": "Rune crossbow"
						},
						{
							"id": 11875,
							"name": "Broad bolts"
						},
						{
							"id": 2,
							"name": "Cannonball",
							"optional": true
						}
					]
				},
				{
					"name": "Blowpipe / chinchompas",
					"level": "75–99",
					"why": "Fastest Ranged XP. Red chins at black chinchompas or MM2 tunnels.",
					"items": [
						{
							"id": 12926,
							"name": "Toxic blowpipe",
							"optional": true
						},
						{
							"id": 10034,
							"name": "Red chinchompa",
							"optional": true
						},
						{
							"id": 11959,
							"name": "Black chinchompa",
							"optional": true
						}
					]
				}
			],
			"matchAny": [{ "nameContains": [
				"bow",
				"crossbow",
				"blowpipe",
				"chinchompa",
				"dart",
				"thrownaxe",
				"arrow",
				"bolts",
				"javelin",
				"d'hide",
				"dragonhide",
				"coif",
				"ava's",
				"assembler",
				"anguish",
				"range potion",
				"cannon",
				"cannonball",
				"ballista"
			] }, { "nameExclude": [
				"bowstring",
				"unstrung",
				"arrow shaft",
				"bolt tips",
				"headless"
			] }]
		},
		{
			"id": "PRAYER",
			"name": "Prayer",
			"rsSkill": "PRAYER",
			"blurb": "Bones, ashes, ensouled heads. Keep ectophial and dragon bones together.",
			"tools": [
				{
					"id": 526,
					"name": "Bones",
					"level": 1
				},
				{
					"id": 532,
					"name": "Big bones",
					"level": 1
				},
				{
					"id": 536,
					"name": "Dragon bones",
					"level": 1
				},
				{
					"id": 22124,
					"name": "Superior dragon bones",
					"level": 70
				},
				{
					"id": 25766,
					"name": "Fiendish ashes",
					"level": 1
				},
				{
					"id": 25778,
					"name": "Infernal ashes",
					"level": 1
				}
			],
			"methods": [{
				"name": "Gilded altar / Wildy altar",
				"level": "1–99",
				"why": "Dragon bones on a gilded altar (house) or Chaos Temple.",
				"items": [{
					"id": 536,
					"name": "Dragon bones"
				}, {
					"id": 22124,
					"name": "Superior dragon bones",
					"optional": true
				}]
			}, {
				"name": "Ensouled heads",
				"level": "16–99",
				"why": "Slower but profits. Needs runes and a dark altar or chapel.",
				"items": [{
					"name": "Ensouled",
					"hint": "Any ensouled head"
				}, {
					"id": 564,
					"name": "Cosmic rune",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"bones",
				"ashes",
				"ensouled",
				"ectophial",
				"bonecrusher",
				"holy symbol",
				"unholy symbol",
				"stole",
				"crozier",
				"vestment",
				"dragonbone"
			] }, { "nameExclude": [
				"bone bolts",
				"bone dagger",
				"bone club",
				"bone spear",
				"bonesack"
			] }]
		},
		{
			"id": "MAGIC",
			"name": "Magic",
			"rsSkill": "MAGIC",
			"blurb": "Runes, staves, pouches, tridents. One page for every spell you actually cast.",
			"tools": [
				{
					"id": 1381,
					"name": "Staff of air",
					"level": 1
				},
				{
					"id": 1387,
					"name": "Staff of fire",
					"level": 1
				},
				{
					"id": 1401,
					"name": "Mystic fire staff",
					"level": 40
				},
				{
					"id": 12791,
					"name": "Rune pouch",
					"level": 1
				},
				{
					"id": 27281,
					"name": "Divine rune pouch",
					"level": 75
				},
				{
					"id": 11907,
					"name": "Trident of the seas",
					"level": 75
				},
				{
					"id": 22323,
					"name": "Sanguinesti staff",
					"level": 82
				}
			],
			"methods": [
				{
					"name": "Splashing / strike spells",
					"level": "1–13",
					"why": "Mind runes plus an elemental staff. Cheap levels.",
					"items": [{
						"id": 1381,
						"name": "Staff of air"
					}, {
						"id": 558,
						"name": "Mind rune"
					}]
				},
				{
					"name": "High alchemy",
					"level": "55–99",
					"why": "Steady Magic XP and gold. Fire staff + natures + alchables.",
					"items": [
						{
							"id": 1387,
							"name": "Staff of fire"
						},
						{
							"id": 561,
							"name": "Nature rune"
						},
						{
							"name": "Alchable",
							"optional": true,
							"hint": "Yew longs, gold bars, d'hide"
						}
					]
				},
				{
					"name": "Burst / barrage",
					"level": "70–99",
					"why": "Fastest Magic XP on slayer tasks and MM2 maniacal monkeys.",
					"items": [
						{
							"id": 560,
							"name": "Death rune"
						},
						{
							"id": 565,
							"name": "Blood rune"
						},
						{
							"id": 562,
							"name": "Chaos rune"
						},
						{
							"id": 12791,
							"name": "Rune pouch",
							"optional": true
						}
					]
				}
			],
			"matchAny": [{ "nameContains": [
				" rune",
				"staff",
				"wand",
				"trident",
				"sanguinesti",
				"kodai",
				"tome of",
				"rune pouch",
				"imbued god cape",
				"occult",
				"tormented",
				"ancestral",
				"virtus",
				"ancient sceptre",
				"warped sceptre"
			] }, { "nameExclude": [
				"runite",
				"rune plate",
				"rune chain",
				"rune full",
				"rune kiteshield",
				"rune dagger",
				"rune scimitar",
				"rune 2h",
				"rune axe",
				"rune pickaxe",
				"rune arrow",
				"rune dart",
				"rune knife",
				"rune thrownaxe",
				"rune javelin",
				"rune boots",
				"rune gloves",
				"rune defender",
				"granite"
			] }]
		},
		{
			"id": "RUNECRAFT",
			"name": "Runecraft",
			"rsSkill": "RUNECRAFT",
			"blurb": "Essence, pouches, talismans, tiaras, blood/soul runes.",
			"tools": [
				{
					"id": 1436,
					"name": "Rune essence",
					"level": 1
				},
				{
					"id": 7936,
					"name": "Pure essence",
					"level": 1
				},
				{
					"id": 5509,
					"name": "Small pouch",
					"level": 1
				},
				{
					"id": 5510,
					"name": "Medium pouch",
					"level": 25
				},
				{
					"id": 5512,
					"name": "Large pouch",
					"level": 50
				},
				{
					"id": 5514,
					"name": "Giant pouch",
					"level": 75
				},
				{
					"id": 26784,
					"name": "Colossal pouch",
					"level": 85
				}
			],
			"methods": [{
				"name": "Lavas / ZMI",
				"level": "1–77",
				"why": "Daeyalt or pure essence through Ourania or the lava altar.",
				"items": [{
					"id": 7936,
					"name": "Pure essence"
				}, {
					"id": 5514,
					"name": "Giant pouch",
					"optional": true
				}]
			}, {
				"name": "Bloods and souls",
				"level": "77–99",
				"why": "True Blood Altar / Arceuus. Bring colossal pouch and blood essence.",
				"items": [
					{
						"id": 7936,
						"name": "Pure essence"
					},
					{
						"id": 26784,
						"name": "Colossal pouch",
						"optional": true
					},
					{
						"id": 26390,
						"name": "Blood essence",
						"optional": true
					}
				]
			}],
			"matchAny": [
				{ "nameContains": [
					"essence",
					"pouch",
					"talisman",
					"tiara",
					"blood essence",
					"abyssal needle",
					"runecraft"
				] },
				{ "nameExclude": [
					"rune pouch",
					"looting pouch",
					"seed pouch",
					"coal bag",
					"gem bag"
				] },
				{ "ids": [
					1436,
					7936,
					5509,
					5510,
					5512,
					5514,
					26784,
					26390
				] }
			]
		},
		{
			"id": "CONSTRUCTION",
			"name": "Construction",
			"rsSkill": "CONSTRUCTION",
			"blurb": "Planks, nails, cloth, limestone. Mahogany homes and mahogany tables.",
			"tools": [
				{
					"id": 8794,
					"name": "Saw",
					"level": 1
				},
				{
					"id": 2347,
					"name": "Hammer",
					"level": 1
				},
				{
					"id": 960,
					"name": "Plank",
					"level": 1
				},
				{
					"id": 8778,
					"name": "Oak plank",
					"level": 15
				},
				{
					"id": 8780,
					"name": "Teak plank",
					"level": 35
				},
				{
					"id": 8782,
					"name": "Mahogany plank",
					"level": 50
				}
			],
			"methods": [{
				"name": "Oak larders",
				"level": "33–52",
				"why": "Classic method. Servant + oak planks.",
				"items": [{
					"id": 8778,
					"name": "Oak plank"
				}]
			}, {
				"name": "Mahogany homes / tables",
				"level": "50–99",
				"why": "Mahogany plank plus a butler. Homes if you want points.",
				"items": [
					{
						"id": 8782,
						"name": "Mahogany plank"
					},
					{
						"id": 8794,
						"name": "Saw"
					},
					{
						"id": 2347,
						"name": "Hammer"
					}
				]
			}],
			"matchAny": [
				{ "nameContains": [
					"plank",
					"nails",
					"bolt of cloth",
					"limestone brick",
					"marble block",
					"gold leaf",
					"magic stone",
					"saw",
					"mahogany homes"
				] },
				{ "nameExclude": ["sawmill"] },
				{ "ids": [
					8794,
					2347,
					960,
					8778,
					8780,
					8782
				] }
			]
		},
		{
			"id": "HITPOINTS",
			"name": "Hitpoints",
			"rsSkill": "HITPOINTS",
			"blurb": "Cooked food. This is the eat-tab — keep raw fish on Cooking instead.",
			"tools": [
				{
					"id": 379,
					"name": "Lobster",
					"level": 1
				},
				{
					"id": 373,
					"name": "Swordfish",
					"level": 1
				},
				{
					"id": 7946,
					"name": "Monkfish",
					"level": 1
				},
				{
					"id": 385,
					"name": "Shark",
					"level": 1
				},
				{
					"id": 11936,
					"name": "Dark crab",
					"level": 1
				},
				{
					"id": 13441,
					"name": "Anglerfish",
					"level": 1
				},
				{
					"id": 3144,
					"name": "Cooked karambwan",
					"level": 1
				}
			],
			"methods": [{
				"name": "Train combat — food is the HP method",
				"level": "1–99",
				"why": "Hitpoints levels come from combat. Bank cooked food here, not raw.",
				"items": [
					{
						"id": 385,
						"name": "Shark",
						"optional": true
					},
					{
						"id": 13441,
						"name": "Anglerfish",
						"optional": true
					},
					{
						"id": 3144,
						"name": "Cooked karambwan",
						"optional": true
					}
				]
			}],
			"matchAny": [{ "nameContains": [
				"shark",
				"monkfish",
				"swordfish",
				"lobster",
				"anglerfish",
				"karambwan",
				"manta ray",
				"dark crab",
				"tuna potato",
				"saradomin brew",
				"guthix rest",
				"summer pie",
				"wild pie",
				"cake",
				"pizza",
				"stew",
				"potato with",
				"blighted"
			] }, { "nameExclude": [
				"raw ",
				"burnt ",
				"karambwanji",
				"karambwan vessel"
			] }]
		},
		{
			"id": "AGILITY",
			"name": "Agility",
			"rsSkill": "AGILITY",
			"blurb": "Marks of grace, graceful, stamina potions, rumours of shortcuts.",
			"tools": [
				{
					"id": 11849,
					"name": "Mark of grace",
					"level": 1
				},
				{
					"id": 11850,
					"name": "Graceful hood",
					"level": 1
				},
				{
					"id": 12625,
					"name": "Stamina potion(4)",
					"level": 1
				}
			],
			"methods": [{
				"name": "Rooftop courses",
				"level": "1–99",
				"why": "Follow the highest rooftop you can click. Bank marks and graceful.",
				"items": [{
					"id": 11850,
					"name": "Graceful hood",
					"optional": true
				}, {
					"id": 12625,
					"name": "Stamina potion(4)",
					"optional": true
				}]
			}, {
				"name": "Hallowed Sepulchre",
				"level": "52–99",
				"why": "Best XP once you can clear floors comfortably.",
				"items": [{
					"id": 24738,
					"name": "Hallowed grapple",
					"optional": true
				}, {
					"id": 24740,
					"name": "Hallowed focus",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"graceful",
				"mark of grace",
				"stamina potion",
				"agility potion",
				"hallowed",
				"summer pie"
			] }, { "ids": [
				11849,
				11850,
				11852,
				11854,
				11856,
				11858,
				11860,
				12625
			] }]
		},
		{
			"id": "HERBLORE",
			"name": "Herblore",
			"rsSkill": "HERBLORE",
			"blurb": "Herbs, secondaries, vials. Clean herbs stacked next to unfinished potions.",
			"tools": [
				{
					"id": 233,
					"name": "Pestle and mortar",
					"level": 1
				},
				{
					"id": 227,
					"name": "Vial of water",
					"level": 1
				},
				{
					"id": 249,
					"name": "Guam leaf",
					"level": 3
				},
				{
					"id": 257,
					"name": "Ranarr weed",
					"level": 25
				},
				{
					"id": 3e3,
					"name": "Snapdragon",
					"level": 63
				},
				{
					"id": 269,
					"name": "Torstol",
					"level": 78
				}
			],
			"methods": [{
				"name": "Unfinished potions → finished",
				"level": "3–99",
				"why": "Bank grimy, clean, then vial. Keep secondaries beside the matching herb.",
				"items": [{
					"id": 227,
					"name": "Vial of water"
				}, {
					"id": 233,
					"name": "Pestle and mortar"
				}]
			}, {
				"name": "Prayer potions / super combats",
				"level": "38–90",
				"why": "Ranarr + snape grass; torstol + super attack/str/def.",
				"items": [
					{
						"id": 257,
						"name": "Ranarr weed",
						"optional": true
					},
					{
						"id": 231,
						"name": "Snape grass",
						"optional": true
					},
					{
						"id": 269,
						"name": "Torstol",
						"optional": true
					}
				]
			}],
			"matchAny": [{ "nameContains": [
				"grimy",
				"leaf",
				"weed",
				"unfinished",
				"potion",
				"vial",
				"pestle",
				"eye of newt",
				"snape grass",
				"limpwurt",
				"unicorn horn",
				"red spiders",
				"white berries",
				"crushed nest",
				"amylase",
				"crystal dust",
				"goat horn",
				"dragon scale",
				"wine of zamorak",
				"coconut milk",
				"caviar",
				"super combat",
				"saradomin brew",
				"sanfew",
				"stamina",
				"prayer regeneration",
				"forgotten brew"
			] }, { "nameExclude": ["seed", "sapling"] }]
		},
		{
			"id": "THIEVING",
			"name": "Thieving",
			"rsSkill": "THIEVING",
			"blurb": "Coin pouches, rogue kit, blackjacks, Dodgy necklaces.",
			"tools": [{
				"id": 5554,
				"name": "Rogue mask",
				"level": 1
			}, {
				"id": 21143,
				"name": "Dodgy necklace",
				"level": 1
			}],
			"methods": [{
				"name": "Ardougne knights / Elves",
				"level": "55–99",
				"why": "Dodgy necklace + rogue outfit. Shadow veil if Arceuus.",
				"items": [{
					"id": 5554,
					"name": "Rogue mask",
					"optional": true
				}, {
					"id": 21143,
					"name": "Dodgy necklace",
					"optional": true
				}]
			}, {
				"name": "Pyramid Plunder",
				"level": "71–99",
				"why": "Pharaoh's sceptre runs. Bank sceptre and sceptre charges here.",
				"items": [{
					"id": 9044,
					"name": "Pharaoh's sceptre",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"rogue ",
				"dodgy necklace",
				"coin pouch",
				"blackjack",
				"thieving",
				"pharaoh's sceptre",
				"silky ciara",
				"gloves of silence"
			] }, { "ids": [
				5553,
				5554,
				5555,
				5556,
				5557,
				21143,
				9044
			] }]
		},
		{
			"id": "CRAFTING",
			"name": "Crafting",
			"rsSkill": "CRAFTING",
			"blurb": "Hides, gems, glass, battlestaves, jewellery.",
			"tools": [
				{
					"id": 1733,
					"name": "Needle",
					"level": 1
				},
				{
					"id": 1734,
					"name": "Thread",
					"level": 1
				},
				{
					"id": 1755,
					"name": "Chisel",
					"level": 1
				},
				{
					"id": 1785,
					"name": "Glassblowing pipe",
					"level": 1
				}
			],
			"methods": [{
				"name": "Green → black d'hide bodies",
				"level": "63–84",
				"why": "Tan hides, then needle + thread. High XP and alchable.",
				"items": [
					{
						"id": 1745,
						"name": "Green dragon leather",
						"optional": true
					},
					{
						"id": 2509,
						"name": "Black dragon leather",
						"optional": true
					},
					{
						"id": 1733,
						"name": "Needle"
					},
					{
						"id": 1734,
						"name": "Thread"
					}
				]
			}, {
				"name": "Glass / battlestaves",
				"level": "46–99",
				"why": "Molten glass at a bank, or water orbs onto battlestaves.",
				"items": [
					{
						"id": 1775,
						"name": "Molten glass",
						"optional": true
					},
					{
						"id": 1397,
						"name": "Battlestaff",
						"optional": true
					},
					{
						"id": 571,
						"name": "Water orb",
						"optional": true
					}
				]
			}],
			"matchAny": [{ "nameContains": [
				"needle",
				"thread",
				"chisel",
				"leather",
				"dragonhide",
				"d'hide",
				"uncut ",
				"molten glass",
				"glassblowing",
				"battlestaff",
				"orb",
				"gold bar",
				"silver bar",
				"bracelet",
				"amulet",
				"necklace",
				"ring of",
				"pottery",
				"soft clay"
			] }, { "nameExclude": [
				"seed",
				"amulet of fury",
				"amulet of torture",
				"necklace of anguish",
				"ring of suffering",
				"berserker ring",
				"archer ring",
				"seers ring",
				"warrior ring"
			] }]
		},
		{
			"id": "FLETCHING",
			"name": "Fletching",
			"rsSkill": "FLETCHING",
			"blurb": "Logs → unstrung bows, shafts, tips, bowstrings.",
			"tools": [
				{
					"id": 946,
					"name": "Knife",
					"level": 1
				},
				{
					"id": 1777,
					"name": "Bow string",
					"level": 1
				},
				{
					"id": 52,
					"name": "Arrow shaft",
					"level": 1
				},
				{
					"id": 314,
					"name": "Feather",
					"level": 1
				}
			],
			"methods": [{
				"name": "Maple / yew / magic longs",
				"level": "55–99",
				"why": "Fletch unstrung, string later. Alch or sell.",
				"items": [
					{
						"id": 946,
						"name": "Knife"
					},
					{
						"id": 1517,
						"name": "Maple logs",
						"optional": true
					},
					{
						"id": 1515,
						"name": "Yew logs",
						"optional": true
					},
					{
						"id": 1513,
						"name": "Magic logs",
						"optional": true
					},
					{
						"id": 1777,
						"name": "Bow string"
					}
				]
			}, {
				"name": "Broad arrows / darts",
				"level": "52–99",
				"why": "AFK slayer unlock. Headless arrows + broad tips.",
				"items": [{
					"id": 53,
					"name": "Headless arrow",
					"optional": true
				}, {
					"id": 11874,
					"name": "Broad arrowheads",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"bow string",
				"unstrung",
				"arrow shaft",
				"headless arrow",
				"arrowtips",
				"bolt tips",
				"javelin heads",
				"dart tip",
				"stock",
				"shieldbow",
				"shortbow",
				"longbow"
			] }, { "ids": [
				946,
				1777,
				52,
				53,
				314,
				11874
			] }]
		},
		{
			"id": "SLAYER",
			"name": "Slayer",
			"rsSkill": "SLAYER",
			"blurb": "Slayer gem, horns, broad ammo, slayer helm, task tools.",
			"tools": [
				{
					"id": 4155,
					"name": "Enchanted gem",
					"level": 1
				},
				{
					"id": 11864,
					"name": "Slayer helmet",
					"level": 1
				},
				{
					"id": 11866,
					"name": "Slayer ring",
					"level": 1
				},
				{
					"id": 4166,
					"name": "Facemask",
					"level": 1
				},
				{
					"id": 4164,
					"name": "Earmuffs",
					"level": 1
				},
				{
					"id": 4551,
					"name": "Spiny helmet",
					"level": 1
				}
			],
			"methods": [{
				"name": "Konar / Duradel / Konar+brim",
				"level": "1–99",
				"why": "Keep the gem, helm and skip tools together so a task start is one tab.",
				"items": [
					{
						"id": 4155,
						"name": "Enchanted gem"
					},
					{
						"id": 11864,
						"name": "Slayer helmet",
						"optional": true
					},
					{
						"id": 11875,
						"name": "Broad bolts",
						"optional": true
					}
				]
			}],
			"matchAny": [{ "nameContains": [
				"slayer",
				"enchanted gem",
				"facemask",
				"earmuffs",
				"nose peg",
				"spiny helmet",
				"rock hammer",
				"insulated boots",
				"leaf-bladed",
				"broad ",
				"witchwood",
				"fungicide",
				"ice cooler",
				"bag of salt",
				"super combat",
				"cannon"
			] }, { "ids": [
				4155,
				11864,
				11865,
				11866,
				4164,
				4166,
				4168,
				4551,
				4162
			] }]
		},
		{
			"id": "HUNTER",
			"name": "Hunter",
			"rsSkill": "HUNTER",
			"blurb": "Traps, box traps, impling jars, chins, hunter potions.",
			"tools": [
				{
					"id": 10006,
					"name": "Bird snare",
					"level": 1
				},
				{
					"id": 10008,
					"name": "Box trap",
					"level": 27
				},
				{
					"id": 10025,
					"name": "Magic box",
					"level": 71
				},
				{
					"id": 11260,
					"name": "Impling jar",
					"level": 1
				}
			],
			"methods": [{
				"name": "Bird snares → chinchompas",
				"level": "1–80",
				"why": "Tropical wagtail, then grey/red/black chins.",
				"items": [{
					"id": 10006,
					"name": "Bird snare"
				}, {
					"id": 10008,
					"name": "Box trap"
				}]
			}, {
				"name": "Maniacal monkeys / herbiboar",
				"level": "60–99",
				"why": "Noose wand + logs at Kruk's Dungeon, or herbiboar on Fossil Island.",
				"items": [{
					"id": 10010,
					"name": "Noose wand",
					"optional": true
				}, {
					"id": 11259,
					"name": "Magic impling jar",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"bird snare",
				"box trap",
				"magic box",
				"noose wand",
				"impling",
				"chinchompa",
				"hunter ",
				"larupia",
				"graahk",
				"kyatt",
				"swamp lizard",
				"orange salamander",
				"red salamander",
				"black salamander",
				"herbi"
			] }, { "ids": [
				10006,
				10008,
				10010,
				10025,
				11260
			] }]
		},
		{
			"id": "MINING",
			"name": "Mining",
			"rsSkill": "MINING",
			"blurb": "Pickaxes and ores. Keep coal next to bars on the Smithing page too.",
			"tools": [
				{
					"id": 1265,
					"name": "Bronze pickaxe",
					"level": 1
				},
				{
					"id": 1267,
					"name": "Iron pickaxe",
					"level": 1
				},
				{
					"id": 1269,
					"name": "Steel pickaxe",
					"level": 6
				},
				{
					"id": 1273,
					"name": "Mithril pickaxe",
					"level": 21
				},
				{
					"id": 1271,
					"name": "Adamant pickaxe",
					"level": 31
				},
				{
					"id": 1275,
					"name": "Rune pickaxe",
					"level": 41
				},
				{
					"id": 11920,
					"name": "Dragon pickaxe",
					"level": 61
				},
				{
					"id": 13243,
					"name": "Infernal pickaxe",
					"level": 61
				},
				{
					"id": 23680,
					"name": "Crystal pickaxe",
					"level": 71
				}
			],
			"methods": [{
				"name": "Motherlode Mine / 3-tick granite",
				"level": "30–99",
				"why": "Dragon pickaxe is the real unlock. Crystal if you have it.",
				"items": [{
					"id": 11920,
					"name": "Dragon pickaxe"
				}, {
					"id": 12012,
					"name": "Prospector helmet",
					"optional": true
				}]
			}, {
				"name": "Amethyst / stars",
				"level": "70–99",
				"why": "AFK endgame. Keep amethyst and stardust here.",
				"items": [{
					"id": 21347,
					"name": "Amethyst",
					"optional": true
				}, {
					"id": 25527,
					"name": "Stardust",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"pickaxe",
				" ore",
				"coal",
				"unidentified mineral",
				"pay-dirt",
				"amethyst",
				"stardust",
				"prospector",
				"celestial"
			] }, { "nameExclude": ["coal bag"] }]
		},
		{
			"id": "SMITHING",
			"name": "Smithing",
			"rsSkill": "SMITHING",
			"blurb": "Bars, then platebodies. Blast furnace kit lives here.",
			"tools": [
				{
					"id": 2347,
					"name": "Hammer",
					"level": 1
				},
				{
					"id": 2349,
					"name": "Bronze bar",
					"level": 1
				},
				{
					"id": 2351,
					"name": "Iron bar",
					"level": 15
				},
				{
					"id": 2353,
					"name": "Steel bar",
					"level": 30
				},
				{
					"id": 2359,
					"name": "Mithril bar",
					"level": 50
				},
				{
					"id": 2361,
					"name": "Adamantite bar",
					"level": 70
				},
				{
					"id": 2363,
					"name": "Runite bar",
					"level": 85
				}
			],
			"methods": [{
				"name": "Blast Furnace gold / addy",
				"level": "40–99",
				"why": "Goldsmith gauntlets for gold; coal bag + ice gloves for bars.",
				"items": [
					{
						"id": 776,
						"name": "Goldsmith gauntlets",
						"optional": true
					},
					{
						"id": 12019,
						"name": "Coal bag",
						"optional": true
					},
					{
						"id": 1580,
						"name": "Ice gloves",
						"optional": true
					}
				]
			}, {
				"name": "Giants' Foundry",
				"level": "15–99",
				"why": "Deposit mixed bars, follow the temperature minigame.",
				"items": [{
					"name": "Bar",
					"hint": "Any metal bars"
				}]
			}],
			"matchAny": [
				{ "nameContains": [
					" bar",
					"coal bag",
					"goldsmith",
					"ice gloves",
					"cannonball",
					"platebody",
					"2h sword"
				] },
				{ "nameExclude": [
					"chocolate bar",
					"candy",
					"unfinished"
				] },
				{ "ids": [
					2347,
					2349,
					2351,
					2353,
					2355,
					2357,
					2359,
					2361,
					2363,
					12019,
					776
				] }
			]
		},
		{
			"id": "FISHING",
			"name": "Fishing",
			"rsSkill": "FISHING",
			"blurb": "Rods, nets, harpoons, bait, raw fish. Cooked fish go to Hitpoints / Cooking.",
			"tools": [
				{
					"id": 303,
					"name": "Small fishing net",
					"level": 1
				},
				{
					"id": 307,
					"name": "Fishing rod",
					"level": 5
				},
				{
					"id": 309,
					"name": "Fly fishing rod",
					"level": 20
				},
				{
					"id": 311,
					"name": "Harpoon",
					"level": 35
				},
				{
					"id": 301,
					"name": "Lobster pot",
					"level": 40
				},
				{
					"id": 21028,
					"name": "Dragon harpoon",
					"level": 61
				},
				{
					"id": 21031,
					"name": "Infernal harpoon",
					"level": 61
				},
				{
					"id": 23762,
					"name": "Crystal harpoon",
					"level": 71
				}
			],
			"methods": [{
				"name": "Fly fishing → lobsters → sharks",
				"level": "1–76",
				"why": "Trout/salmon, then lobsters at Catherby, then sharks or minnows.",
				"items": [
					{
						"id": 309,
						"name": "Fly fishing rod"
					},
					{
						"id": 314,
						"name": "Feather"
					},
					{
						"id": 301,
						"name": "Lobster pot",
						"optional": true
					}
				]
			}, {
				"name": "Barbarian / anglers / infernal eels",
				"level": "58–99",
				"why": "Dragon harpoon spec. Angler's outfit from Fishing Trawler.",
				"items": [{
					"id": 21028,
					"name": "Dragon harpoon",
					"optional": true
				}, {
					"id": 13258,
					"name": "Angler hat",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"fishing",
				"harpoon",
				"lobster pot",
				"fishing rod",
				"small fishing net",
				"big fishing net",
				"fishing bait",
				"sandworms",
				"raw shrimp",
				"raw anchovy",
				"raw sardine",
				"raw herring",
				"raw trout",
				"raw salmon",
				"raw tuna",
				"raw lobster",
				"raw swordfish",
				"raw monkfish",
				"raw shark",
				"raw angler",
				"raw karambwan",
				"raw manta",
				"raw dark crab",
				"leaping",
				"angler hat",
				"angler top",
				"angler waders",
				"angler boots",
				"minnow"
			] }, { "ids": [
				303,
				305,
				307,
				309,
				311,
				301,
				313,
				21028,
				21031,
				23762
			] }]
		},
		{
			"id": "COOKING",
			"name": "Cooking",
			"rsSkill": "COOKING",
			"blurb": "Raw food and gauntlets. Drop cooked food onto the Hitpoints page when done.",
			"tools": [
				{
					"id": 775,
					"name": "Cooking gauntlets",
					"level": 1
				},
				{
					"id": 335,
					"name": "Raw trout",
					"level": 15
				},
				{
					"id": 377,
					"name": "Raw lobster",
					"level": 40
				},
				{
					"id": 383,
					"name": "Raw shark",
					"level": 80
				},
				{
					"id": 13439,
					"name": "Raw anglerfish",
					"level": 84
				}
			],
			"methods": [{
				"name": "Hosidius range / Copious cooking",
				"level": "1–99",
				"why": "10% less burn with Hosidius elite + cooking gauntlets. Bank raw here.",
				"items": [{
					"id": 775,
					"name": "Cooking gauntlets"
				}, {
					"name": "Raw ",
					"hint": "Any raw fish or meat"
				}]
			}],
			"matchAny": [{ "nameContains": [
				"raw ",
				"cooking gauntlets",
				"cook-o-matic"
			] }, { "nameExclude": ["raw chaos", "raw potato"] }]
		},
		{
			"id": "FIREMAKING",
			"name": "Firemaking",
			"rsSkill": "FIREMAKING",
			"blurb": "Logs, tinderbox, pyromancer, Wintertodt crates.",
			"tools": [
				{
					"id": 590,
					"name": "Tinderbox",
					"level": 1
				},
				{
					"id": 1511,
					"name": "Logs",
					"level": 1
				},
				{
					"id": 1521,
					"name": "Oak logs",
					"level": 15
				},
				{
					"id": 1519,
					"name": "Willow logs",
					"level": 30
				},
				{
					"id": 1517,
					"name": "Maple logs",
					"level": 45
				},
				{
					"id": 1515,
					"name": "Yew logs",
					"level": 60
				},
				{
					"id": 1513,
					"name": "Magic logs",
					"level": 75
				},
				{
					"id": 19669,
					"name": "Redwood logs",
					"level": 90
				}
			],
			"methods": [{
				"name": "Wintertodt",
				"level": "50–99",
				"why": "Best XP and rewards. Pyromancer outfit + warm clothing.",
				"items": [
					{
						"id": 590,
						"name": "Tinderbox"
					},
					{
						"id": 20704,
						"name": "Burning brazier",
						"optional": true
					},
					{
						"id": 20704,
						"name": "Burning brazier",
						"optional": true
					}
				]
			}, {
				"name": "Bonfires / redwood",
				"level": "90–99",
				"why": "Add logs to an existing fire in the Woodcutting Guild.",
				"items": [{
					"id": 19669,
					"name": "Redwood logs",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"tinderbox",
				" logs",
				"pyromancer",
				"bruma",
				"warm gloves",
				"burnt page",
				"pyre"
			] }, { "ids": [
				590,
				1511,
				1521,
				1519,
				1517,
				1515,
				1513,
				19669,
				6333,
				6332
			] }]
		},
		{
			"id": "WOODCUTTING",
			"name": "Woodcutting",
			"rsSkill": "WOODCUTTING",
			"blurb": "Axes, logs, forestry kit, lumberjack, nests. One section, high-tier logs first.",
			"tools": [
				{
					"id": 1351,
					"name": "Bronze axe",
					"level": 1
				},
				{
					"id": 1349,
					"name": "Iron axe",
					"level": 1
				},
				{
					"id": 1353,
					"name": "Steel axe",
					"level": 6
				},
				{
					"id": 1361,
					"name": "Black axe",
					"level": 11
				},
				{
					"id": 1355,
					"name": "Mithril axe",
					"level": 21
				},
				{
					"id": 1357,
					"name": "Adamant axe",
					"level": 31
				},
				{
					"id": 1359,
					"name": "Rune axe",
					"level": 41
				},
				{
					"id": 6739,
					"name": "Dragon axe",
					"level": 61
				},
				{
					"id": 13241,
					"name": "Infernal axe",
					"level": 61
				},
				{
					"id": 23673,
					"name": "Crystal axe",
					"level": 71
				}
			],
			"methods": [{
				"name": "Forestry",
				"level": "1–99",
				"why": "Best overall. Events give XP and the forestry shop kit.",
				"items": [
					{
						"id": 6739,
						"name": "Dragon axe"
					},
					{
						"id": 28136,
						"name": "Forestry kit",
						"optional": true
					},
					{
						"id": 28140,
						"name": "Log basket",
						"optional": true
					}
				]
			}, {
				"name": "Teaks / redwoods",
				"level": "35–99",
				"why": "Teaks at 35, yews at 60, redwoods at 90 in the WC guild.",
				"items": [{
					"id": 6333,
					"name": "Teak logs",
					"optional": true
				}, {
					"id": 19669,
					"name": "Redwood logs",
					"optional": true
				}]
			}],
			"matchAny": [
				{ "nameContains": [
					" logs",
					"forestry",
					"lumberjack",
					"bird nest",
					"clue nest",
					"log basket"
				] },
				{
					"nameContains": [" axe"],
					"nameExclude": [
						"pickaxe",
						"battleaxe",
						"greataxe",
						"thrownaxe"
					]
				},
				{ "ids": [
					1351,
					1349,
					1353,
					1361,
					1355,
					1357,
					1359,
					6739,
					13241,
					23673,
					28136,
					28140,
					10941,
					10939,
					10940,
					10933
				] }
			]
		},
		{
			"id": "FARMING",
			"name": "Farming",
			"rsSkill": "FARMING",
			"blurb": "Seeds, saplings, compost, bottomless bucket, tools.",
			"tools": [
				{
					"id": 5341,
					"name": "Rake",
					"level": 1
				},
				{
					"id": 5325,
					"name": "Gardening trowel",
					"level": 1
				},
				{
					"id": 5329,
					"name": "Secateurs",
					"level": 1
				},
				{
					"id": 5343,
					"name": "Seed dibber",
					"level": 1
				},
				{
					"id": 5340,
					"name": "Watering can",
					"level": 1
				},
				{
					"id": 7409,
					"name": "Magic secateurs",
					"level": 1
				},
				{
					"id": 22997,
					"name": "Bottomless compost bucket",
					"level": 1
				}
			],
			"methods": [{
				"name": "Tree + herb runs",
				"level": "1–99",
				"why": "The actual 99 method. Magic secateurs, ultracompost, teleports.",
				"items": [
					{
						"id": 7409,
						"name": "Magic secateurs"
					},
					{
						"id": 21483,
						"name": "Ultracompost",
						"optional": true
					},
					{
						"id": 22997,
						"name": "Bottomless compost bucket",
						"optional": true
					}
				]
			}, {
				"name": "Tithe Farm",
				"level": "34–99",
				"why": "Unlocks the fruit barrel, auto-weed and watering can upgrades.",
				"items": [{
					"id": 13421,
					"name": "Grape seed",
					"optional": true
				}]
			}],
			"matchAny": [{ "nameContains": [
				"seed",
				"sapling",
				"compost",
				"rake",
				"secateurs",
				"seed dibber",
				"gardening trowel",
				"watering can",
				"bottomless",
				"seed box",
				"plant pot",
				"tree pot",
				"white lily",
				"hedge",
				"bush"
			] }, { "nameExclude": ["seed pod", "seeded"] }]
		},
		{
			"id": "RAIDS",
			"name": "Raids",
			"rsSkill": null,
			"blurb": "CoX, ToB and ToA kits. Weapons and armour first, then supplies. Keep each raid in its own block with a placeholder gap.",
			"tools": [
				{
					"id": 20997,
					"name": "Twisted bow",
					"level": 1
				},
				{
					"id": 21006,
					"name": "Kodai wand",
					"level": 1
				},
				{
					"id": 21003,
					"name": "Elder maul",
					"level": 1
				},
				{
					"id": 22486,
					"name": "Scythe of vitur",
					"level": 1
				},
				{
					"id": 22323,
					"name": "Sanguinesti staff",
					"level": 1
				},
				{
					"id": 22322,
					"name": "Avernic defender",
					"level": 1
				},
				{
					"id": 26219,
					"name": "Osmumten's fang",
					"level": 1
				},
				{
					"id": 27275,
					"name": "Tumeken's shadow",
					"level": 1
				},
				{
					"id": 25975,
					"name": "Lightbearer",
					"level": 1
				}
			],
			"methods": [
				{
					"name": "Chambers of Xeric",
					"level": "CoX",
					"why": "Tbow / shadow / ancestral / kodai, then overloads, prayer enhance, brew/restore.",
					"items": [
						{
							"id": 20997,
							"name": "Twisted bow",
							"optional": true
						},
						{
							"id": 21021,
							"name": "Ancestral robe top",
							"optional": true
						},
						{
							"id": 20996,
							"name": "Overload (4)",
							"optional": true
						},
						{
							"id": 6685,
							"name": "Saradomin brew(4)"
						},
						{
							"id": 3024,
							"name": "Super restore(4)"
						}
					]
				},
				{
					"name": "Theatre of Blood",
					"level": "ToB",
					"why": "Scythe, sang, avernic, justiciar. Brews, restores, thralls.",
					"items": [
						{
							"id": 22486,
							"name": "Scythe of vitur",
							"optional": true
						},
						{
							"id": 22323,
							"name": "Sanguinesti staff",
							"optional": true
						},
						{
							"id": 22322,
							"name": "Avernic defender",
							"optional": true
						},
						{
							"id": 22327,
							"name": "Justiciar chestguard",
							"optional": true
						}
					]
				},
				{
					"name": "Tombs of Amascut",
					"level": "ToA",
					"why": "Fang, shadow, lightbearer, masori. Salts, liquid adrenaline, restoratives.",
					"items": [
						{
							"id": 26219,
							"name": "Osmumten's fang",
							"optional": true
						},
						{
							"id": 27275,
							"name": "Tumeken's shadow",
							"optional": true
						},
						{
							"id": 25975,
							"name": "Lightbearer",
							"optional": true
						},
						{
							"id": 27343,
							"name": "Smelling salts",
							"optional": true
						},
						{
							"id": 27347,
							"name": "Liquid adrenaline",
							"optional": true
						}
					]
				}
			],
			"matchAny": [
				{ "nameContains": [
					"twisted bow",
					"twisted ancestral",
					"kodai",
					"ancestral robe",
					"ancestral hat",
					"olmlet",
					"xeric",
					"overload (",
					"prayer enhance",
					"dinh's",
					"twisted buckler",
					"elder maul"
				] },
				{ "nameContains": [
					"scythe of vitur",
					"sanguinesti",
					"ghrazi",
					"avernic",
					"justiciar",
					"dawnbringer"
				] },
				{ "nameContains": [
					"tumeken",
					"osmumten",
					"lightbearer",
					"elidinis",
					"masori",
					"keris partisan",
					"smelling salts",
					"liquid adrenaline",
					"silk dressing",
					"blessed crystal",
					"menaphite remedy"
				] },
				{ "ids": [
					20997,
					21006,
					21003,
					21018,
					21021,
					21024,
					22486,
					22481,
					22323,
					22322,
					22324,
					22326,
					22327,
					22328,
					26219,
					27275,
					27277,
					25975,
					25985,
					27226,
					27229,
					27232,
					20996,
					27343,
					27347
				] }
			]
		},
		{
			"id": "OTHER",
			"name": "Uncategorized",
			"rsSkill": null,
			"blurb": "Quest items, clues, coins and leftovers. Raids have their own page. Park the rest in tab 9.",
			"tools": [],
			"methods": [{
				"name": "Manual sort",
				"level": "—",
				"why": "Clues, quest kits, coins and odds-and-ends. Keep placeholders so this tab stays stable.",
				"items": [{
					"id": 995,
					"name": "Coins",
					"optional": true
				}, {
					"name": "Clue scroll",
					"optional": true
				}]
			}],
			"matchAny": []
		}
	]
};
var demo_bank_default = {
	label: "Sample bank — mid-game main",
	note: "The plugin reads your real bank in RuneLite. This preview uses a typical 1.7k-total bank so you can click every skill page.",
	stacks: [
		{
			"id": 995,
			"name": "Coins",
			"qty": 18422e3,
			"price": 1
		},
		{
			"id": 1321,
			"name": "Bronze scimitar",
			"qty": 1,
			"price": 32
		},
		{
			"id": 1333,
			"name": "Rune scimitar",
			"qty": 1,
			"price": 15e3
		},
		{
			"id": 4587,
			"name": "Dragon scimitar",
			"qty": 1,
			"price": 59e3
		},
		{
			"id": 4151,
			"name": "Abyssal whip",
			"qty": 1,
			"price": 25e5
		},
		{
			"id": 4153,
			"name": "Granite maul",
			"qty": 1,
			"price": 34e4
		},
		{
			"id": 13576,
			"name": "Dragon warhammer",
			"qty": 1,
			"price": 32e6
		},
		{
			"id": 1127,
			"name": "Rune platebody",
			"qty": 2,
			"price": 38500
		},
		{
			"id": 1079,
			"name": "Rune platelegs",
			"qty": 1,
			"price": 37800
		},
		{
			"id": 12954,
			"name": "Dragon defender",
			"qty": 1,
			"price": 0
		},
		{
			"id": 11832,
			"name": "Bandos chestplate",
			"qty": 1,
			"price": 18e6
		},
		{
			"id": 11834,
			"name": "Bandos tassets",
			"qty": 1,
			"price": 23e6
		},
		{
			"id": 861,
			"name": "Magic shortbow",
			"qty": 1,
			"price": 850
		},
		{
			"id": 9185,
			"name": "Rune crossbow",
			"qty": 1,
			"price": 7200
		},
		{
			"id": 12926,
			"name": "Toxic blowpipe",
			"qty": 1,
			"price": 42e5
		},
		{
			"id": 892,
			"name": "Rune arrow",
			"qty": 8420,
			"price": 72
		},
		{
			"id": 11875,
			"name": "Broad bolts",
			"qty": 12e3,
			"price": 55
		},
		{
			"id": 2503,
			"name": "Black d'hide body",
			"qty": 1,
			"price": 7800
		},
		{
			"id": 10034,
			"name": "Red chinchompa",
			"qty": 1840,
			"price": 720
		},
		{
			"id": 2,
			"name": "Cannonball",
			"qty": 4300,
			"price": 210
		},
		{
			"id": 536,
			"name": "Dragon bones",
			"qty": 940,
			"price": 2800
		},
		{
			"id": 532,
			"name": "Big bones",
			"qty": 310,
			"price": 180
		},
		{
			"id": 22124,
			"name": "Superior dragon bones",
			"qty": 40,
			"price": 19e3
		},
		{
			"id": 13448,
			"name": "Ensouled dragon head",
			"qty": 28,
			"price": 9500
		},
		{
			"id": 556,
			"name": "Air rune",
			"qty": 24e3,
			"price": 5
		},
		{
			"id": 555,
			"name": "Water rune",
			"qty": 8e3,
			"price": 5
		},
		{
			"id": 557,
			"name": "Earth rune",
			"qty": 8e3,
			"price": 5
		},
		{
			"id": 554,
			"name": "Fire rune",
			"qty": 18e3,
			"price": 5
		},
		{
			"id": 561,
			"name": "Nature rune",
			"qty": 4200,
			"price": 110
		},
		{
			"id": 563,
			"name": "Law rune",
			"qty": 2100,
			"price": 130
		},
		{
			"id": 560,
			"name": "Death rune",
			"qty": 6500,
			"price": 180
		},
		{
			"id": 565,
			"name": "Blood rune",
			"qty": 3100,
			"price": 310
		},
		{
			"id": 562,
			"name": "Chaos rune",
			"qty": 9e3,
			"price": 70
		},
		{
			"id": 1387,
			"name": "Staff of fire",
			"qty": 1,
			"price": 1200
		},
		{
			"id": 1401,
			"name": "Mystic fire staff",
			"qty": 1,
			"price": 25e3
		},
		{
			"id": 12791,
			"name": "Rune pouch",
			"qty": 1,
			"price": 0
		},
		{
			"id": 11907,
			"name": "Trident of the seas",
			"qty": 1,
			"price": 65e4
		},
		{
			"id": 7936,
			"name": "Pure essence",
			"qty": 14500,
			"price": 2
		},
		{
			"id": 5510,
			"name": "Medium pouch",
			"qty": 1,
			"price": 0
		},
		{
			"id": 5512,
			"name": "Large pouch",
			"qty": 1,
			"price": 0
		},
		{
			"id": 5514,
			"name": "Giant pouch",
			"qty": 1,
			"price": 0
		},
		{
			"id": 8778,
			"name": "Oak plank",
			"qty": 820,
			"price": 450
		},
		{
			"id": 8782,
			"name": "Mahogany plank",
			"qty": 410,
			"price": 2100
		},
		{
			"id": 8794,
			"name": "Saw",
			"qty": 1,
			"price": 13
		},
		{
			"id": 2347,
			"name": "Hammer",
			"qty": 1,
			"price": 70
		},
		{
			"id": 385,
			"name": "Shark",
			"qty": 620,
			"price": 720
		},
		{
			"id": 7946,
			"name": "Monkfish",
			"qty": 340,
			"price": 380
		},
		{
			"id": 13441,
			"name": "Anglerfish",
			"qty": 85,
			"price": 1800
		},
		{
			"id": 3144,
			"name": "Cooked karambwan",
			"qty": 210,
			"price": 420
		},
		{
			"id": 2434,
			"name": "Prayer potion(4)",
			"qty": 48,
			"price": 9500
		},
		{
			"id": 12695,
			"name": "Super combat potion(4)",
			"qty": 22,
			"price": 14e3
		},
		{
			"id": 12625,
			"name": "Stamina potion(4)",
			"qty": 31,
			"price": 6200
		},
		{
			"id": 11850,
			"name": "Graceful hood",
			"qty": 1,
			"price": 0
		},
		{
			"id": 11852,
			"name": "Graceful top",
			"qty": 1,
			"price": 0
		},
		{
			"id": 11854,
			"name": "Graceful legs",
			"qty": 1,
			"price": 0
		},
		{
			"id": 11856,
			"name": "Graceful gloves",
			"qty": 1,
			"price": 0
		},
		{
			"id": 11858,
			"name": "Graceful boots",
			"qty": 1,
			"price": 0
		},
		{
			"id": 11860,
			"name": "Graceful cape",
			"qty": 1,
			"price": 0
		},
		{
			"id": 11849,
			"name": "Mark of grace",
			"qty": 64,
			"price": 0
		},
		{
			"id": 199,
			"name": "Grimy guam leaf",
			"qty": 140,
			"price": 280
		},
		{
			"id": 207,
			"name": "Grimy ranarr weed",
			"qty": 95,
			"price": 6200
		},
		{
			"id": 257,
			"name": "Ranarr weed",
			"qty": 40,
			"price": 6400
		},
		{
			"id": 269,
			"name": "Torstol",
			"qty": 18,
			"price": 8500
		},
		{
			"id": 227,
			"name": "Vial of water",
			"qty": 520,
			"price": 4
		},
		{
			"id": 231,
			"name": "Snape grass",
			"qty": 210,
			"price": 180
		},
		{
			"id": 233,
			"name": "Pestle and mortar",
			"qty": 1,
			"price": 4
		},
		{
			"id": 5554,
			"name": "Rogue mask",
			"qty": 1,
			"price": 0
		},
		{
			"id": 5553,
			"name": "Rogue top",
			"qty": 1,
			"price": 0
		},
		{
			"id": 5555,
			"name": "Rogue trousers",
			"qty": 1,
			"price": 0
		},
		{
			"id": 21143,
			"name": "Dodgy necklace",
			"qty": 6,
			"price": 8500
		},
		{
			"id": 1733,
			"name": "Needle",
			"qty": 1,
			"price": 1
		},
		{
			"id": 1734,
			"name": "Thread",
			"qty": 240,
			"price": 8
		},
		{
			"id": 2509,
			"name": "Black dragon leather",
			"qty": 180,
			"price": 3100
		},
		{
			"id": 1631,
			"name": "Uncut dragonstone",
			"qty": 55,
			"price": 14100
		},
		{
			"id": 1775,
			"name": "Molten glass",
			"qty": 900,
			"price": 90
		},
		{
			"id": 946,
			"name": "Knife",
			"qty": 1,
			"price": 25
		},
		{
			"id": 1777,
			"name": "Bow string",
			"qty": 1400,
			"price": 180
		},
		{
			"id": 66,
			"name": "Yew longbow (u)",
			"qty": 310,
			"price": 420
		},
		{
			"id": 52,
			"name": "Arrow shaft",
			"qty": 8e3,
			"price": 1
		},
		{
			"id": 4155,
			"name": "Enchanted gem",
			"qty": 1,
			"price": 0
		},
		{
			"id": 11864,
			"name": "Slayer helmet",
			"qty": 1,
			"price": 0
		},
		{
			"id": 10008,
			"name": "Box trap",
			"qty": 5,
			"price": 32
		},
		{
			"id": 10006,
			"name": "Bird snare",
			"qty": 4,
			"price": 6
		},
		{
			"id": 11260,
			"name": "Impling jar",
			"qty": 40,
			"price": 1200
		},
		{
			"id": 1275,
			"name": "Rune pickaxe",
			"qty": 1,
			"price": 18700
		},
		{
			"id": 11920,
			"name": "Dragon pickaxe",
			"qty": 1,
			"price": 145e4
		},
		{
			"id": 440,
			"name": "Iron ore",
			"qty": 2400,
			"price": 150
		},
		{
			"id": 453,
			"name": "Coal",
			"qty": 5100,
			"price": 170
		},
		{
			"id": 449,
			"name": "Adamantite ore",
			"qty": 380,
			"price": 1100
		},
		{
			"id": 451,
			"name": "Runite ore",
			"qty": 42,
			"price": 11100
		},
		{
			"id": 21347,
			"name": "Amethyst",
			"qty": 220,
			"price": 3800
		},
		{
			"id": 2361,
			"name": "Adamantite bar",
			"qty": 410,
			"price": 1900
		},
		{
			"id": 2363,
			"name": "Runite bar",
			"qty": 55,
			"price": 12400
		},
		{
			"id": 12019,
			"name": "Coal bag",
			"qty": 1,
			"price": 0
		},
		{
			"id": 776,
			"name": "Goldsmith gauntlets",
			"qty": 1,
			"price": 0
		},
		{
			"id": 309,
			"name": "Fly fishing rod",
			"qty": 1,
			"price": 8
		},
		{
			"id": 301,
			"name": "Lobster pot",
			"qty": 1,
			"price": 20
		},
		{
			"id": 21028,
			"name": "Dragon harpoon",
			"qty": 1,
			"price": 12e5
		},
		{
			"id": 377,
			"name": "Raw lobster",
			"qty": 540,
			"price": 150
		},
		{
			"id": 383,
			"name": "Raw shark",
			"qty": 260,
			"price": 520
		},
		{
			"id": 13439,
			"name": "Raw anglerfish",
			"qty": 70,
			"price": 1400
		},
		{
			"id": 314,
			"name": "Feather",
			"qty": 5e3,
			"price": 3
		},
		{
			"id": 775,
			"name": "Cooking gauntlets",
			"qty": 1,
			"price": 0
		},
		{
			"id": 590,
			"name": "Tinderbox",
			"qty": 1,
			"price": 1
		},
		{
			"id": 20708,
			"name": "Pyromancer hood",
			"qty": 1,
			"price": 0
		},
		{
			"id": 20706,
			"name": "Pyromancer garb",
			"qty": 1,
			"price": 0
		},
		{
			"id": 20704,
			"name": "Pyromancer robe",
			"qty": 1,
			"price": 0
		},
		{
			"id": 20710,
			"name": "Pyromancer boots",
			"qty": 1,
			"price": 0
		},
		{
			"id": 1517,
			"name": "Maple logs",
			"qty": 4120,
			"price": 12
		},
		{
			"id": 1515,
			"name": "Yew logs",
			"qty": 890,
			"price": 220
		},
		{
			"id": 1513,
			"name": "Magic logs",
			"qty": 210,
			"price": 1040
		},
		{
			"id": 19669,
			"name": "Redwood logs",
			"qty": 80,
			"price": 340
		},
		{
			"id": 6333,
			"name": "Teak logs",
			"qty": 640,
			"price": 180
		},
		{
			"id": 1359,
			"name": "Rune axe",
			"qty": 1,
			"price": 8e3
		},
		{
			"id": 6739,
			"name": "Dragon axe",
			"qty": 1,
			"price": 72e3
		},
		{
			"id": 10941,
			"name": "Lumberjack hat",
			"qty": 1,
			"price": 0
		},
		{
			"id": 10939,
			"name": "Lumberjack top",
			"qty": 1,
			"price": 0
		},
		{
			"id": 5075,
			"name": "Bird nest",
			"qty": 14,
			"price": 4500
		},
		{
			"id": 5295,
			"name": "Ranarr seed",
			"qty": 38,
			"price": 21e3
		},
		{
			"id": 5316,
			"name": "Magic seed",
			"qty": 4,
			"price": 48e3
		},
		{
			"id": 7409,
			"name": "Magic secateurs",
			"qty": 1,
			"price": 0
		},
		{
			"id": 21483,
			"name": "Ultracompost",
			"qty": 90,
			"price": 520
		},
		{
			"id": 5341,
			"name": "Rake",
			"qty": 1,
			"price": 6
		},
		{
			"id": 19836,
			"name": "Clue scroll (elite)",
			"qty": 1,
			"price": 0
		},
		{
			"id": 2677,
			"name": "Clue scroll (easy)",
			"qty": 2,
			"price": 0
		},
		{
			"id": 13190,
			"name": "Old school bond",
			"qty": 1,
			"price": 85e5
		},
		{
			"id": 20997,
			"name": "Twisted bow",
			"qty": 1,
			"price": 14e8
		},
		{
			"id": 21021,
			"name": "Ancestral robe top",
			"qty": 1,
			"price": 85e6
		},
		{
			"id": 21024,
			"name": "Ancestral robe bottom",
			"qty": 1,
			"price": 79e6
		},
		{
			"id": 20996,
			"name": "Overload (4)",
			"qty": 8,
			"price": 0
		},
		{
			"id": 22486,
			"name": "Scythe of vitur",
			"qty": 1,
			"price": 78e7
		},
		{
			"id": 22323,
			"name": "Sanguinesti staff",
			"qty": 1,
			"price": 72e6
		},
		{
			"id": 22322,
			"name": "Avernic defender",
			"qty": 1,
			"price": 0
		},
		{
			"id": 22327,
			"name": "Justiciar chestguard",
			"qty": 1,
			"price": 16e6
		},
		{
			"id": 27275,
			"name": "Tumeken's shadow",
			"qty": 1,
			"price": 11e8
		},
		{
			"id": 25975,
			"name": "Lightbearer",
			"qty": 1,
			"price": 18e6
		},
		{
			"id": 27229,
			"name": "Masori body",
			"qty": 1,
			"price": 55e6
		},
		{
			"id": 27343,
			"name": "Smelling salts",
			"qty": 24,
			"price": 0
		},
		{
			"id": 27347,
			"name": "Liquid adrenaline",
			"qty": 16,
			"price": 0
		},
		{
			"id": 6685,
			"name": "Saradomin brew(4)",
			"qty": 40,
			"price": 4200
		},
		{
			"id": 3024,
			"name": "Super restore(4)",
			"qty": 40,
			"price": 11e3
		}
	]
};
var catalog = skill_catalog_default;
var demoBank = demo_bank_default.stacks;
var demoBankMeta = {
	label: demo_bank_default.label,
	note: demo_bank_default.note
};
function matchesMatcher(stack, matcher) {
	const name = stack.name.toLowerCase();
	const idHit = matcher.ids?.includes(stack.id) ?? false;
	const containsHit = matcher.nameContains?.some((token) => name.includes(token.toLowerCase())) ?? false;
	if (!idHit && !containsHit) return false;
	if (matcher.nameExclude?.some((token) => name.includes(token.toLowerCase()))) return false;
	return true;
}
function skillOwns(skill, stack) {
	if (skill.id === "OTHER") return false;
	return skill.matchAny.some((matcher) => matchesMatcher(stack, matcher));
}
function skillsForItem(stack) {
	return catalog.skills.filter((skill) => skill.id !== "OTHER" && skillOwns(skill, stack));
}
function tagName(skill) {
	return skill.name.toLowerCase().replace(/\s+/g, "-");
}
function findStack(stacks, item) {
	const needle = item.name.toLowerCase();
	if (item.id != null) {
		const byId = stacks.find((s) => s.id === item.id);
		if (byId) return byId;
	}
	return stacks.find((s) => {
		const n = s.name.toLowerCase();
		return n === needle || n.includes(needle);
	});
}
function buildPages(stacks) {
	const claimed = /* @__PURE__ */ new Set();
	const pages = catalog.skills.filter((skill) => skill.id !== "OTHER").map((skill) => buildPage(skill, stacks, claimed));
	const otherStacks = stacks.filter((s) => !claimed.has(s.id));
	const other = catalog.skills.find((s) => s.id === "OTHER");
	if (other) pages.push(buildPage(other, otherStacks, claimed, true));
	return pages;
}
function buildPage(skill, stacks, claimed, takeAll = false) {
	const owned = takeAll ? stacks : stacks.filter((s) => skillOwns(skill, s));
	for (const s of owned) claimed.add(s.id);
	const tools = skill.tools.map((tool) => {
		const hit = findStack(owned, tool) ?? findStack(stacks, tool);
		return {
			...tool,
			owned: Boolean(hit),
			qty: hit?.qty ?? 0,
			bestOwned: false
		};
	});
	const best = [...tools].reverse().find((t) => t.owned);
	if (best) best.bestOwned = true;
	const methods = skill.methods.map((method) => {
		const items = method.items.map((need) => {
			const hit = findStack(stacks, need);
			return {
				...need,
				owned: Boolean(hit),
				qty: hit?.qty ?? 0
			};
		});
		const required = items.filter((i) => !i.optional);
		const ready = required.length === 0 || required.every((i) => i.owned);
		return {
			...method,
			items,
			ready
		};
	});
	const missingCount = methods.reduce((n, m) => n + m.items.filter((i) => !i.optional && !i.owned).length, 0);
	const toolIds = new Set(skill.tools.map((t) => t.id));
	const rebuild = [...owned].sort((a, b) => {
		const at = toolIds.has(a.id) ? 0 : 1;
		const bt = toolIds.has(b.id) ? 0 : 1;
		if (at !== bt) return at - bt;
		const av = a.price * a.qty;
		return b.price * b.qty - av;
	});
	const tab = catalog.tabs.find((t) => t.skills.includes(skill.id)) ?? null;
	const geValue = owned.reduce((sum, s) => sum + s.price * s.qty, 0);
	const totalQty = owned.reduce((sum, s) => sum + s.qty, 0);
	return {
		skill,
		tab,
		stacks: owned,
		stackCount: owned.length,
		totalQty,
		geValue,
		tools,
		methods,
		rebuild,
		missingCount
	};
}
function formatGp(value) {
	if (value >= 1e7) return `${(value / 1e6).toFixed(1)}m`;
	if (value >= 1e6) return `${(value / 1e6).toFixed(2)}m`;
	if (value >= 1e4) return `${Math.round(value / 1e3)}k`;
	return value.toLocaleString();
}
function formatQty(qty) {
	if (qty >= 1e7) return `${(qty / 1e6).toFixed(1)}m`;
	if (qty >= 1e5) return `${Math.round(qty / 1e3)}k`;
	return qty.toLocaleString();
}
function itemIconUrl(id) {
	return `https://static.runelite.net/cache/item/icon/${id}.png`;
}
function skillIconUrl(rsSkill) {
	if (!rsSkill) return null;
	return `https://oldschool.runescape.wiki/w/Special:FilePath/${rsSkill.charAt(0) + rsSkill.slice(1).toLowerCase()}_icon.png`;
}
function skillCode(id) {
	switch (id) {
		case "HITPOINTS": return "HP";
		case "RUNECRAFT": return "RC";
		case "CONSTRUCTION": return "CO";
		case "HERBLORE": return "HER";
		case "FIREMAKING": return "FM";
		case "WOODCUTTING": return "WC";
		case "RAIDS": return "RD";
		case "OTHER": return "?";
		default: return id.slice(0, 2);
	}
}
function ItemIcon({ id, name, size = "md" }) {
	const [failed, setFailed] = (0, import_react.useState)(id <= 0);
	const dim = size === "sm" ? "size-7" : "size-9";
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(dim, "grid shrink-0 place-items-center rounded-sm bg-slot text-[10px] font-medium uppercase tracking-wide text-muted"),
		"aria-hidden": true,
		children: name.slice(0, 1)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: itemIconUrl(id),
		alt: "",
		width: size === "sm" ? 28 : 36,
		height: size === "sm" ? 28 : 36,
		className: cn(dim, "shrink-0 image-pixelated object-contain"),
		onError: () => setFailed(true)
	});
}
function SkillGlyph({ id, rsSkill, name }) {
	const [failed, setFailed] = (0, import_react.useState)(!rsSkill);
	const src = skillIconUrl(rsSkill);
	if (failed || !src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid size-8 shrink-0 place-items-center rounded-md bg-slot text-[10px] font-semibold tracking-wide text-gold",
		children: skillCode(id)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: "",
		width: 32,
		height: 32,
		className: "size-8 shrink-0 object-contain",
		onError: () => setFailed(true)
	});
}
function OrganizerApp() {
	const pages = (0, import_react.useMemo)(() => buildPages(demoBank), []);
	const [view, setView] = (0, import_react.useState)({ kind: "home" });
	const [query, setQuery] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)(null);
	const [menu, setMenu] = (0, import_react.useState)(null);
	const [tagged, setTagged] = (0, import_react.useState)({});
	function openItemMenu(item, x, y) {
		setMenu({
			item,
			x,
			y
		});
	}
	function sendTo(skill, item) {
		const tag = tagName(skill);
		setTagged((prev) => {
			const cur = new Set(prev[item.id] ?? []);
			cur.add(tag);
			return {
				...prev,
				[item.id]: [...cur]
			};
		});
		setView({
			kind: "skill",
			id: skill.id
		});
		setMenu(null);
		const tab = catalog.tabs.find((t) => t.skills.includes(skill.id));
		setToast(`${item.name} → ${skill.name}${tab ? ` · tab ${tab.id}` : ""}. Tagged #${tag}. Plugins cannot drag bank items — move it by hand.`);
		window.setTimeout(() => setToast(null), 4200);
	}
	const filtered = pages.filter((p) => query.trim() ? p.skill.name.toLowerCase().includes(query.trim().toLowerCase()) : true);
	const active = view.kind === "skill" ? pages.find((p) => p.skill.id === view.id) : void 0;
	const totals = pages.reduce((acc, p) => {
		acc.stacks += p.stackCount;
		acc.gp += p.geValue;
		return acc;
	}, {
		stacks: 0,
		gp: 0
	});
	async function copyRebuild(page) {
		const lines = page.rebuild.map((s, i) => `${i + 1}. ${s.name} x${s.qty}`);
		const tab = page.tab ? `Tab ${page.tab.id} · ${page.tab.name}` : "Any tab";
		await navigator.clipboard.writeText(`${page.skill.name} — ${tab}\n${lines.join("\n")}`);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh overflow-x-hidden bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-line bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.18em] text-gold",
								children: "RuneLite plugin"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 break-words font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
								children: "Skill Bank Organizer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
								children: demoBankMeta.note
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/skill-bank-organizer.zip",
							download: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download plugin"]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid min-w-0 max-w-6xl gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 rounded-xl border border-line bg-panel p-3 lg:rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Filter skills",
							className: "h-11 w-full rounded-lg border border-line bg-slot pl-10 pr-3 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex min-w-0 gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView({ kind: "home" }),
							className: cn("flex min-h-11 min-w-36 shrink-0 items-center gap-2 rounded-lg px-3 text-left text-sm lg:min-w-0", view.kind === "home" ? "bg-slot text-ink" : "text-muted hover:bg-slot/70 hover:text-ink"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "size-4 shrink-0" }), "All skills"]
						}), filtered.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView({
								kind: "skill",
								id: page.skill.id
							}),
							className: cn("flex min-h-11 min-w-44 shrink-0 items-center gap-2 rounded-lg px-2 text-left lg:min-w-0 lg:w-full", view.kind === "skill" && view.id === page.skill.id ? "bg-slot text-ink" : "text-muted hover:bg-slot/70 hover:text-ink"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillGlyph, {
								id: page.skill.id,
								rsSkill: page.skill.rsSkill,
								name: page.skill.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm text-ink",
									children: page.skill.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-xs text-muted",
									children: [
										page.stackCount,
										" · ",
										formatGp(page.geValue)
									]
								})]
							})]
						}, page.skill.id))]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "min-w-0 overflow-x-hidden",
					children: [
						view.kind === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home$1, {
							pages,
							totals,
							onOpenSkill: (id) => setView({
								kind: "skill",
								id
							}),
							onOpenTab: (id) => setView({
								kind: "tab",
								id
							})
						}),
						view.kind === "tab" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabGuide, {
							tabId: view.id,
							pages,
							onBack: () => setView({ kind: "home" }),
							onOpenSkill: (id) => setView({
								kind: "skill",
								id
							}),
							onItemMenu: openItemMenu,
							tagged
						}),
						active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillDetail, {
							page: active,
							copied,
							onBack: () => setView({ kind: "home" }),
							onCopy: () => void copyRebuild(active),
							onItemMenu: openItemMenu,
							tagged
						})
					]
				})]
			}),
			menu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemSendMenu, {
				menu,
				onClose: () => setMenu(null),
				onSend: sendTo
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-lg rounded-xl border border-line bg-panel px-4 py-3 text-sm leading-relaxed text-ink shadow-lg",
					children: toast
				})
			})
		]
	});
}
function Home$1({ pages, totals, onOpenSkill, onOpenTab }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-line bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-gold",
						children: "Last scan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl",
						children: demoBankMeta.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							totals.stacks,
							" stacks · ",
							formatGp(totals.gp),
							" gp · ",
							pages.length,
							" pages"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 space-y-2 text-sm leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. Open your bank. The plugin reads every stack and files it onto a skill page, including Raids." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Right-click (or tap) an item → Send to Woodcutting / Raids / Magic. That opens the page and writes a Bank Tag." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "3. Plugins are not allowed to drag your bank. Search #raids in the bank, or pull the item onto that tab yourself." })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-line bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Suggested bank tabs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Nine tabs. Skills share a tab; leave a placeholder gap between them."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-2 sm:grid-cols-2",
						children: catalog.tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onOpenTab(tab.id),
							className: "rounded-xl border border-line bg-slot p-4 text-left hover:border-gold/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-gold",
									children: ["Tab ", tab.id]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-medium text-ink",
									children: tab.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs capitalize text-muted",
									children: tab.skills.map((s) => s.toLowerCase()).join(" · ")
								})
							]
						}, tab.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-line bg-panel p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl",
					children: "How to run the plugin"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Download the zip and open the folder in IntelliJ as a Gradle project." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Run the Gradle task named ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink",
								children: "run"
							}),
							". RuneLite starts in developer mode."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Enable Skill Bank Organizer, open your bank, press Scan if it does not auto-fill." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Rebuild each tab from the page order. Nothing is automated." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onOpenSkill(page.skill.id),
					className: "flex min-h-16 items-center gap-3 rounded-xl border border-line bg-panel px-3 py-3 text-left hover:border-gold/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillGlyph, {
							id: page.skill.id,
							rsSkill: page.skill.rsSkill,
							name: page.skill.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-medium",
								children: page.skill.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-xs text-muted",
								children: [
									page.stackCount,
									" stacks",
									page.missingCount ? ` · ${page.missingCount} missing` : " · ready"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tabular-nums text-gold",
							children: formatGp(page.geValue)
						})
					]
				}, page.skill.id))
			})
		]
	});
}
function TabGuide({ tabId, pages, onBack, onOpenSkill, onItemMenu, tagged }) {
	const tab = catalog.tabs.find((t) => t.id === tabId);
	if (!tab) return null;
	const group = tab.skills.map((id) => pages.find((p) => p.skill.id === id)).filter((p) => Boolean(p));
	const items = group.flatMap((p) => p.rebuild);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Back, {
				onClick: onBack,
				label: "All skills"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-line bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-gold",
						children: ["Rebuild tab ", tab.id]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl",
						children: tab.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Lay these left to right, top to bottom. Start a new row when the skill changes."
					})
				]
			}),
			group.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpenSkill(page.skill.id),
				className: "flex w-full items-center justify-between rounded-xl border border-line bg-panel px-4 py-3 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: page.skill.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [page.stackCount, " stacks"]
				})]
			}, page.skill.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BankGrid, {
				items,
				onItemMenu,
				tagged
			})
		]
	});
}
function SkillDetail({ page, copied, onBack, onCopy, onItemMenu, tagged }) {
	const tab = page.tab ? `tab ${page.tab.id} · ${page.tab.name}` : "any tab";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Back, {
					onClick: onBack,
					label: "All skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "sm",
					onClick: onCopy,
					children: copied ? "Copied" : "Copy rebuild list"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-line bg-panel p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillGlyph, {
						id: page.skill.id,
						rsSkill: page.skill.rsSkill,
						name: page.skill.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: page.skill.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							page.stackCount,
							" stacks · ",
							formatGp(page.geValue),
							" · ",
							tab
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: page.skill.blurb
				})]
			}),
			page.tools.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "Tools — keep the best, drop the rest",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: page.tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						id: tool.id,
						name: tool.name,
						qty: tool.qty,
						extra: tool.owned ? tool.bestOwned ? "best owned" : "owned" : `need ${tool.level}+`,
						ok: tool.owned
					}, tool.id))
				})
			}),
			page.methods.map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
				title: `${method.name}  (${method.level})`,
				eyebrow: method.ready ? "Ready" : "Missing supplies",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm leading-relaxed text-muted",
					children: method.why
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: method.items.map((need) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						id: need.id ?? 0,
						name: need.name,
						qty: need.qty,
						extra: need.optional ? need.owned ? "optional · have" : `optional${need.hint ? ` · ${need.hint}` : ""}` : need.owned ? "have" : need.hint ?? "need",
						ok: need.owned
					}, need.name))
				})]
			}, method.name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "In your bank",
				children: page.stacks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Nothing for this skill in the sample bank."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-muted",
					children: "Click or right-click a stack → Send to page. Same menu the plugin adds in game."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BankGrid, {
					items: page.rebuild,
					onItemMenu,
					tagged
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
				title: "Rebuild order (top to bottom)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 text-sm text-muted",
					children: [
						"Drag these into ",
						tab,
						" in this order. Placeholders keep the section from collapsing."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-1",
					children: page.rebuild.map((stack, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex min-h-11 items-center gap-3 rounded-lg bg-slot px-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 text-right text-xs tabular-nums text-gold",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIcon, {
								id: stack.id,
								name: stack.name,
								size: "sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1 truncate text-sm",
								children: stack.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs tabular-nums text-muted",
								children: ["×", formatQty(stack.qty)]
							})
						]
					}, stack.id))
				})]
			})
		]
	});
}
function BankGrid({ items, onItemMenu, tagged }) {
	const slots = Math.max(24, Math.ceil(items.length / 8) * 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-1 sm:grid-cols-8",
		children: Array.from({ length: slots }, (_, i) => {
			const item = items[i];
			const isTagged = item ? (tagged?.[item.id]?.length ?? 0) > 0 : false;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("flex aspect-square items-center justify-center rounded-md bg-slot", isTagged && "ring-1 ring-gold"),
				title: item ? `${item.name} × ${item.qty}` : void 0,
				onContextMenu: item && onItemMenu ? (e) => {
					e.preventDefault();
					onItemMenu(item, e.clientX, e.clientY);
				} : void 0,
				onClick: item && onItemMenu ? (e) => onItemMenu(item, e.clientX, e.clientY) : void 0,
				children: item ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIcon, {
						id: item.id,
						name: item.name
					}), item.qty > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -bottom-1 -right-1 rounded-sm bg-bg/90 px-1 text-[10px] tabular-nums text-ink",
						children: formatQty(item.qty)
					})]
				}) : null
			}, i);
		})
	});
}
function ItemSendMenu({ menu, onClose, onSend }) {
	const skills = skillsForItem(menu.item);
	const dest = skills.length > 0 ? skills : catalog.skills.filter((s) => s.id === "OTHER");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50",
		onClick: onClose,
		onContextMenu: (e) => e.preventDefault(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute min-w-48 rounded-lg border border-line bg-panel py-1 shadow-lg",
			style: {
				left: Math.min(menu.x, window.innerWidth - 220),
				top: Math.min(menu.y, window.innerHeight - 200)
			},
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate px-3 py-2 text-xs text-muted",
					children: menu.item.name
				}),
				dest.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex min-h-11 w-full items-center px-3 text-left text-sm text-ink hover:bg-slot",
					onClick: () => onSend(skill, menu.item),
					children: ["Send to ", skill.name]
				}, skill.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 py-2 text-[11px] leading-snug text-muted",
					children: "Cannot move the item for you. Tags it and opens the page."
				})
			]
		})
	});
}
function Block({ title, eyebrow, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-line bg-panel p-5",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.16em] text-gold",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children
			})
		]
	});
}
function Line({ id, name, qty, extra, ok }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex min-h-11 items-center gap-3 rounded-lg bg-slot px-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIcon, {
				id,
				name,
				size: "sm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 truncate text-sm",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("flex items-center gap-1 text-xs", ok ? "text-ok" : "text-miss"),
				children: [ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" }), qty > 0 ? `${formatQty(qty)} · ${extra}` : extra]
			})
		]
	});
}
function Back({ onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), label]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrganizerApp, {});
}
//#endregion
export { Home as component };
