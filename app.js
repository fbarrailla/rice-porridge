/* ──────────────────────────────────────────────────────────────
   BUBUR SUMSUM IBU — application logic
   ────────────────────────────────────────────────────────────── */

/* ────────── catalog ────────── */
const PRODUCTS = [
  {
    id: 'klasik',
    name: 'Bubur Sumsum',
    italic: 'Klasik',
    price: 18000,
    tag: 'Andalan',
    tagClass: 'clay',
    bowl: 'bowl-klasik',
    theme: 'cream',
    cat: 'klasik',
    short: 'Tepung beras, santan kelapa segar, kuah gula merah Kebumen.',
    long: 'Resep dasar yang kami buat sejak hari pertama. Tepung beras pilihan direndam semalaman, dimasak dengan santan kelapa segar dan sedikit garam. Disajikan dengan kuah gula merah Kebumen yang dimasak perlahan bersama daun pandan dan sejumput jahe.',
    notes: [
      { ico: 'i-thermo', t: '<strong>Disajikan</strong>Hangat atau suhu ruang' },
      { ico: 'i-clock', t: '<strong>Konsumsi</strong>Maksimal 24 jam' }
    ]
  },
  {
    id: 'pandan',
    name: 'Bubur Sumsum',
    italic: 'Pandan',
    price: 20000,
    tag: 'Aromatik',
    tagClass: 'pandan',
    bowl: 'bowl-pandan',
    theme: 'pandan',
    cat: 'klasik',
    short: 'Tepung beras diaduk dengan ekstrak daun pandan segar, hijau alami.',
    long: 'Versi yang lebih harum — bubur kami dimasak dengan jus dari delapan lembar daun pandan yang baru dipetik. Warnanya hijau lembut, aromanya seperti dapur ibu di pagi hari. Tetap disajikan dengan kuah gula merah klasik kami.',
    notes: [
      { ico: 'i-thermo', t: '<strong>Disajikan</strong>Hangat' },
      { ico: 'i-clock', t: '<strong>Konsumsi</strong>Maksimal 24 jam' }
    ]
  },
  {
    id: 'ketan',
    name: 'Bubur Sumsum',
    italic: 'Ketan Hitam',
    price: 22000,
    tag: 'Berisi',
    tagClass: '',
    bowl: 'bowl-ketan',
    theme: 'charcoal',
    cat: 'modern',
    short: 'Bubur sumsum lembut dengan tumpukan ketan hitam pulen.',
    long: 'Dua tekstur dalam satu mangkuk: bubur sumsum yang lembut menyatu dengan ketan hitam yang dimasak hingga pulen, sedikit liat, dan manis alami. Kombinasi yang membuat sarapan terasa cukup.',
    notes: [
      { ico: 'i-thermo', t: '<strong>Disajikan</strong>Hangat' },
      { ico: 'i-spoon', t: '<strong>Tekstur</strong>Lembut & berisi' }
    ]
  },
  {
    id: 'durian',
    name: 'Bubur Sumsum',
    italic: 'Durian',
    price: 28000,
    tag: 'Musiman',
    tagClass: 'clay',
    bowl: 'bowl-durian',
    theme: 'durian',
    cat: 'modern',
    short: 'Saus durian Medan segar di atas bubur sumsum kami yang klasik.',
    long: 'Hanya tersedia saat musim panen. Daging durian Medan yang sudah matang sempurna kami haluskan menjadi saus kental, tanpa tambahan gula. Tuangkan di atas bubur sumsum yang masih hangat — aromanya memenuhi seluruh ruangan.',
    notes: [
      { ico: 'i-thermo', t: '<strong>Disajikan</strong>Hangat atau dingin' },
      { ico: 'i-clock', t: '<strong>Stok</strong>Terbatas musiman' }
    ]
  },
  {
    id: 'candil',
    name: 'Bubur',
    italic: 'Candil',
    price: 22000,
    tag: 'Klasik',
    tagClass: '',
    bowl: 'bowl-candil',
    theme: 'candil',
    cat: 'klasik',
    short: 'Bola-bola candil ubi ungu di kuah gula merah pekat, taburi santan.',
    long: 'Bubur sumsum tradisional dari Jawa Tengah. Bola-bola candil yang dibuat dari ubi ungu kukus dan tepung tapioka direbus dalam kuah gula merah yang pekat. Disiram santan kental yang gurih — kontras manis dan asin yang sempurna.',
    notes: [
      { ico: 'i-thermo', t: '<strong>Disajikan</strong>Hangat' },
      { ico: 'i-spoon', t: '<strong>Tekstur</strong>Kenyal & pekat' }
    ]
  },
  {
    id: 'family',
    name: 'Paket',
    italic: 'Keluarga',
    price: 75000,
    tag: 'Best value',
    tagClass: 'clay',
    bowl: 'bowl-family',
    theme: 'family',
    cat: 'paket',
    short: 'Empat porsi pilihan — gabungkan varian apa pun, hemat 15%.',
    long: 'Untuk sarapan akhir pekan bersama keluarga, atau hantaran ke rumah saudara. Pilih empat porsi dari varian apa pun di menu kami — kami kemas dalam wadah keramik yang bisa dipakai ulang, lengkap dengan kuah gula dan santan terpisah supaya tetap segar.',
    notes: [
      { ico: 'i-bowl', t: '<strong>Isi</strong>4 porsi pilihan' },
      { ico: 'i-thermo', t: '<strong>Wadah</strong>Keramik pakai ulang' }
    ]
  }
];

