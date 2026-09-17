/* =========================================================
   ⚙️ CONFIG — عدّلي هنا بياناتك (رقم واتساب، لينكات، تواصل)
   ========================================================= */
const CONFIG = {
  // رقم الواتساب اللي هيوصله الطلب - اكتبيه بكود الدولة من غير + أو صفر
  // مثال لمصر: "201001234567"
  whatsappNumber: "201000000000",

  facebook: "https://facebook.com/sola.skincare",
  instagram: "https://instagram.com/sola.skincare",
  phone: "+20 100 000 0000",
  email: "hello@solaskincare.com",

  currency: { ar: "ج.م", en: "EGP" }
};

/* =========================================================
   🛍️ PRODUCTS — عشان تضيفي منتج جديد، انسخي أي عنصر
   وغيّري البيانات جواه. الصورة ممكن تكون رابط أو ملف
   في مجلد assets/ (مثال: "assets/product1.jpg")
   ========================================================= */
const PRODUCTS = [
  {
    id: "cleanser",
    name: { ar: "غسول الوردة الرقيق", en: "Rose Petal Cleanser" },
    desc: { ar: "غسول يومي لطيف بخلاصة الورد، بينظف البشرة من غير ما يجففها.", en: "A gentle daily cleanser with rose extract that cleans without drying." },
    price: 250,
    tag: { ar: "الأكثر مبيعًا", en: "Bestseller" },
    image: "https://placehold.co/500x600/ffe4ee/ad1457?text=Cleanser"
  },
  {
    id: "toner",
    name: { ar: "تونر ماء الورد", en: "Rosewater Toner" },
    desc: { ar: "يوازن البشرة ويقفل المسام بعد الغسيل مباشرة.", en: "Balances the skin and tightens pores right after cleansing." },
    price: 220,
    tag: { ar: "جديد", en: "New" },
    image: "https://placehold.co/500x600/ffd3e6/ad1457?text=Toner"
  },
  {
    id: "serum",
    name: { ar: "سيروم فيتامين سي", en: "Vitamin C Serum" },
    desc: { ar: "يوحّد لون البشرة ويديها إشراقة واضحة من أول أسبوعين.", en: "Evens skin tone and gives visible glow within two weeks." },
    price: 480,
    tag: { ar: "مفضّل", en: "Favorite" },
    image: "https://placehold.co/500x600/ffc2dc/ad1457?text=Serum"
  },
  {
    id: "moisturizer",
    name: { ar: "كريم ترطيب الشيا", en: "Shea Moisture Cream" },
    desc: { ar: "ترطيب عميق يدوم طول اليوم من غير دهنية.", en: "Deep, long-lasting hydration without a greasy feel." },
    price: 350,
    tag: { ar: "", en: "" },
    image: "https://placehold.co/500x600/ffe4ee/ad1457?text=Moisturizer"
  },
  {
    id: "sunscreen",
    name: { ar: "واقي شمس SPF 50", en: "SPF 50 Sunscreen" },
    desc: { ar: "حماية يومية خفيفة تحت المكياج من غير ما تسيب أثر أبيض.", en: "Light daily protection under makeup with no white cast." },
    price: 300,
    tag: { ar: "أساسي", en: "Essential" },
    image: "https://placehold.co/500x600/ffd3e6/ad1457?text=Sunscreen"
  },
  {
    id: "mask",
    name: { ar: "ماسك الطين الوردي", en: "Pink Clay Mask" },
    desc: { ar: "ينظف المسام بعمق ويهدي البشرة مرتين أسبوعيًا.", en: "Deep-cleans pores and calms the skin, twice a week." },
    price: 280,
    tag: { ar: "", en: "" },
    image: "https://placehold.co/500x600/ffc2dc/ad1457?text=Clay+Mask"
  }
];

/* =========================================================
   🌐 TRANSLATIONS
   ========================================================= */
