/* ═══════════════════════════════
   ⚙️ CONFIG
   ═══════════════════════════════ */
const CONFIG = {
  whatsappNumber: "201041616442",
  facebook:  "https://facebook.com/sola.skincare",
  instagram: "https://instagram.com/sola.skincare",
  phone:     "+20 1041616442",
  email:     "hello@solaskincare.com",
};

/* ═══════════════════════════════
   🛎️ SERVICES
   Tier styles: "pearl" | "gold" | "diamond"
   ═══════════════════════════════ */
const SERVICES = [
  /* ── SOLA OFFER (special full-width card) ── */
  {
    id:"sola-offer", isOffer:true, emoji:"🌟",
    name:{ ar:"SOLA Offer", en:"SOLA Offer" },
    desc:{
      ar:"العرض الخاص — جلسة تنظيف بشرة عميق + ديرما بن في جلسة واحدة متكاملة لبشرة نظيفة ومتجددة وممتلئة بالحيوية.",
      en:"Special offer — Deep skin cleansing + Dermapen in one complete session for clean, renewed, glowing skin."
    },
    benefits:{
      ar:["تنظيف عميق للمسام","تحفيز الكولاجين بالديرما بن","توحيد ملمس البشرة","نتيجة مضاعفة في جلسة واحدة"],
      en:["Deep pore cleansing","Collagen stimulation with Dermapen","Even skin texture","Double results in one session"]
    },
    price:600, image:"assets/sola-offer.jpg"
  },
  /* ── DERMAPEN (3 tiers) ── */
  {
    id:"dermapen", emoji:"🪄",
    name:{ ar:"Dermapen", en:"Dermapen" },
    desc:{
      ar:"تقنية تعتمد على إبر دقيقة لتحفيز البشرة على إنتاج الكولاجين، وتُستخدم لتحسين مظهر آثار الحبوب والمسام وملمس البشرة.",
      en:"A micro-needling technique that stimulates collagen production to improve acne scars, pores, and skin texture."
    },
    benefits:{
      ar:["تحسين مظهر آثار حب الشباب","تقليل مظهر المسام","تحسين ملمس البشرة","تحفيز الكولاجين","توحيد مظهر البشرة"],
      en:["Improves acne scar appearance","Reduces pore visibility","Improves skin texture","Stimulates collagen","Evens skin tone"]
    },
    image:"assets/dermapen.jpg",
    tiers:[
      { id:"classic",   style:"pearl",   label:{ ar:"عادي",  en:"Basic"   }, price:350 },
      { id:"premium",   style:"gold",    label:{ ar:"ذهبي",  en:"Gold"    }, price:600 },
      { id:"signature", style:"diamond", label:{ ar:"مميز", en:"Special" }, price:800 }
    ]
  },
  /* ── SKIN BOOSTER (3 types) ── */
  {
    id:"skin-booster", emoji:"✨",
    name:{ ar:"Skin Booster", en:"Skin Booster" },
    desc:{
      ar:"جلسة تهدف إلى تحسين ترطيب البشرة ونضارتها ومظهرها العام باستخدام مواد مخصصة للبشرة.",
      en:"A session targeting skin hydration, radiance, and overall appearance using specialized materials."
    },
    benefits:{
      ar:["ترطيب وتحسين مظهر البشرة","تعزيز النضارة والـ Glow","تحسين ملمس البشرة","مظهر أكثر حيوية وإشراقاً"],
      en:["Hydrates and improves skin appearance","Enhances radiance and glow","Improves skin texture","More vibrant glowing look"]
    },
    image:"assets/skin-booster.jpg",
    tiers:[
      { id:"glow",    style:"pearl",   label:{ ar:"نضارة",        en:"Glow"         }, price:500  },
      { id:"bright",  style:"gold",    label:{ ar:"نضارة تفتيح",  en:"Brightening"  }, price:750  },
      { id:"pigment", style:"diamond", label:{ ar:"نضارة تصبغات", en:"Pigmentation" }, price:1000 }
    ]
  },
  /* ── DEEP SKIN CLEANSING (flat) ── */
  {
    id:"deep-cleansing", emoji:"🫧",
    name:{ ar:"Deep Skin Cleansing", en:"Deep Skin Cleansing" },
    desc:{
      ar:"تنظيف عميق للبشرة لإزالة الدهون والشوائب والخلايا الميتة المتراكمة داخل المسام، مع ترك البشرة أنظف وأنعم وأكثر نضارة.",
      en:"A deep cleanse removing oils, impurities, and dead cells from pores — leaves skin cleaner, smoother, and more radiant."
    },
    benefits:{
      ar:["تنظيف المسام","إزالة الرؤوس السوداء والدهون الزائدة","تحسين ملمس البشرة","زيادة نضارة وإشراقة البشرة"],
      en:["Deep pore cleansing","Removes blackheads and excess oil","Improves skin texture","Increases radiance"]
    },
    price:350, image:"assets/deep-cleansing.jpg"
  },
  /* ── HYDRAFACIAL (3 tiers) ── */
  {
    id:"hydrafacial", emoji:"💧",
    name:{ ar:"HydraFacial", en:"HydraFacial" },
    desc:{
      ar:"جلسة متكاملة لتنظيف البشرة وتقشيرها وترطيبها بعمق، مع استخلاص الشوائب وإمداد البشرة بمكونات مرطبة ومغذية.",
      en:"A comprehensive session that cleanses, exfoliates, and deeply hydrates skin while infusing nourishing ingredients."
    },
    benefits:{
      ar:["تنظيف واستخلاص الشوائب","ترطيب عميق","تحسين ملمس البشرة","تعزيز الإشراقة والنضارة"],
      en:["Deep cleansing and extraction","Intense hydration","Improves skin texture","Enhances radiance"]
    },
    image:"assets/hydrafacial.jpg",
    tiers:[
      { id:"classic",   style:"pearl",   label:{ ar:"عادي",  en:"Basic"   }, price:200 },
      { id:"premium",   style:"gold",    label:{ ar:"ذهبي",  en:"Gold"    }, price:400 },
      { id:"signature", style:"diamond", label:{ ar:"مميز", en:"Special" }, price:600 }
    ]
  },
  /* ── COLD PEEL (2 tiers) ── */
  {
    id:"cold-peel", emoji:"❄️",
    name:{ ar:"Cold Peel", en:"Cold Peel" },
    desc:{
      ar:"تقشير لطيف يساعد على إزالة الخلايا الميتة وتحسين مظهر البشرة دون الحاجة إلى تقشير قوي.",
      en:"A gentle peel removing dead cells and improving skin appearance without aggressive exfoliation."
    },
    benefits:{
      ar:["تجديد سطح البشرة","زيادة النضارة","تحسين ملمس البشرة","المساعدة في توحيد مظهر البشرة"],
      en:["Renews skin surface","Increases freshness","Improves skin texture","Helps even skin tone"]
    },
    image:"assets/cold-peel.jpg",
    tiers:[
      { id:"premium",   style:"gold",    label:{ ar:"ذهبي",  en:"Gold"    }, price:700  },
      { id:"signature", style:"diamond", label:{ ar:"مميز", en:"Special" }, price:1000 }
    ]
  }
];

