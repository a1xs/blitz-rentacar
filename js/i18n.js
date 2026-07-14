// Multi-language support with auto-detection
const translations = {
  ru: {
    // Site meta
    site_title: "Great Rent a Car | Прокат авто в Бургасе",
    site_description: "Прокат автомобилей в Бургасе от 9€/день. Неограниченный пробег, страховка включена. Бесплатная подача в аэропорт.",
    
    // Navigation
    nav_home: "Главная",
    nav_cars: "Автомобили",
    nav_conditions: "Условия",
    nav_contacts: "Контакты",
    
    // Language names
    lang_russian: "Русский",
    lang_english: "English",
    lang_bulgarian: "Български",
    
    // Hero section
    hero_title: "Прокат автомобилей в Бургасе",
    hero_subtitle: "Надежные авто от 9€/день. Неограниченный пробег и страховка включены.",
    hero_cta: "Выбрать автомобиль",
    
    // Cars section
    cars_title: "Наши автомобили",
    cars_subtitle: "Выберите подходящий автомобиль из нашего автопарка",
    price_from: "от",
    price_per_day: "€/день",
    btn_details: "Подробнее",
    
    // Car specs
    spec_engine: "Двигатель:",
    spec_fuel: "Топливо:",
    spec_transmission: "Коробка:",
    spec_passengers: "Пассажиры:",
    
    fuel_gasoline: "Бензин",
    fuel_diesel: "Дизель",
    fuel_hybrid: "Гибрид",
    
    transmission_manual: "Механика",
    transmission_automatic: "Автомат",
    
    features_title: "Опции:",
    
    // Calculator
    calc_title: "Рассчитать стоимость",
    calc_days: "Количество дней:",
    calc_season: "Сезон:",
    season_high: "Сезон (май-сентябрь)",
    season_low: "Не сезон (октябрь-апрель)",
    calc_rental: "Аренда:",
    calc_deposit: "Депозит:",
    calc_total: "Итого к оплате:",
    calc_days_text: "дней",
    calc_note: "* Депозит возвращается при возврате автомобиля",
    btn_book: "Забронировать",
    
    // Conditions
    conditions_title: "Условия аренды",
    
    included_title: "Что включено",
    included_insurance: "Стандартная страховка",
    included_mileage: "Неограниченный пробег",
    included_vignette: "Дорожная виньетка",
    included_vat: "НДС",
    included_support: "Техподдержка (9:00-22:00)",
    included_delivery: "Бесплатная подача в аэропорт Бургас (9:00-22:00)",
    
    driver_title: "Требования к водителю",
    driver_age: "Возраст: от 23 лет",
    driver_experience: "Стаж вождения: от 3 лет",
    driver_documents: "Документы: права, паспорт",
    
    payment_title: "Оплата и депозит",
    payment_method: "Оплата при получении (только €)",
    payment_deposit: "Депозит: 200-300€ (возвращается)",
    payment_return: "Депозит возвращается при возврате авто",
    
    fuel_title: "Топливо и чистота",
    fuel_full: "Полный бак при выдаче и возврате",
    fuel_clean: "Чистый автомобиль при выдаче и возврате",
    fuel_wash: "Мойка: 10€ (если необходимо)",
    
    services_title: "Дополнительные услуги",
    services_seat: "Детское кресло: +1€/день",
    services_gps: "Навигатор: +1€/день",
    services_casco: "КАСКО: +6-9€/день",
    services_delivery: "Подача в другие города: уточняйте",
    
    important_title: "Важно",
    important_lights: "Ближний свет фар круглосуточно (штраф 50€)",
    important_fuel_type: "Дизельные авто заправляются только дизелем!",
    important_documents: "Не оставляйте документы в автомобиле",
    important_return: "Опоздание до 1 часа — бесплатно",
    
    // Contacts
    contacts_title: "Контакты",
    contact_tagline: "Прокат автомобилей в Бургасе",
    contact_location: "Аэропорт Бургас",
    contact_location_desc: "Бесплатная подача 9:00-22:00",
    contact_email: "Email",
    
    // Footer
    footer_rights: "Все права защищены"
  },
  
  en: {
    // Site meta
    site_title: "Great Rent a Car | Car Rental in Burgas",
    site_description: "Car rental in Burgas from €9/day. Unlimited mileage, insurance included. Free airport delivery.",
    
    // Navigation
    nav_home: "Home",
    nav_cars: "Cars",
    nav_conditions: "Terms",
    nav_contacts: "Contacts",
    
    // Language names
    lang_russian: "Русский",
    lang_english: "English",
    lang_bulgarian: "Български",
    
    // Hero section
    hero_title: "Car Rental in Burgas",
    hero_subtitle: "Reliable cars from €9/day. Unlimited mileage and insurance included.",
    hero_cta: "Choose a Car",
    
    // Cars section
    cars_title: "Our Cars",
    cars_subtitle: "Choose a suitable car from our fleet",
    price_from: "from",
    price_per_day: "€/day",
    btn_details: "Details",
    
    // Car specs
    spec_engine: "Engine:",
    spec_fuel: "Fuel:",
    spec_transmission: "Transmission:",
    spec_passengers: "Passengers:",
    
    fuel_gasoline: "Gasoline",
    fuel_diesel: "Diesel",
    fuel_hybrid: "Hybrid",
    
    transmission_manual: "Manual",
    transmission_automatic: "Automatic",
    
    features_title: "Features:",
    
    // Calculator
    calc_title: "Calculate Rental Cost",
    calc_days: "Number of days:",
    calc_season: "Season:",
    season_high: "Season (May-September)",
    season_low: "Off Season (October-April)",
    calc_rental: "Rental:",
    calc_deposit: "Deposit:",
    calc_total: "Total:",
    calc_days_text: "days",
    calc_note: "* Deposit is refundable upon car return",
    btn_book: "Book Now",
    
    // Conditions
    conditions_title: "Rental Terms",
    
    included_title: "What's Included",
    included_insurance: "Standard insurance",
    included_mileage: "Unlimited mileage",
    included_vignette: "Road vignette",
    included_vat: "VAT",
    included_support: "Technical support (9:00-22:00)",
    included_delivery: "Free delivery to Burgas Airport (9:00-22:00)",
    
    driver_title: "Driver Requirements",
    driver_age: "Age: 23+ years",
    driver_experience: "Driving experience: 3+ years",
    driver_documents: "Documents: license, passport",
    
    payment_title: "Payment & Deposit",
    payment_method: "Payment upon pickup (€ only)",
    payment_deposit: "Deposit: €200-300 (refundable)",
    payment_return: "Deposit refunded upon car return",
    
    fuel_title: "Fuel & Cleanliness",
    fuel_full: "Full tank at pickup and return",
    fuel_clean: "Clean car at pickup and return",
    fuel_wash: "Car wash: €10 (if needed)",
    
    services_title: "Additional Services",
    services_seat: "Child seat: +€1/day",
    services_gps: "GPS navigator: +€1/day",
    services_casco: "CASCO: +€6-9/day",
    services_delivery: "Delivery to other cities: inquire",
    
    important_title: "Important",
    important_lights: "Headlights on 24/7 (€50 fine)",
    important_fuel_type: "Diesel cars use diesel fuel only!",
    important_documents: "Don't leave documents in the car",
    important_return: "Up to 1 hour late — free",
    
    // Contacts
    contacts_title: "Contacts",
    contact_tagline: "Car Rental in Burgas",
    contact_location: "Burgas Airport",
    contact_location_desc: "Free delivery 9:00-22:00",
    contact_email: "Email",
    
    // Footer
    footer_rights: "All rights reserved"
  },
  
  bg: {
    // Site meta
    site_title: "Great Rent a Car | Коли под наем в Бургас",
    site_description: "Коли под наем в Бургас от 9€/ден. Неограничен пробег, застраховка включена. Безплатна доставка на летище.",
    
    // Navigation
    nav_home: "Начало",
    nav_cars: "Автомобили",
    nav_conditions: "Условия",
    nav_contacts: "Контакти",
    
    // Language names
    lang_russian: "Русский",
    lang_english: "English",
    lang_bulgarian: "Български",
    
    // Hero section
    hero_title: "Коли под наем в Бургас",
    hero_subtitle: "Надеждни автомобили от 9€/ден. Неограничен пробег и застраховка включени.",
    hero_cta: "Избери автомобил",
    
    // Cars section
    cars_title: "Нашите автомобили",
    cars_subtitle: "Изберете подходящ автомобил от нашия автопарк",
    price_from: "от",
    price_per_day: "€/ден",
    btn_details: "Подробности",
    
    // Car specs
    spec_engine: "Двигател:",
    spec_fuel: "Гориво:",
    spec_transmission: "Скоростна кутия:",
    spec_passengers: "Пътници:",
    
    fuel_gasoline: "Бензин",
    fuel_diesel: "Дизел",
    fuel_hybrid: "Хибрид",
    
    transmission_manual: "Ръчна",
    transmission_automatic: "Автоматична",
    
    features_title: "Опции:",
    
    // Calculator
    calc_title: "Изчисли цена",
    calc_days: "Брой дни:",
    calc_season: "Сезон:",
    season_high: "Сезон (май-септември)",
    season_low: "Не е сезон (октомври-април)",
    calc_rental: "Наем:",
    calc_deposit: "Депозит:",
    calc_total: "Общо:",
    calc_days_text: "дни",
    calc_note: "* Депозитът се връща при връщане на автомобила",
    btn_book: "Резервирай",
    
    // Conditions
    conditions_title: "Условия за наем",
    
    included_title: "Какво е включено",
    included_insurance: "Стандартна застраховка",
    included_mileage: "Неограничен пробег",
    included_vignette: "Винетка",
    included_vat: "ДДС",
    included_support: "Техническа поддръжка (9:00-22:00)",
    included_delivery: "Безплатна доставка на летище Бургас (9:00-22:00)",
    
    driver_title: "Изисквания към водача",
    driver_age: "Възраст: от 23 години",
    driver_experience: "Шофьорски стаж: от 3 години",
    driver_documents: "Документи: свидетелство, паспорт",
    
    payment_title: "Плащане и депозит",
    payment_method: "Плащане при получаване (само €)",
    payment_deposit: "Депозит: 200-300€ (връща се)",
    payment_return: "Депозитът се връща при връщане",
    
    fuel_title: "Гориво и чистота",
    fuel_full: "Пълен резервоар при вземане и връщане",
    fuel_clean: "Чист автомобил при вземане и връщане",
    fuel_wash: "Измиване: 10€ (ако е необходимо)",
    
    services_title: "Допълнителни услуги",
    services_seat: "Детско столче: +1€/ден",
    services_gps: "Навигация: +1€/ден",
    services_casco: "КАСКО: +6-9€/ден",
    services_delivery: "Доставка в други градове: уточнете",
    
    important_title: "Важно",
    important_lights: "Включени светлини денонощно (глоба 50€)",
    important_fuel_type: "Дизелови коли се зареждат само с дизел!",
    important_documents: "Не оставяйте документи в колата",
    important_return: "Закъснение до 1 час — безплатно",
    
    // Contacts
    contacts_title: "Контакти",
    contact_tagline: "Коли под наем в Бургас",
    contact_location: "Летище Бургас",
    contact_location_desc: "Безплатна доставка 9:00-22:00",
    contact_email: "Email",
    
    // Footer
    footer_rights: "Всички права запазени"
  }
};