const SIZES = [
  { id: 'reg', label: 'Mangkuk (1 porsi)', mult: 1 },
  { id: 'lrg', label: 'Loyang (3 porsi)', mult: 2.7 }
];
const TOPPINGS = [
  { id: 'std', label: 'Standar', delta: 0 },
  { id: 'kuah', label: 'Extra kuah gula', delta: 4000 },
  { id: 'santan', label: 'Extra santan', delta: 4000 },
  { id: 'wijen', label: 'Wijen sangrai', delta: 3000 }
];

const fmt = (n) => 'Rp ' + Math.round(n).toLocaleString('id-ID');

/* ────────── cart state ────────── */
const CART_KEY = 'bsi.cart.v1';
let cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
const saveCart = () => localStorage.setItem(CART_KEY, JSON.stringify(cart));

function cartCount() { return cart.reduce((a, b) => a + b.qty, 0); }
function cartSubtotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const s = SIZES.find(x => x.id === item.size);
    const t = TOPPINGS.find(x => x.id === item.topping);
    return sum + ((p.price * s.mult) + t.delta) * item.qty;
  }, 0);
}

function addToCart(product, opts = {}) {
  const size = opts.size || 'reg';
  const topping = opts.topping || 'std';
  const qty = opts.qty || 1;
  const key = `${product.id}|${size}|${topping}`;
  const existing = cart.find(i => i.key === key);
  if (existing) existing.qty += qty;
  else cart.push({ key, id: product.id, size, topping, qty });
  saveCart();
  renderCart();
  bumpCart();
}

function updateQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCart();
  if (location.hash.startsWith('#/checkout')) renderCheckoutSummary();
}
function removeItem(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCart();
  if (location.hash.startsWith('#/checkout')) renderCheckoutSummary();
}

function bumpCart() {
  const btn = document.getElementById('openCart');
  btn.classList.remove('bump');
  void btn.offsetWidth;
  btn.classList.add('bump');
}

/* ────────── renderers ────────── */
function productCardHTML(p) {
  return `
    <button class="product-card" data-id="${p.id}" data-cat="${p.cat}" aria-label="Buka ${p.name} ${p.italic}">
      <div class="pc-media theme-${p.theme}">
        <span class="pc-tag ${p.tagClass}">${p.tag}</span>
        <svg viewBox="0 0 400 400" aria-hidden="true"><use href="#${p.bowl}"/></svg>
        <div class="pc-quick">
          <span class="qbtn" data-quick-add="${p.id}">+ Keranjang</span>
        </div>
      </div>
      <div class="pc-meta">
        <span class="pc-name">${p.name} <span class="it">${p.italic}</span></span>
        <span class="pc-price">${fmt(p.price)}</span>
      </div>
      <p class="pc-desc">${p.short}</p>
    </button>
  `;
}

function renderFeatured() {
  const featured = PRODUCTS.slice(0, 3);
  document.getElementById('featuredGrid').innerHTML = featured.map(productCardHTML).join('');
  bindCardEvents();
}

function renderShop(filter = 'all') {
  const grid = document.getElementById('shopGrid');
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  grid.innerHTML = list.map(productCardHTML).join('');
  bindCardEvents();
}