/* ═══════════════════════════════
   🌐 i18n
   ═══════════════════════════════ */
const I18N = {
  ar:{
    "nav.about":"مين احنا","nav.services":"الخدمات","nav.contact":"تواصل معانا",
    "hero.title":"بشرتك أولاً، توهجك دايمًا",
    "hero.text":"جلسات عناية بالبشرة احترافية بأيدي متخصصة، عشان بشرتك تحس بالفرق من أول جلسة.",
    "hero.cta":"احجزي جلستك",
    "hours.label":"مواعيد العمل","hours.days":"السبت – الخميس","hours.time":"١٠ ص – ٨ م",
    "hours.fri":"الجمعة","hours.closed":"مغلق",
    "address.label":"عنواننا",
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
    "booking.noDate":"لم يتم اختيار تاريخ بعد","booking.confirm":"تأكيد الحجز عبر واتساب",
    "footer.phone":"اتصلي بينا","footer.mail":"راسلينا",
    "currency":"ج.م","addToCart":"أضيفي للقائمة","bookNow":"احجزي دلوقتي",
    "benefits":"الفوائد","benefitsOpen":"إغلاق",
    "offerLabel":"العرض الخاص","offerSaving":"وفّري مع الباقة المجمّعة",
    "toast.added":"تمت الإضافة للقائمة 💗","toast.fill":"من فضلك أكملي كل البيانات",
    "toast.date":"من فضلك اختاري تاريخ الجلسة","toast.empty":"لم يتم اختيار أي جلسات"
  },
  en:{
    "nav.about":"About Us","nav.services":"Services","nav.contact":"Contact",
    "hero.title":"Skin First, Glow Always",
    "hero.text":"Professional skincare sessions by trained specialists — feel the difference from your very first appointment.",
    "hero.cta":"Book a Session",
    "hours.label":"Working Hours","hours.days":"Sat – Thu","hours.time":"10 AM – 8 PM",
    "hours.fri":"Friday","hours.closed":"Closed",
    "address.label":"Our Location",
    "about.title":"About Us",
    "about.p1":"We're more than a clinic — we're your partner in your skincare journey, using the latest protocols to give you real, visible results.",
    "about.p2":"Choose us because we put your skin first; every session is tailored specifically to your skin's condition.",
    "about.point1":"Professional medical protocols","about.point2":"Sessions tailored to your skin",
    "about.point3":"Fast booking & direct contact","about.point4":"Real, dedicated skin support",
    "services.title":"Our Services","services.sub":"Every session designed to deliver your best possible result",
    "cart.title":"Selected Sessions","cart.total":"Total","cart.checkout":"Book Appointments",
    "cart.empty":"No sessions selected yet",
    "booking.title":"Confirm Booking",
    "booking.waNotice":"Booking confirmation and final appointment will be set via WhatsApp after we receive your request.",
    "booking.name":"Full name","booking.phone":"Phone number","booking.date":"Desired session date",
    "booking.noDate":"No date selected yet","booking.confirm":"Confirm via WhatsApp",
    "footer.phone":"Call us","footer.mail":"Email us",
    "currency":"EGP","addToCart":"Add to List","bookNow":"Book Now",
    "benefits":"Benefits","benefitsOpen":"Close",
    "offerLabel":"Special Offer","offerSaving":"Save with the bundle",
    "toast.added":"Added to list 💗","toast.fill":"Please fill in all fields",
    "toast.date":"Please select a session date","toast.empty":"No sessions selected"
  }
};