const I18N = {
  ar: {
    "brand.sub": "Skincare",
    "nav.about": "مين احنا",
    "nav.products": "المنتجات",
    "nav.contact": "تواصل معانا",
    "hero.title": "بشرتك أولاً، توهجك دايمًا",
    "hero.text": "منتجات عناية بالبشرة مختارة بحب، عشان بشرتك تحس بالفرق من أول استخدام.",
    "hero.cta": "اكتشفي المنتجات",
    "about.title": "مين احنا",
    "about.p1": "احنا مش مجرد متجر، إحنا صحبتك في رحلة العناية ببشرتك، بنختار كل منتج بعناية عشان يديكِ نتيجة حقيقية تلاحظيها.",
    "about.p2": "اختارينا لأننا بنحط بشرتك قبل أي حاجة تانية، كل منتج عندنا مجرّب ومختار بحب قبل ما يوصلك.",
    "about.point1": "منتجات مختارة بعناية",
    "about.point2": "تواصل مباشر وسريع",
    "about.point3": "توصيل لكل المحافظات",
    "about.point4": "دعم واهتمام حقيقي ببشرتك",
    "products.title": "المنتجات",
    "products.sub": "كل منتج اتختار بحب عشان يديكِ توهج حقيقي",
    "cart.title": "السلة",
    "cart.total": "الإجمالي",
    "cart.checkout": "إتمام الشراء",
    "cart.empty": "السلة فاضية دلوقتي",
    "checkout.title": "إتمام الطلب",
    "checkout.name": "الاسم بالكامل",
    "checkout.address": "العنوان بالتفصيل",
    "checkout.phone": "رقم الموبايل",
    "checkout.confirm": "تأكيد الطلب عبر واتساب",
    "checkout.subtotal": "الإجمالي الفرعي",
    "checkout.total": "الإجمالي الكلي",
    "footer.tag": "بشرتك أولاً، توهجك دايمًا",
    "footer.phone": "اتصلي بينا",
    "footer.mail": "راسلينا بالإيميل",
    "currency": "ج.م",
    "addToCart": "أضيفي للسلة",
    "buyNow": "اشتري دلوقتي",
    "toast.added": "تمت الإضافة للسلة 💗",
    "toast.fillFields": "من فضلك املي كل البيانات",
    "toast.emptyCart": "السلة فاضية"
  },
  en: {
    "brand.sub": "Skincare",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.contact": "Contact",
    "hero.title": "Skin First, Glow Always",
    "hero.text": "Skincare picked with love, so your skin feels the difference from day one.",
    "hero.cta": "Shop Products",
    "about.title": "About Us",
    "about.p1": "We're not just a store — we're your partner on your skincare journey, choosing every product carefully so it gives you real, visible results.",
    "about.p2": "Choose us because we put your skin first, every product is tried and picked with love before it reaches you.",
    "about.point1": "Carefully chosen products",
    "about.point2": "Fast, direct communication",
    "about.point3": "Delivery to every governorate",
    "about.point4": "Real care for your skin",
    "products.title": "Products",
    "products.sub": "Every product picked with love, for a real glow",
    "cart.title": "Cart",
    "cart.total": "Total",
    "cart.checkout": "Checkout",
    "cart.empty": "Your cart is empty",
    "checkout.title": "Complete Your Order",
    "checkout.name": "Full name",
    "checkout.address": "Detailed address",
    "checkout.phone": "Phone number",
    "checkout.confirm": "Confirm via WhatsApp",
    "checkout.subtotal": "Subtotal",
    "checkout.total": "Total",
    "footer.tag": "Skin First, Glow Always",
    "footer.phone": "Call us",
    "footer.mail": "Email us",
    "currency": "EGP",
    "addToCart": "Add to Cart",
    "buyNow": "Buy Now",
    "toast.added": "Added to cart 💗",
    "toast.fillFields": "Please fill in all fields",
    "toast.emptyCart": "Your cart is empty"
  }
};

/* =========================================================
   STATE
   ========================================================= */