function bindCardEvents() {
  document.querySelectorAll('.product-card').forEach(card => {
    const id = card.dataset.id;
    card.addEventListener('click', (e) => {
      if (e.target.matches('[data-quick-add]')) return;
      location.hash = `#/p/${id}`;
    });
  });
  document.querySelectorAll('[data-quick-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.quickAdd;
      const product = PRODUCTS.find(p => p.id === id);
      flyToCart(btn);
      addToCart(product);
      toast(`${product.name} ${product.italic} ditambahkan`);
    });
  });
}

function renderProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) { location.hash = '#/shop'; return; }
  const grid = document.getElementById('pdGrid');

  grid.innerHTML = `
    <div>
      <div class="pd-media theme-${p.theme}">
        <svg viewBox="0 0 400 400" aria-hidden="true" id="pdMain"><use href="#${p.bowl}"/></svg>
      </div>
      <div class="pd-thumbs">
        ${PRODUCTS.filter(x => x.id !== p.id).slice(0, 4).map(x => `
          <a class="pd-thumb" href="#/p/${x.id}" aria-label="${x.name} ${x.italic}">
            <svg viewBox="0 0 400 400"><use href="#${x.bowl}"/></svg>
          </a>
        `).join('')}
      </div>
    </div>
    <div class="pd-info">
      <div class="pd-eyebrow">
        <span class="eyebrow eyebrow-clay">${p.tag}</span>
        <span class="caption">№ ${String(PRODUCTS.indexOf(p) + 1).padStart(2, '0')}</span>
      </div>
      <h1>${p.name} <span class="it">${p.italic}</span></h1>
      <div class="pd-price" id="pdPrice">${fmt(p.price)}</div>
      <p class="pd-desc">${p.long}</p>

      <div class="pd-options">
        <div>
          <div class="pd-opt-label">Ukuran</div>
          <div class="pd-chips" id="sizeChips">
            ${SIZES.map((s, i) => `<button type="button" class="pd-chip ${i===0?'active':''}" data-size="${s.id}">${s.label}</button>`).join('')}
          </div>
        </div>
        <div>
          <div class="pd-opt-label">Tambahan</div>
          <div class="pd-chips" id="topChips">
            ${TOPPINGS.map((t, i) => `<button type="button" class="pd-chip ${i===0?'active':''}" data-topping="${t.id}">${t.label}${t.delta?` +${fmt(t.delta).replace('Rp ', '')}`:''}</button>`).join('')}
          </div>
        </div>
      </div>

      <div class="pd-qty">
        <div class="pd-opt-label" style="margin: 0;">Jumlah</div>
        <div class="qty-stepper">
          <button type="button" id="qtyDown" aria-label="kurangi">−</button>
          <span class="qv" id="qtyVal">1</span>
          <button type="button" id="qtyUp" aria-label="tambah">+</button>
        </div>
      </div>

      <button class="btn btn-clay pd-add" id="pdAdd">
        Tambah ke Keranjang <svg width="16" height="16" class="arrow"><use href="#i-arrow"/></svg>
      </button>

      <div class="pd-notes">
        ${p.notes.map(n => `
          <div class="pd-note">
            <span class="ico"><svg><use href="#${n.ico}"/></svg></span>
            <span class="t">${n.t}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // option state
  let sel = { size: 'reg', topping: 'std', qty: 1 };
  const updatePrice = () => {
    const s = SIZES.find(x => x.id === sel.size);
    const t = TOPPINGS.find(x => x.id === sel.topping);
    const per = (p.price * s.mult) + t.delta;
    document.getElementById('pdPrice').textContent = fmt(per * sel.qty);
  };

  grid.querySelectorAll('#sizeChips .pd-chip').forEach(c => {
    c.addEventListener('click', () => {
      grid.querySelectorAll('#sizeChips .pd-chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      sel.size = c.dataset.size;
      updatePrice();
    });
  });
  grid.querySelectorAll('#topChips .pd-chip').forEach(c => {
    c.addEventListener('click', () => {
      grid.querySelectorAll('#topChips .pd-chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      sel.topping = c.dataset.topping;
      updatePrice();
    });
  });

  grid.querySelector('#qtyDown').addEventListener('click', () => {
    sel.qty = Math.max(1, sel.qty - 1);
    grid.querySelector('#qtyVal').textContent = sel.qty;
    updatePrice();
  });
  grid.querySelector('#qtyUp').addEventListener('click', () => {
    sel.qty = Math.min(20, sel.qty + 1);
    grid.querySelector('#qtyVal').textContent = sel.qty;
    updatePrice();
  });

  grid.querySelector('#pdAdd').addEventListener('click', (e) => {
    flyToCart(grid.querySelector('.pd-media'));
    addToCart(p, sel);
    toast(`${sel.qty}× ${p.name} ${p.italic} ditambahkan`);
  });
}

/* ────────── cart drawer ────────── */
function renderCart() {
  const count = cartCount();
  document.getElementById('cartCount').textContent = count;
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="ill" style="color: var(--clay);">
          <svg viewBox="0 0 120 120"><use href="#stamp-seal"/></svg>
        </div>
        <h4>Keranjang masih kosong.</h4>
        <p>Coba menu klasik kami — bubur sumsum gula merah, andalan sejak 2018.</p>
        <a href="#/shop" class="btn-text" onclick="closeCart()">Jelajahi menu</a>
      </div>
    `;
    foot.hidden = true;
    return;
  }

  body.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const s = SIZES.find(x => x.id === item.size);
    const t = TOPPINGS.find(x => x.id === item.topping);
    const per = (p.price * s.mult) + t.delta;
    return `
      <div class="cart-item">
        <div class="ci-img"><svg viewBox="0 0 400 400"><use href="#${p.bowl}"/></svg></div>
        <div class="ci-info">
          <h5>${p.name} <em style="color: var(--clay)">${p.italic}</em></h5>
          <div class="ci-var">${s.label.split(' ')[0]} · ${t.label}</div>
          <div class="ci-qty">
            <button onclick="updateQty('${item.key}', -1)" aria-label="kurangi">−</button>
            <span class="qv">${item.qty}</span>
            <button onclick="updateQty('${item.key}', 1)" aria-label="tambah">+</button>
          </div>
        </div>
        <div class="ci-side">
          <span class="ci-price">${fmt(per * item.qty)}</span>
          <button class="ci-remove" onclick="removeItem('${item.key}')">hapus</button>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = cartSubtotal();
  document.getElementById('cartTotals').innerHTML = `
    <div class="row"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
    <div class="row"><span>Ongkir</span><span><em style="font-family: var(--serif);">dihitung di checkout</em></span></div>
    <div class="row total"><span>Total sementara</span><span>${fmt(subtotal)}</span></div>
  `;
  foot.hidden = false;
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ────────── checkout ────────── */
let deliveryChoice = { id: 'instant', price: 15000 };

function renderCheckoutSummary() {
  const items = document.getElementById('csItems');
  const totals = document.getElementById('csTotals');
  if (!items || !totals) return;
  if (cart.length === 0) {
    items.innerHTML = `<p class="caption" style="text-align:center; padding: 2rem 0;">Keranjang kosong.</p>`;
    totals.innerHTML = '';
    return;
  }
  items.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const s = SIZES.find(x => x.id === item.size);
    const t = TOPPINGS.find(x => x.id === item.topping);
    const per = (p.price * s.mult) + t.delta;
    return `
      <div class="cs-item">
        <div class="ci-img"><svg viewBox="0 0 400 400"><use href="#${p.bowl}"/></svg></div>
        <div class="ci-name">${p.italic} × ${item.qty}<span>${s.label.split(' ')[0]} · ${t.label}</span></div>
        <div class="ci-cost">${fmt(per * item.qty)}</div>
      </div>
    `;
  }).join('');

  const sub = cartSubtotal();
  const ship = deliveryChoice.price;
  const total = sub + ship;
  totals.innerHTML = `
    <div class="row"><span>Subtotal</span><span>${fmt(sub)}</span></div>
    <div class="row"><span>Pengiriman</span><span>${fmt(ship)}</span></div>
    <div class="row total"><span>Total</span><span>${fmt(total)}</span></div>
  `;
}