// Current language
let currentLang = 'ru';

// Initialize i18n
function initI18n() {
  // Auto-detect browser language
  const savedLang = localStorage.getItem('lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else {
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    const supportedLangs = ['ru', 'en', 'bg'];
    currentLang = supportedLangs.includes(browserLang) ? browserLang : 'ru';
  }
  
  // Apply language
  setLanguage(currentLang);
  
  // Set active language button
  updateActiveLanguage();
  
  // Language switcher event listeners
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.dataset.lang;
      setLanguage(lang);
      localStorage.setItem('lang', lang);
      updateActiveLanguage();
      
      // Close mobile menu if open
      const mobileMenu = document.getElementById('mobileMenu');
      const burgerMenu = document.getElementById('burgerMenu');
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
      }
    });
  });
}

// Set language
function setLanguage(lang) {
  currentLang = lang;
  const trans = translations[lang];
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update meta tags
  document.title = trans.site_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = trans.site_description;
  
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (trans[key]) {
      el.textContent = trans[key];
    }
  });
  
  // Update all elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (trans[key]) {
      el.placeholder = trans[key];
    }
  });
  
  // Trigger custom event for dynamic content updates
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Update active language button state
function updateActiveLanguage() {
  document.querySelectorAll('[data-lang]').forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Get translation
function t(key) {
  return translations[currentLang][key] || key;
}

// Get current language
function getCurrentLang() {
  return currentLang;
}
