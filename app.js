/* ──────────────────────────────────────────────────────────────
   BUBUR SUMSUM IBU — application logic (with i18n: id / en)
   ────────────────────────────────────────────────────────────── */

/* ────────── i18n ────────── */
const LANG_KEY = 'bsi.lang.v1';
let LANG = localStorage.getItem(LANG_KEY) || 'id';

const STRINGS = {
  id: {
    // ─ header / nav
    'nav.menu': 'Menu',
    'nav.story': 'Cerita',
    'nav.contact': 'Kontak',
    'brand.aria': 'Bubur Sumsum Ibu — beranda',
    'cart.label': 'Keranjang',
    'cart.aria.open': 'Buka keranjang',
    'cart.aria.close': 'Tutup keranjang',
    'lang.aria': 'pilih bahasa',

    // ─ hero
    'hero.eyebrow': 'Vol. 1 — Resep Ibu',
    'hero.est': 'est. Bandung, 2018',
    'hero.title.html': 'Lembut,<br/>manis, <span class="italic">selalu</span><br/><span class="italic">hangat</span> <span class="ampersand">&amp;</span> baru.',
    'hero.lede': 'Sejak lima tahun lalu Ibu bangun pukul empat pagi untuk menanak bubur sumsum dari tepung beras pilihan, gula merah Kebumen, dan santan kelapa segar. Kami hanya melanjutkan apa yang sudah ada — dengan ojek, dengan cinta.',
    'hero.cta.order': 'Pesan Sekarang',
    'hero.cta.story': 'Baca ceritanya',
    'hero.float.1': 'tepung beras pilihan',
    'hero.float.2': 'kuah gula Kebumen',
    'hero.float.3': 'santan kelapa segar',

    // ─ marquee
    'marquee.1': 'Dibuat segar setiap pagi',
    'marquee.2': 'Diantar masih hangat',
    'marquee.3': 'Tanpa pengawet',
    'marquee.4': 'Gula merah asli Kebumen',
    'marquee.5': 'Santan kelapa segar',

    // ─ heritage
    'heritage.eyebrow': '№ 01 — Asal Mula',
    'heritage.h2.html': 'Bubur yang <span class="underline">mengingatkan</span> kita pada rumah.',
    'heritage.p1': 'Setiap mangkuk dimulai sebelum matahari terbit. Tepung beras yang sudah direndam semalaman, santan dari kelapa yang baru diparut, gula merah pekat yang dimasak perlahan dengan daun pandan — semua dikerjakan tangan, sebagaimana nenek dulu mengajari.',
    'heritage.p2': 'Tidak ada jalan pintas. Tidak ada pengawet. Tidak ada rahasia selain kesabaran. Bubur sumsum yang baik harus lembut tetapi punya tubuh, manis tetapi tidak menusuk, hangat sampai ke dada.',
    'heritage.p3': 'Itu sebabnya kami antarkan hari yang sama — supaya rasanya sampai ke meja Anda persis seperti waktu pertama kali dituang dari panci.',
    'heritage.sig': '— Ibu Ning',
    'heritage.foot.html': 'Pendiri &amp; juru masak,<br/>sejak 14 Mei 2018.',

    // ─ menu section
    'menu.eyebrow': '№ 02 — Menu',
    'menu.h2.html': 'Enam <span class="serif-italic" style="color: var(--clay);">varian</span>, satu kesabaran.',
    'menu.seeall': 'Lihat semua',

    // ─ ritual
    'ritual.eyebrow': '№ 03 — Cara Menyajikan',
    'ritual.h2.html': 'Ritual <span class="serif-italic" style="color: var(--clay);">tiga langkah</span> sederhana.',
    'ritual.caption': 'untuk dinikmati segera.',
    'ritual.1.title': 'Tuang ke mangkuk',
    'ritual.1.desc': 'Pindahkan bubur ke mangkuk keramik favorit Anda. Jangan tergesa.',
    'ritual.2.title': 'Hangatkan sebentar',
    'ritual.2.desc': 'Jika dingin, panaskan 60 detik di atas api kecil — sambil aduk perlahan supaya santan menyatu kembali.',
    'ritual.3.title': 'Siram kuah gula',
    'ritual.3.desc': 'Tuang kuah gula merah hingga membentuk genangan kecil, lalu siram santan. Nikmati sebelum dingin.',

    // ─ voices
    'voices.eyebrow': '№ 04 — Suara Pelanggan',
    'voices.h2.html': 'Yang mereka <span style="color: var(--clay-pale);">rasakan</span>.',
    'voices.caption': 'dari ratusan pesanan setiap minggu.',
    'voices.1.quote': 'Persis seperti yang dibuat almarhumah nenek saya di Solo. Saya menangis di gigitan pertama.',
    'voices.2.quote': 'Sampai masih hangat, kuah gulanya pekat, santannya tidak amis. Sempurna untuk sarapan akhir pekan.',
    'voices.3.quote': 'Saya pesan paket keluarga setiap Sabtu pagi. Anak-anak sudah menunggu di depan pintu.',

    // ─ footer
    'footer.tagline': 'Resep warisan keluarga, dibuat segar setiap pagi di dapur kami di Bandung.',
    'footer.menu.title': 'Menu',
    'footer.menu.1': 'Semua varian',
    'footer.menu.2': 'Paket keluarga',
    'footer.menu.3': 'Hadiah & hampers',
    'footer.story.title': 'Cerita',
    'footer.story.1': 'Tentang Ibu Ning',
    'footer.story.2': 'Bahan baku',
    'footer.story.3': 'Jurnal dapur',
    'footer.contact.title': 'Hubungi',
    'footer.copyright': '© 2026 Bubur Sumsum Ibu · Bandung, Indonesia',
    'footer.signoff.html': '<em>Made with kesabaran.</em>',

    // ─ shop
    'shop.eyebrow': 'Vol. II — Menu Lengkap',
    'shop.h1.html': 'Semua bubur, <span class="roman">diantar hangat</span>.',
    'shop.filter.all': 'Semua',
    'shop.filter.klasik': 'Klasik',
    'shop.filter.modern': 'Modern',
    'shop.filter.paket': 'Paket',
    'shop.filters.aria': 'filter varian',

    // ─ product detail
    'pd.back': '← Kembali ke menu',
    'pd.size': 'Ukuran',
    'pd.topping': 'Tambahan',
    'pd.qty': 'Jumlah',
    'pd.add': 'Tambah ke Keranjang',
    'pd.qty.up': 'tambah',
    'pd.qty.down': 'kurangi',

    'size.reg': 'Mangkuk (1 porsi)',
    'size.lrg': 'Loyang (3 porsi)',
    'size.reg.short': 'Mangkuk',
    'size.lrg.short': 'Loyang',

    'top.std': 'Standar',
    'top.kuah': 'Extra kuah gula',
    'top.santan': 'Extra santan',
    'top.wijen': 'Wijen sangrai',

    // ─ cart drawer
    'cart.title': 'Keranjang',
    'cart.empty.h': 'Keranjang masih kosong.',
    'cart.empty.p': 'Coba menu klasik kami — bubur sumsum gula merah, andalan sejak 2018.',
    'cart.empty.cta': 'Jelajahi menu',
    'cart.remove': 'hapus',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Ongkir',
    'cart.shipping.calc': 'dihitung di checkout',
    'cart.total.tmp': 'Total sementara',
    'cart.checkout': 'Lanjut ke Pembayaran',
    'cart.note': 'Antar dalam 90 menit · Bandung kota',
    'cart.aria': 'keranjang belanja',

    // ─ checkout
    'co.back': '← Lanjut belanja',
    'co.h1.html': 'Pesanan <span class="it">Anda</span>',
    'co.step.1': 'Pengiriman',
    'co.step.2': 'Detail kontak',
    'co.step.3': 'Pembayaran',
    'co.delivery.instant.name': 'Antar Hari Ini',
    'co.delivery.instant.meta': 'Tiba dalam 90 menit · Bandung kota',
    'co.delivery.scheduled.name': 'Jadwal Besok Pagi',
    'co.delivery.scheduled.meta': 'Tiba pukul 07:00 — segar dari panci',
    'co.field.name': 'Nama lengkap',
    'co.field.phone': 'Nomor WhatsApp',
    'co.field.addr': 'Alamat pengiriman',
    'co.field.addr.ph': 'Jl. Cihampelas no. 56, Bandung 40131',
    'co.field.note': 'Catatan untuk dapur (opsional)',
    'co.field.note.ph': 'Misal: tanpa daun pandan, atau ekstra kuah',
    'co.field.card': 'Nomor kartu',
    'co.field.holder': 'Nama di kartu',
    'co.field.exp': 'Kadaluwarsa',
    'co.field.cvc': 'CVC',
    'co.pay.cash': 'Atau bayar tunai saat pesanan tiba — pilih opsi di atas.',
    'co.submit': 'Konfirmasi Pesanan',
    'co.summary': 'Ringkasan',
    'co.summary.aria': 'ringkasan pesanan',
    'co.summary.subtotal': 'Subtotal',
    'co.summary.shipping': 'Pengiriman',
    'co.summary.total': 'Total',
    'co.summary.note': 'Bubur dimasak setelah pesanan dikonfirmasi.',
    'co.summary.empty': 'Keranjang kosong.',

    // ─ confirmation
    'cf.eyebrow': 'Terima kasih',
    'cf.h1.html': 'Pesanan <span class="it">tercatat</span>.',
    'cf.body': 'Ibu akan mulai memasak segera. Anda akan menerima pesan WhatsApp begitu kurir berangkat.',
    'cf.cta.home': 'Kembali ke beranda',
    'cf.cta.again': 'Pesan lagi',

    // ─ misc
    'qa.add': '+ Keranjang',
    'toast.added': '{n}× {brand} {variant} ditambahkan',
    'toast.added.simple': '{brand} {variant} ditambahkan',
    'toast.form.invalid': 'Mohon lengkapi data pesanan.',
    'form.required': 'wajib diisi',
    'meta.title': 'Bubur Sumsum Ibu — Resep Warisan, Dikirim Hangat',
    'pd.open': 'Buka {brand} {variant}'
  },

  en: {
    'nav.menu': 'Menu',
    'nav.story': 'Story',
    'nav.contact': 'Contact',
    'brand.aria': 'Bubur Sumsum Ibu — home',
    'cart.label': 'Cart',
    'cart.aria.open': 'Open cart',
    'cart.aria.close': 'Close cart',
    'lang.aria': 'language',

    'hero.eyebrow': 'Vol. 1 — Mother’s Recipe',
    'hero.est': 'est. Bandung, 2018',
    'hero.title.html': 'Soft,<br/>sweet, <span class="italic">always</span><br/><span class="italic">warm</span> <span class="ampersand">&amp;</span> fresh.',
    'hero.lede': 'Five years ago Ibu started rising at four in the morning to cook bubur sumsum from carefully soaked rice flour, Kebumen palm sugar, and freshly pressed coconut milk. We simply carry on what she began — by motorbike, with love.',
    'hero.cta.order': 'Order Now',
    'hero.cta.story': 'Read our story',
    'hero.float.1': 'finest rice flour',
    'hero.float.2': 'Kebumen palm syrup',
    'hero.float.3': 'fresh coconut milk',

    'marquee.1': 'Made fresh every morning',
    'marquee.2': 'Delivered still warm',
    'marquee.3': 'No preservatives',
    'marquee.4': 'Authentic Kebumen palm sugar',
    'marquee.5': 'Fresh coconut milk',

    'heritage.eyebrow': '№ 01 — Origins',
    'heritage.h2.html': 'A porridge that <span class="underline">reminds</span> us of home.',
    'heritage.p1': 'Every bowl begins before sunrise. Rice flour soaked overnight, milk from a freshly grated coconut, thick palm sugar simmered slowly with pandan leaves — all of it done by hand, the way grandmother taught us.',
    'heritage.p2': 'No shortcuts. No preservatives. No secret beyond patience. A good bubur sumsum should be soft but have body, sweet but never cloying, warm all the way to the chest.',
    'heritage.p3': 'That’s why we deliver the same day — so it lands on your table tasting just like the very first ladle out of the pot.',
    'heritage.sig': '— Ibu Ning',
    'heritage.foot.html': 'Founder &amp; cook,<br/>since 14 May 2018.',

    'menu.eyebrow': '№ 02 — Menu',
    'menu.h2.html': 'Six <span class="serif-italic" style="color: var(--clay);">variants</span>, one patience.',
    'menu.seeall': 'See all',

    'ritual.eyebrow': '№ 03 — How to Serve',
    'ritual.h2.html': 'A simple <span class="serif-italic" style="color: var(--clay);">three-step</span> ritual.',
    'ritual.caption': 'to enjoy right away.',
    'ritual.1.title': 'Pour into a bowl',
    'ritual.1.desc': 'Transfer the porridge to your favorite ceramic bowl. Don’t hurry.',
    'ritual.2.title': 'Warm it briefly',
    'ritual.2.desc': 'If it has cooled, warm for 60 seconds over low heat — stir gently so the coconut milk folds back in.',
    'ritual.3.title': 'Drizzle the syrup',
    'ritual.3.desc': 'Pour palm sugar syrup until a small pool forms, then stream over the coconut milk. Eat before it cools.',

    'voices.eyebrow': '№ 04 — Customer Voices',
    'voices.h2.html': 'What they <span style="color: var(--clay-pale);">feel</span>.',
    'voices.caption': 'from hundreds of orders every week.',
    'voices.1.quote': 'Exactly like the one my late grandmother used to make in Solo. I cried at the first bite.',
    'voices.2.quote': 'Arrived warm, the syrup thick, the coconut milk impeccable. Perfect for a weekend breakfast.',
    'voices.3.quote': 'I order the family pack every Saturday morning. The kids are already waiting by the door.',

    'footer.tagline': 'A family heirloom recipe, made fresh every morning in our kitchen in Bandung.',
    'footer.menu.title': 'Menu',
    'footer.menu.1': 'All variants',
    'footer.menu.2': 'Family pack',
    'footer.menu.3': 'Gifts & hampers',
    'footer.story.title': 'Story',
    'footer.story.1': 'About Ibu Ning',
    'footer.story.2': 'Ingredients',
    'footer.story.3': 'Kitchen journal',
    'footer.contact.title': 'Contact',
    'footer.copyright': '© 2026 Bubur Sumsum Ibu · Bandung, Indonesia',
    'footer.signoff.html': '<em>Made with kesabaran.</em>',

    'shop.eyebrow': 'Vol. II — Full Menu',
    'shop.h1.html': 'Every porridge, <span class="roman">delivered warm</span>.',
    'shop.filter.all': 'All',
    'shop.filter.klasik': 'Classic',
    'shop.filter.modern': 'Modern',
    'shop.filter.paket': 'Bundles',
    'shop.filters.aria': 'filter variants',

    'pd.back': '← Back to menu',
    'pd.size': 'Size',
    'pd.topping': 'Add-ons',
    'pd.qty': 'Quantity',
    'pd.add': 'Add to Cart',
    'pd.qty.up': 'increase',
    'pd.qty.down': 'decrease',

    'size.reg': 'Bowl (1 serving)',
    'size.lrg': 'Pan (3 servings)',
    'size.reg.short': 'Bowl',
    'size.lrg.short': 'Pan',

    'top.std': 'Standard',
    'top.kuah': 'Extra palm syrup',
    'top.santan': 'Extra coconut milk',
    'top.wijen': 'Toasted sesame',

    'cart.title': 'Cart',
    'cart.empty.h': 'Your cart is empty.',
    'cart.empty.p': 'Try our classic — bubur sumsum with palm sugar syrup, the signature since 2018.',
    'cart.empty.cta': 'Browse the menu',
    'cart.remove': 'remove',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.shipping.calc': 'calculated at checkout',
    'cart.total.tmp': 'Estimated total',
    'cart.checkout': 'Continue to Payment',
    'cart.note': 'Delivered within 90 minutes · Bandung city',
    'cart.aria': 'shopping cart',

    'co.back': '← Keep shopping',
    'co.h1.html': 'Your <span class="it">order</span>',
    'co.step.1': 'Delivery',
    'co.step.2': 'Contact details',
    'co.step.3': 'Payment',
    'co.delivery.instant.name': 'Same-day delivery',
    'co.delivery.instant.meta': 'Arrives in 90 minutes · Bandung city',
    'co.delivery.scheduled.name': 'Tomorrow morning',
    'co.delivery.scheduled.meta': 'Arrives at 7:00 — fresh from the pot',
    'co.field.name': 'Full name',
    'co.field.phone': 'WhatsApp number',
    'co.field.addr': 'Delivery address',
    'co.field.addr.ph': 'Jl. Cihampelas no. 56, Bandung 40131',
    'co.field.note': 'Note for the kitchen (optional)',
    'co.field.note.ph': 'e.g. no pandan leaf, or extra syrup',
    'co.field.card': 'Card number',
    'co.field.holder': 'Cardholder name',
    'co.field.exp': 'Expiry',
    'co.field.cvc': 'CVC',
    'co.pay.cash': 'Or pay cash on delivery — pick the option above.',
    'co.submit': 'Confirm Order',
    'co.summary': 'Summary',
    'co.summary.aria': 'order summary',
    'co.summary.subtotal': 'Subtotal',
    'co.summary.shipping': 'Shipping',
    'co.summary.total': 'Total',
    'co.summary.note': 'The porridge is cooked once your order is confirmed.',
    'co.summary.empty': 'Cart is empty.',

    'cf.eyebrow': 'Thank you',
    'cf.h1.html': 'Order <span class="it">placed</span>.',
    'cf.body': 'Ibu will start cooking right away. You’ll get a WhatsApp message the moment the courier sets off.',
    'cf.cta.home': 'Back to home',
    'cf.cta.again': 'Order again',

    'qa.add': '+ Cart',
    'toast.added': '{n}× {brand} {variant} added',
    'toast.added.simple': '{brand} {variant} added',
    'toast.form.invalid': 'Please complete your order details.',
    'form.required': 'required',
    'meta.title': 'Bubur Sumsum Ibu — Heirloom Recipe, Delivered Warm',
    'pd.open': 'Open {brand} {variant}'
  }
};

