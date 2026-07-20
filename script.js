// FILE: script.js

const products = [
  {
    id: "allure-rhinestone-muse",
    name: "Luxe Rhinestone Muse",
    collection: "Allure Collection",
    collectionKey: "allure",
    itemCode: "8RS2104",
    price: 14.99,
    paymentLink: "https://buy.stripe.com/bJeeVdcw3gja4dPdROc3m0p",
    description:
      "A glamorous oversized frame with jewelry-inspired side detailing and a bold fashion presence.",
    features: [
      "Mulberry Tint",
      "Dusty Quartz",
      "Brown Tortoise",
      "Black Pearl",
      "Matcha"
    ],
    colors: [
      "Mulberry Tint",
      "Dusty Quartz",
      "Brown Tortoise",
      "Black Pearl",
      "Matcha"
    ],
    images: [
      "./KL_8RS2104-5PURPL.jpg",
      "./KL_8RS2104-2BLUSH.jpg",
      "./KL_8RS2104-4BROWN.jpg",
      "./KL_8RS2104-1BLACK.jpg",
      "./KL_8RS2104-3OLGRN.jpg"
    ]
  },
  {
    id: "allure-midnight-gradient",
    name: "Midnight Gradient",
    collection: "Allure Collection",
    collectionKey: "allure",
    itemCode: "8VG29682",
    price: 13.99,
    paymentLink: "https://buy.stripe.com/28E3cv9jR5EwcKl8xuc3m0q",
    description:
      "A sleek cat-eye profile with dramatic gradients and polished color transitions.",
    features: [
      "Honey Tortoise",
      "Midnight Champagne",
      "Midnight Olive",
      "Black Ice",
      "Midnight Rose",
      "Matte Black"
    ],
    colors: [
      "Honey Tortoise",
      "Midnight Champagne",
      "Midnight Olive",
      "Black Ice",
      "Midnight Rose",
      "Matte Black"
    ],
    images: [
      "./KL_8VG29682-1FLAME.jpg",
      "./KL_8VG29682-2APRCT.jpg",
      "./KL_8VG29682-3GRNAP.jpg",
      "./KL_8VG29682-4BICEY.jpg",
      "./KL_8VG29682-5BPINK.jpg",
      "./KL_8VG29682-6BBLCK.jpg"
    ]
  },
  {
    id: "allure-catwalk",
    name: "Catwalk",
    collection: "Allure Collection",
    collectionKey: "allure",
    itemCode: "8VG29687",
    price: 12.99,
    paymentLink: "https://buy.stripe.com/5kQ00j0Nl3wo5hT6pmc3m0r",
    description:
      "A runway-inspired cat-eye designed to feel polished, playful, and fashion-forward.",
    features: [
      "Amber Cat",
      "Blush Crystal",
      "Moss Green",
      "Satin Orange",
      "Periwinkle Blue",
      "Black Cat"
    ],
    colors: [
      "Amber Cat",
      "Blush Crystal",
      "Moss Green",
      "Satin Orange",
      "Periwinkle Blue",
      "Black Cat"
    ],
    images: [
      "./KL_8VG29687-4BRN.jpg",
      "./KL_8VG29687-3PNK.jpg",
      "./KL_8VG29687-2GRN.jpg",
      "./KL_8VG29687-5ORA.jpg",
      "./KL_8VG29687-1BLU.jpg",
      "./KL_8VG29687-6BLK.jpg"
    ]
  },
  {
    id: "angles-attitude",
    name: "Angles & Attitude",
    collection: "Angles Collection",
    collectionKey: "angles",
    itemCode: "3GSL28304",
    price: 17.99,
    paymentLink: "https://buy.stripe.com/6oU14ngMj5EwdOpfZWc3m0m",
    description:
      "Architectural lines and sharp confidence create a bold statement frame.",
    features: [
      "Brown Edge",
      "Black Rim",
      "Black Smoke",
      "Champagne Sky",
      "Matcha Pink",
      "Virt Violet"
    ],
    colors: [
      "Brown Edge",
      "Black Rim",
      "Black Smoke",
      "Champagne Sky",
      "Matcha Pink",
      "Virt Violet"
    ],
    images: [
      "./KL_8GSL28304-1BRWNE.jpg",
      "./KL_8GSL28304-3BLKR.jpg",
      "./KL_8GSL28304-2BSMKE.jpg",
      "./KL_8GSL28304-6GRBL.jpg",
      "./KL_8GSL28304-4RGLD.jpg",
      "./KL_8GSL28304-5BPRP.jpg"
    ]
  },
  {
    id: "angles-vrgo-829",
    name: "VRGO 829",
    collection: "Angles Collection",
    collectionKey: "angles",
    itemCode: "8VG29695",
    price: 15.99,
    paymentLink: "https://buy.stripe.com/aFa8wPbrZgjah0BfZWc3m0l",
    description:
      "A faceted fashion frame with crisp lines and an elevated profile.",
    features: [
      "Pink Quartz",
      "Brown Tortoise",
      "Static Blue",
      "Blush Rush",
      "Black Shadow",
      "Muted Magenta"
    ],
    colors: [
      "Pink Quartz",
      "Brown Tortoise",
      "Static Blue",
      "Blush Rush",
      "Black Shadow",
      "Muted Magenta"
    ],
    images: [
      "./KL_8VG29695-1PINKG.jpg",
      "./KL_8VG29695-2ANML.jpg",
      "./KL_8VG29695-4BBLUE.jpg",
      "./KL_8VG29695-3BLUSH.jpg",
      "./KL_8VG29695-6BGOLD.jpg",
      "./8VG29695-5.jpg"
    ]
  },
  {
    id: "angles-squared-society",
    name: "Squared Society",
    collection: "Angles Collection",
    collectionKey: "angles",
    itemCode: "8GSL28258",
    price: 13.99,
    paymentLink: "https://buy.stripe.com/dRm3cv2Vt3wocKl3dac3m0k",
    description:
      "A strong square silhouette with confident edges and versatile luxury finishes.",
    features: [
      "The Sienna",
      "Amber Smoke",
      "Coffee Break",
      "Pink Sunset",
      "Amber Blue",
      "Monaco Sunset"
    ],
    colors: [
      "The Sienna",
      "Amber Smoke",
      "Coffee Break",
      "Pink Sunset",
      "Amber Blue",
      "Monaco Sunset"
    ],
    images: [
      "./KL_8GSL28258-1GBRWN.jpg",
      "./KL_8GSL28258-2GAMBR.jpg",
      "./KL_8GSL28258-3GCOOL.jpg",
      "./KL_8GSL28258-4GPINK.jpg",
      "./KL_8GSL28258-5GBLUE.jpg",
      "./KL_8GSL28258-6GBLCK.jpg"
    ]
  },
  {
    id: "halo-classic-curve",
    name: "Classic Curve",
    collection: "Halo Collection",
    collectionKey: "halo",
    itemCode: "PZ-GSL28319",
    price: 15.99,
    paymentLink: "https://buy.stripe.com/00w3cvfIf4As25H6pmc3m0i",
    description:
      "A sculpted halo frame with refined metal lines and an effortless day-to-night finish.",
    features: [
      "Silver Halo",
      "Halo Gold",
      "Halo Emerald",
      "Halo Sahara",
      "Halo Obsidian"
    ],
    colors: [
      "Silver Halo",
      "Halo Gold",
      "Halo Emerald",
      "Halo Sahara",
      "Halo Obsidian"
    ],
    images: [
      "./KL_PZ-GSL28319-1SLVR.jpg",
      "./KL_PZ-GSL28319-2BLKGLD.jpg",
      "./KL_PZ-GSL28319-3GRGLD.jpg",
      "./KL_PZ-GSL28319-4BRWN.jpg",
      "./KL_PZ-GSL28319-5BLK.jpg"
    ]
  },
  {
    id: "halo-vrgo",
    name: "VRGO",
    collection: "Halo Collection",
    collectionKey: "halo",
    itemCode: "8VG29589",
    price: 12.99,
    paymentLink: "https://buy.stripe.com/aFa14n1RpaYQfWxcNKc3m0g",
    description:
      "An oversized halo silhouette with polished arms and a confident statement finish.",
    features: [
      "Mocha Luxe",
      "Monaco Black",
      "Blackberry",
      "Cherry Kola",
      "Wine",
      "Purple Reign"
    ],
    colors: [
      "Mocha Luxe",
      "Monaco Black",
      "Blackberry",
      "Cherry Kola",
      "Wine",
      "Purple Reign"
    ],
    images: [
      "./KL_8VG29589-4.jpg",
      "./KL_8VG29589-2.jpg",
      "./KL_8VG29589-3.jpg",
      "./KL_8VG29589-5.jpg",
      "./KL_8VG29589-1.jpg",
      "./KL_8VG29589 Purple Reign.jpg"
    ]
  },
  {
    id: "halo-everyday",
    name: "Everyday Halo",
    collection: "Halo Collection",
    collectionKey: "halo",
    itemCode: "8GSL22731",
    price: 9.99,
    paymentLink: "https://buy.stripe.com/00wbJ18fNgjah0B6pmc3m0f",
    description:
      "A soft everyday halo frame with an easy luxury profile and versatile tinted finishes.",
    features: [
      "Blackberry",
      "Midnight",
      "Tiger Eye",
      "Alpine Smoke",
      "Mocha Blend",
      "Monochrome Marble",
      "Crimson Marble"
    ],
    colors: [
      "Blackberry",
      "Midnight",
      "Tiger Eye",
      "Alpine Smoke",
      "Mocha Blend",
      "Monochrome Marble",
      "Crimson Marble"
    ],
    images: [
      "./KL_8GSL22731-1BLKBLK.jpg",
      "./KL_8GSL22731-2BLCK.jpg",
      "./KL_8GSL22731-3DSRT.jpg",
      "./KL_8GSL22731-4BLKSLR.jpg",
      "./KL_8GSL22731-5BRWN.jpg",
      "./KL_8GSL22731-6GRBLK.jpg",
      "./KL_8GSL22731-7FLME.jpg"
    ]
  },
  {
    id: "visionary-luxe-visor",
    name: "Luxe Visor",
    collection: "Visionary Collection",
    collectionKey: "visionary",
    itemCode: "8GSL28287",
    price: 13.99,
    paymentLink: "https://buy.stripe.com/eVq7sLdA76IAeSt9Byc3m0a",
    description:
      "A futuristic visor-style statement with a sleek directional silhouette.",
    features: [
      "Vogue Ombre",
      "Black Horizon",
      "Nightfall",
      "Sienna Sky",
      "Dusk to Dawn",
      "Gray Gradient"
    ],
    colors: [
      "Vogue Ombre",
      "Black Horizon",
      "Nightfall",
      "Sienna Sky",
      "Dusk to Dawn",
      "Gray Gradient"
    ],
    images: [
      "./KL_8GSL28287-1GBLK.jpg",
      "./KL_8GSL28287-2BLK.jpg",
      "./KL_8GSL28287-3SMKE.jpg",
      "./KL_8GSL28287-4BRWN.jpg",
      "./KL_8GSL28287-5BLUSK.jpg",
      "./KL_8GSL28287-6BLCLD.jpg"
    ]
  },
  {
    id: "flight-manhattan-heights",
    name: "Manhattan Heights",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "PZ-MH87074",
    price: 16.99,
    paymentLink: "https://buy.stripe.com/bJe7sLfIfc2UfWx8xuc3m0d",
    description:
      "A commanding oversized flight frame with elevated trim details and metropolitan polish.",
    features: [
      "Silver Lining",
      "Monarch Moss",
      "Gunsmoke",
      "Noir Vibe",
      "Emerald Jaguar"
    ],
    colors: [
      "Silver Lining",
      "Monarch Moss",
      "Gunsmoke",
      "Noir Vibe",
      "Emerald Jaguar"
    ],
    images: [
      "./KL_PZ-MH87074-1BLKSLV.jpg",
      "./KL_PZ-MH87074-2BLKGLD.jpg",
      "./KL_PZ-MH87074-3GNMTL.jpg",
      "./KL_PZ-MH87074-4BLKGLD2.jpg",
      "./KL_PZ-MH87074-5ANML.jpg"
    ]
  },
  {
    id: "flight-cairo-vision",
    name: "Cairo Vision",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "PZ-AF112-RV",
    price: 15.99,
    paymentLink: "https://buy.stripe.com/aFacN59jR2sk5hT4hec3m0c",
    description:
      "A fashion-forward squared flight frame with mirrored energy and a strong luxury silhouette.",
    features: [
      "Rose Gold",
      "Bleu Riviera",
      "Golden Blue Sky",
      "Smoke Signal",
      "Emerald Horizon",
      "Orange Glow"
    ],
    colors: [
      "Rose Gold",
      "Bleu Riviera",
      "Golden Blue Sky",
      "Smoke Signal",
      "Emerald Horizon",
      "Orange Glow"
    ],
    images: [
      "./KL_PZ-AF112-RV -RGLD.jpg",
      "./KL_PZ-AF112-RV-BLU.jpg",
      "./KL_PZ-AF112-RV-BLU_SKY.jpg",
      "./KL_PZ-AF112-RV-GLD.jpg",
      "./KL_PZ-AF112-RV-GRN.jpg",
      "./KL_PZ-AF112-RV-ORA.jpg"
    ]
  },
  {
    id: "flight-exec-8",
    name: "Exec 8",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "8AV5182",
    price: 13.99,
    paymentLink: "https://buy.stripe.com/fZubJ11Rp8QI5hT4hec3m0b",
    description:
      "A tailored executive aviator with balanced metalwork and an understated power profile.",
    features: [
      "Cognac",
      "Evergreen",
      "Chrome",
      "Gunmetal",
      "Obsidian",
      "Argent"
    ],
    colors: [
      "Cognac",
      "Evergreen",
      "Chrome",
      "Gunmetal",
      "Obsidian",
      "Argent"
    ],
    images: [
      "./KL_8AV5182-1GLDBRW.jpg",
      "./KL_8AV5182-2BLKGRN.jpg",
      "./KL_8AV5182-3SLVGRY.jpg",
      "./KL_8AV5182-4BBLK.jpg",
      "./KL_8AV5182-5BLKBLK.jpg",
      "./KL_8AV5182-6SLVSM.jpg"
    ]
  },
  {
    id: "flight-domin8",
    name: "Domin8",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "8AV5207",
    price: 12.99,
    paymentLink: "https://buy.stripe.com/7sY7sL1Rp7MEeStfZWc3m09",
    description:
      "A squared aviator with a commanding front and strong modern attitude.",
    features: [
      "Graphite Vanguard",
      "Smoked Onyx",
      "Liquid Mercury",
      "Pewter Pine",
      "Gold Espresso",
      "Carbon 8"
    ],
    colors: [
      "Graphite Vanguard",
      "Smoked Onyx",
      "Liquid Mercury",
      "Pewter Pine",
      "Gold Espresso",
      "Carbon 8"
    ],
    images: [
      "./KL_8AV5207-1BLK.jpg",
      "./KL_8AV5207-2BLK2.jpg",
      "./KL_8AV5207-3SILV.jpg",
      "./KL_8AV5207-4GRY.jpg",
      "./KL_8AV5207-5BRWN.jpg",
      "./KL_8AV5207-6BBLK.jpg"
    ]
  },
  {
    id: "flight-cruz-commander",
    name: "Cruz Commander",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "PZ-AF101-CM",
    price: 11.99,
    paymentLink: "https://buy.stripe.com/fZubJ1brZ2sk8u54hec3m08",
    description:
      "A bold command-frame aviator with strong bridge presence and polished metal detailing.",
    features: [
      "Amber Aura",
      "Teal Eclipse",
      "Mirror Blue",
      "Mocha Mirage",
      "Plum Haze",
      "Pink Sunset"
    ],
    colors: [
      "Amber Aura",
      "Teal Eclipse",
      "Mirror Blue",
      "Mocha Mirage",
      "Plum Haze",
      "Pink Sunset"
    ],
    images: [
      "./KL_PZ-AF101-CM1.jpg",
      "./KL_PZ-AF101-CM2.jpg",
      "./KL_PZ-AF101-CM3.jpg",
      "./KL_PZ-AF101-CM4.jpg",
      "./KL_PZ-AF101-CM5.jpg",
      "./KL_PZ-AF101-CM6.jpg"
    ]
  },
  {
    id: "flight-everyday-icon",
    name: "Everyday Icon Aviator",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "PZ-AF101",
    price: 10.99,
    paymentLink: "https://buy.stripe.com/7sY28r1Rpgja4dPaFCc3m07",
    description:
      "An easy luxury aviator built for daily polish with clean tonal finishes.",
    features: [
      "Noir Eclipse",
      "Verde Oro",
      "Total Noir",
      "Verde Noir"
    ],
    colors: [
      "Noir Eclipse",
      "Verde Oro",
      "Total Noir",
      "Verde Noir"
    ],
    images: [
      "./KL_PZ-AF101-1-SLVRGRY.jpg",
      "./KL_PZ-AF101-2-GLDGRN.jpg",
      "./KL_PZ-AF101-3-BLKBLK.jpg",
      "./KL_PZ-AF101-4-BLKGRN.jpg"
    ]
  },
  {
    id: "flight-skyline-aviator",
    name: "Skyline Aviator",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "8AV5239",
    price: 9.99,
    paymentLink: "https://buy.stripe.com/fZu6oH0Nl1og11D4hec3m06",
    description:
      "A lightweight aviator statement with mirrored energy and city-ready color.",
    features: [
      "Solar Frame",
      "Gilded Tortoise",
      "Ultraviolet",
      "Cobalt Command",
      "Cypress Azure",
      "Chrome Cloud"
    ],
    colors: [
      "Solar Frame",
      "Gilded Tortoise",
      "Ultraviolet",
      "Cobalt Command",
      "Cypress Azure",
      "Chrome Cloud"
    ],
    images: [
      "./KL_8AV5239-1YLOW.jpg",
      "./KL_8AV5239-2GFLM.jpg",
      "./KL_8AV5239 Ultraviolet.jpg",
      "./KL_8AV5239-5BLUE.jpg",
      "./8AV5239-4.jpg",
      "./KL_8AV5239-6GRYS.jpg"
    ]
  },
  {
    id: "flight-ryder-aviator",
    name: "Ryder Aviator",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "8AF125-MIX",
    price: 9.99,
    paymentLink: "https://buy.stripe.com/7sYbJ13Zx4As39L3dac3m05",
    description:
      "A clean aviator essential with versatile mirrored and classic lens tones.",
    features: [
      "Avenue Gold",
      "Imperial Jade",
      "Noir Sovereign",
      "Avenue Silver",
      "Graphite Couture",
      "Platinum Mirror"
    ],
    colors: [
      "Avenue Gold",
      "Imperial Jade",
      "Noir Sovereign",
      "Avenue Silver",
      "Graphite Couture",
      "Platinum Mirror"
    ],
    images: [
      "./KL_8AF125-1.jpg",
      "./KL_8AF125-2.jpg",
      "./KL_8AF125-3.jpg",
      "./KL_8AF125-4.jpg",
      "./KL_8AF125-5.jpg",
      "./KL_8AF125-6.jpg"
    ]
  },
  {
    id: "kids-glacee",
    name: "Glacee'",
    collection: "KL Kids Club",
    collectionKey: "kids",
    itemCode: "KG-ROM90105",
    price: 8.99,
    paymentLink: "https://buy.stripe.com/7sYbJ1dA77MEh0B7tqc3m04",
    description:
      "A fun oversized kids frame with polished tints and confident everyday comfort.",
    features: [
      "Emerald Envy",
      "Cotton Candy Sky",
      "Peony Petal",
      "Midnight Rose",
      "Phantom Black",
      "Total Eclipse"
    ],
    colors: [
      "Emerald Envy",
      "Cotton Candy Sky",
      "Peony Petal",
      "Midnight Rose",
      "Phantom Black",
      "Total Eclipse"
    ],
    images: [
      "./KL_KG-ROM90105-1GRY.jpg",
      "./KL_KG-ROM90105-2BLU.jpg",
      "./KL_KG-ROM90105-3PNK.jpg",
      "./KL_KG-ROM90105-4BLK.jpg",
      "./KL_KG-ROM90105-5BLKGRY.jpg",
      "./KL_KG-ROM90105-6BBLK.jpg"
    ]
  },
  {
    id: "kids-tough-tints",
    name: "Tough Tints",
    collection: "KL Kids Club",
    collectionKey: "kids",
    itemCode: "KG-X2738",
    price: 7.99,
    paymentLink: "https://buy.stripe.com/6oU28ranVc2U8u5bJGc3m03",
    description:
      "A sporty wrap-inspired kids frame designed for high-energy wear and standout color.",
    features: [
      "Blue Ops",
      "White Out",
      "Stinger",
      "Venom",
      "Magma",
      "Hydra"
    ],
    colors: [
      "Blue Ops",
      "White Out",
      "Stinger",
      "Venom",
      "Magma",
      "Hydra"
    ],
    images: [
      "./KL_KG-X2738-1GREY.jpg",
      "./KL_KG-X2738-2WHT.jpg",
      "./KL_KG-X2738-3YLW.jpg",
      "./KL_KG-X2738-4GRN.jpg",
      "./KL_KG-X2738-5RED.jpg",
      "./KL_KG-X2738-6BLUE.jpg"
    ]
  },
  {
    id: "kids-whimsy-wayfarers",
    name: "Whimsy Wayfarers",
    collection: "KL Kids Club",
    collectionKey: "kids",
    itemCode: "KG-WF01-UNI",
    price: 7.99,
    paymentLink: "https://buy.stripe.com/eVq7sLbrZaYQ4dPdROc3m0n",
    description:
      "A playful printed kids frame with bright personality and everyday wearability.",
    features: [
      "Twilight Twinkle",
      "Bluebell Dream",
      "Pink Pixie Dust",
      "Prism Purple",
      "Marshmallow Magic"
    ],
    colors: [
      "Twilight Twinkle",
      "Bluebell Dream",
      "Pink Pixie Dust",
      "Prism Purple",
      "Marshmallow Magic"
    ],
    images: [
      "./KL_KG-WF01-UNI-BLCK.jpg",
      "./KL_KG-WF01-UNI-LBLU.jpg",
      "./KL_KG-WF01-UNI-PINK.jpg",
      "./KL_KG-WF01-UNI-PRPL.jpg",
      "./KL_KG-WF01-UNI-WHTE.jpg"
    ]
  },
  {
    id: "kids-little-voyagers",
    name: "Little Voyagers",
    collection: "KL Kids Club",
    collectionKey: "kids",
    itemCode: "KG-WF01-PST",
    price: 6.99,
    paymentLink: "https://buy.stripe.com/28EdR93ZxgjaaCd5lic3m0o",
    description:
      "A pastel kids essential with bright energy and easy all-day wear.",
    features: [
      "Coral",
      "Blue",
      "Pink",
      "Purple",
      "Cream",
      "Aqua"
    ],
    colors: [
      "Coral",
      "Blue",
      "Pink",
      "Purple",
      "Cream",
      "Aqua"
    ],
    images: [
      "./KL_KG-WF01-PST-1.jpg",
      "./KL_KG-WF01-PST-2.jpg",
      "./KL_KG-WF01-PST-3.jpg",
      "./KL_KG-WF01-PST-4.jpg",
      "./KL_KG-WF01-PST-5.jpg",
      "./KL_KG-WF01-PST-6.jpg"
    ]
  }
];

