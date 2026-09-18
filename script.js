/* ═══════════════════════════════════════════════
   ⚙️ CONFIG — عدّلي هنا بياناتك قبل الرفع
   ═══════════════════════════════════════════════ */
const CONFIG = {
  // رقم الواتساب — بكود الدولة، من غير + أو صفر (مثال مصر: 201001234567)
  whatsappNumber: "201000000000",

  facebook:  "https://facebook.com/sola.skincare",
  instagram: "https://instagram.com/sola.skincare",
  phone:     "+20 100 000 0000",
  email:     "hello@solaskincare.com",

  // مواعيد العمل — تعدّليها هنا وهتتغير في الموقع أوتوماتيك
  workHours: { ar: "١٠ ص – ٨ م",      en: "10 AM – 8 PM" },
  workDays:  { ar: "السبت – الخميس", en: "Sat – Thu" },
};

/* ═══════════════════════════════════════════════
   🛎️ SERVICES — عشان تضيفي خدمة: انسخي أي عنصر
   وغيّري بياناته (الـ id لازم يكون فريد)
   ═══════════════════════════════════════════════ */
const SERVICES = [
  {
    id: "dermapen",
    emoji: "🪄",
    name: { ar: "Dermapen", en: "Dermapen" },
    desc: {
      ar: "تقنية تعتمد على إبر دقيقة لتحفيز البشرة على إنتاج الكولاجين، وتُستخدم لتحسين مظهر آثار الحبوب والمسام وملمس البشرة.",
      en: "A micro-needling technique that stimulates collagen production to improve the appearance of acne scars, pores, and skin texture."
    },
    benefits: {
      ar: ["تحسين مظهر آثار حب الشباب","تقليل مظهر المسام","تحسين ملمس البشرة","تحفيز الكولاجين","توحيد وتحسين مظهر البشرة"],
      en: ["Improves acne scar appearance","Reduces pore visibility","Improves skin texture","Stimulates collagen","Evens overall skin tone"]
    },
    price: 100,
    image: "assets/dermapen.jpg"
  },
  {
    id: "skin-booster",
    emoji: "✨",
    name: { ar: "Skin Booster", en: "Skin Booster" },
    desc: {
      ar: "جلسة تهدف إلى تحسين ترطيب البشرة ونضارتها ومظهرها العام باستخدام مواد مخصصة للبشرة.",
      en: "A session targeting skin hydration, radiance, and overall appearance using specialized skin materials."
    },
    benefits: {
      ar: ["ترطيب وتحسين مظهر البشرة","تعزيز النضارة والـ Glow","تحسين ملمس البشرة","إعطاء البشرة مظهرًا أكثر حيوية"],
      en: ["Hydrates and improves skin appearance","Enhances radiance and glow","Improves skin texture","Gives skin a more vibrant look"]
    },
    price: 100,
    image: "assets/skin-booster.jpg"
  },
  {
    id: "brightening",
    emoji: "☀️",
    name: { ar: "Skin Brightening", en: "Skin Brightening" },
    desc: {
      ar: "جلسات مخصصة لتحسين مظهر التصبغات والبقع وتوحيد لون البشرة، مع اختيار البروتوكول المناسب حسب حالة البشرة.",
      en: "Sessions targeting pigmentation, dark spots, and uneven skin tone, with a protocol selected per skin condition."
    },
    benefits: {
      ar: ["توحيد مظهر لون البشرة","تحسين مظهر التصبغات","تعزيز الإشراقة","تحسين مظهر البشرة الباهتة"],
      en: ["Evens skin tone","Improves pigmentation appearance","Enhances radiance","Improves dull skin appearance"]
    },
    price: 100,
    image: "assets/brightening.jpg"
  },
  {
    id: "deep-cleansing",
    emoji: "🫧",
    name: { ar: "Deep Skin Cleansing", en: "Deep Skin Cleansing" },
    desc: {
      ar: "تنظيف عميق للبشرة لإزالة الدهون والشوائب والخلايا الميتة المتراكمة داخل المسام، مع ترك البشرة أنظف وأنعم وأكثر نضارة.",
      en: "A deep cleanse that removes oils, impurities, and dead skin cells from pores, leaving skin cleaner, smoother, and more radiant."
    },
    benefits: {
      ar: ["تنظيف المسام","إزالة الرؤوس السوداء والدهون الزائدة","تحسين ملمس البشرة","زيادة نضارة وإشراقة البشرة"],
      en: ["Deep pore cleansing","Removes blackheads and excess oil","Improves skin texture","Increases radiance and glow"]
    },
    price: 100,
    image: "assets/deep-cleansing.jpg"
  },
  {
    id: "hydrafacial",
    emoji: "💧",
    name: { ar: "HydraFacial", en: "HydraFacial" },
    desc: {
      ar: "جلسة متكاملة لتنظيف البشرة وتقشيرها وترطيبها بعمق، مع استخلاص الشوائب وإمداد البشرة بمكونات مرطبة ومغذية.",
      en: "A comprehensive session that cleanses, exfoliates, and deeply hydrates skin while extracting impurities and infusing nourishing ingredients."
    },
    benefits: {
      ar: ["تنظيف واستخلاص الشوائب","ترطيب عميق","تحسين ملمس البشرة","تعزيز الإشراقة والنضارة"],
      en: ["Deep cleansing and extraction","Intense hydration","Improves skin texture","Enhances radiance and freshness"]
    },
    price: 100,
    image: "assets/hydrafacial.jpg"
  },
  {
    id: "cold-peel",
    emoji: "❄️",
    name: { ar: "Cold Peel", en: "Cold Peel" },
    desc: {
      ar: "تقشير لطيف يساعد على إزالة الخلايا الميتة وتحسين مظهر البشرة دون الحاجة إلى تقشير قوي.",
      en: "A gentle peel that removes dead cells and improves skin appearance without aggressive exfoliation."
    },
    benefits: {
      ar: ["تجديد سطح البشرة","زيادة النضارة","تحسين ملمس البشرة","المساعدة في توحيد مظهر البشرة"],
      en: ["Renews skin surface","Increases freshness","Improves skin texture","Helps even skin tone"]
    },
    price: 100,
    image: "assets/cold-peel.jpg"
  },
  {
    id: "chemical-peel",
    emoji: "🧪",
    name: { ar: "Chemical Peel", en: "Chemical Peel" },
    desc: {
      ar: "تقشير كيميائي مخصص لنوع وحالة البشرة يساعد على التخلص من الخلايا الميتة وتحفيز تجدد البشرة.",
      en: "A customised chemical peel matched to your skin type that removes dead cells and stimulates skin renewal."
    },
    benefits: {
      ar: ["تحسين ملمس البشرة","المساعدة في تقليل التصبغات وآثار الحبوب","تحسين مظهر المسام","تعزيز نضارة البشرة"],
      en: ["Improves skin texture","Helps reduce pigmentation and acne marks","Improves pore appearance","Boosts skin radiance"]
    },
    price: 100,
    image: "assets/chemical-peel.jpg"
  }
];

