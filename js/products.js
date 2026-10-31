/*
  Prototype catalogue for smartpleasure.

  These are research drafts inspired by public Indian retailer listings. They are
  not confirmed inventory, supplier offers, or final selling prices. The store
  marks them as previews and disables Add to bag until you confirm the products,
  prices, sizes, specifications, and supply. Replace the placeholder images with
  your own approved catalogue photos before launch.

  To add/edit an entry, update this array. Category values used by the shop are
  "garments" (Intimate wear) and "toys" (Pleasure toys).
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
    image: "images/rose-veil-babydoll.svg",
    imageAlt: "Illustrated preview of a rose-pink babydoll with lace trim and a matching brief; not a photograph of final stock",
    description: "A coordinated two-piece look with a softly gathered babydoll, lace-trim neckline and gentle ruffle detail. The matching brief completes the set with an easy, romantic feel.",
    features: ["Short babydoll silhouette", "Lace neckline and ruffle trim", "Matching brief included"],
    details: ["Colour and size options need supplier confirmation"],
    includedItems: ["Babydoll top", "Matching brief"],
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
    image: "images/midnight-lace-set.svg",
    imageAlt: "Illustrated preview of a black lace bra and matching brief; not a photograph of final stock",
    description: "A classic two-piece set pairing a lace-and-mesh underwire bra with a coordinating brief. Delicate lace gives this familiar silhouette a more considered, dressed-up finish.",
    features: ["Underwire bra and matching brief", "Lace and mesh detailing", "Coordinated two-piece set"],
    details: ["Colours, fabric composition and available sizes need supplier confirmation"],
    includedItems: ["Bra", "Matching brief"],
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
    image: "images/pearl-glow-set.svg",
    imageAlt: "Illustrated preview of a black strappy bra and brief with pearl accents; not a photograph of final stock",
    description: "A coordinated bra-and-brief set with fine straps, scalloped edges and small pearl-style accents across the front. A delicate option for customers who like detail without a complicated silhouette.",
    features: ["Pearl-style front accents", "Scalloped edging", "Matching bra and brief"],
    details: ["Colour, fit and size information need supplier confirmation"],
    includedItems: ["Bra", "Matching brief"],
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
    image: "images/ember-garter-set.svg",
    imageAlt: "Illustrated preview of a burgundy embroidered bra, brief, skirt and garter details; not a photograph of final stock",
    description: "An embroidered mesh look built around a bra, matching brief, skirt and garter details. The pieces share one coordinated palette, so the set feels styled without extra effort.",
    features: ["Embroidered mesh bra", "Matching brief and skirt", "Garter detail"],
    details: ["Colour and available sizes need supplier confirmation"],
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
    image: "images/afterglow-satin-wrap-set.svg",
    imageAlt: "Illustrated preview of a satin wrap, lace bra, matching brief and choker; not a photograph of final stock",
    description: "A multi-piece edit that pairs a lace bra with a satin skirt wrap, matching panty and choker detail. Lace and satin bring contrasting textures to a coordinated evening look.",
    features: ["Lace bra with choker detail", "Satin skirt wrap", "Matching panty"],
    details: ["Reference listing shows one size stretching to L; verify the fit and size chart with supplier"],
    includedItems: ["Lace bra", "Satin skirt wrap", "Matching panty", "Choker"],
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
  }
];