const collections = [
  { key: "all", name: "All" },
  { key: "halo", name: "Halo" },
  { key: "angles", name: "Angles" },
  { key: "allure", name: "Allure" },
  { key: "flight", name: "Flight" },
  { key: "kids", name: "Kids Club" },
  { key: "visionary", name: "Visionary" }
];

const state = {
  activeCollection: "all",
  sort: "price-desc",
  priceRange: "all",
  selectedColorIndex: Object.create(null),
  selectedImageIndex: Object.create(null),
  activeDialogProductId: null
};

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <rect width="1200" height="900" fill="#f5f2ea"/>
      <rect x="80" y="80" width="1040" height="740" rx="32" fill="none" stroke="#d3cab8" stroke-width="4"/>
      <text x="600" y="420" text-anchor="middle" fill="#2d2923"
            font-family="Arial, sans-serif" font-size="44" letter-spacing="6">
        IMAGE UNAVAILABLE
      </text>
      <text x="600" y="485" text-anchor="middle" fill="#746d62"
            font-family="Arial, sans-serif" font-size="24">
        Please check the product image filename.
      </text>
    </svg>
  `);

let elements = {};

function cacheElements() {
  elements = {
    productGrid: document.getElementById("product-grid"),
    collectionPills: document.getElementById("collection-pills"),
    collectionFilterList: document.getElementById(
      "collection-filter-list"
    ),
    sortSelect: document.getElementById("sort-select"),
    productCount: document.getElementById("product-count"),
    clearFiltersButton: document.getElementById("clear-filters"),
    dialog: document.getElementById("product-dialog"),
    dialogClose: document.getElementById("dialog-close"),
    dialogMainImage: document.getElementById("dialog-main-image"),
    dialogThumbs: document.getElementById("dialog-thumbs"),
    dialogCollection: document.getElementById("dialog-collection"),
    dialogTitle: document.getElementById("dialog-title"),
    dialogPrice: document.getElementById("dialog-price"),
    dialogDescription: document.getElementById("dialog-description"),
    dialogColors: document.getElementById("dialog-colors"),
    dialogFeatures: document.getElementById("dialog-features"),
    dialogBuyButton: document.getElementById("dialog-buy-button")
  };
}

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getProductById(productId) {
  return products.find((product) => product.id === productId) ?? null;
}

function getOptionCount(product) {
  return Math.max(product.colors.length, product.images.length, 1);
}

function clampIndex(product, index) {
  const parsedIndex = Number(index);

  if (!Number.isInteger(parsedIndex)) {
    return 0;
  }

  return Math.min(
    Math.max(parsedIndex, 0),
    getOptionCount(product) - 1
  );
}

function getSelectedColorIndex(product) {
  const selectedIndex = state.selectedColorIndex[product.id] ?? 0;

  return Math.min(
    clampIndex(product, selectedIndex),
    Math.max(product.colors.length - 1, 0)
  );
}

function getSelectedImageIndex(product) {
  const fallbackIndex = getSelectedColorIndex(product);
  const selectedIndex =
    state.selectedImageIndex[product.id] ?? fallbackIndex;

  return Math.min(
    clampIndex(product, selectedIndex),
    Math.max(product.images.length - 1, 0)
  );
}

function getSelectedColor(product) {
  return product.colors[getSelectedColorIndex(product)] ?? "Default";
}

function getSelectedImage(product) {
  return (
    product.images[getSelectedImageIndex(product)] ??
    product.images[0] ??
    PLACEHOLDER_IMAGE
  );
}

function selectColor(product, index) {
  const colorIndex = Math.min(
    clampIndex(product, index),
    Math.max(product.colors.length - 1, 0)
  );

  state.selectedColorIndex[product.id] = colorIndex;

  if (product.images[colorIndex]) {
    state.selectedImageIndex[product.id] = colorIndex;
  }
}

function selectImage(product, index) {
  const imageIndex = Math.min(
    clampIndex(product, index),
    Math.max(product.images.length - 1, 0)
  );

  state.selectedImageIndex[product.id] = imageIndex;

  if (product.colors[imageIndex]) {
    state.selectedColorIndex[product.id] = imageIndex;
  }
}

function matchesPriceRange(product) {
  switch (state.priceRange) {
    case "0-9.99":
      return product.price < 10;

    case "10-13.99":
      return product.price >= 10 && product.price <= 13.99;

    case "14-17.99":
      return product.price >= 14 && product.price <= 17.99;

    case "18-100":
      return product.price >= 18;

    default:
      return true;
  }
}

function getVisibleProducts() {
  const visibleProducts = products.filter((product) => {
    const matchesCollection =
      state.activeCollection === "all" ||
      product.collectionKey === state.activeCollection;

    return matchesCollection && matchesPriceRange(product);
  });

  visibleProducts.sort((firstProduct, secondProduct) => {
    switch (state.sort) {
      case "price-asc":
        return firstProduct.price - secondProduct.price;

      case "price-desc":
        return secondProduct.price - firstProduct.price;

      case "name":
        return firstProduct.name.localeCompare(secondProduct.name);

      default:
        return 0;
    }
  });

  return visibleProducts;
}

function createColorButton(
  product,
  color,
  index,
  activeIndex,
  dialogMode = false
) {
  const productAttribute = dialogMode
    ? `data-dialog-product="${escapeHtml(product.id)}"`
    : `data-product-id="${escapeHtml(product.id)}"`;

  const indexAttribute = dialogMode
    ? `data-dialog-color-index="${index}"`
    : `data-color-index="${index}"`;

  return `
    <button
      class="color-option ${index === activeIndex ? "active" : ""}"
      type="button"
      ${productAttribute}
      ${indexAttribute}
      aria-pressed="${index === activeIndex}"
      aria-label="Select ${escapeHtml(color)}"
    >
      ${escapeHtml(color)}
    </button>
  `;
}

function renderCollectionControls() {
  if (elements.collectionPills) {
    elements.collectionPills.innerHTML = collections
      .map(
        (collection) => `
          <button
            class="collection-pill ${
              state.activeCollection === collection.key ? "active" : ""
            }"
            type="button"
            data-collection="${escapeHtml(collection.key)}"
            aria-pressed="${state.activeCollection === collection.key}"
          >
            ${escapeHtml(collection.name)}
          </button>
        `
      )
      .join("");
  }

  if (elements.collectionFilterList) {
    elements.collectionFilterList.innerHTML = collections
      .map(
        (collection) => `
          <label>
            <input
              type="radio"
              name="collection-filter"
              value="${escapeHtml(collection.key)}"
              ${
                state.activeCollection === collection.key
                  ? "checked"
                  : ""
              }
            />
            <span>${escapeHtml(collection.name)}</span>
          </label>
        `
      )
      .join("");
  }
}

function renderProducts() {
  if (!elements.productGrid) {
    return;
  }

  const visibleProducts = getVisibleProducts();

  if (elements.productCount) {
    elements.productCount.textContent = String(visibleProducts.length);
  }

  if (visibleProducts.length === 0) {
    elements.productGrid.innerHTML = `
      <div class="empty-products" role="status">
        <h3>No frames found</h3>
        <p>Try another collection or price range.</p>
      </div>
    `;

    return;
  }

  elements.productGrid.innerHTML = visibleProducts
    .map((product) => {
      const selectedColorIndex = getSelectedColorIndex(product);
      const selectedColor = getSelectedColor(product);
      const selectedImage = getSelectedImage(product);

      return `
        <article
          class="product-card"
          data-card-product="${escapeHtml(product.id)}"
        >
          <button
            class="product-image"
            type="button"
            data-view="${escapeHtml(product.id)}"
            aria-label="View ${escapeHtml(product.name)}"
          >
            <img
              src="${escapeHtml(selectedImage)}"
              alt="${escapeHtml(product.name)} in ${escapeHtml(
                selectedColor
              )}"
              loading="lazy"
              decoding="async"
              data-product-image="${escapeHtml(product.id)}"
            />
          </button>

          <div class="product-meta">
            <div class="meta-top">
              <div>
                <small>${escapeHtml(product.collection)}</small>
                <h3>${escapeHtml(product.name)}</h3>
              </div>

              <span class="price">${formatPrice(product.price)}</span>
            </div>

            <p>${escapeHtml(product.description)}</p>

            <p class="selected-color-label">
              Selected:
              <strong>${escapeHtml(selectedColor)}</strong>
            </p>

            <div
              class="color-tags"
              aria-label="${escapeHtml(product.name)} colors"
            >
              ${product.colors
                .map((color, index) =>
                  createColorButton(
                    product,
                    color,
                    index,
                    selectedColorIndex
                  )
                )
                .join("")}
            </div>

            <div class="card-actions">
              <button
                class="button button-ghost"
                type="button"
                data-view="${escapeHtml(product.id)}"
              >
                View Product
              </button>

              <a
                class="button button-gold"
                href="${escapeHtml(product.paymentLink)}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buy ${escapeHtml(product.name)}"
              >
                Buy Now
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  elements.productGrid
    .querySelectorAll("img")
    .forEach(setImageFallback);
}