/* ═══════════════════════════════════════════════
   🌐 i18n
   ═══════════════════════════════════════════════ */
const I18N = {
  ar: {
    "nav.about":"مين احنا","nav.services":"الخدمات","nav.contact":"تواصل معانا",
    "hero.title":"بشرتك أولاً، توهجك دايمًا",
    "hero.text":"جلسات عناية بالبشرة احترافية بأيدي متخصصة، عشان بشرتك تحس بالفرق من أول جلسة.",
    "hero.cta":"احجزي جلستك",
    "hours.label":"مواعيد العمل","hours.days":"السبت – الخميس","hours.time":"١٠ ص – ٨ م",
    "hours.fri":"الجمعة","hours.closed":"مغلق",
    "about.title":"مين احنا",
    "about.p1":"احنا مش مجرد عيادة، إحنا صحبتك في رحلة العناية ببشرتك — بنختار أحدث البروتوكولات الطبية عشان نديكِ نتيجة حقيقية تلاحظيها.",
    "about.p2":"اختارينا لأننا بنحط بشرتك قبل أي حاجة تانية، كل جلسة عندنا مصممة خصيصًا لحالة بشرتك.",
    "about.point1":"بروتوكولات طبية احترافية","about.point2":"جلسات مخصصة لحالة بشرتك",
    "about.point3":"تواصل مباشر وحجز سريع","about.point4":"دعم واهتمام حقيقي ببشرتك",
    "services.title":"خدماتنا","services.sub":"كل جلسة صممناها عشان تديكِ أفضل نتيجة ممكنة",
    "cart.title":"الجلسات المختارة","cart.total":"الإجمالي","cart.checkout":"احجزي المواعيد",
    "cart.empty":"لم يتم اختيار جلسات بعد",
    "booking.title":"تأكيد الحجز",
    "booking.waNotice":"سيتم تأكيد الحجز والميعاد النهائي عبر واتساب بعد استلام طلبك.",
    "booking.name":"الاسم بالكامل","booking.phone":"رقم الموبايل","booking.date":"تاريخ الجلسة المطلوب",
    "booking.noDate":"لم يتم اختيار تاريخ بعد",
    "booking.confirm":"تأكيد الحجز عبر واتساب",
    "footer.tag":"Skin First, Glow Always","footer.phone":"اتصلي بينا","footer.mail":"راسلينا",
    "currency":"ج.م","addToCart":"أضيفي للقائمة","bookNow":"احجزي دلوقتي",
    "benefits":"الفوائد ▾","benefitsOpen":"الفوائد ▴",
    "toast.added":"تمت الإضافة للقائمة 💗","toast.fill":"من فضلك أكملي كل البيانات",
    "toast.date":"من فضلك اختاري تاريخ الجلسة","toast.empty":"لم يتم اختيار أي جلسات"
  },
  en: {
    "nav.about":"About Us","nav.services":"Services","nav.contact":"Contact",
    "hero.title":"Skin First, Glow Always",
    "hero.text":"Professional skincare sessions by trained specialists — feel the difference from your very first appointment.",
    "hero.cta":"Book a Session",
    "hours.label":"Working Hours","hours.days":"Sat – Thu","hours.time":"10 AM – 8 PM",
    "hours.fri":"Friday","hours.closed":"Closed",
    "about.title":"About Us",
    "about.p1":"We're more than a clinic — we're your partner in your skincare journey, selecting the latest protocols to give you real, visible results.",
    "about.p2":"Choose us because we put your skin first; every session is tailored specifically to your skin's condition.",
    "about.point1":"Professional medical protocols","about.point2":"Sessions tailored to your skin",
    "about.point3":"Fast booking & direct contact","about.point4":"Real, dedicated skin support",
    "services.title":"Our Services","services.sub":"Every session designed to deliver your best possible result",
    "cart.title":"Selected Sessions","cart.total":"Total","cart.checkout":"Book Appointments",
    "cart.empty":"No sessions selected yet",
    "booking.title":"Confirm Booking",
    "booking.waNotice":"Booking confirmation and final appointment time will be set via WhatsApp after we receive your request.",
    "booking.name":"Full name","booking.phone":"Phone number","booking.date":"Desired session date",
    "booking.noDate":"No date selected yet",
    "booking.confirm":"Confirm via WhatsApp",
    "footer.tag":"Skin First, Glow Always","footer.phone":"Call us","footer.mail":"Email us",
    "currency":"EGP","addToCart":"Add to List","bookNow":"Book Now",
    "benefits":"Benefits ▾","benefitsOpen":"Benefits ▴",
    "toast.added":"Added to list 💗","toast.fill":"Please fill in all fields",
    "toast.date":"Please select a session date","toast.empty":"No sessions selected",
  }
};

