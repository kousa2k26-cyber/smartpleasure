/*
  Prototype catalogue for smartpleasure.

  These are research drafts inspired by public Indian retailer listings. They are
  not confirmed inventory, supplier offers, or final selling prices. The store
  marks them as previews and disables Add to bag until you confirm the products,
  prices, sizes, specifications, and supply. Replace the placeholder images with
  your own approved catalogue photos before launch.

  To add/edit an entry, update this array. Category values used by the shop are
  "garments" (Intimate wear), "toys" (Pleasure toys), and "dolls" (Dolls & fantasy).
*/
window.STORE_PRODUCTS = [
  {
    id: "rose-veil-babydoll-set",
    name: "Rose Veil Babydoll Set",
    category: "garments",
    categoryLabel: "Intimate wear",
    price: 599,
    isDraft: true,
    featured: true,
    image: "images/rose-veil-babydoll-burgundy.png",
    imageAlt: "Model wearing the burgundy Rose Veil babydoll with lace cups, sheer floral waist and a layered ruffle skirt",
    gallery: [
      { image: "images/rose-veil-babydoll-burgundy.png", alt: "Burgundy lace Rose Veil babydoll with a sheer floral waist and layered ruffle skirt", label: "Burgundy" },
      { image: "images/rose-veil-babydoll-blue.png", alt: "Blue lace Rose Veil babydoll with a sheer floral waist and layered ruffle skirt", label: "Blue" }
    ],
    description: "A lace-cup babydoll with a sheer floral waist and a layered ruffle skirt. The listing photos show the style in burgundy and blue; confirm colour availability and whether a matching brief is included with the supplier.",
    features: ["Lace-cup babydoll silhouette", "Sheer floral waist panel", "Layered ruffle skirt"],
    details: ["Burgundy and blue image options shown", "Confirm available colours, sizing and set contents with supplier"],
    includedItems: ["Confirm set contents with supplier"],
    referenceSource: "https://sinderella.in/products/freya-two-piece-babydoll-lingerie"
  },
  {
    id: "together-vibrating-ring",
    name: "Together Vibrating Ring",
    category: "toys",
    categoryLabel: "Pleasure toys",
    price: 1875,
    isDraft: true,
    featured: true,
    image: "images/together-vibrating-ring.svg",
    imageAlt: "Illustrated preview of a plum-colored wearable vibrating ring; not a photograph of final stock",
    description: "A rechargeable wearable ring concept designed for shared play. Its textured surface and adjustable intensity settings make it a simple, couple-friendly addition to the catalogue.",
    features: ["Wearable vibrating ring", "10 intensity settings listed by the reference retailer", "Rechargeable design"],
    details: ["Material, included charging items, fit and final specifications need confirmation"],
    referenceSource: "https://mymuse.in/products/loop-vibrating-ring-for-intense-play"
  },
  {
    id: "midnight-lace-bra-brief",
    name: "Midnight Lace Bra & Brief",
    category: "garments",
    categoryLabel: "Intimate wear",
    price: 549,
    isDraft: true,
    featured: true,
    image: "images/midnight-lace-set-black.png",
    imageAlt: "Model wearing the black Midnight Lace set with floral lace cups, slim straps and matching strappy brief",
    gallery: [
      { image: "images/midnight-lace-set-black.png", alt: "Black lace Midnight Lace set with floral bra cups and matching strappy brief", label: "Black" },
      { image: "images/midnight-lace-set-pink.png", alt: "Pink lace Midnight Lace set with floral bra cups and matching strappy brief", label: "Pink" }
    ],
    description: "A coordinated lace set with floral cups, slim shoulder straps and a matching brief with strappy side details. The listing photos show black and pink options; confirm colour availability and exact fit with the supplier.",
    features: ["Floral lace bra cups", "Slim shoulder straps", "Matching brief with strappy details"],
    details: ["Black and pink image options shown", "Confirm colours, fabric composition, fit and available sizes with supplier"],
    includedItems: ["Bra", "Matching brief — confirm set contents with supplier"],
    referenceSource: "https://sinderella.in/products/lovebite-lace-mesh-temptation-lingerie"
  },
  {
    id: "warm-rhythm-dual-massager",
    name: "Warm Rhythm Dual-Motor Massager",
    category: "toys",
    categoryLabel: "Pleasure toys",
    price: 999,
    isDraft: true,
    featured: true,
    image: "images/warm-rhythm-massager.svg",
    imageAlt: "Illustrated preview of a pink dual-motor massager with a curved arm and two contact points; not a photograph of final stock",
    description: "A rechargeable dual-motor device concept with two independently placed contact areas and a warming feature. The control buttons sit on the handle for straightforward adjustment.",
    features: ["Two motors", "Warming feature listed at approximately 42°C", "Handle controls and USB charging"],
    details: ["Reference dimensions: approximately 18.5 cm", "Material and charging details need supplier confirmation"],
    includedItems: ["Device", "Charging cable — confirm exact cable type with supplier"],
    referenceSource: "https://sinderella.in/products/jhankaar-warming-dual-vibration-massager"
  },
  {
    id: "pearl-glow-two-piece",
    name: "Pearl Glow Two-Piece",
    category: "garments",
    categoryLabel: "Intimate wear",
    price: 299,
    isDraft: true,
    featured: false,
    image: "images/pearl-glow-two-piece-front.png",
    imageAlt: "Front view of a model wearing a pearl-strand halter-style top with draped body strands and matching hip detail",
    gallery: [
      { image: "images/pearl-glow-two-piece-front.png", alt: "Front view of the pearl-strand halter top with draped decorative strands and matching hip detail", label: "Front view" },
      { image: "images/pearl-glow-two-piece-side.png", alt: "Side view showing the pearl strands and draped hip detail of the Pearl Glow set", label: "Side view" },
      { image: "images/pearl-glow-two-piece-detail-board.png", alt: "Pearl Glow reference board showing the pearl-look set from several angles and close-up details", label: "Detail views" }
    ],
    description: "A statement pearl-look two-piece with a halter-style beaded top, draped decorative strands and coordinating hip detail. The gallery includes front, side and detail-board views. Confirm construction, fit, sizes and included pieces with the supplier; text shown inside the reference board is not a verified product specification.",
    features: ["Halter-style pearl-look top", "Draped decorative body strands", "Coordinating hip detail"],
    details: ["Confirm available colours, construction, fit and sizing with supplier", "Promotional claims in the supplied detail-board image are unverified"],
    includedItems: ["Confirm exact set contents with supplier"],
    referenceSource: "https://sinderella.in/products/maya-two-piece-pearl-embellished-lingerie"
  },
  {
    id: "soft-pulse-bead-massager",
    name: "Soft Pulse Bead Massager",
    category: "toys",
    categoryLabel: "Pleasure toys",
    price: 949,
    isDraft: true,
    featured: false,
    image: "images/soft-pulse-bead-massager.svg",
    imageAlt: "Illustrated preview of a compact curved massager with graduated bead details; not a photograph of final stock",
    description: "A compact rechargeable massager concept with five graduated soft beads and one-button controls. The reference listing describes a lightweight silicone-and-ABS body and a charging cable in the box.",
    features: ["Five graduated beads", "One-button vibration control", "Rechargeable"],
    details: ["Reference size: approximately 154 × 30 × 30 mm", "Reference material: silicone and ABS; confirm with supplier"],
    includedItems: ["Device", "Charging cable — confirm exact cable type with supplier"],
    referenceSource: "https://sinderella.in/products/hirni-rechargeable-beaded-massager"
  },
  {
    id: "ember-skirt-garter-set",
    name: "Ember Skirt & Garter Set",
    category: "garments",
    categoryLabel: "Intimate wear",
    price: 899,
    isDraft: true,
    featured: false,
    image: "images/ember-skirt-garter-set.png",
    imageAlt: "Model wearing the Ember red lace bra, brief, garter belt and matching thigh-high stockings",
    draftNotice: "Photo preview · price and product details need confirmation before sale.",
    gallery: [
      { image: "images/ember-skirt-garter-set.png", alt: "Model wearing the red Ember lace bra, brief, garter belt and thigh-high stockings", label: "Red" },
      { image: "images/ember-skirt-garter-set-views-red.png", alt: "Side, front and back views of the red Ember lace bra, brief, garter belt and thigh-high stockings", label: "Red views" },
      { image: "images/ember-skirt-garter-set-views-copper.png", alt: "Side, front and back views of the copper Ember lace bra, brief, garter belt and thigh-high stockings", label: "Copper views" }
    ],
    description: "An embroidered mesh look built around a bra, matching brief, skirt and garter details. The pieces share one coordinated palette, so the set feels styled without extra effort.",
    features: ["Embroidered mesh bra", "Matching brief and skirt", "Garter detail"],
    details: ["Red and copper image options shown; confirm available colours and sizes with supplier"],
    includedItems: ["Bra", "Matching brief", "Skirt", "Garter piece"],
    referenceSource: "https://sinderella.in/products/sugar-pop-strip-3-piece-glow-look-lingerie"
  },
  {
    id: "pulse-pair-suction-egg-set",
    name: "Pulse Pair Suction & Egg Set",
    category: "toys",
    categoryLabel: "Pleasure toys",
    price: 999,
    isDraft: true,
    featured: false,
    image: "images/pulse-pair-set.svg",
    imageAlt: "Illustrated preview of a paired suction-style device and compact vibrating egg with remote; not a photograph of final stock",
    description: "A two-piece rechargeable set concept combining a suction-style unit and a compact vibrating egg with a wired remote. The pieces can be used separately; confirm the final controls and care guidance with the supplier.",
    features: ["Suction-style unit and vibrating egg", "Wired remote control", "Reference listing describes silicone and ABS construction"],
    details: ["Reference listing describes splash resistance; verify the exact rating before launch"],
    includedItems: ["Suction unit", "Vibrating egg", "Wired remote", "Charging cable — confirm exact cable type with supplier"],
    referenceSource: "https://sinderella.in/products/jugalbandi-suction-and-egg-massager-set"
  },
  {
    id: "afterglow-satin-wrap-set",
    name: "Afterglow Satin Wrap Set",
    category: "garments",
    categoryLabel: "Intimate wear",
    price: 1499,
    isDraft: true,
    featured: false,
    image: "images/afterglow-satin-wrap-lifestyle-2.png",
    imageAlt: "Model wearing a burgundy satin-look lingerie set with black lace trim and strappy garter details",
    gallery: [
      { image: "images/afterglow-satin-wrap-lifestyle-2.png", alt: "Front view of a burgundy satin-look bra and matching strappy brief with black lace trim", label: "Front view" },
      { image: "images/afterglow-satin-wrap-lifestyle-1.png", alt: "Model wearing the burgundy satin-look lingerie set with lace and garter details", label: "Alternate view" },
      { image: "images/afterglow-satin-wrap-detail-board.png", alt: "Product detail board showing the burgundy and black lingerie set with lace, straps and hardware details", label: "Detail views" },
      { image: "images/afterglow-satin-wrap-colors.png", alt: "Color lineup image showing similar lingerie sets in several jewel tones", label: "Color lineup" }
    ],
    description: "A coordinated satin-look lingerie set with contrasting black lace details, a bra-style top, matching brief and garter-style straps. The supplied images show burgundy styling and a color lineup. Confirm whether a wrap or choker is included, along with exact materials, colors and sizes, with the supplier.",
    features: ["Satin-look bra-style top", "Black lace trim", "Matching brief with strappy garter details"],
    details: ["Burgundy and other color options are shown in supplied reference images; confirm availability", "Confirm the wrap, choker, sizing and exact set contents with supplier"],
    includedItems: ["Confirm exact set contents with supplier"],
    referenceSource: "https://sinderella.in/products/molly-roleplay-lingerie-set"
  },
  {
    id: "velvet-motion-vibrating-stroker",
    name: "Velvet Motion Vibrating Stroker",
    category: "toys",
    categoryLabel: "Pleasure toys",
    price: 3999,
    isDraft: true,
    featured: false,
    image: "images/velvet-motion-stroker.svg",
    imageAlt: "Illustrated preview of a compact dark vibrating stroker with a soft textured sleeve; not a photograph of final stock",
    description: "A compact personal-use stroker concept with a soft textured inner sleeve, open-ended design and vibration controls. The source listing describes ten modes and a waterproof build; verify material and rating before offering it.",
    features: ["Compact vibrating sleeve", "10 vibration modes listed by the reference retailer", "Open-ended design"],
    details: ["Reference price: ₹3,999", "Material and exact water-resistance rating need supplier confirmation"],
    referenceSource: "https://in.imbesharam.com/products/fppr-vibrating-stroker"
  },
  {
    id: "real-body-3d-system-doll-petite",
    name: "Real Body 3D System Doll — Petite",
    category: "dolls",
    categoryLabel: "Dolls & fantasy",
    price: null,
    isDraft: true,
    featured: false,
    previewLabel: "Photo preview",
    draftNotice: "Photo preview · body details, options, price and product details need supplier confirmation before sale.",
    image: "images/real-body-3d-system-doll-petite-original.png",
    imageAlt: "Front view of a sculpted doll head with dark hair neatly swept back, displayed on a wooden base",
    gallery: [
      { image: "images/real-body-3d-system-doll-petite-original.png", alt: "Front view of a sculpted doll head with dark hair neatly swept back, displayed on a wooden base", label: "Original look" },
      { image: "images/real-body-3d-system-doll-petite-medium.png", alt: "Front view of a sculpted doll head with a medium skin tone and dark hair pulled back, displayed on a wooden base", label: "Medium tone" },
      { image: "images/real-body-3d-system-doll-petite-long-waves.png", alt: "Front view of a sculpted doll head with long wavy dark hair and jewelry, displayed on a wooden base", label: "Long waves" }
    ],
    video: "images/real-body-3d-system-doll-preview.mp4",
    description: "The Petite entry in the Real Body 3D System Doll range, shown with a softly sculpted face and three supplied appearance references. Use the Dolls & fantasy configurator to browse body type, skin tone, hair type and ethnicity filters. The available combinations and product specifications still need supplier confirmation.",
    features: ["Petite body style", "Three supplied face and hair references", "Doll-section filters for body type and appearance"],
    details: ["Confirm material, height, weight, articulation, compatibility and care instructions with the supplier", "Ethnicity and appearance options are not confirmed from the reference images"],
    includedItems: ["Confirm whether the listing includes the doll body, head, accessories and care items with the supplier"],
    dollAttributes: {
      bodyType: "petite",
      skinTones: ["light", "medium"],
      hairTypes: ["pulled-back", "wavy", "long-waves"],
      ethnicities: ["unconfirmed"]
    }
  }
];
