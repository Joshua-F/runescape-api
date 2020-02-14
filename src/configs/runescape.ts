export const bestiary = {
  endpoints: {
    beast: `http://services.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=`,
    beastTerm: `http://services.runescape.com/m=itemdb_rs/bestiary/beastSearch.json?term=`,
    beastLetter: `http://services.runescape.com/m=itemdb_rs/bestiary/bestiaryNames.json?letter=`,
    areas: `http://services.runescape.com/m=itemdb_rs/bestiary/areaNames.json`,
    beastArea: `http://services.runescape.com/m=itemdb_rs/bestiary/areaBeasts.json?identifier=`,
    beastSlayer: `http://services.runescape.com/m=itemdb_rs/bestiary/slayerBeasts.json?identifier=`,
    beastWeakness: `http://services.runescape.com/m=itemdb_rs/bestiary/weaknessBeasts.json?identifier=`,
    beastLevel: `http://services.runescape.com/m=itemdb_rs/bestiary/levelGroup.json?identifier=`,
    slayerCategories: `http://services.runescape.com/m=itemdb_rs/bestiary/bestiary/slayerCatNames.json`,
    weaknesses: `http://services.runescape.com/m=itemdb_rs/bestiary/bestiary/weaknessNames.json`,
  },
  searchMethods: [
    "terms",
    "firstLetter",
    "area",
    "slayerCategory",
    "weakness",
    "levelRange",
  ] as const,
  slayerCategories: [
    { id: 41, name: "Aberrant spectres" },
    { id: 42, name: "Abyssal demons" },
    { id: 133, name: "Acheron mammoths" },
    { id: 127, name: "Adamant dragons" },
    { id: 117, name: "Airut" },
    { id: 79, name: "Ankou" },
    { id: 95, name: "Aquanites" },
    { id: 115, name: "Ascension members" },
    { id: 114, name: "Aviansies" },
    { id: 38, name: "Banshees" },
    { id: 43, name: "Basilisks" },
    { id: 8, name: "Bats" },
    { id: 13, name: "Bears" },
    { id: 5, name: "Birds" },
    { id: 30, name: "Black demons" },
    { id: 27, name: "Black dragons" },
    { id: 48, name: "Bloodveld" },
    { id: 25, name: "Blue dragons" },
    { id: 84, name: "Brine rats" },
    { id: 58, name: "Bronze dragons" },
    { id: 132, name: "Camel warriors" },
    { id: 78, name: "Catablepon" },
    { id: 63, name: "Cave bugs" },
    { id: 37, name: "Cave crawlers" },
    { id: 80, name: "Cave horrors" },
    { id: 62, name: "Cave slimes" },
    { id: 118, name: "Celestial dragons" },
    { id: 134, name: "Chaos giants" },
    { id: 44, name: "Cockatrice" },
    { id: 152, name: "Corrupted creatures" },
    { id: 143, name: "Corrupted dust devils" },
    { id: 144, name: "Corrupted kalphites" },
    { id: 142, name: "Corrupted lizards" },
    { id: 141, name: "Corrupted scarabs" },
    { id: 140, name: "Corrupted scorpions" },
    { id: 145, name: "Corrupted worker" },
    { id: 6, name: "Cows" },
    { id: 39, name: "Crawling hands" },
    { id: 175, name: "Creatures of Daemonheim" },
    { id: 154, name: "Creatures of the Lost Grove" },
    { id: 113, name: "Cres's creations" },
    { id: 149, name: "Crocodile akh" },
    { id: 65, name: "Crocodiles" },
    { id: 129, name: "Crystal shapeshifters" },
    { id: 108, name: "Cyclopes" },
    { id: 35, name: "Dagannoth" },
    { id: 66, name: "Dark beasts" },
    { id: 174, name: "Demons" },
    { id: 68, name: "Desert lizards" },
    { id: 104, name: "Desert strykewyrms" },
    { id: 171, name: "Dinosaurs" },
    { id: 22, name: "Dogs" },
    { id: 173, name: "Dragons" },
    { id: 49, name: "Dust devils" },
    { id: 57, name: "Dwarves" },
    { id: 54, name: "Earth warriors" },
    { id: 124, name: "Edimmu" },
    { id: 56, name: "Elves" },
    { id: 147, name: "Feline akh" },
    { id: 69, name: "Fever spiders" },
    { id: 16, name: "Fire giants" },
    { id: 77, name: "Fleshcrawlers" },
    { id: 162, name: "Frogs" },
    { id: 99, name: "Fungal magi" },
    { id: 96, name: "Ganodermic creatures" },
    { id: 46, name: "Gargoyles" },
    { id: 111, name: "Gelatinous abominations" },
    { id: 139, name: "Gemstone dragons" },
    { id: 12, name: "Ghosts" },
    { id: 23, name: "Ghouls" },
    { id: 122, name: "Glacors" },
    { id: 2, name: "Goblins" },
    { id: 82, name: "Goraks" },
    { id: 148, name: "Gorilla akh" },
    { id: 29, name: "Greater demons" },
    { id: 24, name: "Green dragons" },
    { id: 97, name: "Grifolapines" },
    { id: 98, name: "Grifolaroos" },
    { id: 112, name: "Grotworms" },
    { id: 70, name: "Harpie bug swarms" },
    { id: 31, name: "Hellhounds" },
    { id: 14, name: "Hill giants" },
    { id: 21, name: "Hobgoblins" },
    { id: 15, name: "Ice giants" },
    { id: 105, name: "Ice strykewyrms" },
    { id: 19, name: "Ice warriors" },
    { id: 75, name: "Icefiends" },
    { id: 151, name: "Imperial guard akh" },
    { id: 40, name: "Infernal mages" },
    { id: 59, name: "Iron dragons" },
    { id: 50, name: "Jellies" },
    { id: 81, name: "Jungle horrors" },
    { id: 103, name: "Jungle strykewyrms" },
    { id: 121, name: "Kal'gerion demons" },
    { id: 53, name: "Kalphite" },
    { id: 73, name: "Killerwatts" },
    { id: 45, name: "Kurask" },
    { id: 126, name: "Lava strykewyrms" },
    { id: 28, name: "Lesser demons" },
    { id: 106, name: "Living rock creatures" },
    { id: 130, name: "Living wyverns" },
    { id: 76, name: "Minotaurs" },
    { id: 94, name: "Mithril dragons" },
    { id: 67, name: "Mogres" },
    { id: 87, name: "Molanisks" },
    { id: 1, name: "Monkeys" },
    { id: 17, name: "Moss giants" },
    { id: 119, name: "Muspah" },
    { id: 109, name: "Mutated jadinkos" },
    { id: 74, name: "Mutated zygomites" },
    { id: 52, name: "Nechryael" },
    { id: 135, name: "Nightmare creatures" },
    { id: 120, name: "Nihil" },
    { id: 20, name: "Ogres" },
    { id: 55, name: "Otherworldly beings" },
    { id: 116, name: "Pigs" },
    { id: 100, name: "Polypore creatures" },
    { id: 47, name: "Pyrefiends" },
    { id: 3, name: "Rats" },
    { id: 26, name: "Red dragons" },
    { id: 161, name: "Revenants" },
    { id: 131, name: "Ripper demons" },
    { id: 51, name: "Rockslugs" },
    { id: 128, name: "Rune dragons" },
    { id: 146, name: "Salawa akh" },
    { id: 85, name: "Scabarites" },
    { id: 150, name: "Scarab akh" },
    { id: 7, name: "Scorpions" },
    { id: 71, name: "Sea snakes" },
    { id: 64, name: "Shades" },
    { id: 125, name: "Shadow creatures" },
    { id: 32, name: "Shadow warriors" },
    { id: 72, name: "Skeletal wyverns" },
    { id: 11, name: "Skeletons" },
    { id: 153, name: "Soul devourers" },
    { id: 4, name: "Spiders" },
    { id: 91, name: "Spiritual mages" },
    { id: 90, name: "Spiritual rangers" },
    { id: 89, name: "Spiritual warriors" },
    { id: 160, name: "Stalker creatures" },
    { id: 60, name: "Steel dragons" },
    { id: 177, name: "Strykewyrms" },
    { id: 83, name: "Suqahs" },
    { id: 86, name: "Terror dogs" },
    { id: 123, name: "Tormented demons" },
    { id: 18, name: "Trolls" },
    { id: 36, name: "Turoth" },
    { id: 101, name: "TzHaar" },
    { id: 34, name: "Vampyres" },
    { id: 172, name: "Vile blooms" },
    { id: 102, name: "Volcanic creatures" },
    { id: 110, name: "Vyrewatch" },
    { id: 61, name: "Wall beasts" },
    { id: 93, name: "Warped terrorbirds" },
    { id: 92, name: "Warped tortoises" },
    { id: 88, name: "Waterfiends" },
    { id: 33, name: "Werewolves" },
    { id: 9, name: "Wolves" },
    { id: 176, name: "Zarosian creatures" },
    { id: 10, name: "Zombies" },
  ] as const,
  weaknesses: [
    "None",
    "Air",
    "Water",
    "Earth",
    "Fire",
    "Stabbing",
    "Slashing",
    "Crushing",
    "Arrow",
    "Bolt",
    "Thrown",
  ] as const,
}
export const clan = {
  endpoints: {
    members: `http://services.runescape.com/m=clan-hiscores/members_lite.ws`,
  },
}
export const grandexchange = {
  endpoints: {
    category: `http://services.runescape.com/m=itemdb_rs/api/catalogue/category.json?category=`,
    categoryItems: `http://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?`,
    item: `http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=`,
    itemGraph: `http://services.runescape.com/m=itemdb_rs/api/graph`,
  },
  categories: [
    "Miscellaneous",
    "Ammo",
    "Arrows",
    "Bolts",
    "Construction materials",
    "Construction projects",
    "Cooking ingredients",
    "Costumes",
    "Crafting materials",
    "Familiars",
    "Farming produce",
    "Fletching materials",
    "Food and drink",
    "Herblore materials",
    "Hunting equipment",
    "Hunting produce",
    "Jewellery",
    "Mage armour",
    "Mage weapons",
    "Melee armour - low level",
    "Melee armour - mid level",
    "Melee armour - high level",
    "Melee weapons - low level",
    "Melee weapons - mid level",
    "Melee weapons - high level",
    "Mining and smithing",
    "Potions",
    "Prayer armour",
    "Prayer materials",
    "Range armour",
    "Range weapons",
    "Runecrafting",
    "Runes, Spells and Teleports",
    "Seeds",
    "Summoning scrolls",
    "Tools and containers",
    "Woodcutting product",
    "Pocket items",
  ] as const,
}
export const hiscores = {
  endpoints: {
    normal: `http://services.runescape.com/m=hiscore/index_lite.ws`,
    ironman: `http://services.runescape.com/m=hiscore_ironman/index_lite.ws`,
    hardcore: `http://services.runescape.com/m=hiscore_hardcore_ironman/index_lite.ws`,
  },
  activities: [
    "bounty_hunters",
    "bh_rogues",
    "dominion_tower",
    "the_crucible",
    "castle_wars_games",
    "ba_attackers",
    "ba_defenders",
    "ba_collectors",
    "ba_healers",
    "duel_tournament",
    "mobilising_armies",
    "conquest",
    "fist_of_guthix",
    "gg_resource_race",
    "gg_athletics",
    "we2_armadyl_lifetime_contribution",
    "we2_bandos_lifetime_contribution",
    "we2_armadyl_pvp_kills",
    "we2_bandos_pvp_kills",
    "heist_guard_level",
    "heist_robber_level",
    "cfp_5_game_average",
    "af15_cow_tipping",
    "af15_rats_killed_after_the_miniquest",
    "runescore",
    "clue_scrolls_easy",
    "clue_scrolls_medium",
    "clue_scrolls_hard",
    "clue_scrolls_elite",
    "clue_scrolls_master",
  ] as const,
  gamemodes: ["normal", "ironman", "hardcore"] as const,
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
    "summoning",
    "dungeoneering",
    "divination",
    "invention",
  ] as const,
}
export const miscellaneous = {
  endpoints: {
    defaultAvatarUrl: `https://secure.runescape.com/m=avatar-rs/default_chat.png?`,
    totalUsers: `https://secure.runescape.com/m=account-creation-reports/rsusertotal.ws`,
  },
}
export const runemetrics = {
  endpoints: {
    profile: `https://apps.runescape.com/runemetrics/profile/profile`,
    monthlyXp: `https://apps.runescape.com/runemetrics/xp-monthly`,
    quests: `https://apps.runescape.com/runemetrics/quests`,
  },
  questStatuses: ["NOT_STARTED", "STARTED", "COMPLETED"] as const,
}

export default {
  bestiary,
  clan,
  grandexchange,
  hiscores,
  runemetrics,
  miscellaneous,
}