/* ═══════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════ */
let lang  = localStorage.getItem("sola_lang")  || "ar";
let theme = localStorage.getItem("sola_theme") || "light";
let cart  = JSON.parse(localStorage.getItem("sola_cart") || "[]");
let bookMode     = "cart"; // "cart" | "single"
let bookSingleId = null;

// Calendar state
let calYear, calMonth;
const today = new Date();
calYear  = today.getFullYear();
calMonth = today.getMonth();
let selectedDate = null; // Date object

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
function t(k){ return (I18N[lang]||{})[k] || k; }

/* ═══════════════════════════════════════════════
   THEME
   ═══════════════════════════════════════════════ */
function applyTheme(){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("sola_theme", theme);
}
$("#themeToggle").addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  applyTheme();
});

/* ═══════════════════════════════════════════════
   LANGUAGE
   ═══════════════════════════════════════════════ */
function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("#langLabel").textContent = lang === "ar" ? "EN" : "AR";
  $$("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  localStorage.setItem("sola_lang", lang);
  renderServices();
  renderCart();
  renderCalendar();
}
$("#langToggle").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  applyLang();
});

/* ═══════════════════════════════════════════════
   LINKS
   ═══════════════════════════════════════════════ */
function wireLinks(){
  const tel  = "tel:" + CONFIG.phone.replace(/\s+/g,"");
  const mail = "mailto:" + CONFIG.email;
  const wa   = "https://wa.me/" + CONFIG.whatsappNumber;
  [$("#fbLink"),    $("#footerFb")].forEach(el => el && (el.href = CONFIG.facebook));
  [$("#igLink"),    $("#footerIg")].forEach(el => el && (el.href = CONFIG.instagram));
  [$("#waLink"),    $("#footerWa")].forEach(el => el && (el.href = wa));
  [$("#phoneLink"), $("#footerPhone")].forEach(el => el && (el.href = tel));
  [$("#mailLink"),  $("#footerMail")].forEach(el => el && (el.href = mail));
}

