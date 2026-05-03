const products = [
  {
    id: "halo-vrgo",
    name: "VRGO",
    collection: "Halo Collection",
    collectionKey: "halo",
    itemCode: "KL_8VG29589",
    price: 14.99,
    description: "An oversized halo silhouette with polished metal arms and a confident finish built for statement entrances.",
    features: ["Oversized round silhouette", "Metal arm detailing", "Gradient lens presence", "UV400 protection noted in source sheet"],
    colors: ["Brown", "Black Fade", "Blue", "Rose", "Smoke"],
    images: [
      "./KL_8VG29589-1.jpg",
      "./KL_8VG29589-2.jpg",
      "./KL_8VG29589-3.jpg",
      "./KL_8VG29589-5.jpg",
      "./KL_8VG29589-6.jpg"
    ]
  },
  {
    id: "halo-everyday",
    name: "Everyday Halo",
    collection: "Halo Collection",
    collectionKey: "halo",
    itemCode: "KL_8GSL22731",
    price: 10.99,
    description: "A soft everyday halo frame with an easy luxury profile and versatile tinted finishes.",
    features: ["Rounded fashion frame", "Everyday wear profile", "UV400 lens note", "Multiple tonal finishes"],
    colors: ["Black Fade", "Jet Black", "Desert", "Black Silver", "Brown", "Grey Black", "Flame"],
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
    id: "halo-classic-curve",
    name: "Classic Curve",
    collection: "Halo Collection",
    collectionKey: "halo",
    itemCode: "KL_PZ-GSL28319",
    price: 17.99,
    description: "A sculpted halo frame with refined metal lines and an effortless day-to-night finish.",
    features: ["Slim metal arm profile", "Classic curved lens shape", "Elevated neutral palette", "UV protection callout"],
    colors: ["Silver Smoke", "Black Gold", "Green Gold", "Brown", "Jet Black"],
    images: [
      "./KL_PZ-GSL28319-1SLVR.jpg",
      "./KL_PZ-GSL28319-2BLKGLD.jpg",
      "./KL_PZ-GSL28319-3GRGLD.jpg",
      "./KL_PZ-GSL28319-4BRWN.jpg",
      "./KL_PZ-GSL28319-5BLK.jpg"
    ]
  },
  {
    id: "angles-attitude",
    name: "Angles & Attitude",
    collection: "Angles Collection",
    collectionKey: "angles",
    itemCode: "KL_8GSL28304",
    price: 19.99,
    description: "Architectural lines, sharp confidence, and a richer palette made for statement styling.",
    features: ["Angular oversized profile", "Fashion-forward geometry", "Statement color mixes", "Editorial finish"],
    colors: ["Brown Edge", "Black Smoke", "Black Red", "Rose Gold", "Black Purple", "Grey Blue"],
    images: [
      "./KL_8GSL28304-1BRWNE.jpg",
      "./KL_8GSL28304-2BSMKE.jpg",
      "./KL_8GSL28304-3BLKR.jpg",
      "./KL_8GSL28304-4RGLD.jpg",
      "./KL_8GSL28304-5BPRP.jpg",
      "./KL_8GSL28304-6GRBL.jpg"
    ]
  },
  {
    id: "angles-vrgo-829",
    name: "VRGO 829",
    collection: "Angles Collection",
    collectionKey: "angles",
    itemCode: "KL_8VG29695",
    price: 18.99,
    description: "A faceted fashion frame with crisp lines and a polished profile that reads instantly elevated.",
    features: ["Geometric oversized lens shape", "Statement temples", "Fashion gradient lenses", "Confident luxury profile"],
    colors: ["Pink Gold", "Animal", "Blush", "Blue", "Gold"],
    images: [
      "./KL_8VG29695-1PINKG.jpg",
      "./KL_8VG29695-2ANML.jpg",
      "./KL_8VG29695-3BLUSH.jpg",
      "./KL_8VG29695-4BBLUE.jpg",
      "./KL_8VG29695-6BGOLD.jpg"
    ]
  },
  {
    id: "angles-squared-society",
    name: "Squared Society",
    collection: "Angles Collection",
    collectionKey: "angles",
    itemCode: "KL_8GSL28258",
    price: 15.99,
    description: "A clean square-led statement with confident edge and easy versatility across luxury neutrals and bold tints.",
    features: ["Squared silhouette", "Statement arm profile", "Polished finish", "Day-to-night wearability"],
    colors: ["Gold Brown", "Amber", "Cool Grey", "Pink", "Blue", "Black"],
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
    id: "allure-rhinestone-muse",
    name: "Luxe Rhinestone Muse",
    collection: "Allure Collection",
    collectionKey: "allure",
    itemCode: "KL_8RS2104",
    price: 17.99,
    description: "A glamorous oversized frame with jewelry-inspired side detailing and a bold fashion presence.",
    features: ["Oversized glamour frame", "Decorative arm detailing", "Luxury finish", "Strong editorial presence"],
    colors: ["Black", "Blush", "Olive Green", "Brown", "Purple"],
    images: [
      "./KL_8RS2104-1BLACK.jpg",
      "./KL_8RS2104-2BLUSH.jpg",
      "./KL_8RS2104-3OLGRN.jpg",
      "./KL_8RS2104-4BROWN.jpg",
      "./KL_8RS2104-5PURPL.jpg"
    ]
  },
  {
    id: "allure-midnight-gradient",
    name: "Midnight Gradient",
    collection: "Allure Collection",
    collectionKey: "allure",
    itemCode: "KL_8VG29682",
    price: 14.99,
    description: "A sleeker cat-eye profile with gradient drama and polished color transitions.",
    features: ["Sharp cat-eye profile", "Gradient lens play", "Fashion palette", "Polished statement wear"],
    colors: ["Flame", "Apricot", "Green", "Icy Blue", "Pink", "Black"],
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
    itemCode: "KL_8VG29687",
    price: 13.99,
    description: "A runway-leaning cat-eye designed to feel polished, playful, and instantly fashion aware.",
    features: ["Designer cat-eye line", "Gloss finish", "Lightweight profile", "Fashion-first shape"],
    colors: ["Blue", "Green", "Pink", "Brown", "Orange", "Black"],
    images: [
      "./KL_8VG29687-1BLU.jpg",
      "./KL_8VG29687-2GRN.jpg",
      "./KL_8VG29687-3PNK.jpg",
      "./KL_8VG29687-4BRN.jpg",
      "./KL_8VG29687-5ORA.jpg",
      "./KL_8VG29687-6BLK.jpg"
    ]
  },
  {
    id: "flight-manhattan-heights",
    name: "Manhattan Heights",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "KL_PZ-MH87074",
    price: 18.99,
    description: "A commanding oversized flight frame with elevated trim details built for a polished metropolitan finish.",
    features: ["Oversized navigator profile", "Luxury metal detailing", "Editorial fit", "Statement silhouette"],
    colors: ["Black Silver", "Black Gold", "Gunmetal Green", "Black Gold 2", "Animal Luxe", "Black Grey"],
    images: [
      "./KL_PZ-MH87074-1BLKSLV.jpg",
      "./KL_PZ-MH87074-2BLKGLD.jpg",
      "./KL_PZ-MH87074-3GNMTL.jpg",
      "./KL_PZ-MH87074-4BLKGLD2.jpg",
      "./KL_PZ-MH87074-5ANML.jpg",
      "./KL_PZ-MH87074-6BLKGRY.jpg"
    ]
  },
  {
    id: "flight-skyline-aviator",
    name: "Skyline Aviator",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "KL_8AV5239",
    price: 13.99,
    description: "A lighter aviator statement with mirrored energy, city-ready color, and an effortless polished frame.",
    features: ["Aviator profile", "Mirrored lens assortment", "Slim arm finish", "High-visibility color palette"],
    colors: ["Yellow", "Gold Flame", "Purple", "Blue", "Grey Silver"],
    images: [
      "./KL_8AV5239-1YLOW.jpg",
      "./KL_8AV5239-2GFLM.jpg",
      "./KL_8AV5239-3PRPL.jpg",
      "./KL_8AV5239-5BLUE.jpg",
      "./KL_8AV5239-6GRYS.jpg"
    ]
  },
  {
    id: "flight-domin8",
    name: "DOMIN8",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "KL_8AV5207",
    price: 16.99,
    description: "A squared aviator with a commanding front and a strong, modern fashion attitude.",
    features: ["Squared aviator lens", "Confident oversized cut", "Statement luxury profile", "Mixed lens finishes"],
    colors: ["Black", "Black 2", "Silver", "Grey", "Brown", "Black Black"],
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
    name: "EXEC 8",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "KL_8AV5182",
    price: 15.99,
    description: "A tailored executive aviator with balanced luxury metalwork and an understated power profile.",
    features: ["Executive aviator fit", "Balanced rectangular lens", "Refined mixed-metal presence", "Luxury neutral colorways"],
    colors: ["Gold Brown", "Black Green", "Silver Grey", "Black Black", "Silver Smoke"],
    images: [
      "./KL_8AV5182-1GLDBRW.jpg",
      "./KL_8AV5182-2BLKGRN.jpg",
      "./KL_8AV5182-3SLVGRY.jpg",
      "./KL_8AV5182-5BLKBLK.jpg",
      "./KL_8AV5182-6SLVSM.jpg"
    ]
  },
  {
    id: "flight-ryder-aviator",
    name: "Ryder Aviator",
    collection: "Flight Collection",
    collectionKey: "flight",
    itemCode: "KL_8AF125",
    price: 11.99,
    description: "A clean aviator essential with versatile mirrored and classic lens tones.",
    features: ["Classic aviator shape", "Lightweight profile", "Everyday luxury", "Versatile mirrored finishes"],
    colors: ["Rose Gold", "Green", "Dark Grey", "Silver Grey", "Gunmetal Grey", "Silver"],
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
    itemCode: "KL_PZ-AF101-CM",
    price: 15.99,
    description: "A bold command-frame aviator with strong bridge presence and polished metal detailing.",
    features: ["Commanding navigator line", "Modern bridge bar", "Strong lens presence", "Statement luxury frame"],
    colors: ["Silver Grey", "Gold Green", "Black Black", "Black Green", "Purple Tint", "Blue Fade"],
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
    itemCode: "KL_PZ-AF112-RV",
    price: 19.99,
    description: "A fashion-forward squared flight frame with mirrored energy and a stronger luxury silhouette.",
    features: ["Squared flight profile", "Bold luxury proportion", "Mirrored color assortment", "Editorial statement wear"],
    colors: ["Rose Gold", "Blue", "Blue Sky", "Gold", "Green", "Orange"],
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
    itemCode: "KL_PZ-AF101",
    price: 12.99,
    description: "An easy luxury aviator built for daily polish with balanced metal lines and clean tonal finishes.",
    features: ["Daily-wear aviator", "Balanced frame shape", "Polished metal temple line", "Clean luxury styling"],
    colors: ["Silver Grey", "Gold Green", "Black", "Black Green"],
    images: [
      "./KL_PZ-AF101-1-SLVRGRY.jpg",
      "./KL_PZ-AF101-2-GLDGRN.jpg",
      "./KL_PZ-AF101-3-BLKBLK.jpg",
      "./KL_PZ-AF101-4-BLKGRN.jpg"
    ]
  },
  {
    id: "kids-glacee",
    name: "Glacee",
    collection: "Kids Club Collection",
    collectionKey: "kids",
    itemCode: "KL_KG-ROM90105",
    price: 10.99,
    description: "A fun oversized kids frame with polished tint options and confident everyday comfort.",
    features: ["Kids fit", "Oversized playful frame", "Comfortable wear", "Bright and neutral options"],
    colors: ["Grey", "Blue", "Pink", "Black", "Black Grey", "Black Black"],
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
    collection: "Kids Club Collection",
    collectionKey: "kids",
    itemCode: "KL_KG-WF01-PST",
    price: 7.99,
    description: "A pastel kids essential with bright energy and easy all-day wear.",
    features: ["Kids wayfarer shape", "Soft pastel palette", "Everyday durability", "Easy lightweight fit"],
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
    collection: "Kids Club Collection",
    collectionKey: "kids",
    itemCode: "KL_KG-WF01-UNI",
    price: 9.99,
    description: "A playful printed kids frame with bright personality and everyday wearability.",
    features: ["Printed kids frame", "Wayfarer-inspired shape", "Playful pattern styling", "Comfortable fit"],
    colors: ["Black", "Light Blue", "Pink", "Purple", "White"],
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
    collection: "Kids Club Collection",
    collectionKey: "kids",
    itemCode: "KL_KG-X2738",
    price: 9.99,
    description: "A sportier wrap-inspired kids frame designed for high-energy wear and standout color.",
    features: ["Sport kids fit", "Wrap-inspired shape", "Bold camo-style options", "Adventure-ready profile"],
    colors: ["Grey", "White", "Yellow", "Green", "Red", "Blue"],
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
    id: "visionary-luxe-visor",
    name: "Luxe Visor",
    collection: "Visionary Collection",
    collectionKey: "visionary",
    itemCode: "KL_8GSL28287",
    price: 17.99,
    description: "A futuristic visor-style statement with a stronger silhouette and sleek directional energy.",
    features: ["Visor-inspired profile", "Forward luxury attitude", "Bold tinted lens selection", "Statement wear"],
    colors: ["Gold Black", "Black", "Smoke", "Brown", "Blue Sky", "Blue Cloud"],
    images: [
      "./KL_8GSL28287-1GBLK.jpg",
      "./KL_8GSL28287-2BLK.jpg",
      "./KL_8GSL28287-3SMKE.jpg",
      "./KL_8GSL28287-4BRWN.jpg",
      "./KL_8GSL28287-5BLUSK.jpg",
      "./KL_8GSL28287-6BLCLD.jpg"
    ]
  }
];