function t(key, vars) {
  let str = STRINGS[LANG][key] ?? STRINGS.id[key] ?? key;
  if (vars) for (const k in vars) str = str.replace(`{${k}}`, vars[k]);
  return str;
}
// translate a bilingual product field (object with id/en keys), or pass through a plain value
const tp = (val) => (val && typeof val === 'object' && (val.id !== undefined || val.en !== undefined)) ? (val[LANG] ?? val.id) : val;

/* ────────── catalog ────────── */
const PRODUCTS = [
  {
    id: 'klasik',
    brand: 'Bubur Sumsum',
    variant: { id: 'Klasik', en: 'Classic' },
    price: 18000,
    tag: { id: 'Andalan', en: 'Signature' },
    tagClass: 'clay',
    bowl: 'bowl-klasik',
    theme: 'cream',
    cat: 'klasik',
    short: {
      id: 'Tepung beras, santan kelapa segar, kuah gula merah Kebumen.',
      en: 'Rice flour, fresh coconut milk, Kebumen palm sugar syrup.'
    },
    long: {
      id: 'Resep dasar yang kami buat sejak hari pertama. Tepung beras pilihan direndam semalaman, dimasak dengan santan kelapa segar dan sedikit garam. Disajikan dengan kuah gula merah Kebumen yang dimasak perlahan bersama daun pandan dan sejumput jahe.',
      en: 'The original recipe — the one we have made since day one. Carefully selected rice flour, soaked overnight and cooked with fresh coconut milk and a pinch of salt. Served with Kebumen palm sugar syrup, simmered slowly with pandan leaves and a touch of ginger.'
    },
    notes: [
      { ico: 'i-thermo', t: { id: '<strong>Disajikan</strong>Hangat atau suhu ruang', en: '<strong>Serve</strong>Warm or at room temp' } },
      { ico: 'i-clock',  t: { id: '<strong>Konsumsi</strong>Maksimal 24 jam',         en: '<strong>Keep</strong>Up to 24 hours' } }
    ]
  },
  {
    id: 'pandan',
    brand: 'Bubur Sumsum',
    variant: { id: 'Pandan', en: 'Pandan' },
    price: 20000,
    tag: { id: 'Aromatik', en: 'Aromatic' },
    tagClass: 'pandan',
    bowl: 'bowl-pandan',
    theme: 'pandan',
    cat: 'klasik',
    short: {
      id: 'Tepung beras diaduk dengan ekstrak daun pandan segar, hijau alami.',
      en: 'Rice porridge folded with fresh pandan leaf extract — naturally green.'
    },
    long: {
      id: 'Versi yang lebih harum — bubur kami dimasak dengan jus dari delapan lembar daun pandan yang baru dipetik. Warnanya hijau lembut, aromanya seperti dapur ibu di pagi hari. Tetap disajikan dengan kuah gula merah klasik kami.',
      en: 'The more fragrant version — cooked with juice from eight freshly picked pandan leaves. Soft green color, a scent like mother’s kitchen in the morning. Still finished with our classic palm sugar syrup.'
    },
    notes: [
      { ico: 'i-thermo', t: { id: '<strong>Disajikan</strong>Hangat',         en: '<strong>Serve</strong>Warm' } },
      { ico: 'i-clock',  t: { id: '<strong>Konsumsi</strong>Maksimal 24 jam', en: '<strong>Keep</strong>Up to 24 hours' } }
    ]
  },
  {
    id: 'ketan',
    brand: 'Bubur Sumsum',
    variant: { id: 'Ketan Hitam', en: 'Ketan Hitam' },
    price: 22000,
    tag: { id: 'Berisi', en: 'Hearty' },
    tagClass: '',
    bowl: 'bowl-ketan',
    theme: 'charcoal',
    cat: 'modern',
    short: {
      id: 'Bubur sumsum lembut dengan tumpukan ketan hitam pulen.',
      en: 'Soft bubur sumsum crowned with plump black sticky rice.'
    },
    long: {
      id: 'Dua tekstur dalam satu mangkuk: bubur sumsum yang lembut menyatu dengan ketan hitam yang dimasak hingga pulen, sedikit liat, dan manis alami. Kombinasi yang membuat sarapan terasa cukup.',
      en: 'Two textures in one bowl: silky bubur sumsum folds into black glutinous rice cooked until plump, a little chewy, naturally sweet. The kind of breakfast that feels like enough.'
    },
    notes: [
      { ico: 'i-thermo', t: { id: '<strong>Disajikan</strong>Hangat',           en: '<strong>Serve</strong>Warm' } },
      { ico: 'i-spoon',  t: { id: '<strong>Tekstur</strong>Lembut & berisi',    en: '<strong>Texture</strong>Silky & hearty' } }
    ]
  },
  {
    id: 'durian',
    brand: 'Bubur Sumsum',
    variant: { id: 'Durian', en: 'Durian' },
    price: 28000,
    tag: { id: 'Musiman', en: 'Seasonal' },
    tagClass: 'clay',
    bowl: 'bowl-durian',
    theme: 'durian',
    cat: 'modern',
    short: {
      id: 'Saus durian Medan segar di atas bubur sumsum kami yang klasik.',
      en: 'Fresh Medan durian sauce over our classic bubur sumsum.'
    },
    long: {
      id: 'Hanya tersedia saat musim panen. Daging durian Medan yang sudah matang sempurna kami haluskan menjadi saus kental, tanpa tambahan gula. Tuangkan di atas bubur sumsum yang masih hangat — aromanya memenuhi seluruh ruangan.',
      en: 'Only during harvest season. Perfectly ripe Medan durian, blended into a thick sauce — no added sugar. Pour it over warm bubur sumsum — the aroma fills the entire room.'
    },
    notes: [
      { ico: 'i-thermo', t: { id: '<strong>Disajikan</strong>Hangat atau dingin', en: '<strong>Serve</strong>Warm or chilled' } },
      { ico: 'i-clock',  t: { id: '<strong>Stok</strong>Terbatas musiman',         en: '<strong>Stock</strong>Limited by season' } }
    ]
  },
  {
    id: 'candil',
    brand: 'Bubur',
    variant: { id: 'Candil', en: 'Candil' },
    price: 22000,
    tag: { id: 'Klasik', en: 'Heritage' },
    tagClass: '',
    bowl: 'bowl-candil',
    theme: 'candil',
    cat: 'klasik',
    short: {
      id: 'Bola-bola candil ubi ungu di kuah gula merah pekat, taburi santan.',
      en: 'Purple sweet potato dumplings in thick palm sugar syrup, finished with coconut milk.'
    },
    long: {
      id: 'Bubur sumsum tradisional dari Jawa Tengah. Bola-bola candil yang dibuat dari ubi ungu kukus dan tepung tapioka direbus dalam kuah gula merah yang pekat. Disiram santan kental yang gurih — kontras manis dan asin yang sempurna.',
      en: 'A Central Javanese classic. Chewy candil dumplings made from steamed purple sweet potato and tapioca, simmered in rich palm sugar syrup. Crowned with thick, savory coconut milk — the perfect sweet-and-salty contrast.'
    },
    notes: [
      { ico: 'i-thermo', t: { id: '<strong>Disajikan</strong>Hangat',         en: '<strong>Serve</strong>Warm' } },
      { ico: 'i-spoon',  t: { id: '<strong>Tekstur</strong>Kenyal & pekat',   en: '<strong>Texture</strong>Chewy & rich' } }
    ]
  },
  {
    id: 'family',
    brand: { id: 'Paket', en: 'Family' },
    variant: { id: 'Keluarga', en: 'Pack' },
    price: 75000,
    tag: { id: 'Best value', en: 'Best value' },
    tagClass: 'clay',
    bowl: 'bowl-family',
    theme: 'family',
    cat: 'paket',
    short: {
      id: 'Empat porsi pilihan — gabungkan varian apa pun, hemat 15%.',
      en: 'Four servings to share — mix any variants, save 15%.'
    },
    long: {
      id: 'Untuk sarapan akhir pekan bersama keluarga, atau hantaran ke rumah saudara. Pilih empat porsi dari varian apa pun di menu kami — kami kemas dalam wadah keramik yang bisa dipakai ulang, lengkap dengan kuah gula dan santan terpisah supaya tetap segar.',
      en: 'For weekend breakfasts with family, or to send to a relative. Pick four servings of any variant on our menu — packed in reusable ceramic containers, with syrup and coconut milk kept separate so everything stays fresh.'
    },
    notes: [
      { ico: 'i-bowl',   t: { id: '<strong>Isi</strong>4 porsi pilihan',           en: '<strong>Contents</strong>4 servings, mix any' } },
      { ico: 'i-thermo', t: { id: '<strong>Wadah</strong>Keramik pakai ulang',      en: '<strong>Container</strong>Reusable ceramic' } }
    ]
  }
];