/* ═══════════════════════════════════════════════
   MOBILE NAV
   ═══════════════════════════════════════════════ */
$("#hamburger").addEventListener("click", () => $("#mainNav").classList.toggle("open"));
$$(".main-nav a").forEach(a => a.addEventListener("click", () => $("#mainNav").classList.remove("open")));

/* ═══════════════════════════════════════════════
   SERVICES RENDERING
   ═══════════════════════════════════════════════ */
function renderServices(){
  const grid = $("#servicesGrid");
  grid.innerHTML = SERVICES.map(s => `
    <article class="service-card" data-id="${s.id}">
      <div class="svc-media">
        <img src="${s.image}" alt="${s.name[lang]}" loading="lazy">
        <span class="svc-tag">${s.emoji}</span>
        <div class="svc-price-badge">${s.price} ${t("currency")}</div>
        <div class="svc-title-overlay"><h3>${s.name[lang]}</h3></div>
      </div>
      <div class="svc-body">
        <p class="svc-desc">${s.desc[lang]}</p>
        <div>
          <button class="benefits-toggle" type="button" data-id="${s.id}">
            <span>${t("benefits")}</span>
            <span class="arrow">▾</span>
          </button>
          <div class="benefits-panel" id="bp-${s.id}">
            <ul class="benefits-list">
              ${s.benefits[lang].map(b => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="svc-actions">
          <button class="pill-btn add-btn" data-id="${s.id}">${t("addToCart")}</button>
          <button class="btn-glow sm book-btn" data-id="${s.id}">${t("bookNow")}</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".add-btn").forEach(btn =>
    btn.addEventListener("click", () => addToCart(btn.dataset.id)));
  grid.querySelectorAll(".book-btn").forEach(btn =>
    btn.addEventListener("click", () => bookSingle(btn.dataset.id)));
  grid.querySelectorAll(".benefits-toggle").forEach(btn =>
    btn.addEventListener("click", () => toggleBenefits(btn.dataset.id, btn)));
}

function toggleBenefits(id, btn){
  const panel = $(`#bp-${id}`);
  const open  = panel.classList.toggle("open");
  btn.querySelector(".arrow").textContent = open ? "▴" : "▾";
}

/* ═══════════════════════════════════════════════
   CART
   ═══════════════════════════════════════════════ */
function saveCart(){ localStorage.setItem("sola_cart", JSON.stringify(cart)); updateBadge(); }
function updateBadge(){
  const n = cart.reduce((s,i) => s + i.qty, 0);
  $("#cartBadge").textContent = n;
}
function addToCart(id){
  const ex = cart.find(i => i.id === id);
  if(ex) ex.qty++; else cart.push({id, qty:1});
  saveCart(); renderCart(); showToast(t("toast.added"));
}
function changeQty(id, delta){
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); renderCart();
}
function removeItem(id){ cart = cart.filter(i => i.id !== id); saveCart(); renderCart(); }