const collections = [
  { key: "all", name: "All Collections" },
  { key: "halo", name: "Halo" },
  { key: "angles", name: "Angles" },
  { key: "allure", name: "Allure" },
  { key: "flight", name: "Flight" },
  { key: "kids", name: "Kids Club" },
  { key: "visionary", name: "Visionary" }
];

const state = {
  collection: "all",
  sort: "featured"
};

const grid = document.getElementById("product-grid");
const chips = document.getElementById("collection-chips");
const sortSelect = document.getElementById("sort-select");

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

const statProducts = document.getElementById("stat-products");
const statVariants = document.getElementById("stat-variants");
const statCollections = document.getElementById("stat-collections");

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function setStats() {
  if (statProducts) {
    statProducts.textContent = String(products.length);
  }

  if (statVariants) {
    statVariants.textContent = String(
      products.reduce((sum, product) => sum + product.colors.length, 0)
    );
  }

  if (statCollections) {
    statCollections.textContent = String(collections.length - 1);
  }
}

function renderCollectionChips() {
  if (!chips) return;

  chips.innerHTML = "";

  collections.forEach((collection) => {
    const count = collection.key === "all"
      ? products.length
      : products.filter((product) => product.collectionKey === collection.key).length;

    const button = document.createElement("button");
    button.type = "button";
    button.className = `collection-chip${state.collection === collection.key ? " active" : ""}`;
    button.innerHTML = `<strong>${collection.name}</strong><span>${count} styles</span>`;

    button.addEventListener("click", () => {
      state.collection = collection.key;
      renderCollectionChips();
      renderProducts();
    });

    chips.appendChild(button);
  });
}

