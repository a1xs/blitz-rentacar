// Cars database with improved descriptions
const cars = [
  {
    id: 1,
    model: "Opel Astra Bertone Cabrio",
    slug: "opel-astra",
    engine: "2.2L",
    fuel: "gasoline",
    transmission: "automatic",
    passengers: 4,
    description: {
      ru: "Элегантный кабриолет с мощным двигателем и автоматической коробкой передач. Электрическая складная крыша, круиз-контроль и премиум аудиосистема сделают вашу поездку незабываемой. Идеален для романтических путешествий вдоль Черноморского побережья.",
      en: "Elegant convertible with powerful engine and automatic transmission. Electric folding roof, cruise control and premium audio system will make your trip unforgettable. Perfect for romantic trips along the Black Sea coast.",
      bg: "Елегантен кабриолет с мощен двигател и автоматична скоростна кутия. Електрическият сгъваем покрив, круиз контролът и премиум аудио системата ще направят пътуването ви незабравимо. Перфектен за романтични пътувания по Черноморието."
    },
    features: [
      "air_conditioning",
      "4_airbags",
      "abs",
      "power_steering",
      "central_lock",
      "electric_windows",
      "electric_mirrors",
      "electric_roof",
      "parking_sensors",
      "cruise_control",
      "radio_mp3",
      "subwoofer"
    ],
    deposit: 300,
    prices: {
      season: { 1: 80, 2: 100, 3: 120, "4-6": 35, "7-14": 30, "15-30": 27 },
      offSeason: { 1: 60, 2: 70, 3: 100, "4-6": 25, "7-14": 20, "15-30": 15 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 2,
    model: "Mitsubishi Lancer 9 Wagon",
    slug: "mitsubishi-lancer",
    engine: "1.6L",
    fuel: "gasoline",
    transmission: "manual",
    passengers: 5,
    description: {
      ru: "Практичный универсал для семейных поездок. Просторный багажник, экономичный расход топлива и надежность японского качества. Отличный выбор для путешествий с багажом.",
      en: "Practical wagon for family trips. Spacious trunk, economical fuel consumption and reliability of Japanese quality. Excellent choice for traveling with luggage.",
      bg: "Практичен комби за семейни пътувания. Просторен багажник, икономична консумация на гориво и надеждност на японско качество. Отличен избор за пътуване с багаж."
    },
    features: [
      "air_conditioning",
      "4_airbags",
      "electric_windows",
      "electric_mirrors",
      "radio_mp3"
    ],
    deposit: 200,
    prices: {
      season: { 1: 35, 2: 35, 3: 35, "4-6": 25, "7-14": 20, "15-30": 18 },
      offSeason: { 1: 30, 2: 30, 3: 30, "4-6": 20, "7-14": 15, "15-30": 12 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 3,
    model: "Mitsubishi Colt Hatchback",
    slug: "mitsubishi-colt",
    engine: "1.6L",
    fuel: "gasoline",
    transmission: "automatic",
    passengers: 5,
    description: {
      ru: "Компактный автомобиль с автоматической коробкой передач. Экономичный и маневренный, идеален для городских поездок и парковки. Электрический люк добавит комфорта в солнечные дни.",
      en: "Compact car with automatic transmission. Economical and maneuverable, ideal for city trips and parking. Electric sunroof will add comfort on sunny days.",
      bg: "Компактен автомобил с автоматична скоростна кутия. Икономичен и маневрен, идеален за градски пътувания и паркиране. Електрическият люк ще добави комфорт в слънчеви дни."
    },
    features: [
      "air_conditioning",
      "2_airbags",
      "electric_windows",
      "sunroof"
    ],
    deposit: 200,
    prices: {
      season: { 1: 30, 2: 30, 3: 30, "4-6": 17, "7-14": 15, "15-30": 10 },
      offSeason: { 1: 20, 2: 20, 3: 20, "4-6": 15, "7-14": 10, "15-30": 7 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 4,
    model: "Mazda 323F",
    slug: "mazda-323f",
    engine: "1.5L",
    fuel: "gasoline",
    transmission: "manual",
    passengers: 5,
    description: {
      ru: "Надежный седан с кожаным салоном и механической коробкой передач. Комфортный и экономичный вариант для длительных поездок. Классический выбор для экономных путешественников.",
      en: "Reliable sedan with leather interior and manual transmission. Comfortable and economical option for long trips. Classic choice for budget travelers.",
      bg: "Надежден седан с кожен интериор и механична скоростна кутия. Удобен и икономичен вариант за дълги пътувания. Класически избор за икономни пътешественици."
    },
    features: [
      "air_conditioning",
      "leather_seats",
      "electric_windows"
    ],
    deposit: 200,
    prices: {
      season: { 1: 30, 2: 30, 3: 30, "4-6": 20, "7-14": 15, "15-30": 10 },
      offSeason: { 1: 20, 2: 20, 3: 20, "4-6": 15, "7-14": 12, "15-30": 9 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 5,
    model: "Honda Civic Hatchback",
    slug: "honda-civic",
    engine: "1.4L",
    fuel: "gasoline",
    transmission: "automatic",
    passengers: 5,
    description: {
      ru: "Популярный хэтчбек с автоматической коробкой передач. Динамичный, экономичный и стильный. Отличный выбор для комфортного передвижения по городу и трассе.",
      en: "Popular hatchback with automatic transmission. Dynamic, economical and stylish. Great choice for comfortable city and highway driving.",
      bg: "Популярен хечбек с автоматична скоростна кутия. Динамичен, икономичен и стилен. Отличен избор за комфортно придвижване в града и по магистралата."
    },
    features: [
      "air_conditioning",
      "2_airbags",
      "radio_mp3"
    ],
    deposit: 200,
    prices: {
      season: { 1: 28, 2: 28, 3: 28, "4-6": 22, "7-14": 20, "15-30": 15 },
      offSeason: { 1: 25, 2: 25, 3: 25, "4-6": 18, "7-14": 15, "15-30": 12 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 6,
    model: "Mitsubishi Space Star",
    slug: "mitsubishi-space-star",
    engine: "1.5L",
    fuel: "gasoline",
    transmission: "manual",
    passengers: 5,
    description: {
      ru: "Компактный минивэн с просторным салоном. Высокая посадка и отличная обзорность. Идеален для семейных поездок с комфортом для всех пассажиров.",
      en: "Compact minivan with spacious interior. High seating position and excellent visibility. Ideal for family trips with comfort for all passengers.",
      bg: "Компактен миниван с просторен интериор. Висока позиция на седене и отлична видимост. Идеален за семейни пътувания с комфорт за всички пътници."
    },
    features: [
      "air_conditioning",
      "4_airbags",
      "abs",
      "power_steering"
    ],
    deposit: 200,
    prices: {
      season: { 1: 30, 2: 30, 3: 30, "4-6": 22, "7-14": 20, "15-30": 17 },
      offSeason: { 1: 20, 2: 20, 3: 20, "4-6": 15, "7-14": 12, "15-30": 10 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 7,
    model: "Toyota Yaris Verso",
    slug: "toyota-yaris-verso",
    engine: "1.3L",
    fuel: "gasoline",
    transmission: "automatic",
    passengers: 5,
    description: {
      ru: "Компактный автомобиль повышенной вместительности с автоматической коробкой. Японское качество и надежность. Идеален для городских и загородных поездок.",
      en: "Compact high-capacity car with automatic transmission. Japanese quality and reliability. Ideal for city and country trips.",
      bg: "Компактен автомобил с повишена вместимост и автоматична скоростна кутия. Японско качество и надеждност. Идеален за градски и извънградски пътувания."
    },
    features: [
      "air_conditioning",
      "2_airbags",
      "power_steering",
      "electric_windows"
    ],
    deposit: 200,
    prices: {
      season: { 1: 35, 2: 35, 3: 35, "4-6": 28, "7-14": 25, "15-30": 20 },
      offSeason: { 1: 25, 2: 25, 3: 25, "4-6": 18, "7-14": 17, "15-30": 15 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 8,
    model: "Subaru Justy",
    slug: "subaru-justy",
    engine: "1.3L",
    fuel: "gasoline",
    transmission: "manual",
    passengers: 5,
    description: {
      ru: "Надежный компактный автомобиль с отличной системой безопасности. 6 подушек безопасности и ABS гарантируют безопасное вождение. Экономичный и практичный выбор.",
      en: "Reliable compact car with excellent safety system. 6 airbags and ABS guarantee safe driving. Economical and practical choice.",
      bg: "Надежден компактен автомобил с отлична система за безопасност. 6 въздушни възглавници и ABS гарантират безопасно шофиране. Икономичен и практичен избор."
    },
    features: [
      "air_conditioning",
      "6_airbags",
      "abs",
      "electric_windows"
    ],
    deposit: 200,
    prices: {
      season: { 1: 30, 2: 30, 3: 30, "4-6": 22, "7-14": 20, "15-30": 18 },
      offSeason: { 1: 25, 2: 25, 3: 25, "4-6": 20, "7-14": 12, "15-30": 10 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 9,
    model: "Toyota Prius Hybrid",
    slug: "toyota-prius",
    engine: "1.5L Hybrid",
    fuel: "hybrid",
    transmission: "automatic",
    passengers: 5,
    description: {
      ru: "Экологичный гибридный автомобиль премиум-класса. Минимальный расход топлива, климат-контроль, круиз-контроль и парктроники. Тихий и комфортный для дальних поездок.",
      en: "Eco-friendly premium hybrid car. Minimal fuel consumption, climate control, cruise control and parking sensors. Quiet and comfortable for long trips.",
      bg: "Екологичен хибриден автомобил премиум клас. Минимална консумация на гориво, климат контрол, круиз контрол и паркинг сензори. Тих и удобен за дълги пътувания."
    },
    features: [
      "climate_control",
      "8_airbags",
      "abs",
      "power_steering",
      "central_lock",
      "electric_windows",
      "electric_mirrors",
      "cruise_control",
      "parking_sensors",
      "radio_cd"
    ],
    deposit: 200,
    prices: {
      season: { 1: 52, 2: 52, 3: 52, "4-6": 37, "7-14": 30, "15-30": 26 },
      offSeason: { 1: 35, 2: 35, 3: 35, "4-6": 25, "7-14": 20, "15-30": 15 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 10,
    model: "Toyota Prius Hybrid (Black)",
    slug: "toyota-prius-black",
    engine: "1.5L Hybrid",
    fuel: "hybrid",
    transmission: "automatic",
    passengers: 5,
    description: {
      ru: "Элегантный черный гибридный автомобиль премиум-класса. Все преимущества Toyota Prius в стильном черном цвете. Экономичный, комфортный и престижный.",
      en: "Elegant black premium hybrid car. All the benefits of Toyota Prius in stylish black color. Economical, comfortable and prestigious.",
      bg: "Елегантен черен хибриден автомобил премиум клас. Всички предимства на Toyota Prius в стилен черен цвят. Икономичен, удобен и престижен."
    },
    features: [
      "climate_control",
      "8_airbags",
      "abs",
      "power_steering",
      "central_lock",
      "electric_windows",
      "electric_mirrors",
      "cruise_control",
      "parking_sensors",
      "radio_cd"
    ],
    deposit: 200,
    prices: {
      season: { 1: 52, 2: 52, 3: 52, "4-6": 37, "7-14": 30, "15-30": 26 },
      offSeason: { 1: 35, 2: 35, 3: 35, "4-6": 25, "7-14": 20, "15-30": 15 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 11,
    model: "Honda Jazz (Green)",
    slug: "honda-jazz-green",
    engine: "1.4L",
    fuel: "gasoline",
    transmission: "automatic",
    passengers: 5,
    description: {
      ru: "Стильный зеленый хэтчбек с автоматической коробкой. Просторный салон, отличная маневренность и экономичность. Яркий и практичный автомобиль для активных людей.",
      en: "Stylish green hatchback with automatic transmission. Spacious interior, excellent maneuverability and fuel efficiency. Bright and practical car for active people.",
      bg: "Стилен зелен хечбек с автоматична скоростна кутия. Просторен интериор, отлична маневреност и икономичност. Ярък и практичен автомобил за активни хора."
    },
    features: [
      "air_conditioning",
      "4_airbags",
      "abs",
      "electric_windows"
    ],
    deposit: 200,
    prices: {
      season: { 1: 40, 2: 40, 3: 40, "4-6": 30, "7-14": 26, "15-30": 22 },
      offSeason: { 1: 25, 2: 25, 3: 25, "4-6": 20, "7-14": 17, "15-30": 15 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 12,
    model: "Honda Jazz (Pink)",
    slug: "honda-jazz-pink",
    engine: "1.4L",
    fuel: "gasoline",
    transmission: "automatic",
    passengers: 5,
    description: {
      ru: "Оригинальный розовый хэтчбек с автоматической коробкой. Яркий дизайн, просторный салон и комфорт. Идеален для тех, кто хочет выделиться на дороге.",
      en: "Original pink hatchback with automatic transmission. Bright design, spacious interior and comfort. Perfect for those who want to stand out on the road.",
      bg: "Оригинален розов хечбек с автоматична скоростна кутия. Ярък дизайн, просторен интериор и комфорт. Идеален за тези, които искат да се открояват на пътя."
    },
    features: [
      "air_conditioning",
      "4_airbags",
      "abs",
      "central_lock",
      "power_steering",
      "electric_windows"
    ],
    deposit: 200,
    prices: {
      season: { 1: 40, 2: 40, 3: 40, "4-6": 30, "7-14": 26, "15-30": 22 },
      offSeason: { 1: 25, 2: 25, 3: 25, "4-6": 20, "7-14": 17, "15-30": 15 }
    },
    images: ["1.jpg"],
    available: true
  },
  {
    id: 13,
    model: "Honda Jazz (Blue)",
    slug: "honda-jazz-blue",
    engine: "1.4L",
    fuel: "gasoline",
    transmission: "automatic",
    passengers: 5,
    description: {
      ru: "Элегантный синий хэтчбек с автоматической коробкой. Надежность Honda, экономичный расход и удобство управления. Отличный выбор для путешествий по Болгарии.",
      en: "Elegant blue hatchback with automatic transmission. Honda reliability, economical consumption and ease of control. Great choice for traveling around Bulgaria.",
      bg: "Елегантен син хечбек с автоматична скоростна кутия. Надеждност на Honda, икономична консумация и удобство на управление. Отличен избор за пътувания из България."
    },
    features: [
      "air_conditioning",
      "4_airbags",
      "abs",
      "central_lock",
      "power_steering",
      "electric_windows"
    ],
    deposit: 200,
    prices: {
      season: { 1: 40, 2: 40, 3: 40, "4-6": 30, "7-14": 26, "15-30": 22 },
      offSeason: { 1: 25, 2: 25, 3: 25, "4-6": 20, "7-14": 17, "15-30": 15 }
    },
    images: ["1.jpg"],
    available: true
  }
];

// Feature translations
const featureTranslations = {
  air_conditioning: { ru: "Кондиционер", en: "Air Conditioning", bg: "Климатик" },
  climate_control: { ru: "Климат-контроль", en: "Climate Control", bg: "Климат контрол" },
  "2_airbags": { ru: "2 подушки безопасности", en: "2 Airbags", bg: "2 въздушни възглавници" },
  "4_airbags": { ru: "4 подушки безопасности", en: "4 Airbags", bg: "4 въздушни възглавници" },
  "6_airbags": { ru: "6 подушек безопасности", en: "6 Airbags", bg: "6 въздушни възглавници" },
  "8_airbags": { ru: "8 подушек безопасности", en: "8 Airbags", bg: "8 въздушни възглавници" },
  abs: { ru: "ABS", en: "ABS", bg: "ABS" },
  power_steering: { ru: "Гидроусилитель руля", en: "Power Steering", bg: "Хидроусилвател" },
  central_lock: { ru: "Центральный замок", en: "Central Lock", bg: "Централно заключване" },
  electric_windows: { ru: "Электростеклоподъемники", en: "Electric Windows", bg: "Електрически стъкла" },
  electric_mirrors: { ru: "Электрозеркала", en: "Electric Mirrors", bg: "Електрически огледала" },
  electric_roof: { ru: "Электрическая крыша", en: "Electric Roof", bg: "Електрически покрив" },
  sunroof: { ru: "Люк", en: "Sunroof", bg: "Люк" },
  parking_sensors: { ru: "Парктроники", en: "Parking Sensors", bg: "Паркинг сензори" },
  cruise_control: { ru: "Круиз-контроль", en: "Cruise Control", bg: "Круиз контрол" },
  radio_mp3: { ru: "Радио + MP3", en: "Radio + MP3", bg: "Радио + MP3" },
  radio_cd: { ru: "Радио + CD", en: "Radio + CD", bg: "Радио + CD" },
  subwoofer: { ru: "Сабвуфер", en: "Subwoofer", bg: "Субуфер" },
  leather_seats: { ru: "Кожаный салон", en: "Leather Seats", bg: "Кожен интериор" }
};