function cartLines(){
  return cart.map(i => ({svc: SERVICES.find(s => s.id === i.id), qty: i.qty})).filter(l => l.svc);
}
function cartTotal(){ return cartLines().reduce((s,l) => s + l.svc.price * l.qty, 0); }

function renderCart(){
  const wrap = $("#cartItems");
  const lines = cartLines();
  if(!lines.length){
    wrap.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
  } else {
    wrap.innerHTML = lines.map(l => `
      <div class="cart-item" data-id="${l.svc.id}">
        <img src="${l.svc.image}" alt="${l.svc.name[lang]}">
        <div class="cart-item-info">
          <div class="name">${l.svc.emoji} ${l.svc.name[lang]}</div>
          <div class="price">${l.svc.price} ${t("currency")}</div>
          <div class="qty-row">
            <button class="qty-btn minus" data-id="${l.svc.id}">−</button>
            <span>${l.qty}</span>
            <button class="qty-btn plus"  data-id="${l.svc.id}">+</button>
            <button class="remove-btn"    data-id="${l.svc.id}">${lang==="ar"?"حذف":"Remove"}</button>
          </div>
        </div>
      </div>
    `).join("");
    wrap.querySelectorAll(".plus").forEach(b  => b.addEventListener("click", () => changeQty(b.dataset.id,  1)));
    wrap.querySelectorAll(".minus").forEach(b => b.addEventListener("click", () => changeQty(b.dataset.id, -1)));
    wrap.querySelectorAll(".remove-btn").forEach(b => b.addEventListener("click", () => removeItem(b.dataset.id)));
  }
  $("#cartTotal").innerHTML = `${cartTotal()} <span>${t("currency")}</span>`;
  updateBadge();
}

/* Cart drawer */
function openCart(){  $("#cartDrawer").classList.add("open"); $("#overlay").classList.add("show"); }
function closeCart(){ $("#cartDrawer").classList.remove("open"); $("#overlay").classList.remove("show"); }
$("#cartToggle").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", () => { closeCart(); closeBooking(); });

/* ═══════════════════════════════════════════════
   CALENDAR (custom date picker)
   ═══════════════════════════════════════════════ */
const AR_MONTHS = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
const EN_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function renderCalendar(){
  const label = lang==="ar" ? `${AR_MONTHS[calMonth]} ${calYear}` : `${EN_MONTHS[calMonth]} ${calYear}`;
  $("#calMonthLabel").textContent = label;

  const grid = $("#calGrid");
  grid.innerHTML = "";

  const firstDay = new Date(calYear, calMonth, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(calYear, calMonth+1, 0).getDate();
  const todayStr = fmtDate(today);

  // Empty cells before first day
  for(let i=0; i<firstDay; i++){
    const el = document.createElement("button");
    el.className = "cal-day empty";
    el.disabled = true;
    el.textContent = "";
    grid.appendChild(el);
  }

  for(let d=1; d<=daysInMonth; d++){
    const date = new Date(calYear, calMonth, d);
    const dateStr = fmtDate(date);
    const isFriday = date.getDay() === 5;
    const isPast   = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const el = document.createElement("button");
    el.type = "button";
    el.className = "cal-day";
    if(dateStr === todayStr) el.classList.add("today");
    if(isFriday)  el.classList.add("friday");
    if(selectedDate && fmtDate(selectedDate) === dateStr) el.classList.add("selected");

    el.textContent = d;
    el.disabled = isPast || isFriday;

    el.addEventListener("click", () => {
      selectedDate = date;
      $("#custDate").value = dateStr;
      updateSelectedLabel();
      renderCalendar();
    });
    grid.appendChild(el);
  }
  updateSelectedLabel();
}

function fmtDate(d){
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,"0");
  const day = String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}

