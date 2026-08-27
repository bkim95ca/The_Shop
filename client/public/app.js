const API_URL = window.SHOP_API_URL || 'http://localhost:8000';
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const cart = JSON.parse(localStorage.getItem('the-shop-cart') || '[]');
const app = document.getElementById('app');
const money = value => `$${Number(value || 0).toFixed(2)} USD`;
const save = () => localStorage.setItem('the-shop-cart', JSON.stringify(cart));
const items = () => cart.reduce((sum, item) => sum + item.quantity, 0);
const total = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
const routeLink = (path, text, className = '') => `<a class="${className}" href="#${path}">${text}</a>`;
const fallbackProducts = [
  { _id: 'static-linen-shirt', name: 'Linen Overshirt', price: 128, categories: 'menswear', desc: ['A relaxed overshirt cut from breathable linen.'], url: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85'] },
  { _id: 'static-cotton-trouser', name: 'Cotton Trouser', price: 145, categories: 'menswear', desc: ['A clean, easy trouser for everyday movement.'], url: ['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=85'] },
  { _id: 'static-wool-coat', name: 'Wool Coat', price: 280, categories: 'menswear', desc: ['A structured wool layer with a generous silhouette.'], url: ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=900&q=85'] },
  { _id: 'static-knit-top', name: 'Fine Knit Top', price: 110, categories: 'womenswear', desc: ['A soft knit with a precise, close fit.'], url: ['https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=85'] },
  { _id: 'static-wide-trouser', name: 'Wide Leg Trouser', price: 165, categories: 'womenswear', desc: ['Fluid tailoring with a considered drape.'], url: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85'] },
  { _id: 'static-canvas-tote', name: 'Canvas Carryall', price: 75, categories: 'womenswear', desc: ['A durable canvas carryall for the daily essentials.'], url: ['https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85'] }
];

function nav() {
  return `<header class="navbar"><div class="nav-links">${routeLink('/products/menswear', 'MENSWEAR')}${routeLink('/products/womenswear', 'WOMENSWEAR')}</div>${routeLink('/products', 'The Shop', 'logo')}<a class="bag-link" href="#/checkout">SHOPPING BAG (${items()})</a></header>`;
}
function landing() {
  app.innerHTML = `<main class="landing"><nav class="landing-nav">${routeLink('/products', 'The Shop', 'logo')}${routeLink('/checkout', 'Shopping bag', 'bag-link')}</nav><section class="hero"><div><p class="kicker">NEW SEASON / 2026</p><h1>Quiet essentials for a life in motion.</h1><p class="intro">A focused collection of considered pieces, made to move with you.</p>${routeLink('/products', 'Explore the collection <span>-&gt;</span>', 'primary-link')}</div><div class="hero-image"><img src="https://images.unsplash.com/photo-1490481651871-ab68de3e7c9a?auto=format&fit=crop&w=1200&q=85" alt="Neutral clothing arranged in a bright studio"><span>01 / 04</span></div></section><section class="collections"><p class="kicker">BROWSE BY COLLECTION</p><div class="collection-grid">${routeLink('/products/menswear', 'Menswear <span>-&gt;</span>')}${routeLink('/products/womenswear', 'Womenswear <span>-&gt;</span>')}${routeLink('/products', 'All pieces <span>-&gt;</span>')}${routeLink('/checkout', 'Your bag <span>-&gt;</span>')}</div></section><footer>THE SHOP <a href="https://github.com/bkim95ca" target="_blank" rel="noreferrer">Created by Brandon Kim</a></footer></main>`;
}
function products(category) {
  app.innerHTML = `${nav()}<main class="catalog"><header class="catalog-header"><div><p class="kicker">THE SHOP / COLLECTION</p><h1>Everyday pieces, considered.</h1></div><p id="count" class="muted">Loading...</p></header><section id="products" class="product-grid"><p class="muted">Loading the collection...</p></section></main>`;
  const list = category ? fallbackProducts.filter(item => item.categories === category) : fallbackProducts;
  document.getElementById('count').textContent = `${list.length} ${list.length === 1 ? 'item' : 'items'}`;
  document.getElementById('products').innerHTML = list.map(product => `<article class="product-card"><a href="#/product/${product._id}"><div class="image-frame"><img src="${product.url[0]}" alt="${product.name}"></div><div class="product-info"><h3>${product.name}</h3><p>${money(product.price)}</p></div></a></article>`).join('');
}
function product(id) {
  app.innerHTML = `${nav()}<main id="detail" class="detail"><p class="muted">Loading product...</p></main>`;
  const item = fallbackProducts.find(productItem => productItem._id === id);
  if (!item) { document.getElementById('detail').innerHTML = '<div class="empty"><h2>Product unavailable.</h2></div>'; return; }
  Promise.resolve(item).then(item => {
    document.getElementById('detail').innerHTML = `<div class="detail-images">${item.url.map(url => `<img src="${url}" alt="${item.name}">`).join('')}</div><div class="detail-copy"><p class="kicker">THE SHOP / PIECE</p><h1>${item.name}</h1><p class="price">${money(item.price)}</p><p class="description">${item.desc.filter(Boolean).join('<br><br>')}</p><label>Size<select id="size">${sizes.map(size => `<option>${size}</option>`).join('')}</select></label><button id="add" class="button">ADD TO CART</button></div>`;
    document.getElementById('add').onclick = () => { const existing = cart.find(entry => entry._id === item._id); if (existing) existing.quantity += 1; else cart.push({ ...item, size: document.getElementById('size').value, quantity: 1 }); save(); alert(`${item.name} added to your bag.`); };
  });
}
function checkout() {
  app.innerHTML = `${nav()}<main class="checkout"><header class="catalog-header"><div><p class="kicker">THE SHOP / YOUR ORDER</p><h1>Ready when you are.</h1></div></header><div class="checkout-layout"><section><div class="section-heading"><h2>Shopping bag</h2><span>${cart.length} ${cart.length === 1 ? 'item' : 'items'}</span></div><div class="cart-list">${cart.length ? cart.map(item => `<article class="cart-item"><img src="${item.url[0]}" alt="${item.name}"><div><h3>${item.name}</h3><label>Size <select data-size="${item._id}">${sizes.map(size => `<option ${size === item.size ? 'selected' : ''}>${size}</option>`).join('')}</select></label><label>Quantity <select data-quantity="${item._id}">${[1,2,3,4,5,6,7,8,9].map(num => `<option ${num === item.quantity ? 'selected' : ''}>${num}</option>`).join('')}</select></label><p>${money(item.price * item.quantity)}</p><button data-remove="${item._id}" class="text-button">Remove</button></div></article>`).join('') : `<div class="empty"><h2>Your bag is waiting.</h2><p>Add something from the collection to continue.</p>${routeLink('/products', 'Browse products', 'button-link')}</div>`}</div><div class="order-total"><strong>Order Total</strong><strong>${money(total())}</strong></div></section><aside><h2>Checkout</h2><label for="email">Email address</label><input id="email" type="email" placeholder="you@example.com"><button id="pay" class="button" ${cart.length ? '' : 'disabled'}>CHECK OUT</button></aside></div></main>`;
  document.querySelectorAll('[data-remove]').forEach(button => button.onclick = () => { const index = cart.findIndex(item => item._id === button.dataset.remove); cart.splice(index, 1); save(); checkout(); });
  document.querySelectorAll('[data-size]').forEach(select => select.onchange = () => { cart.find(item => item._id === select.dataset.size).size = select.value; save(); });
  document.querySelectorAll('[data-quantity]').forEach(select => select.onchange = () => { cart.find(item => item._id === select.dataset.quantity).quantity = Number(select.value); save(); checkout(); });
  document.getElementById('pay').onclick = () => fetch(`${API_URL}/api/stripe/create-checkout-session`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ cartItems: cart, email: document.getElementById('email').value }) }).then(response => response.json()).then(data => { if (data.url) location.href = data.url; });
}
function success() { app.innerHTML = `${nav()}<main class="success"><p class="kicker">THE SHOP / ORDER CONFIRMED</p><div class="success-mark">✓</div><h1>Thank you for your order.</h1><p class="status">Payment received</p><p>We appreciate your business. A confirmation will be sent to your email shortly.</p>${routeLink('/products', 'Continue shopping', 'button-link')}</main>`; }
function route() { const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean); if (!parts.length) return landing(); if (parts[0] === 'products') return products(parts[1]); if (parts[0] === 'product' && parts[1]) return product(parts[1]); if (parts[0] === 'checkout' && parts[1] === 'success') return success(); if (parts[0] === 'checkout') return checkout(); landing(); }
window.addEventListener('hashchange', route); route();