const SIZES = [
  { id: 'reg', mult: 1 },
  { id: 'lrg', mult: 2.7 }
];
const TOPPINGS = [
  { id: 'std',    delta: 0 },
  { id: 'kuah',   delta: 4000 },
  { id: 'santan', delta: 4000 },
  { id: 'wijen',  delta: 3000 }
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
    const top = TOPPINGS.find(x => x.id === item.topping);
    return sum + ((p.price * s.mult) + top.delta) * item.qty;
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
  const brand = tp(p.brand);
  const variant = tp(p.variant);
  return `
    <button class="product-card" data-id="${p.id}" data-cat="${p.cat}" aria-label="${t('pd.open', {brand, variant})}">
      <div class="pc-media theme-${p.theme}">
        <span class="pc-tag ${p.tagClass}">${tp(p.tag)}</span>
        <svg viewBox="0 0 400 400" aria-hidden="true"><use href="#${p.bowl}"/></svg>
        <div class="pc-quick">
          <span class="qbtn" data-quick-add="${p.id}">${t('qa.add')}</span>
        </div>
      </div>
      <div class="pc-meta">
        <span class="pc-name">${brand} <span class="it">${variant}</span></span>
        <span class="pc-price">${fmt(p.price)}</span>
      </div>
      <p class="pc-desc">${tp(p.short)}</p>
    </button>
  `;
}

