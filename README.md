# smartpleasure

A static storefront prototype for smartpleasure, built with plain HTML, CSS and vanilla JavaScript. No build step or package installation is needed.

## Preview

Open \`index.html\` in a browser. The design is mobile-first and uses a burgundy, rose and ivory editorial style. The catalogue is intentionally empty until approved products and photos are added.

## Pages

- \`index.html\` — campaign home, moving image features and category links
- \`shop.html\` — collection filters and empty catalogue state
- \`product.html\` — product details loaded by URL ID when products are added
- \`cart.html\` and \`checkout.html\` — shopping bag, WhatsApp order flow and UPI placeholder
- \`about.html\` and \`contact.html\` — brand story and contact options

## Editing

- Add product objects to \`js/products.js\`.
- Configure WhatsApp, Telegram and UPI values in \`js/main.js\`.
- Add approved campaign and product images under \`images/\`, then update their paths and alt text in the page or product data.
- Keep claims about offers, delivery, returns and reviews accurate and confirmed.

The static checkout opens a prepared order message in WhatsApp; it is not a payment gateway. Replace all contact and payment placeholders before accepting real orders.