function setImageFallback(imageElement) {
  if (!(imageElement instanceof HTMLImageElement)) {
    return;
  }

  imageElement.addEventListener(
    "error",
    () => {
      imageElement.src = PLACEHOLDER_IMAGE;
      imageElement.alt = "Product image unavailable";
    },
    { once: true }
  );
}

function renderDialogColors(product) {
  if (!elements.dialogColors) {
    return;
  }

  const activeIndex = getSelectedColorIndex(product);

  elements.dialogColors.innerHTML = product.colors
    .map((color, index) =>
      createColorButton(
        product,
        color,
        index,
        activeIndex,
        true
      )
    )
    .join("");
}

function renderDialogThumbnails(product) {
  if (!elements.dialogThumbs) {
    return;
  }

  const activeImageIndex = getSelectedImageIndex(product);

  elements.dialogThumbs.innerHTML = product.images
    .map(
      (image, index) => `
        <button
          type="button"
          data-thumb-index="${index}"
          class="${index === activeImageIndex ? "active-thumb" : ""}"
          aria-pressed="${index === activeImageIndex}"
          aria-label="Show ${escapeHtml(
            product.colors[index] ??
              `${product.name} image ${index + 1}`
          )}"
        >
          <img
            src="${escapeHtml(image)}"
            alt="${escapeHtml(product.name)} thumbnail ${index + 1}"
            loading="lazy"
            decoding="async"
            data-dialog-thumb="${index}"
          />
        </button>
      `
    )
    .join("");
}