function getVisibleProducts() {
  const visible = state.collection === "all"
    ? [...products]
    : products.filter((product) => product.collectionKey === state.collection);

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

function renderProducts() {
  if (!grid) return;

  grid.innerHTML = "";

  getVisibleProducts().forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
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
          ${product.colors.slice(0, 5).map((color) => `<span title="${color}">${color}</span>`).join("")}
          ${product.colors.length > 5 ? `<span>+${product.colors.length - 5} more</span>` : ""}
        </div>
        <div class="card-actions">
          <button class="button button-ghost" type="button">View Product</button>
          <button class="button button-gold" type="button">Buy Soon</button>
        </div>
      </div>
    `;

    card.addEventListener("click", () => openProduct(product));
    grid.appendChild(card);
  });
}

function openProduct(product) {
  if (!dialog) return;

  if (dialogCollection) {
    dialogCollection.textContent = `${product.collection} • ${product.itemCode}`;
  }

  if (dialogTitle) {
    dialogTitle.textContent = product.name;
  }

  if (dialogPrice) {
    dialogPrice.textContent = formatPrice(product.price);
  }

  if (dialogDescription) {
    dialogDescription.textContent = product.description;
  }

  if (dialogMainImage) {
    dialogMainImage.src = product.images[0];
    dialogMainImage.alt = `${product.name} view 1`;
  }

  if (dialogThumbs) {
    dialogThumbs.innerHTML = "";

    product.images.forEach((image, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = `<img src="${image}" alt="${product.name} view ${index + 1}" loading="lazy">`;

      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (dialogMainImage) {
          dialogMainImage.src = image;
          dialogMainImage.alt = `${product.name} view ${index + 1}`;
        }
      });

      dialogThumbs.appendChild(button);
    });
  }

  if (dialogColors) {
    dialogColors.innerHTML = product.colors.map((color) => `<span title="${color}">${color}</span>`).join("");
  }

  if (dialogFeatures) {
    dialogFeatures.innerHTML = product.features.map((feature) => `<li>${feature}</li>`).join("");
  }

  dialog.showModal();
}

if (sortSelect) {
  sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });
}

if (dialogClose && dialog) {
  dialogClose.addEventListener("click", () => dialog.close());
}

if (dialog) {
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const inside =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!inside) {
      dialog.close();
    }
  });
}

setStats();
renderCollectionChips();
renderProducts();