/* ═══════════════════════════════
   STATE
   ═══════════════════════════════ */
let lang  = localStorage.getItem("sola_lang")  || "ar";
let theme = localStorage.getItem("sola_theme") || "light";
// cart v3: [{serviceId, tierId|null, qty}]
let cart = [];
try { cart = JSON.parse(localStorage.getItem("sola_cart_v3") || "[]"); } catch{}

// Selected tier per service (default: first tier)
const selTiers = {};
SERVICES.forEach(s => { if(s.tiers) selTiers[s.id] = s.tiers[0].id; });

// Booking state
let bookMode = "cart"; // "cart" | "single"
let bookSingleItem = null; // {serviceId, tierId}

// Calendar
const today = new Date();
let calYear = today.getFullYear(), calMonth = today.getMonth();
let selDate = null;

const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const t  = k => (I18N[lang]||{})[k] || k;

/* ═══════════════════════════════
   THEME
   ═══════════════════════════════ */
function applyTheme(){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("sola_theme", theme);
}
$("#themeToggle").addEventListener("click", ()=>{
  theme = theme==="light"?"dark":"light"; applyTheme();
});

/* ═══════════════════════════════
   LANGUAGE
   ═══════════════════════════════ */
function applyLang(){
  document.documentElement.lang  = lang;
  document.documentElement.dir   = lang==="ar"?"rtl":"ltr";
  $("#langLabel").textContent     = lang==="ar"?"EN":"AR";
  $$("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  localStorage.setItem("sola_lang", lang);
  renderServices(); renderCart(); renderCalendar();
}
$("#langToggle").addEventListener("click", ()=>{ lang=lang==="ar"?"en":"ar"; applyLang(); });

/* ═══════════════════════════════
   LINKS
   ═══════════════════════════════ */
function wireLinks(){
  const tel  = "tel:"+CONFIG.phone.replace(/\s+/g,"");
  const mail = "mailto:"+CONFIG.email;
  const wa   = "https://wa.me/"+CONFIG.whatsappNumber;
  [$("#fbLink"),    $("#footerFb")].forEach(el=>el&&(el.href=CONFIG.facebook));
  [$("#igLink"),    $("#footerIg")].forEach(el=>el&&(el.href=CONFIG.instagram));
  [$("#waLink"),    $("#footerWa")].forEach(el=>el&&(el.href=wa));
  [$("#phoneLink"), $("#footerPhone")].forEach(el=>el&&(el.href=tel));
  [$("#mailLink"),  $("#footerMail")].forEach(el=>el&&(el.href=mail));
}

/* ═══════════════════════════════
   MOBILE NAV
   ═══════════════════════════════ */
$("#hamburger").addEventListener("click", ()=>$("#mainNav").classList.toggle("open"));
$$(".main-nav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));

/* ═══════════════════════════════
   HELPERS
   ═══════════════════════════════ */
function getSvc(id){ return SERVICES.find(s=>s.id===id); }
function getTier(svc, tierId){ return svc.tiers?.find(t=>t.id===tierId); }
function getPrice(svc, tierId){
  if(svc.tiers){ const tier=getTier(svc,tierId); return tier?tier.price:svc.tiers[0].price; }
  return svc.price;
}
function getItemPrice(item){
  const svc=getSvc(item.serviceId); return svc?getPrice(svc,item.tierId):0;
}
function getItemLabel(item, l){
  const svc=getSvc(item.serviceId); if(!svc) return "";
  let label=`${svc.emoji} ${svc.name[l||lang]}`;
  if(item.tierId&&svc.tiers){ const tier=getTier(svc,item.tierId); if(tier) label+=` — ${tier.label[l||lang]}`; }
  return label;
}
function cartTotal(){ return cart.reduce((s,i)=>s+getItemPrice(i)*i.qty,0); }

/* ═══════════════════════════════
   RENDER SERVICES
   ═══════════════════════════════ */
function renderServices(){
  const grid=$("#servicesGrid");
  grid.innerHTML = SERVICES.map(svc => svc.isOffer ? renderOffer(svc) : renderCard(svc)).join("");

  // Tier chip clicks
  grid.querySelectorAll(".tier-chip").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const svcId=btn.dataset.svc, tierId=btn.dataset.tier;
      selTiers[svcId]=tierId;
      const card=btn.closest(".service-card");
      // Update active state
      card.querySelectorAll(".tier-chip").forEach(c=>c.classList.toggle("active",c.dataset.tier===tierId));
      // Update price badge
      const badge=card.querySelector(".svc-price-badge");
      if(badge){ const svc=getSvc(svcId); badge.textContent=`${getPrice(svc,tierId)} ${t("currency")}`; }
    });
  });
  // Benefits toggles
  grid.querySelectorAll(".benefits-toggle").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const id=btn.dataset.id;
      const panel=$(`#bp-${id}`);
      const open=panel.classList.toggle("open");
      btn.querySelector(".arrow").textContent=open?"▴":"▾";
    });
  });
  // Add to cart
  grid.querySelectorAll(".add-btn").forEach(btn=>btn.addEventListener("click",()=>addToCart(btn.dataset.id)));
  // Book now
  grid.querySelectorAll(".book-btn").forEach(btn=>btn.addEventListener("click",()=>bookSingle(btn.dataset.id)));
}