function renderDialog(product) {
  if (!elements.dialog) {
    return;
  }

  state.activeDialogProductId = product.id;

  const activeImage = getSelectedImage(product);
  const activeColor = getSelectedColor(product);

  if (elements.dialogCollection) {
    elements.dialogCollection.textContent =
      `${product.collection} • ${product.itemCode}`;
  }

  if (elements.dialogTitle) {
    elements.dialogTitle.textContent = product.name;
  }

  if (elements.dialogPrice) {
    elements.dialogPrice.textContent = formatPrice(product.price);
  }

  if (elements.dialogDescription) {
    elements.dialogDescription.textContent = product.description;
  }

  if (elements.dialogMainImage) {
    elements.dialogMainImage.src = activeImage;
    elements.dialogMainImage.alt =
      `${product.name} in ${activeColor}`;
  }

  renderDialogThumbnails(product);
  renderDialogColors(product);

  if (elements.dialogFeatures) {
    const productFeatures = Array.isArray(product.features)
      ? product.features.slice(0, 6)
      : [];

    elements.dialogFeatures.innerHTML = [
      `<li>Selected color: <strong>${escapeHtml(
        activeColor
      )}</strong></li>`,
      ...productFeatures.map(
        (feature) => `<li>${escapeHtml(feature)}</li>`
      ),
      "<li>Shipping included in the price</li>",
      "<li>Out-of-Box Warranty included</li>"
    ].join("");
  }

  if (elements.dialogBuyButton) {
    elements.dialogBuyButton.href = product.paymentLink;
    elements.dialogBuyButton.textContent = `Buy ${activeColor}`;
    elements.dialogBuyButton.setAttribute(
      "aria-label",
      `Buy ${product.name} in ${activeColor}`
    );
  }

  elements.dialog
    .querySelectorAll("img")
    .forEach(setImageFallback);
}