let lang = localStorage.getItem("sola_lang") || "ar";
let theme = localStorage.getItem("sola_theme") || "light";
let cart = JSON.parse(localStorage.getItem("sola_cart") || "[]");
let checkoutMode = "cart"; // "cart" | "buyNow"
let buyNowProduct = null;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function t(key){ return (I18N[lang] && I18N[lang][key]) || key; }

/* =========================================================
   THEME
   ========================================================= */
function applyTheme(){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("sola_theme", theme);
}
$("#themeToggle").addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  applyTheme();
});

/* =========================================================
   LANGUAGE
   ========================================================= */
function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("#langLabel").textContent = lang === "ar" ? "EN" : "AR";
  $$("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  localStorage.setItem("sola_lang", lang);
  renderProducts();
  renderCart();
}
$("#langToggle").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  applyLang();
});

/* =========================================================
   SOCIAL / CONTACT LINKS
   ========================================================= */
function wireContactLinks(){
  const tel = "tel:" + CONFIG.phone.replace(/\s+/g, "");
  const mail = "mailto:" + CONFIG.email;
  [$("#fbLink"), $("#footerFb")].forEach(el => el && (el.href = CONFIG.facebook));
  [$("#igLink"), $("#footerIg")].forEach(el => el && (el.href = CONFIG.instagram));
  [$("#phoneLink"), $("#footerPhone")].forEach(el => el && (el.href = tel));
  [$("#mailLink"), $("#footerMail")].forEach(el => el && (el.href = mail));
}

/* =========================================================
   MOBILE NAV
   ========================================================= */
$("#hamburger").addEventListener("click", () => {
  $("#mainNav").classList.toggle("open");
});
$$(".main-nav a").forEach(a => a.addEventListener("click", () => $("#mainNav").classList.remove("open")));

/* =========================================================
   PRODUCT RENDERING
   ========================================================= */
function renderProducts(){
  const grid = $("#productsGrid");
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-media">
        <img src="${p.image}" alt="${p.name[lang]}" loading="lazy">
        ${p.tag && p.tag[lang] ? `<span class="product-tag">${p.tag[lang]}</span>` : ""}
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name[lang]}</h3>
        <p class="product-desc">${p.desc[lang]}</p>
        <div class="product-price">${p.price} ${t("currency")}</div>
        <div class="product-actions">
          <button class="pill-btn add-btn" data-id="${p.id}">${t("addToCart")}</button>
          <button class="btn-glow buy-btn" data-id="${p.id}">${t("buyNow")}</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".add-btn").forEach(btn => btn.addEventListener("click", () => addToCart(btn.dataset.id)));
  grid.querySelectorAll(".buy-btn").forEach(btn => btn.addEventListener("click", () => buyNow(btn.dataset.id)));
}

/* =========================================================
   CART
   ========================================================= */
function saveCart(){
  localStorage.setItem("sola_cart", JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge(){
  const count = cart.reduce((n, i) => n + i.qty, 0);
  $("#cartBadge").textContent = count;
}
function addToCart(id){
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  showToast(t("toast.added"));
}
function changeQty(id, delta){
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}
function removeFromCart(id){
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}
function cartLines(){
  return cart.map(i => ({ product: PRODUCTS.find(p => p.id === i.id), qty: i.qty })).filter(l => l.product);
}
function cartTotal(){
  return cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0);
}
function renderCart(){
  const wrap = $("#cartItems");
  const lines = cartLines();
  if (!lines.length){
    wrap.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
  } else {
    wrap.innerHTML = lines.map(l => `
      <div class="cart-item" data-id="${l.product.id}">
        <img src="${l.product.image}" alt="${l.product.name[lang]}">
        <div class="cart-item-info">
          <div class="name">${l.product.name[lang]}</div>
          <div class="price">${l.product.price} ${t("currency")}</div>
          <div class="qty-row">
            <button class="qty-btn minus" data-id="${l.product.id}">−</button>
            <span>${l.qty}</span>
            <button class="qty-btn plus" data-id="${l.product.id}">+</button>
            <button class="remove-btn" data-id="${l.product.id}">${lang === "ar" ? "حذف" : "Remove"}</button>
          </div>
        </div>
      </div>
    `).join("");

    wrap.querySelectorAll(".plus").forEach(b => b.addEventListener("click", () => changeQty(b.dataset.id, 1)));
    wrap.querySelectorAll(".minus").forEach(b => b.addEventListener("click", () => changeQty(b.dataset.id, -1)));
    wrap.querySelectorAll(".remove-btn").forEach(b => b.addEventListener("click", () => removeFromCart(b.dataset.id)));
  }
  $("#cartTotal").innerHTML = `${cartTotal()} <span>${t("currency")}</span>`;
  updateCartBadge();
}

/* Cart drawer open/close */
function openCart(){ $("#cartDrawer").classList.add("open"); $("#overlay").classList.add("show"); }
function closeCartDrawer(){ $("#cartDrawer").classList.remove("open"); $("#overlay").classList.remove("show"); }
$("#cartToggle").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCartDrawer);
$("#overlay").addEventListener("click", () => { closeCartDrawer(); closeCheckout(); });