function tierChips(svc){
  if(!svc.tiers) return "";
  const sel=selTiers[svc.id]||svc.tiers[0].id;
  return `<div class="tier-chips">${svc.tiers.map(tier=>`
    <button type="button" class="tier-chip style-${tier.style}${tier.id===sel?" active":""}"
      data-svc="${svc.id}" data-tier="${tier.id}">${tier.label[lang]}</button>`).join("")}</div>`;
}

function renderCard(svc){
  const displayPrice = svc.tiers
    ? getPrice(svc, selTiers[svc.id]||svc.tiers[0].id)
    : svc.price;
  return `
  <article class="service-card" data-id="${svc.id}">
    <div class="svc-media">
      <img src="${svc.image}" alt="${svc.name[lang]}" loading="lazy">
      <span class="svc-tag">${svc.emoji}</span>
      <div class="svc-price-badge">${displayPrice} ${t("currency")}</div>
      <div class="svc-title-overlay"><h3>${svc.name[lang]}</h3></div>
    </div>
    <div class="svc-body">
      <p class="svc-desc">${svc.desc[lang]}</p>
      ${tierChips(svc)}
      <div>
        <button class="benefits-toggle" type="button" data-id="${svc.id}">
          <span>${t("benefits")} ▾</span><span class="arrow"></span>
        </button>
        <div class="benefits-panel" id="bp-${svc.id}">
          <ul class="benefits-list">${svc.benefits[lang].map(b=>`<li>${b}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="svc-actions">
        <button class="pill-btn add-btn" data-id="${svc.id}">${t("addToCart")}</button>
        <button class="btn-glow sm book-btn" data-id="${svc.id}">${t("bookNow")}</button>
      </div>
    </div>
  </article>`;
}

function renderOffer(svc){
  return `
  <article class="service-card offer-card" data-id="${svc.id}">
    <div class="svc-media">
      <img src="${svc.image}" alt="${svc.name[lang]}" loading="lazy">
      <div class="svc-price-badge">${svc.price} ${t("currency")}</div>
    </div>
    <div class="offer-ribbon">🌟 ${t("offerLabel")}</div>
    <div class="svc-body">
      <div class="offer-stars">${"★".repeat(5).split("").map(s=>`<span class="offer-star">${s}</span>`).join("")}</div>
      <h3 class="offer-card-title"><span>${svc.name[lang]}</span></h3>
      <div class="offer-saving">✦ ${t("offerSaving")}</div>
      <p class="svc-desc">${svc.desc[lang]}</p>
      <div>
        <button class="benefits-toggle" type="button" data-id="${svc.id}">
          <span>${t("benefits")} ▾</span><span class="arrow"></span>
        </button>
        <div class="benefits-panel" id="bp-${svc.id}">
          <ul class="benefits-list">${svc.benefits[lang].map(b=>`<li>${b}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="svc-actions" style="margin-top:16px">
        <button class="pill-btn add-btn" data-id="${svc.id}">${t("addToCart")}</button>
        <button class="btn-glow book-btn" data-id="${svc.id}">${t("bookNow")}</button>
      </div>
    </div>
  </article>`;
}

/* ═══════════════════════════════
   CART
   ═══════════════════════════════ */
function saveCart(){ localStorage.setItem("sola_cart_v3",JSON.stringify(cart)); updateBadge(); }
function updateBadge(){ $("#cartBadge").textContent=cart.reduce((s,i)=>s+i.qty,0); }

function addToCart(serviceId){
  const svc=getSvc(serviceId);
  const tierId=svc?.tiers?(selTiers[serviceId]||svc.tiers[0].id):null;
  const ex=cart.find(i=>i.serviceId===serviceId&&i.tierId===tierId);
  if(ex) ex.qty++; else cart.push({serviceId,tierId,qty:1});
  saveCart(); renderCart(); showToast(t("toast.added"));
}
function changeQty(serviceId,tierId,delta){
  const item=cart.find(i=>i.serviceId===serviceId&&i.tierId===tierId);
  if(!item) return;
  item.qty+=delta;
  if(item.qty<=0) cart=cart.filter(i=>!(i.serviceId===serviceId&&i.tierId===tierId));
  saveCart(); renderCart();
}
function removeItem(serviceId,tierId){
  cart=cart.filter(i=>!(i.serviceId===serviceId&&i.tierId===tierId));
  saveCart(); renderCart();
}

function renderCart(){
  const wrap=$("#cartItems");
  if(!cart.length){
    wrap.innerHTML=`<p class="cart-empty">${t("cart.empty")}</p>`;
  } else {
    wrap.innerHTML=cart.map(item=>{
      const svc=getSvc(item.serviceId); if(!svc) return "";
      const tier=item.tierId?getTier(svc,item.tierId):null;
      const price=getItemPrice(item);
      return `<div class="cart-item">
        <img src="${svc.image}" alt="${svc.name[lang]}">
        <div class="cart-item-info">
          <div class="name">${svc.emoji} ${svc.name[lang]}</div>
          ${tier?`<div class="tier-tag">✦ ${tier.label[lang]}</div>`:""}
          <div class="price">${price} ${t("currency")}</div>
          <div class="qty-row">
            <button class="qty-btn" data-sid="${item.serviceId}" data-tid="${item.tierId||""}" data-d="-1">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-sid="${item.serviceId}" data-tid="${item.tierId||""}" data-d="1">+</button>
            <button class="remove-btn" data-sid="${item.serviceId}" data-tid="${item.tierId||""}">${lang==="ar"?"حذف":"Remove"}</button>
          </div>
        </div>
      </div>`;
    }).join("");
    wrap.querySelectorAll(".qty-btn").forEach(b=>b.addEventListener("click",()=>{
      changeQty(b.dataset.sid, b.dataset.tid||null, parseInt(b.dataset.d));
    }));
    wrap.querySelectorAll(".remove-btn").forEach(b=>b.addEventListener("click",()=>{
      removeItem(b.dataset.sid, b.dataset.tid||null);
    }));
  }
  $("#cartTotal").innerHTML=`${cartTotal()} <span>${t("currency")}</span>`;
  updateBadge();
}

function openCart(){  $("#cartDrawer").classList.add("open"); $("#overlay").classList.add("show"); }
function closeCart(){ $("#cartDrawer").classList.remove("open"); $("#overlay").classList.remove("show"); }
$("#cartToggle").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", ()=>{ closeCart(); closeBooking(); });

/* ═══════════════════════════════
   BOOKING
   ═══════════════════════════════ */
function bookSingle(serviceId){
  const svc=getSvc(serviceId);
  const tierId=svc?.tiers?(selTiers[serviceId]||svc.tiers[0].id):null;
  bookMode="single"; bookSingleItem={serviceId,tierId};
  closeCart(); openBooking();
}
$("#cartCheckoutBtn").addEventListener("click",()=>{
  if(!cart.length){ showToast(t("toast.empty")); return; }
  bookMode="cart"; closeCart(); openBooking();
});

function getBookingItems(){
  if(bookMode==="single"&&bookSingleItem){
    return [{ ...bookSingleItem, qty:1 }];
  }
  return cart;
}

function renderBookingSummary(){
  const items=getBookingItems();
  const total=items.reduce((s,i)=>s+getItemPrice(i)*i.qty,0);
  const rows=items.map(item=>{
    const svc=getSvc(item.serviceId); if(!svc) return "";
    const tier=item.tierId?getTier(svc,item.tierId):null;
    const tierBadge=tier?`<span class="tier-badge-sm style-${tier.style}">${tier.label[lang]}</span>`:"";
    const price=getItemPrice(item)*item.qty;
    return `<div class="summary-row">
      <span>${svc.emoji} ${svc.name[lang]} × ${item.qty}${tierBadge}</span>
      <span>${price} ${t("currency")}</span>
    </div>`;
  }).join("");
  $("#bookingSummary").innerHTML=rows+
    `<div class="summary-row total"><span>${lang==="ar"?"الإجمالي":"Total"}</span><span>${total} ${t("currency")}</span></div>`;
}

function openBooking(){ renderBookingSummary(); selDate=null; $("#custDate").value=""; renderCalendar(); $("#bookingOverlay").classList.add("show"); $("#overlay").classList.add("show"); }
function closeBooking(){ $("#bookingOverlay").classList.remove("show"); $("#overlay").classList.remove("show"); }
$("#closeBooking").addEventListener("click", closeBooking);

/* ═══════════════════════════════
   CALENDAR
   ═══════════════════════════════ */
const AR_M=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
const EN_M=["January","February","March","April","May","June","July","August","September","October","November","December"];
const AR_D=["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
const EN_D=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function fmtDate(d){ return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; }
function fmtPretty(d){
  if(!d) return "";
  return lang==="ar"
    ? `${AR_D[d.getDay()]}، ${d.getDate()} ${AR_M[d.getMonth()]} ${d.getFullYear()}`
    : `${EN_D[d.getDay()]}, ${d.getDate()} ${EN_M[d.getMonth()]} ${d.getFullYear()}`;
}

function renderCalendar(){
  $("#calMonthLabel").textContent = lang==="ar" ? `${AR_M[calMonth]} ${calYear}` : `${EN_M[calMonth]} ${calYear}`;
  const grid=$("#calGrid"); grid.innerHTML="";
  const first=new Date(calYear,calMonth,1).getDay();
  const days=new Date(calYear,calMonth+1,0).getDate();
  const todayStr=fmtDate(today);

  for(let i=0;i<first;i++){
    const el=document.createElement("button");
    el.type="button"; el.className="cal-day"; el.disabled=true; grid.appendChild(el);
  }
  for(let d=1;d<=days;d++){
    const date=new Date(calYear,calMonth,d);
    const dateStr=fmtDate(date);
    const isFri=date.getDay()===5;
    const isPast=date<new Date(today.getFullYear(),today.getMonth(),today.getDate());
    const el=document.createElement("button");
    el.type="button"; el.className="cal-day"; el.textContent=d;
    if(dateStr===todayStr) el.classList.add("today");
    if(isFri) el.classList.add("friday");
    if(selDate&&fmtDate(selDate)===dateStr) el.classList.add("selected");
    el.disabled=isPast||isFri;
    el.addEventListener("click",()=>{
      selDate=date; $("#custDate").value=dateStr;
      renderCalendar();
    });
    grid.appendChild(el);
  }
  const lbl=$("#calSelectedLabel");
  if(selDate){ lbl.textContent=fmtPretty(selDate); lbl.style.color="var(--accent-2)"; }
  else { lbl.textContent=t("booking.noDate"); lbl.style.color=""; }
}

$("#calPrev").addEventListener("click",()=>{ calMonth--; if(calMonth<0){calMonth=11;calYear--;} renderCalendar(); });
$("#calNext").addEventListener("click",()=>{ calMonth++; if(calMonth>11){calMonth=0;calYear++;} renderCalendar(); });

/* ═══════════════════════════════
   SUBMIT BOOKING → WhatsApp
   ═══════════════════════════════ */
$("#bookingForm").addEventListener("submit", e=>{
  e.preventDefault();
  const name=$("#custName").value.trim();
  const phone=$("#custPhone").value.trim();
  const date=$("#custDate").value;
  if(!name||!phone){ showToast(t("toast.fill")); return; }
  if(!date){ showToast(t("toast.date")); return; }

  const items=getBookingItems();
  const total=items.reduce((s,i)=>s+getItemPrice(i)*i.qty,0);
  const dateLabel=fmtPretty(selDate);

  const lines=items.map(item=>{
    const svc=getSvc(item.serviceId); if(!svc) return "";
    const tier=item.tierId?getTier(svc,item.tierId):null;
    const tierAr=tier?` (${tier.label.ar})`:"";
    const price=getItemPrice(item)*item.qty;
    return `  - ${svc.name.ar}${tierAr}${item.qty>1?` × ${item.qty}`:""} = ${price} ${I18N.ar.currency}`;
  }).filter(Boolean).join("\n");

  const msg=
`✨ طلب حجز جديد — SOLA Skincare ✨

👤 الاسم: ${name}
📞 الموبايل: ${phone}
📅 التاريخ المطلوب: ${dateLabel}

🛎️ الجلسات المطلوبة:
${lines}

💰 الإجمالي: ${total} ${I18N.ar.currency}

⚠️ ملاحظة: سيتم تأكيد الميعاد النهائي عبر هذه المحادثة.`;

  const btn=$("#confirmBooking");
  btn.classList.add("success");
  setTimeout(()=>{
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`,"_blank");
    btn.classList.remove("success");
    closeBooking();
    if(bookMode==="cart"){ cart=[]; saveCart(); renderCart(); }
    bookSingleItem=null;
    $("#bookingForm").reset();
    selDate=null;
  },580);
});

/* ═══════════════════════════════
   TOAST
   ═══════════════════════════════ */
let toastTimer;
function showToast(msg){
  const el=$("#toast"); el.textContent=msg; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove("show"),2400);
}

/* ═══════════════════════════════
   INIT
   ═══════════════════════════════ */
$("#year").textContent=new Date().getFullYear();
wireLinks(); applyTheme(); applyLang(); renderCart();