function openProduct(product) {
  if (!elements.dialog) {
    return;
  }

  renderDialog(product);

  if (typeof elements.dialog.showModal === "function") {
    if (!elements.dialog.open) {
      elements.dialog.showModal();
    }
  } else {
    elements.dialog.setAttribute("open", "");
  }
}

function closeDialog() {
  if (!elements.dialog) {
    return;
  }

  state.activeDialogProductId = null;

  if (
    typeof elements.dialog.close === "function" &&
    elements.dialog.open
  ) {
    elements.dialog.close();
  } else {
    elements.dialog.removeAttribute("open");
  }
}

function resetFilters() {
  state.activeCollection = "all";
  state.sort = "price-desc";
  state.priceRange = "all";

  if (elements.sortSelect) {
    elements.sortSelect.value = state.sort;
  }

  const allPriceInput = document.querySelector(
    'input[name="price-range"][value="all"]'
  );

  if (allPriceInput) {
    allPriceInput.checked = true;
  }

  renderAll();
}

function handleDocumentClick(event) {
  const collectionButton = event.target.closest(
    "[data-collection]"
  );

  if (collectionButton) {
    state.activeCollection =
      collectionButton.dataset.collection || "all";

    renderAll();
    return;
  }

  const viewButton = event.target.closest("[data-view]");

  if (viewButton) {
    const product = getProductById(viewButton.dataset.view);

    if (product) {
      openProduct(product);
    }

    return;
  }

  const colorButton = event.target.closest(
    "[data-product-id][data-color-index]"
  );

  if (colorButton) {
    const product = getProductById(
      colorButton.dataset.productId
    );

    if (product) {
      selectColor(product, colorButton.dataset.colorIndex);
      renderProducts();
    }

    return;
  }

  const dialogColorButton = event.target.closest(
    "[data-dialog-product][data-dialog-color-index]"
  );

  if (dialogColorButton) {
    const product = getProductById(
      dialogColorButton.dataset.dialogProduct
    );

    if (product) {
      selectColor(
        product,
        dialogColorButton.dataset.dialogColorIndex
      );

      renderDialog(product);
      renderProducts();
    }

    return;
  }

  const thumbnailButton = event.target.closest(
    "[data-thumb-index]"
  );

  if (thumbnailButton && state.activeDialogProductId) {
    const product = getProductById(
      state.activeDialogProductId
    );

    if (product) {
      selectImage(
        product,
        thumbnailButton.dataset.thumbIndex
      );

      renderDialog(product);
      renderProducts();
    }
  }
}

