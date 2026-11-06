# smartpleasure

A static storefront prototype for smartpleasure, built with plain HTML, CSS and vanilla JavaScript. No build step or package installation is needed.

## Preview

Open `index.html` in a browser. The design is mobile-first and uses a burgundy, rose and ivory editorial style. The catalogue contains 10 existing research listings and a first Dolls & fantasy preview with owner-supplied photos and a video. Listings remain drafts; the doll has no confirmed price, and order submission stays blocked until supplier, stock, prices, sizes, specifications and product details are confirmed.

## Pages

- \`index.html\` — campaign home, moving image features and category links
- \`shop.html\` — collection filters and product research previews
- \`product.html\` — product details loaded by URL ID
- \`cart.html\` and \`checkout.html\` — shopping bag, WhatsApp order flow and UPI placeholder
- \`about.html\` and \`contact.html\` — brand story and contact options

## Editing

- Edit the 11 draft product objects in `js/products.js`. Keep `isDraft: true` while reviewing; after confirming the actual supplier, inventory, price and details, set it to `false` to enable ordering.
- The Dolls & fantasy shop has live filters for body type, skin tone, hair type and ethnicity. Add these attributes under `dollAttributes` for each doll listing; only Petite is listed now, and unconfirmed ethnicity must stay unassigned.
- Configure WhatsApp, Telegram and UPI values in `js/main.js`.
- Add approved campaign and product images under \`images/\`, then update their paths and alt text in the page or product data.
- Keep claims about offers, delivery, returns and reviews accurate and confirmed.

The static checkout opens a prepared order message in WhatsApp; it is not a payment gateway. Replace all contact and payment placeholders before accepting real orders.
