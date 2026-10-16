
export interface CafeImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  caption: string;
}

export const BUSINESS_INFO = {
  name: "Evening Hours Tea and Coffee",
  tagline: "Make Your Evenings a Little More Special",
  category: "Cafe",
  location: "Okara, Pakistan",
  phone: "+92 307 0002987",
  phoneRaw: "+923070002987",
  locationCode: "RFJC+42, Okara, Pakistan",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=RFJC%2B42%2C+Okara%2C+Pakistan",
  openingTime: "Opens at 6:00 PM",
  openingNote: "Closing time is not provided in listing; full daily schedule requires confirmation.",
  serviceOptions: ["Dine-in", "Takeout"],
  foodpandaNote: "Foodpanda.pk is listed as an ordering platform; exact restaurant ordering URL has not been supplied. For takeout or immediate orders, please call the cafe directly.",
} as const;

export const CAFE_IMAGES = {
  hero: "/src/assets/images/hero_evening_cafe_coffee_1791721031567.jpg",
  teaServing: "/src/assets/images/tea_serving_karak_chai_1791721060255.jpg",
  coffeeArt: "/src/assets/images/coffee_crema_latte_art_1791721072617.jpg",
  tableSetting: "/src/assets/images/cafe_evening_table_setting_1791721087139.jpg",
  coldDrink: "/src/assets/images/cold_beverage_iced_drink_1791721099335.jpg",
} as const;

export const GALLERY_ITEMS: CafeImage[] = [
  {
    src: CAFE_IMAGES.hero,
    alt: "Hot artisanal coffee cup on a rustic wood table in a warm evening cafe setting",
    title: "Evening Coffee Table",
    category: "Coffee",
    caption: "A freshly brewed cup capturing the warm glow and quiet energy of an evening in the cafe.",
  },
  {
    src: CAFE_IMAGES.teaServing,
    alt: "Steaming spiced tea chai pouring smoothly from an artisanal kettle into an earthen cup",
    title: "Traditional Chai Pour",
    category: "Tea",
    caption: "Fragrant, freshly brewed tea poured hot as dusk arrives over Okara.",
  },
  {
    src: CAFE_IMAGES.coffeeArt,
    alt: "Close up view of freshly prepared coffee with velvety golden crema and delicate latte art",
    title: "Velvety Crema & Art",
    category: "Coffee",
    caption: "Detailed texture and golden crema crafted for discerning coffee lovers.",
  },
  {
    src: CAFE_IMAGES.tableSetting,
    alt: "Evening table vignette with warm lantern candle, warm drinks, and treats by the window",
    title: "Twilight Table Setting",
    category: "Atmosphere",
    caption: "Candlelight, warm conversations, and comforting beverages as evening unfolds.",
  },
  {
    src: CAFE_IMAGES.coldDrink,
    alt: "Tall glass with chilled iced drink, condensation droplets, mint, and ice cubes",
    title: "Chilled Refreshment",
    category: "Cold Beverages",
    caption: "Crisp iced refreshments served cold for evening relaxation.",
  },
];

export interface MenuCategoryItem {
  id: string;
  name: string;
  category: "tea" | "hot-coffee" | "cold-coffee" | "cold-drinks" | "snacks";
  categoryLabel: string;
  presentationType: string;
  notes: string;
  image?: string;
}

export const MENU_CATEGORIES = [
  { id: "all", label: "All Categories" },
  { id: "tea", label: "Tea" },
  { id: "hot-coffee", label: "Hot Coffee" },
  { id: "cold-coffee", label: "Cold Coffee" },
  { id: "cold-drinks", label: "Cold Beverages" },
  { id: "snacks", label: "Snacks & Light Fare" },
] as const;

export const MENU_PRESENTATION_ITEMS: MenuCategoryItem[] = [
  {
    id: "tea-special",
    name: "Freshly Brewed Evening Tea",
    category: "tea",
    categoryLabel: "Tea",
    presentationType: "Steamed & Spiced Brews",
    notes: "Prepared hot with rich aroma, ideal for tea lovers during Punjab's pleasant evening hours. Served dine-in or takeout.",
    image: CAFE_IMAGES.teaServing,
  },
  {
    id: "hot-coffee-craft",
    name: "Hot Brewed Coffee",
    category: "hot-coffee",
    categoryLabel: "Hot Coffee",
    presentationType: "Roasted Beans & Velvety Foam",
    notes: "Aromatic coffee with smooth crema and comforting warmth, perfect for evening meetups in Okara.",
    image: CAFE_IMAGES.coffeeArt,
  },
  {
    id: "table-brews",
    name: "Artisanal Evening Servings",
    category: "hot-coffee",
    categoryLabel: "Hot Coffee",
    presentationType: "Table Service",
    notes: "Comforting hot cups served at your table or packed fresh for takeout.",
    image: CAFE_IMAGES.hero,
  },
  {
    id: "chilled-drinks",
    name: "Chilled Refreshments & Cold Drinks",
    category: "cold-drinks",
    categoryLabel: "Cold Beverages",
    presentationType: "Iced Special",
    notes: "Crisp, cold beverages served over ice to cool down your evening.",
    image: CAFE_IMAGES.coldDrink,
  },
  {
    id: "iced-coffee-blend",
    name: "Cold Coffee Selections",
    category: "cold-coffee",
    categoryLabel: "Cold Coffee",
    presentationType: "Chilled Coffee",
    notes: "Chilled coffee blends for customers seeking an invigorating cold caffeine kick.",
    image: CAFE_IMAGES.coldDrink,
  },
  {
    id: "evening-snacks",
    name: "Evening Cafe Snacks & Light Fare",
    category: "snacks",
    categoryLabel: "Snacks & Light Fare",
    presentationType: "Dine-in & Takeout Bites",
    notes: "Sweet or savory companion bites to pair with your hot tea or coffee. Daily varieties prepared fresh.",
    image: CAFE_IMAGES.tableSetting,
  },
];

export const FAQS_LIST = [
  {
    question: "Where is Evening Hours Tea and Coffee located?",
    answer: "Evening Hours Tea and Coffee is located in Okara, Punjab, Pakistan. You can locate the cafe using the Google Maps location code: RFJC+42, Okara, Pakistan.",
  },
  {
    question: "What are the cafe's opening hours?",
    answer: "The cafe is listed as opening daily at 6:00 PM. The closing time is not specified in the business listing, so we advise guests to call ahead if planning a late evening visit.",
  },
  {
    question: "What is the telephone number to contact the cafe?",
    answer: "You can reach Evening Hours Tea and Coffee directly at +92 307 0002987 for inquiries, takeout preparation, or table availability.",
  },
  {
    question: "Is dine-in available?",
    answer: "Yes, dine-in service is available. Guests are welcome to sit and enjoy their tea, coffee, and evening snacks in the cafe atmosphere.",
  },
  {
    question: "Can I order takeout?",
    answer: "Yes, takeout is available. You can visit in person from 6:00 PM or call +92 307 0002987 in advance so your drinks and snacks are ready for pickup.",
  },
  {
    question: "Can I order through Foodpanda?",
    answer: "Foodpanda.pk is listed as an ordering platform for the cafe, though a direct restaurant listing link is currently not verified. Calling the cafe at +92 307 0002987 is the most reliable way to place a direct takeout order.",
  },
  {
    question: "How can I see the exact daily menu and prices?",
    answer: "Daily items rotate to ensure freshness. Because specific individual prices and daily varieties are not permanently published online, please call +92 307 0002987 or ask our team upon your evening visit.",
  },
];