function renderFeatured() {
  const featured = PRODUCTS.slice(0, 3);
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = featured.map(productCardHTML).join('');
  bindCardEvents();
}

function renderShop(filter = 'all') {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
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
      toast(t('toast.added.simple', { brand: tp(product.brand), variant: tp(product.variant) }));
    });
  });
}

function renderProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) { location.hash = '#/shop'; return; }
  const grid = document.getElementById('pdGrid');

  const brand = tp(p.brand);
  const variant = tp(p.variant);

  grid.innerHTML = `
    <div>
      <div class="pd-media theme-${p.theme}">
        <svg viewBox="0 0 400 400" aria-hidden="true" id="pdMain"><use href="#${p.bowl}"/></svg>
      </div>
      <div class="pd-thumbs">
        ${PRODUCTS.filter(x => x.id !== p.id).slice(0, 4).map(x => `
          <a class="pd-thumb" href="#/p/${x.id}" aria-label="${tp(x.brand)} ${tp(x.variant)}">
            <svg viewBox="0 0 400 400"><use href="#${x.bowl}"/></svg>
          </a>
        `).join('')}
      </div>
    </div>
    <div class="pd-info">
      <div class="pd-eyebrow">
        <span class="eyebrow eyebrow-clay">${tp(p.tag)}</span>
        <span class="caption">№ ${String(PRODUCTS.indexOf(p) + 1).padStart(2, '0')}</span>
      </div>
      <h1>${brand} <span class="it">${variant}</span></h1>
      <div class="pd-price" id="pdPrice">${fmt(p.price)}</div>
      <p class="pd-desc">${tp(p.long)}</p>

      <div class="pd-options">
        <div>
          <div class="pd-opt-label">${t('pd.size')}</div>
          <div class="pd-chips" id="sizeChips">
            ${SIZES.map((s, i) => `<button type="button" class="pd-chip ${i===0?'active':''}" data-size="${s.id}">${t('size.'+s.id)}</button>`).join('')}
          </div>
        </div>
        <div>
          <div class="pd-opt-label">${t('pd.topping')}</div>
          <div class="pd-chips" id="topChips">
            ${TOPPINGS.map((tp_, i) => `<button type="button" class="pd-chip ${i===0?'active':''}" data-topping="${tp_.id}">${t('top.'+tp_.id)}${tp_.delta?` +${fmt(tp_.delta).replace('Rp ', '')}`:''}</button>`).join('')}
          </div>
        </div>
      </div>

      <div class="pd-qty">
        <div class="pd-opt-label" style="margin: 0;">${t('pd.qty')}</div>
        <div class="qty-stepper">
          <button type="button" id="qtyDown" aria-label="${t('pd.qty.down')}">−</button>
          <span class="qv" id="qtyVal">1</span>
          <button type="button" id="qtyUp" aria-label="${t('pd.qty.up')}">+</button>
        </div>
      </div>

      <button class="btn btn-clay pd-add" id="pdAdd">
        ${t('pd.add')} <svg width="16" height="16" class="arrow"><use href="#i-arrow"/></svg>
      </button>

      <div class="pd-notes">
        ${p.notes.map(n => `
          <div class="pd-note">
            <span class="ico"><svg><use href="#${n.ico}"/></svg></span>
            <span class="t">${tp(n.t)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  let sel = { size: 'reg', topping: 'std', qty: 1 };
  const updatePrice = () => {
    const s = SIZES.find(x => x.id === sel.size);
    const tt = TOPPINGS.find(x => x.id === sel.topping);
    const per = (p.price * s.mult) + tt.delta;
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

  grid.querySelector('#pdAdd').addEventListener('click', () => {
    flyToCart(grid.querySelector('.pd-media'));
    addToCart(p, sel);
    toast(t('toast.added', { n: sel.qty, brand, variant }));
  });
}

/* ────────── cart drawer ────────── */
function renderCart() {
  const count = cartCount();
  const ccEl = document.getElementById('cartCount');
  if (ccEl) ccEl.textContent = count;
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  if (!body || !foot) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="ill" style="color: var(--clay);">
          <svg viewBox="0 0 120 120"><use href="#stamp-seal"/></svg>
        </div>
        <h4>${t('cart.empty.h')}</h4>
        <p>${t('cart.empty.p')}</p>
        <a href="#/shop" class="btn-text" onclick="closeCart()">${t('cart.empty.cta')}</a>
      </div>
    `;
    foot.hidden = true;
    return;
  }

  body.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const s = SIZES.find(x => x.id === item.size);
    const top = TOPPINGS.find(x => x.id === item.topping);
    const per = (p.price * s.mult) + top.delta;
    return `
      <div class="cart-item">
        <div class="ci-img"><svg viewBox="0 0 400 400"><use href="#${p.bowl}"/></svg></div>
        <div class="ci-info">
          <h5>${tp(p.brand)} <em style="color: var(--clay)">${tp(p.variant)}</em></h5>
          <div class="ci-var">${t('size.'+s.id+'.short')} · ${t('top.'+top.id)}</div>
          <div class="ci-qty">
            <button onclick="updateQty('${item.key}', -1)" aria-label="${t('pd.qty.down')}">−</button>
            <span class="qv">${item.qty}</span>
            <button onclick="updateQty('${item.key}', 1)" aria-label="${t('pd.qty.up')}">+</button>
          </div>
        </div>
        <div class="ci-side">
          <span class="ci-price">${fmt(per * item.qty)}</span>
          <button class="ci-remove" onclick="removeItem('${item.key}')">${t('cart.remove')}</button>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = cartSubtotal();
  document.getElementById('cartTotals').innerHTML = `
    <div class="row"><span>${t('cart.subtotal')}</span><span>${fmt(subtotal)}</span></div>
    <div class="row"><span>${t('cart.shipping')}</span><span><em style="font-family: var(--serif);">${t('cart.shipping.calc')}</em></span></div>
    <div class="row total"><span>${t('cart.total.tmp')}</span><span>${fmt(subtotal)}</span></div>
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
    items.innerHTML = `<p class="caption" style="text-align:center; padding: 2rem 0;">${t('co.summary.empty')}</p>`;
    totals.innerHTML = '';
    return;
  }
  items.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    const s = SIZES.find(x => x.id === item.size);
    const top = TOPPINGS.find(x => x.id === item.topping);
    const per = (p.price * s.mult) + top.delta;
    return `
      <div class="cs-item">
        <div class="ci-img"><svg viewBox="0 0 400 400"><use href="#${p.bowl}"/></svg></div>
        <div class="ci-name">${tp(p.variant)} × ${item.qty}<span>${t('size.'+s.id+'.short')} · ${t('top.'+top.id)}</span></div>
        <div class="ci-cost">${fmt(per * item.qty)}</div>
      </div>
    `;
  }).join('');

  const sub = cartSubtotal();
  const ship = deliveryChoice.price;
  const total = sub + ship;
  totals.innerHTML = `
    <div class="row"><span>${t('co.summary.subtotal')}</span><span>${fmt(sub)}</span></div>
    <div class="row"><span>${t('co.summary.shipping')}</span><span>${fmt(ship)}</span></div>
    <div class="row total"><span>${t('co.summary.total')}</span><span>${fmt(total)}</span></div>
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
  if (!form || form.dataset.bound) return;
  form.dataset.bound = '1';
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
        err.textContent = t('form.required');
        field.appendChild(err);
      }
    });
    if (!ok) {
      toast(t('toast.form.invalid'));
      form.querySelector('.invalid input')?.focus();
      return;
    }
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
  const elt = document.createElement('div');
  elt.className = 'toast';
  elt.innerHTML = `<span class="dot"></span><span>${msg}</span>`;
  stack.appendChild(elt);
  setTimeout(() => {
    elt.classList.add('leave');
    setTimeout(() => elt.remove(), 400);
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

  const useEl = srcEl.querySelector('use');
  const symbolId = useEl ? useEl.getAttribute('href').slice(1) : 'bowl-klasik';
  clone.innerHTML = `<svg viewBox="0 0 400 400" style="width:100%;height:100%"><use href="#${symbolId}"/></svg>`;

  document.body.appendChild(clone);
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
  closeCart();
  document.querySelectorAll('.nav-primary a').forEach(a => a.classList.remove('active'));

  if (h === '#/' || h === '') {
    setView('home');
    renderFeatured();
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
    renderFeatured();
    setTimeout(() => document.querySelector('.heritage')?.scrollIntoView({ behavior: 'smooth' }), 80);
  } else if (h === '#/contact') {
    setView('home');
    renderFeatured();
    setTimeout(() => document.querySelector('.site-footer')?.scrollIntoView({ behavior: 'smooth' }), 80);
  } else {
    setView('home');
    renderFeatured();
  }
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
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
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

/* ────────── i18n: apply translations to DOM ────────── */
function applyLang() {
  document.documentElement.lang = LANG;
  localStorage.setItem(LANG_KEY, LANG);

  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  // inner HTML
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  // attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
  });

  // document title
  document.title = t('meta.title');

  // toggle button state
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === LANG);
  });

  // re-render dynamic content for the current route
  route();
  renderCart();
}

function setupLangToggle() {
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.lang;
      if (next === LANG) return;
      LANG = next;
      applyLang();
    });
  });
}

/* ────────── boot ────────── */
function boot() {
  setupHeader();
  setupLangToggle();
  applyLang();          // also renders featured + cart + sets all text
  armReveals();

  document.getElementById('openCart').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
  document.getElementById('checkoutBtn').addEventListener('click', closeCart);

  window.addEventListener('hashchange', route);
}

window.updateQty = updateQty;
window.removeItem = removeItem;
window.closeCart = closeCart;

document.addEventListener('DOMContentLoaded', boot);
