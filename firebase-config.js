// ─────────────────────────────────────────────────────────────
// DELxPort — Live Price Desk config
// 1) Firebase Console → Project settings → "Your apps" → Web app → copy the config object here.
// 2) Sign in once on admin.html, then in Firebase Console → Authentication → Users,
//    copy YOUR user UID and paste it into ADMIN_UID below AND into firestore.rules.
// The apiKey below is NOT a secret — Firebase web keys are safe to expose publicly.
// ─────────────────────────────────────────────────────────────

export const firebaseConfig = {
  apiKey:            "AIzaSyBPDP3mEoBnIGu_21_S7Wis5gyT2ffUseU",
  authDomain:        "delxport.firebaseapp.com",
  projectId:         "delxport",
  storageBucket:     "delxport.firebasestorage.app",
  messagingSenderId: "315368816205",
  appId:             "1:315368816205:web:b8f07f8eef85c295002604"
};

// Admin (your) Firebase Auth UID — grants owner access.
export const ADMIN_UID = "gsSoSooY9wYeWOLNgWBEZjByXhH3";

// Products the desk can quote. Keys match the ?product= link from each desk page.
export const PRODUCTS = {
  rice:      { name: "Rices" },
  pulses:    { name: "Pulses & Dal" },
  spices:    { name: "Whole Spices" },
  groceries: { name: "Packaged Groceries" },
  hotels:    { name: "Hotel Container (mixed)" }
};

// Payload assumptions per container, in metric tonnes. Edit to your real figures.
export const CONTAINERS = { "20ft": 25, "40ft": 26 };

// How long the buyer's price stays hidden after they request a quote (minutes).
export const HOLD_MINUTES = 30;

// ── Admin notifications when a new quote lands ──────────────────
// Free phone push via ntfy.sh: install the "ntfy" app (iOS/Android), subscribe to a
// topic name of your choosing, and paste that SAME topic here. Leave "" to disable.
// Pick something unguessable — anyone who knows the topic can read the pings.
export const NOTIFY_NTFY_TOPIC = "";           // e.g. "delxport-quotes-7fk2p9x"
// Optional: a webhook URL (Zapier / Make / n8n "catch hook") to POST each new quote to,
// so you can fan it out to email or WhatsApp. Leave "" to disable.
export const NOTIFY_WEBHOOK_URL = "";

// Free / consumer email providers that are NOT auto-approved (they go to your queue).
// This is mirrored in firestore.rules — keep the two in sync if you edit it.
export const FREE_EMAIL_RE = /@(gmail|googlemail|yahoo|ymail|rocketmail|hotmail|outlook|live|msn|aol|icloud|me|mac|proton|protonmail|pm|gmx|mail|zoho|yandex|inbox|hey)\./i;

// ── Your company details, printed on the Proforma Invoice / Quotation PDF ──
// EDIT THESE to your real registered details before sending PDFs to buyers.
export const SELLER = {
  brand:      "DELxPort",
  legalName:  "Just Live Trade",
  address:    "Chandni Chowk, Old Delhi",
  city:       "New Delhi 110006, India",
  iec:        "IEC: [your IEC number]",
  apeda:      "APEDA RCMC: [your RCMC number]",
  gstin:      "GSTIN: [your GSTIN]",
  email:      "trade@delxport.com",
  phone:      "+91 [your WhatsApp/phone]",
  website:    "delxport.com",
  // Bank details for the Proforma Invoice (buyers need these for TT / LC). Fill before use.
  bankName:   "[Bank name]",
  bankBranch: "[Branch]",
  bankAccount:"[Account number]",
  bankIfsc:   "[IFSC]",
  bankSwift:  "[SWIFT/BIC]"
};
export const INVOICE = {
  currency:     "USD",
  validityDays: 7,
  loadingPort:  "Nhava Sheva (JNPT), India",
  remarks:      "Rate valid subject to stock availability and USD/INR at time of booking. Prices exclude destination charges, duties and taxes."
};
