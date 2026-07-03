const products = [
  {
    id: "allure-rhinestone-muse",
    name: "Luxe Rhinestone Muse",
    collection: "Allure Collection",
    collectionKey: "allure",
    itemCode: "8RS2104",
    price: 14.99,
    paymentLink: "https://buy.stripe.com/test_6oU00j41BgPNaTO5EU8Ra0j",
    description: "A glamorous oversized frame with jewelry-inspired side detailing and a bold fashion presence.",
    features: ["Mulberry Tint", "Dusty Quartz", "Brown Tortoise", "Black Pearl", "Matcha"],
    colors: ["Mulberry Tint", "Dusty Quartz", "Brown Tortoise", "Black Pearl", "Matcha"],
    images: [
      "./KL_8RS2104-1BLACK.jpg",
      "./KL_8RS2104-2BLUSH.jpg",
      "./KL_8RS2104-4BROWN.jpg",
      "./KL_8RS2104-5PURPL.jpg",
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
    paymentLink: "https://buy.stripe.com/test_cNi5kD9lVfLJ3rmffu8Ra0i",
    description: "A sleeker cat-eye profile with gradient drama and polished color transitions.",
    features: ["Honey Tortoise", "Midnight Champagne", "Midnight Olive", "Black Ice", "Midnight Rose", "Matte Black"],
    colors: ["Honey Tortoise", "Midnight Champagne", "Midnight Olive", "Black Ice", "Midnight Rose", "Matte Black"],
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
    paymentLink: "https://buy.stripe.com/test_bJe7sLeGf2YX4vq4AQ8Ra0h",
    description: "A runway-leaning cat-eye designed to feel polished, playful, and instantly fashion aware.",
    features: ["Amber Cat", "Blush Crystal", "Moss Green", "Satin Orange", "Periwinkle Blue", "Black Cat"],
    colors: ["Amber Cat", "Blush Crystal", "Moss Green", "Satin Orange", "Periwinkle Blue", "Black Cat"],
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
    paymentLink: "https://buy.stripe.com/test_14A9AT2Xx7fd3rm8R68Ra0m",
    description: "Architectural lines, sharp confidence, and a richer palette made for statement styling.",
    features: ["Brown Edge", "Black Rim", "Black Smoke", "Champagne Sky", "Matcha Pink", "Virt Violet"],
    colors: ["Brown Edge", "Black Rim", "Black Smoke", "Champagne Sky", "Matcha Pink", "Virt Violet"],
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
    paymentLink: "https://buy.stripe.com/test_4gMfZhcy74317HC5EU8Ra0l",
    description: "A faceted fashion frame with crisp lines and a polished profile that reads instantly elevated.",
    features: ["Pink Quartz", "Brown Tortoise", "Static Blue", "Blush Rush", "Black Shadow", "Muted Magenta"],
    colors: ["Pink Quartz", "Brown Tortoise", "Static Blue", "Blush Rush", "Black Shadow", "Muted Magenta"],
    images: [
      "./KL_8VG29695-1PINKG.jpg",
      "./KL_8VG29695-2ANML.jpg",
      "./KL_8VG29695-4BBLUE.jpg",
      "./KL_8VG29695-3BLUSH.jpg",
      "./8VG29695-5.jpg",
      "./KL_8VG29695-6BGOLD.jpg"
    ]
  },
  {
    id: "angles-squared-society",
    name: "Squared Society",
    collection: "Angles Collection",
    collectionKey: "angles",
    itemCode: "8GSL28258",
    price: 13.99,
    paymentLink: "https://buy.stripe.com/test_14AfZh7dNbvt7HC2sI8Ra0k",
    description: "A clean square-led statement with confident edge and easy versatility across luxury neutrals and bold tints.",
    features: ["The Sienna", "Amber Smoke", "Coffee Break", "Pink Sunset", "Amber Blue", "Monaco Sunset"],
    colors: ["The Sienna", "Amber Smoke", "Coffee Break", "Pink Sunset", "Amber Blue", "Monaco Sunset"],
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
    paymentLink: "https://buy.stripe.com/test_28EfZh2XxgPN8LG5EU8Ra0n",
    description: "A sculpted halo frame with refined metal lines and an effortless day-to-night finish.",
    features: ["Silver Halo", "Halo Gold", "Halo Emerald", "Halo Sahara", "Halo Obsidian"],
    colors: ["Silver Halo", "Halo Gold", "Halo Emerald", "Halo Sahara", "Halo Obsidian"],
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
    paymentLink: "https://buy.stripe.com/test_bJe7sL8hRdDB1jec3i8Ra0p",
    description: "An oversized halo silhouette with polished metal arms and a confident finish built for statement entrances.",
    features: ["Mocha Luxe", "Monaco Black", "Blackberry", "Cherry Kola", "Wine", "Purple Reign"],
    colors: ["Mocha Luxe", "Monaco Black", "Blackberry", "Cherry Kola", "Wine", "Purple Reign"],
    images: [
      "./KL_8VG29589-1.jpg",
      "./KL_8VG29589-2.jpg",
      "./KL_8VG29589-3.jpg",
      "./KL_8VG29589-4.jpg",
      "./KL_8VG29589-5.jpg",
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
    paymentLink: "https://buy.stripe.com/test_dRm7sLcy7czx3rm1oE8Ra0o",
    description: "A soft everyday halo frame with an easy luxury profile and versatile tinted finishes.",
    features: ["Blackberry", "Midnight", "Tiger Eye", "Alpine Smoke", "Mocha Blend", "Monochrome Marble", "Crimson Marble"],
    colors: ["Blackberry", "Midnight", "Tiger Eye", "Alpine Smoke", "Mocha Blend", "Monochrome Marble", "Crimson Marble"],
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
    paymentLink: "https://buy.stripe.com/test_4gMfZhcy74317HC5EU8Ra0l",
    description: "A futuristic visor-style statement with a stronger silhouette and sleek directional energy.",
    features: ["Vogue Ombre", "Black Horizon", "Nightfall", "Sienna Sky", "Dusk to Dawn", "Gray Gradient"],
    colors: ["Vogue Ombre", "Black Horizon", "Nightfall", "Sienna Sky", "Dusk to Dawn", "Gray Gradient"],
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
    paymentLink: "https://buy.stripe.com/test_eVq6oH9lVgPNfa4ebq8Ra0g",
    description: "A commanding oversized flight frame with elevated trim details built for a polished metropolitan finish.",
    features: ["Silver Lining", "Monarch Moss", "Gunsmoke", "Noir Vibe", "Emerald Jaguar"],
    colors: ["Silver Lining", "Monarch Moss", "Gunsmoke", "Noir Vibe", "Emerald Jaguar"],
    images: [
      "./KL_PZ-MH87074-1BLKSLV.jpg",
      "./KL_PZ-MH87074-2BLKGLD.jpg",
      "./KL_PZ-MH87074-3GNMTL.jpg",
      "./KL_PZ-MH87074-4BLKGLD2.jpg",
      "./KL_PZ-MH87074-5ANML.jpg"
    ]
  },
  {
    id: "flight-skyline-aviator",
    name: "Skyline Aviator",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "8AV5239",
    price: 9.99,
    paymentLink: "https://buy.stripe.com/test_9B65kD1Tt6b92ni0kA8Ra0f",
    description: "A lighter aviator statement with mirrored energy, city-ready color, and an effortless polished frame.",
    features: ["Solar Frame", "Gilded Tortoise", "Ultraviolet", "Cobalt Command", "Cypress Azure", "Chrome Cloud"],
    colors: ["Solar Frame", "Gilded Tortoise", "Ultraviolet", "Cobalt Command", "Cypress Azure", "Chrome Cloud"],
    images: [
      "./KL_8AV5239-1YLOW.jpg",
      "./KL_8AV5239-2GFLM.jpg",
      "./KL_8AV5239 Ultraviolet.jpg",
      "./8AV5239-4.jpg",
      "./KL_8AV5239-5BLUE.jpg",
      "./KL_8AV5239-6GRYS.jpg"
    ]
  },
  {
    id: "flight-domin8",
    name: "Domin8",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "8AV5207",
    price: 12.99,
    paymentLink: "https://buy.stripe.com/test_fZu00jdCb4310fagjy8Ra0e",
    description: "A squared aviator with a commanding front and a strong, modern fashion attitude.",
    features: ["Graphite Vanguard", "Smoked Onyx", "Liquid Mercury", "Pewter Pine", "Gold Espresso", "Carbon 8"],
    colors: ["Graphite Vanguard", "Smoked Onyx", "Liquid Mercury", "Pewter Pine", "Gold Espresso", "Carbon 8"],
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
    id: "flight-exec-8",
    name: "Exec 8",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "8AV5182",
    price: 13.99,
    paymentLink: "https://buy.stripe.com/test_bJe7sL41B6b92ni7N28Ra0d",
    description: "A tailored executive aviator with balanced luxury metalwork and an understated power profile.",
    features: ["Cognac", "Evergreen", "Gunmetal", "Chrome", "Obsidian", "Argent"],
    colors: ["Cognac", "Evergreen", "Gunmetal", "Chrome", "Obsidian", "Argent"],
    images: [
      "./KL_8AV5182-1GLDBRW.jpg",
      "./KL_8AV5182-2BLKGRN.jpg",
      "./8AV5182 Gunmetal.jpg",
      "./8AV5182-4.jpg",
      "./8AV5182-5.jpg",
      "./8AV5182-6.jpg"
    ]
  },
  {
    id: "flight-ryder-aviator",
    name: "Ryder Aviator",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "8AF125-MIX",
    price: 9.99,
    paymentLink: "https://buy.stripe.com/test_00wfZh41B5752ni8R68Ra0c",
    description: "A clean aviator essential with versatile mirrored and classic lens tones.",
    features: ["Avenue Gold", "Imperial Jade", "Noir Sovereign", "Avenue Silver", "Graphite Couture", "Platinum Mirror"],
    colors: ["Avenue Gold", "Imperial Jade", "Noir Sovereign", "Avenue Silver", "Graphite Couture", "Platinum Mirror"],
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
    id: "flight-cruz-commander",
    name: "Cruz Commander",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "PZ-AF101-CM",
    price: 11.99,
    paymentLink: "https://buy.stripe.com/test_bJe9AT69Jczx5zuc3i8Ra0b",
    description: "A bold command-frame aviator with strong bridge presence and polished metal detailing.",
    features: ["Amber Aura", "Teal Eclipse", "Mirror Blue", "Mocha Mirage", "Plum Haze", "Pink Sunset"],
    colors: ["Amber Aura", "Teal Eclipse", "Mirror Blue", "Mocha Mirage", "Plum Haze", "Pink Sunset"],
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
    id: "flight-cairo-vision",
    name: "Cairo Vision",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "PZ-AF112-RV",
    price: 15.99,
    paymentLink: "https://buy.stripe.com/test_cNi7sLapZgPNe605EU8Ra0a",
    description: "A fashion-forward squared flight frame with mirrored energy and a stronger luxury silhouette.",
    features: ["Rose Gold", "Bleu Riviera", "Golden Blue Sky", "Smoke Signal", "Emerald Horizon", "Orange Glow"],
    colors: ["Rose Gold", "Bleu Riviera", "Golden Blue Sky", "Smoke Signal", "Emerald Horizon", "Orange Glow"],
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
    id: "flight-everyday-icon",
    name: "Everyday Icon Aviator",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "PZ-AF101",
    price: 10.99,
    paymentLink: "https://buy.stripe.com/test_28E4gzeGfeHF8LG0kA8Ra09",
    description: "An easy luxury aviator built for daily polish with balanced metal lines and clean tonal finishes.",
    features: ["Noir Eclipse", "Verde Oro", "Total Noir", "Verde Noir"],
    colors: ["Noir Eclipse", "Verde Oro", "Total Noir", "Verde Noir"],
    images: [
      "./KL_PZ-AF101-1-SLVRGRY.jpg",
      "./KL_PZ-AF101-2-GLDGRN.jpg",
      "./KL_PZ-AF101-3-BLKBLK.jpg",
      "./KL_PZ-AF101-4-BLKGRN.jpg"
    ]
  },
  {
    id: "kids-glacee",
    name: "Glacee'",
    collection: "KL Kids Club",
    collectionKey: "kids",
    itemCode: "KG-ROM90105",
    price: 8.99,
    paymentLink: "https://buy.stripe.com/test_bJe7sL8hRdDB1jec3i8Ra0p",
    description: "A fun oversized kids frame with polished tint options and confident everyday comfort.",
    features: ["Emerald Envy", "Cotton Candy Sky", "Peony Petal", "Midnight Rose", "Phantom Black", "Total Eclipse"],
    colors: ["Emerald Envy", "Cotton Candy Sky", "Peony Petal", "Midnight Rose", "Phantom Black", "Total Eclipse"],
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
    id: "kids-little-voyagers",
    name: "Little Voyagers",
    collection: "KL Kids Club",
    collectionKey: "kids",
    itemCode: "KG-WF01-PST",
    price: 6.99,
    paymentLink: "https://buy.stripe.com/test_dRm7sLcy7czx3rm1oE8Ra0o",
    description: "A pastel kids essential with bright energy and easy all-day wear.",
    features: ["Coral", "Blue", "Pink", "Purple", "Cream", "Aqua"],
    colors: ["Coral", "Blue", "Pink", "Purple", "Cream", "Aqua"],
    images: [
      "./KL_KG-WF01-PST-1.jpg",
      "./KL_KG-WF01-PST-2.jpg",
      "./KL_KG-WF01-PST-3.jpg",
      "./KL_KG-WF01-PST-4.jpg",
      "./KL_KG-WF01-PST-5.jpg",
      "./KL_KG-WF01-PST-6.jpg"
    ]
  },
  {
    id: "kids-whimsy-wayfarers",
    name: "Whimsy Wayfarers",
    collection: "KL Kids Club",
    collectionKey: "kids",
    itemCode: "KG-WF01-UNI",
    price: 7.99,
    paymentLink: "https://buy.stripe.com/test_28EfZh2XxgPN8LG5EU8Ra0n",
    description: "A playful printed kids frame with bright personality and everyday wearability.",
    features: ["Twilight Twinkle", "Bluebell Dream", "Pink Pixie Dust", "Prism Purple", "Marshmallow Magic"],
    colors: ["Twilight Twinkle", "Bluebell Dream", "Pink Pixie Dust", "Prism Purple", "Marshmallow Magic"],
    images: [
      "./KL_KG-WF01-UNI-BLCK.jpg",
      "./KL_KG-WF01-UNI-LBLU.jpg",
      "./KL_KG-WF01-UNI-PINK.jpg",
      "./KL_KG-WF01-UNI-PRPL.jpg",
      "./KL_KG-WF01-UNI-WHTE.jpg"
    ]
  },
  {
    id: "kids-tough-tints",
    name: "Tough-Tints",
    collection: "KL Kids Club",
    collectionKey: "kids",
    itemCode: "KG-X2738",
    price: 7.99,
    paymentLink: "https://buy.stripe.com/test_14A9AT2Xx7fd3rm8R68Ra0m",
    description: "A sportier wrap-inspired kids frame designed for high-energy wear and standout color.",
    features: ["Blue Ops", "White Out", "Stinger", "Venom", "Magma", "Hydra"],
    colors: ["Blue Ops", "White Out", "Stinger", "Venom", "Magma", "Hydra"],
    images: [
      "./KL_KG-X2738-1GREY.jpg",
      "./KL_KG-X2738-2WHT.jpg",
      "./KL_KG-X2738-3YLW.jpg",
      "./KL_KG-X2738-4GRN.jpg",
      "./KL_KG-X2738-5RED.jpg",
      "./KL_KG-X2738-6BLUE.jpg"
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
  selectedColorIndex: {},
  selectedImageIndex: {}
};

const productGrid = document.getElementById("product-grid");
const collectionPills = document.getElementById("collection-pills");
const collectionFilterList = document.getElementById("collection-filter-list");
const sortSelect = document.getElementById("sort-select");
const productCount = document.getElementById("product-count");
const clearFiltersButton = document.getElementById("clear-filters");

const dialog = document.getElementById("product-dialog");
const dialogClose = document.getElementById("dialog-close");
const dialogMainImage = document.getElementById("dialog-main-image");
const dialogThumbs = document.getElementById("dialog-thumbs");
const dialogCollection = document.getElementById("dialog-collection");
const dialogTitle = document.getElementById("dialog-title");
const dialogPrice = document.getElementById("dialog-price");
const dialogDescription = document.getElementById("dialog-description");
const dialogColors = document.getElementById("dialog-colors");
const dialogFeatures = document.getElementById("dialog-features");
const dialogBuyButton = document.getElementById("dialog-buy-button");

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
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
  let visible = [...products];

  if (state.activeCollection !== "all") {
    visible = visible.filter((product) => product.collectionKey === state.activeCollection);
  }

  visible = visible.filter(matchesPriceRange);

  switch (state.sort) {
    case "price-asc":
      visible.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      visible.sort((a, b) => b.price - a.price);
      break;
    case "name":
      visible.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  return visible;
}

function getSafeIndex(product, index) {
  if (Number.isInteger(index) && index >= 0 && index < product.images.length) {
    return index;
  }
  return 0;
}

function getActiveColorIndex(product) {
  return getSafeIndex(product, state.selectedColorIndex[product.id] ?? 0);
}

function getActiveImageIndex(product) {
  return getSafeIndex(product, state.selectedImageIndex[product.id] ?? getActiveColorIndex(product));
}

function setSelectedColor(product, index) {
  const safeIndex = getSafeIndex(product, index);
  state.selectedColorIndex[product.id] = safeIndex;
  state.selectedImageIndex[product.id] = safeIndex;
}

function setSelectedImage(product, index) {
  const safeIndex = getSafeIndex(product, index);
  state.selectedImageIndex[product.id] = safeIndex;
}

function renderCollectionControls() {
  if (!collectionPills || !collectionFilterList) return;

  collectionPills.innerHTML = collections
    .map((collection) => {
      const activeClass = state.activeCollection === collection.key ? "active" : "";
      return `
        <button class="collection-pill ${activeClass}" type="button" data-collection="${collection.key}">
          ${collection.name}
        </button>
      `;
    })
    .join("");

  collectionFilterList.innerHTML = collections
    .map(
      (collection) => `
        <label>
          <input
            type="radio"
            name="collection-filter"
            value="${collection.key}"
            ${state.activeCollection === collection.key ? "checked" : ""}
          />
          <span>${collection.name}</span>
        </label>
      `
    )
    .join("");

  document.querySelectorAll("[data-collection]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeCollection = button.dataset.collection;
      renderAll();
    });
  });

  document.querySelectorAll('input[name="collection-filter"]').forEach((input) => {
    input.addEventListener("change", () => {
      state.activeCollection = input.value;
      renderAll();
    });
  });
}

function createColorTag(product, color, index, activeIndex) {
  const activeClass = index === activeIndex ? "active" : "";
  return `
    <span class="${activeClass}" data-product-id="${product.id}" data-color-index="${index}">
      ${color}
    </span>
  `;
}

function renderProducts() {
  if (!productGrid) return;

  const visibleProducts = getVisibleProducts();

  if (productCount) {
    productCount.textContent = String(visibleProducts.length);
  }

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const activeColorIndex = getActiveColorIndex(product);
      const activeImageIndex = getActiveImageIndex(product);
      const displayImage = product.images[activeImageIndex] || product.images[0];

      return `
        <article class="product-card">
          <div class="product-image">
            <img src="${displayImage}" alt="${product.name}" loading="lazy" />
          </div>

          <div class="product-meta">
            <div class="meta-top">
              <div>
                <small>${product.collection}</small>
                <h3>${product.name}</h3>
              </div>
              <span class="price">${formatPrice(product.price)}</span>
            </div>

            <p>${product.description}</p>

            <div class="color-tags">
              ${product.colors.map((color, index) => createColorTag(product, color, index, activeColorIndex)).join("")}
            </div>

            <div class="card-actions">
              <button class="button button-ghost" type="button" data-view="${product.id}">View Product</button>
              <a class="button button-gold" href="${product.paymentLink}" target="_blank" rel="noopener noreferrer">
                Buy Now
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products.find((item) => item.id === button.dataset.view);
      if (product) {
        openProduct(product);
      }
    });
  });

  document.querySelectorAll("[data-product-id][data-color-index]").forEach((tag) => {
    tag.addEventListener("click", () => {
      const productId = tag.dataset.productId;
      const colorIndex = Number(tag.dataset.colorIndex);
      const product = products.find((item) => item.id === productId);

      if (!product) return;

      setSelectedColor(product, colorIndex);
      renderProducts();
    });
  });
}

function renderDialogColors(product) {
  if (!dialogColors) return;

  const activeColorIndex = getActiveColorIndex(product);

  dialogColors.innerHTML = product.colors
    .map((color, index) => {
      const activeClass = index === activeColorIndex ? "active" : "";
      return `
        <span class="${activeClass}" data-dialog-product="${product.id}" data-dialog-color-index="${index}">
          ${color}
        </span>
      `;
    })
    .join("");

  document.querySelectorAll("[data-dialog-product][data-dialog-color-index]").forEach((tag) => {
    tag.addEventListener("click", () => {
      const colorIndex = Number(tag.dataset.dialogColorIndex);
      setSelectedColor(product, colorIndex);
      renderDialog(product);
      renderProducts();
    });
  });
}

function renderDialogThumbs(product) {
  if (!dialogThumbs) return;

  const activeImageIndex = getActiveImageIndex(product);

  dialogThumbs.innerHTML = product.images
    .map(
      (image, index) => `
        <button
          type="button"
          data-thumb-index="${index}"
          class="${index === activeImageIndex ? "active-thumb" : ""}"
          aria-label="${product.name} image ${index + 1}"
        >
          <img src="${image}" alt="${product.name} thumb ${index + 1}" loading="lazy" />
        </button>
      `
    )
    .join("");

  dialogThumbs.querySelectorAll("[data-thumb-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const imageIndex = Number(button.dataset.thumbIndex);
      setSelectedImage(product, imageIndex);
      renderDialog(product);
    });
  });
}

function renderDialog(product) {
  if (!dialog) return;

  const activeImageIndex = getActiveImageIndex(product);
  const activeImage = product.images[activeImageIndex] || product.images[0];

  if (dialogCollection) dialogCollection.textContent = `${product.collection} • ${product.itemCode}`;
  if (dialogTitle) dialogTitle.textContent = product.name;
  if (dialogPrice) dialogPrice.textContent = formatPrice(product.price);
  if (dialogDescription) dialogDescription.textContent = product.description;

  if (dialogMainImage) {
    dialogMainImage.src = activeImage;
    dialogMainImage.alt = `${product.name} main image`;
  }

  renderDialogThumbs(product);
  renderDialogColors(product);

  if (dialogFeatures) {
    dialogFeatures.innerHTML = product.features.map((feature) => `<li>${feature}</li>`).join("");
  }

  if (dialogBuyButton) {
    dialogBuyButton.href = product.paymentLink;
    dialogBuyButton.textContent = "Buy Now";
  }
}

function openProduct(product) {
  renderDialog(product);
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
}

function renderAll() {
  renderCollectionControls();
  renderProducts();
}

if (sortSelect) {
  sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });
}

document.querySelectorAll('input[name="price-range"]').forEach((input) => {
  input.addEventListener("change", (event) => {
    state.priceRange = event.target.value;
    renderProducts();
  });
});

if (clearFiltersButton) {
  clearFiltersButton.addEventListener("click", () => {
    state.activeCollection = "all";
    state.sort = "price-desc";
    state.priceRange = "all";
    state.selectedColorIndex = {};
    state.selectedImageIndex = {};

    if (sortSelect) {
      sortSelect.value = "price-desc";
    }

    const allPriceInput = document.querySelector('input[name="price-range"][value="all"]');
    if (allPriceInput) {
      allPriceInput.checked = true;
    }

    renderAll();
  });
}

if (dialogClose && dialog) {
  dialogClose.addEventListener("click", () => dialog.close());
}

if (dialog) {
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const inDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!inDialog) {
      dialog.close();
    }
  });
}

renderAll();
