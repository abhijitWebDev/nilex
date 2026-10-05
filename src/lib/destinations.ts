import { img } from "@/lib/images"

export type Region = "north-india" | "international"

export type Highlight = {
  name: string
  blurb: string
  image?: string
}

export type Destination = {
  slug: string
  name: string
  region: Region
  tagline: string
  short: string
  intro: string
  cover: string
  hero: string
  bestTime: string
  idealFor: string[]
  places: string[]
  attractions: string[]
  highlights: Highlight[]
  offbeat?: string[]
}

export const destinations: Destination[] = [
  /* ───────────────────────── NORTH INDIA ───────────────────────── */
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "north-india",
    tagline: "Life above the clouds",
    short: "Colonial hill stations, apple orchards and Himalayan monasteries.",
    intro:
      "From the Mall Road buzz of Shimla and Manali to the quiet monasteries of Spiti, Himachal packs colonial charm, Buddhist heritage, apple orchards and a high-altitude desert into one unforgettable state.",
    cover: img.manali,
    hero: img.manali,
    bestTime: "Mar – Jun for pleasant weather · Dec – Feb for snow",
    idealFor: ["Families", "Honeymoons", "Road trips", "Snow holidays"],
    places: [
      "Shimla", "Manali", "Kullu", "Kasol", "Dharamshala", "McLeodganj", "Dalhousie",
      "Kasauli", "Kufri", "Narkanda", "Palampur", "Kangra", "Mandi", "Kalpa",
      "Tabo", "Tirthan Valley", "Spiti Valley",
    ],
    attractions: [
      "Mall Road & The Ridge, Shimla",
      "Solang Valley & Atal Tunnel, Manali",
      "Dalai Lama Temple, McLeodganj",
      "Tea gardens of Palampur",
      "Great Himalayan National Park, Tirthan",
    ],
    highlights: [
      { name: "Colonial Charm", blurb: "Heritage hill stations like Shimla, Dalhousie and Kasauli." },
      { name: "Buddhist Heritage", blurb: "Monasteries of McLeodganj, Tabo and Key." },
      { name: "Apple Orchards", blurb: "Orchard stays around Kotgarh, Narkanda and Kinnaur." },
      { name: "Spiti's High Desert", blurb: "Remote villages, passes and starry skies." },
    ],
    offbeat: ["Jibhi", "Janjehli", "Kanadaghat", "Tirthan Valley", "Spiti Valley"],
  },
  {
    slug: "spiti-valley",
    name: "Spiti Valley",
    region: "north-india",
    tagline: "Land of serenity. Soul of the Himalayas",
    short: "A high-altitude desert of ancient monasteries and dramatic passes.",
    intro:
      "Between 3,200 and 4,600 metres, Spiti is where ancient monasteries, deep gorges and warm local hospitality come together. Raw beauty, remote villages and routes less travelled — for travellers who want to truly disconnect.",
    cover: img.keyMonastery,
    hero: img.spitiValley,
    bestTime: "Jun – Sep, when the high passes are open",
    idealFor: ["Adventure seekers", "Photographers", "Bikers", "Slow travellers"],
    places: ["Kaza", "Key", "Kibber", "Langza", "Tabo", "Dhankar", "Chandra Taal", "Kunzum Pass"],
    attractions: [
      "Key Monastery",
      "Kibber — one of the world's highest villages",
      "Chandra Taal, the 'Moon Lake'",
      "Langza's fossils & Buddha statue",
      "Kunzum Pass",
    ],
    highlights: [
      { name: "Key Monastery", blurb: "The spiritual heart of Spiti, with sweeping valley views." },
      { name: "Chandra Taal", blurb: "A pristine high-altitude lake with mirror-like reflections." },
      { name: "Kibber Village", blurb: "Among the highest villages in the world, rich in local culture." },
      { name: "Kunzum Pass", blurb: "The dramatic gateway into Spiti over high mountain roads." },
    ],
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    region: "north-india",
    tagline: "Where the mountains call",
    short: "Sacred rivers, lake towns, wildlife reserves and high shrines.",
    intro:
      "Wildlife reserves and lake towns, sacred rivers and high-altitude shrines — Uttarakhand is where nature, spirituality and adventure come together, from the ghats of Rishikesh to the snows of Auli.",
    cover: img.rishikesh,
    hero: img.kedarnathPeaks,
    bestTime: "Mar – Jun & Sep – Nov · Dec – Feb for snow in Auli",
    idealFor: ["Pilgrims", "Families", "Wildlife lovers", "Weekend escapes"],
    places: [
      "Rishikesh", "Haridwar", "Mussoorie", "Nainital", "Bhimtal", "Almora", "Ranikhet",
      "Mukteshwar", "Kausani", "Binsar", "Auli", "Joshimath", "Chopta", "Corbett",
      "Lansdowne", "Kanatal", "Kainchi Dham", "Dehradun", "Tehri",
    ],
    attractions: [
      "Ganga Aarti at Har Ki Pauri, Haridwar",
      "Rafting & Laxman Jhula, Rishikesh",
      "Jim Corbett National Park safari",
      "Naini Lake boating",
      "Tungnath trek from Chopta",
    ],
    highlights: [
      { name: "Spiritual Journeys", blurb: "Haridwar, Rishikesh and the Char Dham circuit." },
      { name: "Lake Towns", blurb: "Nainital, Bhimtal and the Kumaon hills." },
      { name: "Wildlife", blurb: "Tiger country at Jim Corbett National Park." },
      { name: "Snow & Treks", blurb: "Auli's slopes and Chopta's meadows." },
    ],
    offbeat: ["Chopta", "Kanatal", "Binsar", "Kausani", "Lansdowne"],
  },
  {
    slug: "kashmir",
    name: "Jammu & Kashmir",
    region: "north-india",
    tagline: "Paradise on earth",
    short: "Shikaras on Dal Lake, alpine meadows and snow-clad Gulmarg.",
    intro:
      "Green valleys, alpine meadows and crystal-clear lakes, woven with Sufi traditions and warm Kashmiri hospitality. Glide across Dal Lake on a shikara, ride the gondola in Gulmarg and wander the trails of Pahalgam.",
    cover: img.dalShikaras,
    hero: img.dalLake,
    bestTime: "Mar – Oct for sightseeing · Nov – Feb for snow in Gulmarg",
    idealFor: ["Honeymoons", "Families", "Snow lovers", "Nature walks"],
    places: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg", "Yusmarg", "Jammu"],
    attractions: [
      "Dal Lake shikara ride & houseboat stay",
      "Mughal Gardens, Srinagar",
      "Gulmarg Gondola",
      "Betaab & Aru Valley, Pahalgam",
      "Thajiwas Glacier, Sonamarg",
    ],
    highlights: [
      { name: "Srinagar", blurb: "Dal Lake, Mughal Gardens and shikara rides.", image: img.srinagar },
      { name: "Gulmarg", blurb: "A paradise for snow lovers and adventure seekers.", image: img.gulmarg },
      { name: "Pahalgam", blurb: "Picturesque valleys, flowing rivers and scenic trails.", image: img.pahalgam },
      { name: "Sonamarg", blurb: "The 'Meadow of Gold' with breathtaking treks.", image: img.sonamarg },
    ],
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    region: "north-india",
    tagline: "High passes. Higher experiences",
    short: "Monasteries, moonscapes, Pangong's blues and Nubra's dunes.",
    intro:
      "Stark mountains, ancient monasteries and lakes that change colour with the sky. Ladakh is the ultimate high-altitude road trip — from Leh's palaces to the double-humped camels of Nubra and the blues of Pangong.",
    cover: img.pangong,
    hero: img.lehMonastery,
    bestTime: "May – Sep",
    idealFor: ["Road trips", "Bikers", "Photographers", "Adventure"],
    places: ["Leh", "Nubra Valley", "Pangong Lake", "Tso Moriri", "Kargil", "Hanle"],
    attractions: [
      "Thiksey & Hemis Monasteries",
      "Khardung La pass",
      "Double-humped camels at Hunder, Nubra",
      "Pangong Tso",
      "Tso Moriri wetlands",
    ],
    highlights: [
      { name: "Leh", blurb: "The heart of Ladakh and gateway to its monasteries.", image: img.leh },
      { name: "Nubra Valley", blurb: "Golden dunes, double-humped camels and old villages.", image: img.nubra },
      { name: "Pangong Lake", blurb: "Mesmerising blue waters that change shades with the sky.", image: img.pangongBlue },
    ],
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "north-india",
    tagline: "Timeless heritage, sacred journeys",
    short: "The Taj Mahal, the ghats of Varanasi and the temples of Ayodhya.",
    intro:
      "From timeless monuments to sacred cities, Uttar Pradesh leaves every traveller with stories to carry home — sunrise at the Taj, evening aarti on the Varanasi ghats and the temple towns of Ayodhya and Vrindavan.",
    cover: img.tajMahal,
    hero: img.varanasi,
    bestTime: "Oct – Mar",
    idealFor: ["Heritage lovers", "Pilgrims", "First-time India visitors"],
    places: ["Agra", "Varanasi", "Ayodhya", "Vrindavan", "Mathura", "Meerut", "Basti"],
    attractions: [
      "Taj Mahal & Agra Fort",
      "Ganga Aarti at Dashashwamedh Ghat",
      "Shri Ram Janmabhoomi, Ayodhya",
      "Banke Bihari Temple, Vrindavan",
      "Sarnath",
    ],
    highlights: [
      { name: "Agra", blurb: "The Taj Mahal and Mughal grandeur." },
      { name: "Varanasi", blurb: "Boat rides and aarti on the world's oldest living city's ghats." },
      { name: "Ayodhya", blurb: "A sacred city at the heart of devotion." },
      { name: "Vrindavan", blurb: "Temples, bhajans and Holi like nowhere else." },
    ],
  },
  {
    slug: "punjab",
    name: "Punjab",
    region: "north-india",
    tagline: "Culture, devotion and urban energy",
    short: "The Golden Temple, Wagah border and warm Punjabi hospitality.",
    intro:
      "From sacred landmarks to vibrant city hubs, Punjab is designed for journeys full of warmth, flavour and connection — the Golden Temple at dawn, the Wagah ceremony at dusk and a langar you'll never forget.",
    cover: img.goldenTemple,
    hero: img.goldenTempleDay,
    bestTime: "Oct – Mar",
    idealFor: ["Families", "Food lovers", "Spiritual travellers"],
    places: ["Amritsar", "Chandigarh", "Ludhiana", "Jalandhar", "Mohali", "Panchkula", "Ambala"],
    attractions: [
      "Harmandir Sahib (Golden Temple)",
      "Wagah-Attari border ceremony",
      "Jallianwala Bagh",
      "Rock Garden, Chandigarh",
      "Sukhna Lake",
    ],
    highlights: [
      { name: "Amritsar", blurb: "The Golden Temple, langar and old-city food walks." },
      { name: "Chandigarh", blurb: "India's planned city, Rock Garden and Sukhna Lake." },
      { name: "Local Flavours", blurb: "Kulchas, lassi and dhaba trails." },
    ],
  },

  /* ───────────────────────── INTERNATIONAL ───────────────────────── */
  {
    slug: "japan",
    name: "Japan",
    region: "international",
    tagline: "Where tradition meets tomorrow",
    short: "Mount Fuji, Kyoto's shrines, Tokyo's neon and cherry blossoms.",
    intro:
      "Ancient traditions and futuristic cities. Watch Mount Fuji rise over the lakes, walk the thousand gates of Fushimi Inari, ride the bullet train and lose yourself in the neon of Tokyo.",
    cover: img.fujiPagoda,
    hero: img.fujiTemple,
    bestTime: "Mar – May for cherry blossoms · Oct – Nov for autumn colours",
    idealFor: ["Couples", "Families", "Culture lovers", "Foodies"],
    places: ["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Sapporo", "Nara", "Hakone"],
    attractions: [
      "Mount Fuji",
      "Fushimi Inari Shrine, Kyoto",
      "Arashiyama Bamboo Grove",
      "Osaka Castle",
      "Hiroshima Peace Memorial",
      "Nara Deer Park",
    ],
    highlights: [
      { name: "Tokyo", blurb: "The modern metropolis." },
      { name: "Kyoto", blurb: "Timeless heritage, temples and geisha streets." },
      { name: "Osaka", blurb: "Japan's vibrant, food-loving heart." },
      { name: "Sapporo", blurb: "Nature, snow and festivals." },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "international",
    tagline: "Small island. Big experiences",
    short: "Marina Bay, Sentosa, Gardens by the Bay and Universal Studios.",
    intro:
      "Modern attractions, iconic landmarks and world-class experiences packed into one island. Perfect for families and first international trips — from the SkyPark at Marina Bay Sands to a day at Universal Studios.",
    cover: img.marinaBay,
    hero: img.marinaBayNight,
    bestTime: "Year-round · Feb – Apr is typically driest",
    idealFor: ["Families", "First international trip", "Shopping", "Theme parks"],
    places: ["Marina Bay", "Sentosa Island", "Orchard Road", "Little India", "Chinatown"],
    attractions: [
      "Marina Bay Sands & SkyPark",
      "Gardens by the Bay & Cloud Forest",
      "Universal Studios Singapore",
      "Merlion Park",
      "Singapore Flyer",
      "Night Safari",
    ],
    highlights: [
      { name: "Marina Bay", blurb: "Iconic skyline and light shows." },
      { name: "Sentosa Island", blurb: "Beaches, cable cars and non-stop fun." },
      { name: "Orchard Road", blurb: "A shopping paradise." },
      { name: "Little India & Chinatown", blurb: "Heritage, colour and street food." },
    ],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "international",
    tagline: "Where diversity comes alive",
    short: "Petronas Towers, Langkawi's islands and Genting Highlands.",
    intro:
      "Vibrant cities, tropical islands and rich cultural heritage. Many cultures, one Malaysia — pair Kuala Lumpur's skyline with Langkawi's beaches, Penang's street art and the cool air of Genting.",
    cover: img.petronas,
    hero: img.petronasNight,
    bestTime: "Year-round · Dec – Apr is ideal for Langkawi & Penang",
    idealFor: ["Families", "Honeymoons", "Beach lovers", "Combos with Singapore"],
    places: ["Kuala Lumpur", "Langkawi", "Penang", "Genting Highlands", "Johor Bahru", "Kuching"],
    attractions: [
      "Petronas Twin Towers",
      "Batu Caves",
      "Langkawi Sky Bridge",
      "George Town, Penang",
      "Genting Highlands",
      "Taman Negara National Park",
    ],
    highlights: [
      { name: "Kuala Lumpur", blurb: "The dynamic capital." },
      { name: "Langkawi", blurb: "An island paradise." },
      { name: "Penang", blurb: "Heritage and street art." },
      { name: "Genting Highlands", blurb: "Cool hills, cable cars and theme parks." },
    ],
  },
  {
    slug: "china-hong-kong",
    name: "China & Hong Kong",
    region: "international",
    tagline: "Ancient wonders. Modern marvels",
    short: "The Great Wall, Terracotta Army, Li River and Victoria Peak.",
    intro:
      "A land of timeless heritage, dramatic landscapes and futuristic skylines. China and Hong Kong offer a journey through imperial history, natural beauty and vibrant city life.",
    cover: img.greatWall,
    hero: img.greatWallAutumn,
    bestTime: "Apr – May & Sep – Oct",
    idealFor: ["History buffs", "Culture lovers", "City explorers"],
    places: ["Beijing", "Shanghai", "Xi'an", "Guilin", "Hong Kong"],
    attractions: [
      "The Great Wall",
      "Forbidden City",
      "Terracotta Army",
      "Li River cruise",
      "Victoria Peak",
      "Hong Kong Disneyland",
    ],
    highlights: [
      { name: "Beijing", blurb: "Great Wall, Forbidden City, Temple of Heaven.", image: img.beijing },
      { name: "Shanghai", blurb: "The Bund, Oriental Pearl Tower, Yu Garden.", image: img.shanghai },
      { name: "Xi'an", blurb: "Terracotta Army and the ancient city wall.", image: img.xian },
      { name: "Guilin", blurb: "Li River, Reed Flute Cave, Yangshuo.", image: img.guilin },
      { name: "Hong Kong", blurb: "Victoria Peak, Avenue of Stars, Disneyland.", image: img.hongKong },
    ],
  },
  {
    slug: "scandinavia",
    name: "Scandinavia",
    region: "international",
    tagline: "Untouched nature. Pure serenity",
    short: "Fjords, Northern Lights and storybook towns across four nations.",
    intro:
      "From breathtaking fjords and the Northern Lights to design-forward cities and Viking history — Norway, Sweden, Denmark and Finland are where nature and modern living exist in perfect harmony.",
    cover: img.lofoten,
    hero: img.fjord,
    bestTime: "Jun – Aug for fjords & midnight sun · Nov – Mar for Northern Lights",
    idealFor: ["Honeymoons", "Nature lovers", "Once-in-a-lifetime trips"],
    places: ["Oslo", "Bergen", "Tromsø", "Stockholm", "Copenhagen", "Helsinki", "Rovaniemi"],
    attractions: [
      "Geirangerfjord & Flåm Railway",
      "Northern Lights in Tromsø",
      "Lofoten Islands",
      "Vasa Museum & Icehotel, Sweden",
      "Tivoli Gardens, Copenhagen",
      "Santa Claus Village, Rovaniemi",
    ],
    highlights: [
      { name: "Norway", blurb: "Land of fjords and legends.", image: img.norway },
      { name: "Sweden", blurb: "Where nature meets innovation.", image: img.stockholm },
      { name: "Denmark", blurb: "Timeless charm and hygge.", image: img.copenhagen },
      { name: "Finland", blurb: "Land of a thousand lakes.", image: img.helsinki },
    ],
  },
]

export const northIndia = destinations.filter((d) => d.region === "north-india")
export const international = destinations.filter((d) => d.region === "international")

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug)
}

export const charDham = [
  {
    name: "Yamunotri",
    image: img.yamunotri,
    blurb: "Source of the Yamuna and shrine of Goddess Yamuna.",
    altitude: "3,293 m",
    trek: "6 km",
    helipad: "Kharsali",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Gangotri",
    image: img.gangotri,
    blurb: "Origin of the Ganga, dedicated to Goddess Ganga.",
    altitude: "3,100 m",
    trek: "Road access",
    helipad: "Harsil",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Kedarnath",
    image: img.kedarnathFacade,
    blurb: "Abode of Lord Shiva among mighty Himalayan peaks.",
    altitude: "3,583 m",
    trek: "16 km",
    helipad: "Phata / Sirsi",
    color: "from-violet-500 to-indigo-600",
  },
  {
    name: "Badrinath",
    image: img.badrinath,
    blurb: "Sacred abode of Lord Vishnu beside the Alaknanda.",
    altitude: "3,133 m",
    trek: "Road access",
    helipad: "Govindghat",
    color: "from-rose-500 to-red-600",
  },
] as const
