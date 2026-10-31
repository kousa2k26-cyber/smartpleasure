/* Shared storefront behaviour. Contact and payment placeholders are configured at the top. */
(function () {
  "use strict";

  // Replace these values with your real store details before launch.
  var STORE_CONFIG = {
    storeName: "smartpleasure",
    whatsappNumber: "919832326674", // 10-digit Indian mobile number with +91 country code for WhatsApp links
    telegramUrl: "https://t.me/yourusername",
    upiId: "yourname@upi"
  };

  // Use a fresh cart key so any old sample cart cannot be mistaken for this real listing.
  var CART_KEY = "smartpleasure-cart-v3";
  var products = Array.isArray(window.STORE_PRODUCTS) ? window.STORE_PRODUCTS : [];
  var money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
  var currentCheckoutStep = 1;
  var COLLECTIONS = [
    { id: "garments", label: "Intimate wear", tag: "IntimateWear", className: "collection-wear", image: "images/lingerie-editorial.webp", alt: "Adult model wearing black and ivory lace lingerie", related: ["toys", "dolls"] },
    { id: "toys", label: "Pleasure toys", tag: "PleasureToys", className: "collection-toys", image: "images/portrait-blue-crop.webp", alt: "Close portrait of an adult woman with crossed arms and shoulders visible", related: ["garments", "dolls"] },
    { id: "dolls", label: "Dolls & fantasy", tag: "DollsAndFantasy", className: "collection-fantasy", image: "images/marquee-portrait-91835.webp", alt: "Adult woman’s face seen through a lace veil", related: ["garments", "toys"] }
  ];

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[character];
    });
  }

  function placeholderCard(title, detail, alternate) {
    return '<article class="module-product-placeholder"><div class="placeholder-art' + (alternate ? ' placeholder-art-alt' : '') + '" aria-hidden="true"><span>IMAGE<br>COMING SOON</span><b>' + (alternate ? '＋' : '✦') + '</b></div><div class="placeholder-copy"><span class="placeholder-label">Product preview</span><h3>' + escapeHTML(title) + '</h3><p>' + escapeHTML(detail) + '</p></div></article>';
  }

  function moduleProductCard(product) {
    var url = "product.html?id=" + encodeURIComponent(product.id);
    return '<article class="module-product-placeholder module-product-reference">' +
      '<a class="module-reference-image" href="' + url + '"><img src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.imageAlt) + '" loading="lazy"></a>' +
      '<div class="placeholder-copy"><span class="placeholder-label">Illustrated preview</span><h3><a href="' + url + '">' + escapeHTML(product.name) + '</a></h3>' +
      '<p>' + formatPrice(product.price) + ' · reference price</p></div></article>';
  }

  function renderCollectionPlaceholders(root, selectedCategory) {
    if (!root) return;
    var visibleCollections = selectedCategory === "all" ? COLLECTIONS : COLLECTIONS.filter(function (collection) { return collection.id === selectedCategory; });
    root.innerHTML = visibleCollections.map(function (collection) {
      var collectionProducts = products.filter(function (product) { return product.category === collection.id; }).slice(0, 2);
      var productPreviews = collectionProducts.length ? collectionProducts.map(moduleProductCard).join("") :
        placeholderCard("First listing coming soon", "Photo, price and product details will be added here.", false) +
        placeholderCard("Another find, soon", "Clear information will follow before launch.", true);
      var tagMarkup = '<a href="shop.html#products">#AllCollections</a>' + collection.related.map(function (relatedId) {
        var related = COLLECTIONS.find(function (item) { return item.id === relatedId; });
        return related ? '<a href="shop.html?category=' + encodeURIComponent(related.id) + '#products">#' + escapeHTML(related.tag) + '</a>' : '';
      }).join("");
      return '<article class="collection-module shop-collection-module ' + escapeHTML(collection.className) + '" id="shop-module-' + escapeHTML(collection.id) + '">' +
        '<a class="collection-card ' + escapeHTML(collection.className) + '" href="shop.html?category=' + encodeURIComponent(collection.id) + '#products" aria-label="Explore ' + escapeHTML(collection.label) + '">' +
        '<img class="collection-backdrop" src="' + escapeHTML(collection.image) + '" alt="' + escapeHTML(collection.alt) + '" loading="lazy">' +
        '<span class="collection-number">COLLECTION / ADULTS 18+</span><span class="collection-name">' + escapeHTML(collection.label) + '</span><span class="collection-link">Explore this edit <b aria-hidden="true">↗</b></span></a>' +
        '<div class="module-placeholder-grid">' + productPreviews + '</div>' +
        '<nav class="module-tags" aria-label="Related collection tags">' + tagMarkup + '</nav></article>';
    }).join("");
    root.classList.toggle("has-one-module", visibleCollections.length === 1);
  }

  function formatPrice(amount) {
    return money.format(Number(amount) || 0);
  }

  // Show the original price only when a genuine comparison price is provided.
  function priceMarkup(product, className) {
    var originalPrice = Number(product.originalPrice) || 0;
    var markup = '<p class="' + className + '"><strong class="price-current">' + formatPrice(product.price) + '</strong>';
    if (originalPrice > Number(product.price)) {
      markup += '<span class="price-was">MRP <s>' + formatPrice(originalPrice) + '</s></span>';
    }
    if (product.isDraft) markup += '<small class="price-reference-note">Indicative reference price · confirm before launch</small>';
    return markup + '</p>';
  }

  function draftProductNotice(product) {
    return product.isDraft ? '<p class="product-draft-note">Concept preview · illustration, price and product details need confirmation before sale.</p>' : '';
  }

  function addToBagButton(product, wide) {
    var buttonClass = 'button button-primary' + (wide ? ' button-wide' : '');
    if (product.isDraft) return '<button class="' + buttonClass + ' product-preview-button" type="button" data-add-to-cart="' + escapeHTML(product.id) + '">Add preview to bag</button>';
    return '<button class="' + buttonClass + '" type="button" data-add-to-cart="' + escapeHTML(product.id) + '">Add to bag</button>';
  }

  function findProduct(id) {
    return products.find(function (product) { return String(product.id) === String(id); });
  }

  function getCart() {
    try {
      var saved = JSON.parse(window.localStorage.getItem(CART_KEY) || "[]");
      if (!Array.isArray(saved)) return [];
      return saved.map(function (item) {
        var product = findProduct(item.id);
        return product ? { id: String(product.id), quantity: Math.max(1, Math.min(99, parseInt(item.quantity, 10) || 1)) } : null;
      }).filter(Boolean);
    } catch (error) {
      return [];
    }
  }

  function saveCart(cart) {
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (error) {
      window.alert("Your browser could not save the bag. Please enable local storage and try again.");
    }
    refreshCartViews();
  }

  function cartLines() {
    return getCart().map(function (item) {
      return { product: findProduct(item.id), quantity: item.quantity };
    }).filter(function (line) { return Boolean(line.product); });
  }

  function cartTotal(lines) {
    return lines.reduce(function (total, line) { return total + line.product.price * line.quantity; }, 0);
  }

  function productCard(product) {
    var id = escapeHTML(product.id);
    var name = escapeHTML(product.name);
    var category = escapeHTML(product.categoryLabel);
    var image = escapeHTML(product.image);
    var alt = escapeHTML(product.imageAlt);
    var url = "product.html?id=" + encodeURIComponent(product.id);
    return '<article class="product-card' + (product.isDraft ? ' is-draft' : '') + '">' +
      '<a class="product-image-link" href="' + url + '" aria-label="View ' + name + '"><img src="' + image + '" alt="' + alt + '" loading="lazy"></a>' +
      '<div class="product-info"><p class="product-category">' + category + '</p>' +
      '<h3 class="product-title"><a href="' + url + '">' + name + '</a></h3>' +
      priceMarkup(product, "product-price") + draftProductNotice(product) + addToBagButton(product, false) + '</div></article>';
  }

  function renderProductGrid(element, list) {
    if (!element) return;
    element.classList.toggle("is-single-product", list.length === 1);
    if (!list.length) {
      element.innerHTML = '<div class="empty-products"><p class="eyebrow">The first edit is taking shape</p><h2>Products, soon.</h2><p>We’ll add real product names, photos and details here when the collection is ready.</p><a class="button button-outline" href="shop.html">Explore collections</a></div>';
      return;
    }
    element.innerHTML = list.map(productCard).join("");
  }

  function renderProductGrids() {
    document.querySelectorAll("[data-featured-products]").forEach(function (element) {
      renderProductGrid(element, products.filter(function (product) { return product.featured; }).slice(0, 4));
    });
    document.querySelectorAll("[data-product-grid]").forEach(function (element) {
      renderProductGrid(element, products);
      var count = document.querySelector("[data-product-count]");
      if (count) count.textContent = products.length + (products.length === 1 ? " product" : " products");
    });
    document.querySelectorAll("[data-home-product-preview]").forEach(function (element) {
      var category = element.getAttribute("data-home-product-preview");
      var picks = products.filter(function (product) { return category === "all" || product.category === category; }).slice(0, 2);
      if (picks.length) element.innerHTML = picks.map(moduleProductCard).join("");
    });
  }

  function renderProductDetail() {
    var root = document.querySelector("[data-product-detail]");
    if (!root) return;
    var id = new URLSearchParams(window.location.search).get("id");
    var product = findProduct(id);
    var breadcrumb = document.querySelector("[data-product-breadcrumb]");
    if (!product) {
      var heading = products.length ? "We couldn’t find that product." : "The collection is taking shape.";
      var message = products.length ? "That product link may have changed. Browse the current collection instead." : "Product listings and details will be added here when they are ready.";
      root.innerHTML = '<div class="not-found"><p class="eyebrow">Product preview</p><h1>' + heading + '</h1><p>' + message + '</p><a class="button button-primary" href="shop.html">Explore collections</a></div>';
      if (breadcrumb) breadcrumb.textContent = products.length ? "Product not found" : "Coming soon";
      document.title = (products.length ? "Product not found" : "Product preview") + " | smartpleasure";
      return;
    }
    var safeName = escapeHTML(product.name);
    if (breadcrumb) breadcrumb.textContent = product.name;
    document.title = product.name + " | smartpleasure";
    var description = "Explore " + product.name + " from the smartpleasure wellness collection for adults 18+.";
    var descriptionMeta = document.querySelector('meta[name="description"]');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDescription = document.querySelector('meta[property="og:description"]');
    var ogUrl = document.querySelector('meta[property="og:url"]');
    var ogImage = document.querySelector('meta[property="og:image"]');
    var ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (descriptionMeta) descriptionMeta.setAttribute("content", description);
    if (ogTitle) ogTitle.setAttribute("content", document.title);
    if (ogDescription) ogDescription.setAttribute("content", description);
    if (ogUrl) ogUrl.setAttribute("content", "https://smartpleasure.shop/product.html?id=" + encodeURIComponent(product.id));
    if (ogImage) ogImage.setAttribute("content", "https://smartpleasure.shop/" + product.image);
    if (ogImageAlt) ogImageAlt.setAttribute("content", product.imageAlt);
    var featureMarkup = (product.features || []).map(function (feature) { return "<li>" + escapeHTML(feature) + "</li>"; }).join("");
    var detailItems = (product.details || []).slice();
    if (product.sku) detailItems.unshift("SKU: " + product.sku);
    var detailMarkup = detailItems.map(function (detail) { return "<li>" + escapeHTML(detail) + "</li>"; }).join("");
    var includedMarkup = (product.includedItems || []).map(function (item) { return "<li>" + escapeHTML(item) + "</li>"; }).join("");
    root.innerHTML = '<div class="product-detail-layout">' +
      '<img class="product-detail-image" src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.imageAlt) + '">' +
      '<div class="product-detail-copy"><p class="product-category">' + escapeHTML(product.categoryLabel) + '</p>' +
      '<h1>' + safeName + '</h1>' + priceMarkup(product, "product-detail-price") +
      '<p class="product-description">' + escapeHTML(product.description) + '</p>' +
      draftProductNotice(product) + addToBagButton(product, false) +
      '<div class="product-detail-meta">' +
      (featureMarkup ? '<section><h2>Key features</h2><ul>' + featureMarkup + '</ul></section>' : '') +
      '<section><h2>Product details</h2><ul>' + detailMarkup + '</ul></section>' +
      (includedMarkup ? '<section><h2>What’s in the box</h2><ul>' + includedMarkup + '</ul></section>' : '') + '</div>' +
      '<a class="continue-link" href="shop.html">← Back to all products</a></div></div>';
  }

  function renderCartPage() {
    var itemsRoot = document.querySelector("[data-cart-items]");
    var summaryRoot = document.querySelector("[data-cart-summary]");
    if (!itemsRoot || !summaryRoot) return;
    var lines = cartLines();
    if (!lines.length) {
      itemsRoot.innerHTML = '<div class="empty-cart"><span class="empty-cart-mark" aria-hidden="true">✦</span><p class="eyebrow">A little room for what you love</p><h2>Your bag is waiting.</h2><p>There are no products in your bag yet. Explore the collections and add a favourite when you find it.</p><a class="button button-primary" href="shop.html">Explore collections <span aria-hidden="true">↗</span></a></div>';
      summaryRoot.innerHTML = '<p class="eyebrow">Bag summary</p><h2>Order summary</h2><p class="summary-note">Your item total will appear here after you add a product.</p><a class="continue-link" href="shop.html">Browse the edit <span aria-hidden="true">↗</span></a>';
      return;
    }
    itemsRoot.innerHTML = lines.map(function (line) {
      var product = line.product;
      var id = escapeHTML(product.id);
      return '<article class="cart-line">' +
        '<img class="cart-line-image" src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.imageAlt) + '">' +
        '<div class="cart-line-main"><h2 class="cart-line-title"><a href="product.html?id=' + encodeURIComponent(product.id) + '">' + escapeHTML(product.name) + '</a></h2>' +
        '<p class="cart-line-price">' + formatPrice(product.price) + ' each' + (product.isDraft ? ' · reference' : '') + '</p>' +
        '<div class="cart-line-controls"><div class="quantity-control" aria-label="Quantity for ' + escapeHTML(product.name) + '">' +
        '<button type="button" data-quantity-step="-1" data-product-id="' + id + '" aria-label="Decrease quantity of ' + escapeHTML(product.name) + '">−</button>' +
        '<input type="number" min="1" max="99" value="' + line.quantity + '" data-cart-quantity="' + id + '" aria-label="Quantity of ' + escapeHTML(product.name) + '">' +
        '<button type="button" data-quantity-step="1" data-product-id="' + id + '" aria-label="Increase quantity of ' + escapeHTML(product.name) + '">+</button></div>' +
        '<button type="button" class="remove-button" data-remove-from-cart="' + id + '">Remove</button></div></div>' +
        '<p class="line-total">' + formatPrice(product.price * line.quantity) + '</p></article>';
    }).join("");
    var total = cartTotal(lines);
    var containsDraft = lines.some(function (line) { return line.product.isDraft; });
    summaryRoot.innerHTML = '<p class="eyebrow">Bag summary</p><h2>Order summary</h2><div class="summary-row"><span>Items total</span><strong>' + formatPrice(total) + '</strong></div>' +
      '<div class="summary-row summary-delivery"><span>Delivery</span><strong>Confirm on WhatsApp</strong></div>' +
      (containsDraft ? '<p class="summary-note draft-checkout-note">Preview bag only. These research listings use reference prices and cannot be ordered yet.</p>' : '<p class="summary-note">We’ll confirm availability and delivery charges with you before payment.</p>') +
      '<a class="button button-primary" href="checkout.html">Continue to checkout</a><a class="continue-link" href="shop.html">← Continue shopping</a>';
  }

  function renderCheckout() {
    var content = document.querySelector("[data-checkout-content]");
    if (!content) return;
    var empty = document.querySelector("[data-checkout-empty]");
    var lines = cartLines();
    if (!lines.length) {
      var previewMode = new URLSearchParams(window.location.search).get("preview") === "1";
      content.hidden = !previewMode;
      if (empty) empty.hidden = false;
      var previewNote = document.querySelector("[data-checkout-preview-note]");
      var emptyCopy = document.querySelector("[data-checkout-empty-copy]");
      if (previewNote) previewNote.hidden = !previewMode;
      if (emptyCopy) emptyCopy.hidden = previewMode;
      if (!previewMode) return;
    } else {
      content.hidden = false;
      if (empty) empty.hidden = true;
    }
    var summary = document.querySelector("[data-checkout-summary]");
    if (summary) {
      var containsDraft = lines.some(function (line) { return line.product.isDraft; });
      summary.innerHTML = (lines.length ? lines.map(function (line) {
        return '<div class="checkout-summary-item"><span>' + escapeHTML(line.product.name) + ' × ' + line.quantity + '</span><strong>' + formatPrice(line.product.price * line.quantity) + '</strong></div>';
      }).join("") : '<p class="form-note">Preview mode · Your bag is empty.</p>') + '<div class="summary-row summary-total"><span>Items subtotal</span><strong>' + formatPrice(cartTotal(lines)) + '</strong></div>' + (containsDraft ? '<p class="form-note draft-checkout-note">This bag contains concept listings. Checkout is for preview only until products, stock and prices are confirmed.</p>' : '<p class="form-note">Delivery charges are not included and can be confirmed on WhatsApp.</p>');
    }
    var upiText = document.querySelector("[data-upi-id]");
    if (upiText) upiText.textContent = STORE_CONFIG.upiId;
  }

  // Check only the visible step so a customer is not asked to fill hidden fields early.
  function validateCheckoutPanel(step, reportError) {
    var panel = document.querySelector('[data-checkout-panel="' + step + '"]');
    if (!panel) return true;
    var fields = panel.querySelectorAll("input[required], textarea[required]");
    for (var index = 0; index < fields.length; index += 1) {
      if (!fields[index].checkValidity()) {
        if (reportError !== false) fields[index].reportValidity();
        return false;
      }
    }
    return true;
  }

  function updateCheckoutReview() {
    var form = document.querySelector("[data-checkout-form]");
    if (!form) return;
    var values = new FormData(form);
    var customerReview = document.querySelector("[data-checkout-customer-review]");
    var itemsReview = document.querySelector("[data-checkout-review-items]");
    var address = [values.get("address"), values.get("city"), values.get("state"), values.get("pincode")]
      .map(function (part) { return String(part || "").trim(); }).filter(Boolean);
    if (customerReview) {
      var name = String(values.get("name") || "").trim() || "Add your name in Personal details";
      var phone = String(values.get("phone") || "").trim() || "Add your phone number in Personal details";
      var addressText = address.length ? address.map(escapeHTML).join("<br>") : "Add your delivery address in the Address section";
      customerReview.innerHTML = '<div><span>Deliver to</span><strong>' + escapeHTML(name) + ' · ' + escapeHTML(phone) +
        '</strong></div><p>' + addressText + '</p>';
    }
    if (itemsReview) {
      var lines = cartLines();
      itemsReview.innerHTML = '<p class="eyebrow">Your items</p>' + (lines.length ? lines.map(function (line) {
        return '<div class="checkout-summary-item"><span>' + escapeHTML(line.product.name) + ' × ' + line.quantity + '</span><strong>' + formatPrice(line.product.price * line.quantity) + '</strong></div>';
      }).join("") : '<p class="form-note">Add a product before placing an order.</p>') + '<div class="summary-row summary-total"><span>Items subtotal</span><strong>' + formatPrice(cartTotal(lines)) + '</strong></div>';
    }
  }

  function setCheckoutStep(step) {
    var nextStep = Number(step);
    if (nextStep < 1 || nextStep > 3) return;
    currentCheckoutStep = nextStep;
    document.querySelectorAll("[data-checkout-panel]").forEach(function (panel) {
      panel.hidden = Number(panel.getAttribute("data-checkout-panel")) !== currentCheckoutStep;
    });
    document.querySelectorAll("[data-checkout-tab]").forEach(function (button) {
      var buttonStep = Number(button.getAttribute("data-checkout-tab"));
      var isCurrent = buttonStep === currentCheckoutStep;
      button.classList.toggle("is-current", isCurrent);
      if (isCurrent) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
    if (currentCheckoutStep === 3) updateCheckoutReview();
    showStatus("[data-checkout-status]", "");
    var panel = document.querySelector('[data-checkout-panel="' + currentCheckoutStep + '"]');
    if (panel && window.location.hash !== "#" + panel.id) window.location.hash = panel.id;
  }

  function applyCheckoutLocation() {
    var stepByHash = { "#checkout-personal": 1, "#checkout-address": 2, "#checkout-confirm": 3 };
    if (stepByHash[window.location.hash]) setCheckoutStep(stepByHash[window.location.hash]);
  }

  function continueCheckout() {
    // Let customers preview each section first; required fields are checked at final confirmation.
    setCheckoutStep(currentCheckoutStep + 1);
  }

  function updateCartCounts() {
    var count = getCart().reduce(function (total, item) { return total + item.quantity; }, 0);
    document.querySelectorAll("[data-cart-count]").forEach(function (element) { element.textContent = String(count); });
  }

  function refreshCartViews() {
    updateCartCounts();
    renderCartPage();
    renderCheckout();
  }

  function addToCart(id) {
    var product = findProduct(id);
    if (!product) return;
    var cart = getCart();
    var existing = cart.find(function (item) { return item.id === String(product.id); });
    if (existing) existing.quantity = Math.min(99, existing.quantity + 1);
    else cart.push({ id: String(product.id), quantity: 1 });
    saveCart(cart);
    var status = document.querySelector("[data-cart-feedback]");
    if (status) status.textContent = product.name + (product.isDraft ? " preview added to your bag. It cannot be ordered until details are confirmed." : " added to your bag.");
  }

  function setQuantity(id, quantity) {
    var cart = getCart();
    var item = cart.find(function (entry) { return entry.id === String(id); });
    if (!item) return;
    item.quantity = Math.max(1, Math.min(99, parseInt(quantity, 10) || 1));
    saveCart(cart);
  }

  function removeFromCart(id) {
    saveCart(getCart().filter(function (item) { return item.id !== String(id); }));
  }

  function configuredWhatsAppNumber() {
    var number = String(STORE_CONFIG.whatsappNumber || "").replace(/\D/g, "");
    return number.length >= 10 && number.length <= 15 ? number : "";
  }

  function configuredTelegramUrl() {
    var url = String(STORE_CONFIG.telegramUrl || "").trim();
    return /^https:\/\/t\.me\/[A-Za-z0-9_]+\/?$/.test(url) && !/yourusername/i.test(url) ? url : "";
  }

  function applyContactLinks() {
    var number = configuredWhatsAppNumber();
    document.querySelectorAll("[data-whatsapp]").forEach(function (link) {
      link.href = number ? "https://wa.me/" + number : "#";
    });
    var telegramUrl = configuredTelegramUrl();
    document.querySelectorAll("[data-telegram]").forEach(function (link) {
      link.href = telegramUrl || "#";
      link.hidden = !telegramUrl;
      var contactCard = link.closest("[data-telegram-card]");
      if (contactCard) contactCard.hidden = !telegramUrl;
    });
  }

  function orderMessage(lines, name, phone, address) {
    var items = lines.map(function (line) {
      return "• " + line.product.name + " × " + line.quantity + " — " + formatPrice(line.product.price * line.quantity);
    });
    return "Hello " + STORE_CONFIG.storeName + ", I would like to place an order.\n\n" +
      items.join("\n") + "\n\nItems subtotal: " + formatPrice(cartTotal(lines)) +
      "\nDelivery: please confirm\n\nName: " + name + "\nPhone: " + phone + "\nAddress: " + address +
      "\n\nPlease confirm availability and delivery charges before payment.";
  }

  function showStatus(selector, message) {
    var status = document.querySelector(selector);
    if (status) status.textContent = message;
  }

  function handleCheckoutSubmit(event) {
    event.preventDefault();
    if (currentCheckoutStep < 3) {
      continueCheckout();
      return;
    }
    if (!validateCheckoutPanel(1, false)) { setCheckoutStep(1); validateCheckoutPanel(1); return; }
    if (!validateCheckoutPanel(2, false)) { setCheckoutStep(2); validateCheckoutPanel(2); return; }
    var number = configuredWhatsAppNumber();
    if (!number) {
      showStatus("[data-checkout-status]", "Add your WhatsApp number in js/main.js before using checkout.");
      return;
    }
    var form = event.currentTarget;
    var values = new FormData(form);
    var lines = cartLines();
    if (!lines.length) {
      showStatus("[data-checkout-status]", "Your bag is empty. Add a product before checking out.");
      return;
    }
    if (lines.some(function (line) { return line.product.isDraft; })) {
      showStatus("[data-checkout-status]", "These are catalogue previews with unconfirmed stock and reference prices. This checkout cannot be submitted as an order yet.");
      return;
    }
    var fullAddress = [values.get("address"), values.get("city"), values.get("state"), values.get("pincode")]
      .map(function (part) { return String(part || "").trim(); }).filter(Boolean).join(", ");
    var message = orderMessage(lines, values.get("name"), values.get("phone"), fullAddress);
    var url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank", "noopener,noreferrer");
    showStatus("[data-checkout-status]", "WhatsApp opened with your order. Review the details and tap Send there.");
  }

  function handleContactSubmit(event) {
    event.preventDefault();
    var number = configuredWhatsAppNumber();
    if (!number) {
      showStatus("[data-contact-status]", "Add your WhatsApp number in js/main.js before sending an enquiry.");
      return;
    }
    var values = new FormData(event.currentTarget);
    var message = "Hello " + STORE_CONFIG.storeName + ".\n\nName: " + values.get("name") + "\nPhone: " + values.get("phone") + "\nQuestion: " + values.get("message");
    window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
    showStatus("[data-contact-status]", "WhatsApp opened with your enquiry. Review it and tap Send there.");
  }

  function handleUpiPayment() {
    var currentLines = cartLines();
    if (!currentLines.length || currentLines.some(function (line) { return line.product.isDraft; })) {
      window.alert("Payment is disabled for preview listings. Confirm the catalogue products, stock and prices before accepting payment.");
      return;
    }
    var upi = String(STORE_CONFIG.upiId || "");
    if (!upi || upi === "yourname@upi") {
      window.alert("Replace the sample UPI ID in js/main.js before accepting UPI payments.");
      return;
    }
    var total = cartTotal(currentLines);
    var link = "upi://pay?pa=" + encodeURIComponent(upi) + "&pn=" + encodeURIComponent(STORE_CONFIG.storeName) + "&am=" + encodeURIComponent(total) + "&cu=INR&tn=" + encodeURIComponent("smartpleasure order");
    window.location.href = link;
  }

  function copyUpiId() {
    var upi = String(STORE_CONFIG.upiId || "");
    if (!upi || upi === "yourname@upi") {
      window.alert("Replace the sample UPI ID in js/main.js before accepting UPI payments.");
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(upi).then(function () {
        window.alert("UPI ID copied.");
      }).catch(function () {
        window.prompt("Copy this UPI ID:", upi);
      });
    } else {
      window.prompt("Copy this UPI ID:", upi);
    }
  }

  function setupFilters() {
    var grid = document.querySelector("[data-product-grid]");
    if (!grid) return;
    var placeholderRoot = document.querySelector("[data-collection-placeholders]");
    var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-product-filter]"));
    function showCategory(category) {
      var selected = buttons.find(function (button) { return button.getAttribute("data-product-filter") === category; });
      if (!selected) {
        category = "all";
        selected = buttons.find(function (button) { return button.getAttribute("data-product-filter") === "all"; });
      }
      buttons.forEach(function (button) {
        var active = button === selected;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
      var filtered = category === "all" ? products : products.filter(function (product) { return product.category === category; });
      if (!filtered.length && placeholderRoot) {
        grid.hidden = true;
        placeholderRoot.hidden = false;
        renderCollectionPlaceholders(placeholderRoot, category);
      } else {
        grid.hidden = false;
        if (placeholderRoot) placeholderRoot.hidden = true;
        renderProductGrid(grid, filtered);
      }
      var count = document.querySelector("[data-product-count]");
      if (count) count.textContent = filtered.length + (filtered.length === 1 ? " product" : " products");
    }
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        showCategory(button.getAttribute("data-product-filter"));
      });
    });
    showCategory(new URLSearchParams(window.location.search).get("category") || "all");
  }

  function setupMenus() {
    document.querySelectorAll(".menu-toggle").forEach(function (button) {
      button.addEventListener("click", function () {
        var nav = document.getElementById(button.getAttribute("aria-controls"));
        if (!nav) return;
        var isOpen = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", isOpen ? "false" : "true");
        button.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
        nav.classList.toggle("is-open", !isOpen);
      });
    });
  }

  // Make the selected collection tab clear while keeping the same menu on every page.
  function setupCategoryRibbon() {
    var path = window.location.pathname.toLowerCase();
    var isCollectionPage = path === "/" || path.endsWith("/") || path.endsWith("index.html") || path.endsWith("shop.html");
    var currentCategory = new URLSearchParams(window.location.search).get("category") || "all";
    document.querySelectorAll(".category-ribbon a").forEach(function (link) {
      var linkUrl = new URL(link.href, window.location.href);
      var linkCategory = linkUrl.searchParams.get("category") || "all";
      var isActive = isCollectionPage && linkCategory === currentCategory;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function setupInteractions() {
    document.addEventListener("click", function (event) {
      var checkoutTab = event.target.closest("[data-checkout-tab]");
      if (checkoutTab && !checkoutTab.disabled) {
        setCheckoutStep(checkoutTab.getAttribute("data-checkout-tab"));
        return;
      }
      if (event.target.closest("[data-checkout-next]")) {
        continueCheckout();
        return;
      }
      var checkoutBack = event.target.closest("[data-checkout-back]");
      if (checkoutBack) {
        setCheckoutStep(checkoutBack.getAttribute("data-checkout-back"));
        return;
      }
      var addButton = event.target.closest("[data-add-to-cart]");
      if (addButton) {
        addToCart(addButton.getAttribute("data-add-to-cart"));
        return;
      }
      var removeButton = event.target.closest("[data-remove-from-cart]");
      if (removeButton) {
        removeFromCart(removeButton.getAttribute("data-remove-from-cart"));
        return;
      }
      var stepButton = event.target.closest("[data-quantity-step]");
      if (stepButton) {
        var current = getCart().find(function (item) { return item.id === stepButton.getAttribute("data-product-id"); });
        if (current) setQuantity(current.id, current.quantity + Number(stepButton.getAttribute("data-quantity-step")));
        return;
      }
      var whatsappLink = event.target.closest("[data-whatsapp]");
      if (whatsappLink && !configuredWhatsAppNumber()) {
        event.preventDefault();
        window.alert("Add your WhatsApp number in js/main.js before launch.");
        return;
      }
      var telegramLink = event.target.closest("[data-telegram]");
      if (telegramLink && !configuredTelegramUrl()) {
        event.preventDefault();
        window.alert("Telegram is being set up. Please message us on WhatsApp for now.");
        return;
      }
      if (event.target.closest("[data-upi-pay]")) handleUpiPayment();
      if (event.target.closest("[data-copy-upi]")) copyUpiId();
    });

    document.addEventListener("change", function (event) {
      var quantityInput = event.target.closest("[data-cart-quantity]");
      if (quantityInput) setQuantity(quantityInput.getAttribute("data-cart-quantity"), quantityInput.value);
    });
    var checkoutForm = document.querySelector("[data-checkout-form]");
    if (checkoutForm) checkoutForm.addEventListener("submit", handleCheckoutSubmit);
    var contactForm = document.querySelector("[data-contact-form]");
    if (contactForm) contactForm.addEventListener("submit", handleContactSubmit);
  }

  function setCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach(function (element) { element.textContent = String(new Date().getFullYear()); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderProductGrids();
    renderProductDetail();
    refreshCartViews();
    applyContactLinks();
    setupFilters();
    setupMenus();
    setupCategoryRibbon();
    setupInteractions();
    applyCheckoutLocation();
    window.addEventListener("hashchange", applyCheckoutLocation);
    setCurrentYear();
  });
}());