function fmtDatePretty(d){
  if(!d) return "";
  if(lang==="ar"){
    return `${d.getDate()} ${AR_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  }
  return `${d.getDate()} ${EN_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function updateSelectedLabel(){
  const lbl = $("#calSelectedLabel");
  if(selectedDate){
    const day = lang==="ar"
      ? ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","السبت"][
          [0,1,2,3,4,6].indexOf(selectedDate.getDay()) !== -1
          ? [0,1,2,3,4,6].indexOf(selectedDate.getDay()) : 5]
      : ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][selectedDate.getDay()];
    lbl.textContent = `${day}، ${fmtDatePretty(selectedDate)}`;
    lbl.style.color = "var(--accent-2)";
  } else {
    lbl.textContent = t("booking.noDate");
    lbl.style.color = "";
  }
}

$("#calPrev").addEventListener("click", () => {
  calMonth--;
  if(calMonth < 0){ calMonth = 11; calYear--; }
  renderCalendar();
});
$("#calNext").addEventListener("click", () => {
  calMonth++;
  if(calMonth > 11){ calMonth = 0; calYear++; }
  renderCalendar();
});

/* ═══════════════════════════════════════════════
   BOOKING MODAL
   ═══════════════════════════════════════════════ */
function bookSingle(id){
  bookMode = "single";
  bookSingleId = id;
  closeCart();
  openBooking();
}
$("#cartCheckoutBtn").addEventListener("click", () => {
  if(!cart.length){ showToast(t("toast.empty")); return; }
  bookMode = "cart";
  closeCart();
  openBooking();
});

function getBookingLines(){
  if(bookMode === "single"){
    const s = SERVICES.find(x => x.id === bookSingleId);
    return s ? [{svc:s, qty:1}] : [];
  }
  return cartLines();
}

function renderBookingSummary(){
  const lines = getBookingLines();
  const total = lines.reduce((s,l) => s + l.svc.price * l.qty, 0);
  const rows  = lines.map(l => `
    <div class="summary-row">
      <span>${l.svc.emoji} ${l.svc.name[lang]} × ${l.qty}</span>
      <span>${l.svc.price * l.qty} ${t("currency")}</span>
    </div>
  `).join("");
  $("#bookingSummary").innerHTML = rows +
    `<div class="summary-row total">
       <span>${lang==="ar"?"الإجمالي":"Total"}</span>
       <span>${total} ${t("currency")}</span>
     </div>`;
}

function openBooking(){
  renderBookingSummary();
  selectedDate = null;
  $("#custDate").value = "";
  renderCalendar();
  $("#bookingOverlay").classList.add("show");
  $("#overlay").classList.add("show");
}
function closeBooking(){
  $("#bookingOverlay").classList.remove("show");
  $("#overlay").classList.remove("show");
}
$("#closeBooking").addEventListener("click", closeBooking);

$("#bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const name  = $("#custName").value.trim();
  const phone = $("#custPhone").value.trim();
  const date  = $("#custDate").value;
  if(!name || !phone){ showToast(t("toast.fill")); return; }
  if(!date){ showToast(t("toast.date")); return; }

  const lines = getBookingLines();
  const total = lines.reduce((s,l) => s + l.svc.price * l.qty, 0);
  const dateLabel = fmtDatePretty(selectedDate);

  const sessionsText = lines.map(l =>
    `  - ${l.svc.name.ar}${l.qty > 1 ? ` × ${l.qty}` : ""} — ${l.svc.price * l.qty} ${I18N.ar.currency}`
  ).join("\n");

  const msg =
`✨ طلب حجز جديد — SOLA Skincare ✨

👤 الاسم: ${name}
📞 الموبايل: ${phone}
📅 التاريخ المطلوب: ${dateLabel}

🛎️ الجلسات المطلوبة:
${sessionsText}

💰 الإجمالي: ${total} ${I18N.ar.currency}

⚠️ ملاحظة: سيتم تأكيد الميعاد النهائي عبر هذه المحادثة.`;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  const btn = $("#confirmBooking");
  btn.classList.add("success");
  setTimeout(() => {
    window.open(url, "_blank");
    btn.classList.remove("success");
    closeBooking();
    if(bookMode === "cart"){
      cart = [];
      saveCart();
      renderCart();
    }
    bookSingleId = null;
    $("#bookingForm").reset();
    selectedDate = null;
  }, 580);
});

/* ═══════════════════════════════════════════════
   TOAST
   ═══════════════════════════════════════════════ */
let toastTimer;
function showToast(msg){
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

/* ═══════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════ */
$("#year").textContent = new Date().getFullYear();
wireLinks();
applyTheme();
applyLang();
renderCart();
