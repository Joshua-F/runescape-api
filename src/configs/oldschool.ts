export const hiscores = {
  endpoints: {
    normal: `http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player=`,
    ironman: `http://services.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws?player=`,
    hardcore: `http://services.runescape.com/m=hiscore_oldschool_ultimate/index_lite.ws?player=`,
    ultimate: `http://services.runescape.com/m=hiscore_oldschool_ultimate/index_lite.ws?player=`,
    deadman: `http://services.runescape.com/m=hiscore_oldschool_deadman/index_lite.ws?player=`,
    seasonal: `http://services.runescape.com/m=hiscore_oldschool_seasonal/index_lite.ws?player=`,
  },
  activities: [
    "league_points",
    "bounty_hunter_hunter",
    "bounty_hunter_rogue",
    "clue_scrolls_all",
    "clue_scrolls_beginner",
    "clue_scrolls_easy",
    "clue_scrolls_medium",
    "clue_scrolls_hard",
    "clue_scrolls_elite",
    "clue_scrolls_master",
    "last_man_standing",
  ] as const,
  bosses: [
    "abyssal_sire",
    "alchemical_hydra",
    "barrows_chests",
    "bryophyta",
    "callisto",
    "cerberus",
    "chambers_of_xeric",
    "chambers_of_xeric_challenge_mode",
    "chaos_elemental",
    "chaos_fanatic",
    "commander_zilyana",
    "corporeal_beast",
    "crazy_archaeologist",
    "dagannoth_prime",
    "dagannoth_rex",
    "dagannoth_supreme",
    "deranged_archaeologist",
    "general_graardor",
    "giant_mole",
    "grotesque_guardians",
    "hespori",
    "kalphite_queen",
    "king_black_dragon",
    "kraken",
    "kreearra",
    "kril_tsutsaroth",
    "mimic",
    "nightmare",
    "obor",
    "sarachnis",
    "scorpia",
    "skotizo",
    "the_gauntlet",
    "the_corrupted_gauntlet",
    "theatre_of_blood",
    "thermonuclear_smoke_devil",
    "tzkal_zuk",
    "tztok_jad",
    "venenatis",
    "vetion",
    "vorkath",
    "wintertodt",
    "zalcano",
    "zulrah",
  ] as const,
  gamemodes: [
    "normal",
    "ironman",
    "hardcore",
    "ultimate",
    "deadman",
    "seasonal",
  ] as const,
  skills: [
    "overall",
    "attack",
    "defence",
    "strength",
    "constitution",
    "ranged",
    "prayer",
    "magic",
    "cooking",
    "woodcutting",
    "fletching",
    "fishing",
    "firemaking",
    "crafting",
    "smithing",
    "mining",
    "herblore",
    "agility",
    "thieving",
    "slayer",
    "farming",
    "runecrafting",
    "hunter",
    "construction",
  ] as const,
}
export const grandexchange = {
  endpoints: {
    category: `http://services.runescape.com/m=itemdb_oldschool/api/catalogue/category.json?category=`,
    categoryPrice: `http://services.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?`,
    item: `http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=`,
    itemGraph: `http://services.runescape.com/m=itemdb_oldschool/api/graph`,
  },
}

export default {
  hiscores,
  grandexchange,
}