/* =========================================================
   CHECKOUT
   ========================================================= */
function buyNow(id){
  buyNowProduct = PRODUCTS.find(p => p.id === id);
  checkoutMode = "buyNow";
  openCheckout();
}
$("#cartCheckoutBtn").addEventListener("click", () => {
  if (!cart.length){ showToast(t("toast.emptyCart")); return; }
  checkoutMode = "cart";
  closeCartDrawer();
  openCheckout();
});

function getCheckoutLines(){
  if (checkoutMode === "buyNow" && buyNowProduct){
    return [{ product: buyNowProduct, qty: 1 }];
  }
  return cartLines();
}

function renderCheckoutSummary(){
  const lines = getCheckoutLines();
  const total = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
  $("#checkoutSummary").innerHTML = lines.map(l => `
    <div class="summary-row">
      <span>${l.product.name[lang]} × ${l.qty}</span>
      <span>${l.product.price * l.qty} ${t("currency")}</span>
    </div>
  `).join("") + `<div class="summary-row total"><span>${t("checkout.total")}</span><span>${total} ${t("currency")}</span></div>`;
}

function openCheckout(){
  renderCheckoutSummary();
  $("#checkoutOverlay").classList.add("show");
  $("#overlay").classList.add("show");
}
function closeCheckout(){
  $("#checkoutOverlay").classList.remove("show");
  $("#overlay").classList.remove("show");
}
$("#closeCheckout").addEventListener("click", closeCheckout);

$("#checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#custName").value.trim();
  const address = $("#custAddress").value.trim();
  const phone = $("#custPhone").value.trim();

  if (!name || !address || !phone){
    showToast(t("toast.fillFields"));
    return;
  }

  const lines = getCheckoutLines();
  const total = lines.reduce((s, l) => s + l.product.price * l.qty, 0);

  const itemsText = lines.map(l => `- ${l.product.name.ar} (${l.product.name.en}) × ${l.qty} = ${l.product.price * l.qty} ${I18N.ar.currency}`).join("\n");

  const message =
`✨ طلب جديد من موقع SOLA Skincare ✨

👤 الاسم: ${name}
📍 العنوان: ${address}
📞 الموبايل: ${phone}

🛍️ الفاتورة:
${itemsText}

💰 الإجمالي: ${total} ${I18N.ar.currency}`;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  const btn = $("#confirmPurchase");
  btn.classList.add("success");
  setTimeout(() => {
    window.open(url, "_blank");
    btn.classList.remove("success");
    closeCheckout();
    if (checkoutMode === "cart"){
      cart = [];
      saveCart();
      renderCart();
    }
    buyNowProduct = null;
    $("#checkoutForm").reset();
  }, 550);
});

/* =========================================================
   TOAST
   ========================================================= */
let toastTimer;
function showToast(msg){
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* =========================================================
   INIT
   ========================================================= */
$("#year").textContent = new Date().getFullYear();
wireContactLinks();
applyTheme();
applyLang();
renderCart();