function setupCheckoutHandlers() {
  const opts = document.querySelectorAll('#deliveryOpts label');
  opts.forEach(o => {
    o.addEventListener('click', () => {
      opts.forEach(x => x.classList.remove('checked'));
      o.classList.add('checked');
      deliveryChoice = { id: o.dataset.delivery, price: +o.dataset.price };
      renderCheckoutSummary();
    });
  });

  const form = document.getElementById('checkoutForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach(input => {
      const field = input.closest('.field');
      field.classList.remove('invalid');
      field.querySelector('.err')?.remove();
      if (!input.value.trim()) {
        ok = false;
        field.classList.add('invalid');
        const err = document.createElement('span');
        err.className = 'err';
        err.textContent = 'wajib diisi';
        field.appendChild(err);
      }
    });
    if (!ok) {
      toast('Mohon lengkapi data pesanan.');
      form.querySelector('.invalid input')?.focus();
      return;
    }
    // success
    const orderNum = 'BSI-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    document.getElementById('orderNum').textContent = '№ ' + orderNum;
    cart = [];
    saveCart();
    renderCart();
    location.hash = '#/confirm';
  });
}

/* ────────── toast ────────── */
function toast(msg) {
  const stack = document.getElementById('toastStack');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="dot"></span><span>${msg}</span>`;
  stack.appendChild(t);
  setTimeout(() => {
    t.classList.add('leave');
    setTimeout(() => t.remove(), 400);
  }, 2400);
}

/* ────────── fly to cart ────────── */
function flyToCart(srcEl) {
  const cartEl = document.getElementById('openCart');
  const cartRect = cartEl.getBoundingClientRect();
  const srcRect = srcEl.getBoundingClientRect();

  const clone = document.createElement('div');
  clone.className = 'fly-clone';
  clone.style.width = Math.min(srcRect.width, 100) + 'px';
  clone.style.height = Math.min(srcRect.height, 100) + 'px';
  clone.style.left = (srcRect.left + srcRect.width / 2 - 50) + 'px';
  clone.style.top  = (srcRect.top + srcRect.height / 2 - 50) + 'px';

  // pick a bowl visual if available
  const useEl = srcEl.querySelector('use');
  const symbolId = useEl ? useEl.getAttribute('href').slice(1) : 'bowl-klasik';
  clone.innerHTML = `<svg viewBox="0 0 400 400" style="width:100%;height:100%"><use href="#${symbolId}"/></svg>`;

  document.body.appendChild(clone);
  // force reflow then animate
  requestAnimationFrame(() => {
    const dx = cartRect.left + cartRect.width / 2 - (srcRect.left + srcRect.width / 2);
    const dy = cartRect.top + cartRect.height / 2 - (srcRect.top + srcRect.height / 2);
    clone.style.transform = `translate(${dx}px, ${dy}px) scale(0.12) rotate(-30deg)`;
    clone.style.opacity = '0';
  });
  setTimeout(() => clone.remove(), 900);
}

/* ────────── router ────────── */
function setView(v) {
  document.querySelectorAll('[data-view]').forEach(s => {
    s.hidden = s.dataset.view !== v;
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function route() {
  const h = location.hash || '#/';
  // close cart drawer on navigation
  closeCart();
  // dim header navs
  document.querySelectorAll('.nav-primary a').forEach(a => a.classList.remove('active'));

  if (h === '#/' || h === '') {
    setView('home');
  } else if (h.startsWith('#/shop')) {
    setView('shop');
    document.querySelector('[data-nav="shop"]')?.classList.add('active');
    renderShop('all');
    bindShopFilters();
  } else if (h.startsWith('#/p/')) {
    const id = h.slice(4);
    setView('product');
    renderProductDetail(id);
  } else if (h === '#/checkout') {
    if (cart.length === 0) { location.hash = '#/shop'; return; }
    setView('checkout');
    renderCheckoutSummary();
    setupCheckoutHandlers();
  } else if (h === '#/confirm') {
    setView('confirm');
  } else if (h === '#/story') {
    setView('home');
    setTimeout(() => document.querySelector('.heritage')?.scrollIntoView({ behavior: 'smooth' }), 80);
  } else if (h === '#/contact') {
    setView('home');
    setTimeout(() => document.querySelector('.site-footer')?.scrollIntoView({ behavior: 'smooth' }), 80);
  } else {
    setView('home');
  }
  // re-arm reveal observer for new content
  armReveals();
}

function bindShopFilters() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderShop(chip.dataset.filter);
    });
  });
}

/* ────────── header scroll ────────── */
function setupHeader() {
  const header = document.getElementById('siteHeader');
  let last = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 30);
    last = y;
  }, { passive: true });
}

/* ────────── reveal-on-scroll ────────── */
let revealObserver;
function armReveals() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          revealObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  }
  document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver.observe(el));
}

/* ────────── boot ────────── */
function boot() {
  renderFeatured();
  renderCart();
  setupHeader();
  armReveals();

  document.getElementById('openCart').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
  document.getElementById('checkoutBtn').addEventListener('click', closeCart);

  window.addEventListener('hashchange', route);
  route();
}

// expose for inline onclick handlers
window.updateQty = updateQty;
window.removeItem = removeItem;
window.closeCart = closeCart;

document.addEventListener('DOMContentLoaded', boot);