function handleDocumentChange(event) {
  const target = event.target;

  if (
    !(
      target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement
    )
  ) {
    return;
  }

  if (target.matches('input[name="collection-filter"]')) {
    state.activeCollection = target.value;
    renderAll();
    return;
  }

  if (target.matches('input[name="price-range"]')) {
    state.priceRange = target.value;
    renderProducts();
    return;
  }

  if (target === elements.sortSelect) {
    state.sort = target.value;
    renderProducts();
  }
}

function bindStaticEvents() {
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("change", handleDocumentChange);

  elements.clearFiltersButton?.addEventListener(
    "click",
    resetFilters
  );

  elements.dialogClose?.addEventListener(
    "click",
    closeDialog
  );

  elements.dialog?.addEventListener("click", (event) => {
    if (event.target === elements.dialog) {
      closeDialog();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.dialog?.open) {
      closeDialog();
    }
  });
}

function validateProducts() {
  const seenIds = new Set();

  for (const product of products) {
    if (seenIds.has(product.id)) {
      console.warn(`Duplicate product id: ${product.id}`);
    }

    seenIds.add(product.id);

    if (
      !Array.isArray(product.images) ||
      product.images.length === 0
    ) {
      console.warn(`Product has no images: ${product.name}`);
    }

    if (
      !Array.isArray(product.colors) ||
      product.colors.length === 0
    ) {
      console.warn(`Product has no colors: ${product.name}`);
    }

    if (product.colors.length !== product.images.length) {
      console.warn(
        `Color/image count mismatch for ${product.name}: ` +
          `${product.colors.length} colors, ` +
          `${product.images.length} images`
      );
    }

    if (
      !/^https:\/\/buy\.stripe\.com\//.test(
        product.paymentLink
      )
    ) {
      console.warn(
        `Unexpected payment link for ${product.name}`
      );
    }
  }
}

function renderAll() {
  renderCollectionControls();
  renderProducts();
}

function initializeStore() {
  cacheElements();
  validateProducts();
  bindStaticEvents();

  if (elements.sortSelect) {
    elements.sortSelect.value = state.sort;
  }

  renderAll();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeStore,
    { once: true }
  );
} else {
  initializeStore();
}
