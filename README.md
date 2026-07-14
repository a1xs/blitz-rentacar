# Great Rent a Car - Blitz Rentacar

Современный одностраничный сайт для проката автомобилей в Бургасе, Болгария.

## 🚗 Особенности

- **Современный дизайн**: Чистый, минималистичный интерфейс
- **Многоязычность**: Автоматическое определение языка (RU/EN/BG)
- **Адаптивность**: Полностью адаптивный дизайн для всех устройств
- **Калькулятор стоимости**: Расчет цены аренды в реальном времени
- **Модальная галерея**: Просмотр фото автомобилей с поддержкой touch/swipe
- **Контактные кнопки**: Прямые ссылки на WhatsApp, Viber, Telegram, Email
- **Без зависимостей**: Чистый HTML/CSS/JavaScript, без фреймворков
- **SEO оптимизация**: Мета-теги, семантическая верстка

## 📁 Структура проекта

```
blitz-rentacar/
├── index.html              # Главная страница
├── css/
│   ├── style.css          # Основные стили
│   ├── responsive.css     # Адаптивность
│   └── modal.css          # Модальное окно
├── js/
│   ├── app.js             # Основная логика
│   ├── cars-data.js       # База данных автомобилей
│   ├── i18n.js            # Многоязычность
│   ├── gallery.js         # Галерея и модальное окно
│   └── calculator.js      # Калькулятор стоимости
├── images/
│   └── cars/              # Фотографии автомобилей
│       ├── opel-astra/
│       ├── mitsubishi-lancer/
│       └── ... (13 папок)
└── README.md
```

## 🚀 Быстрый старт

### Локальная разработка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourusername/blitz-rentacar.git
cd blitz-rentacar
```

2. Откройте `index.html` в браузере или используйте локальный сервер:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

3. Откройте http://localhost:8000 в браузере

### Добавление фотографий автомобилей

Добавьте 3-4 фотографии для каждого автомобиля в соответствующие папки:

```bash
images/cars/opel-astra/
├── 1.jpg  # Главное фото (уже есть плейсхолдер)
├── 2.jpg  # Дополнительное фото
├── 3.jpg  # Дополнительное фото
└── 4.jpg  # Дополнительное фото (опционально)
```

После добавления фото обновите массив `images` в `js/cars-data.js`:

```javascript
{
  id: 1,
  model: "Opel Astra Bertone Cabrio",
  // ...
  images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]  // Добавьте новые файлы
}
```

## 🌐 Деплой на GitHub Pages

### Метод 1: Через настройки GitHub

1. Создайте новый репозиторий на GitHub
2. Загрузите файлы:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/blitz-rentacar.git
git push -u origin main
```

3. Перейдите в Settings → Pages
4. Source: выберите `main` branch и `/` (root)
5. Нажмите Save
6. Сайт будет доступен по адресу: `https://yourusername.github.io/blitz-rentacar/`

### Метод 2: Через GitHub Actions (автоматический)

GitHub Pages автоматически развернет сайт при push в main ветку.

### Кастомный домен

Если у вас есть домен (например, blitz-rentacar.com):

1. Создайте файл `CNAME` в корне проекта:
```
blitz-rentacar.com
```

2. Настройте DNS записи у регистратора домена:
```
Type: A
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153

Type: CNAME
Host: www
Value: yourusername.github.io
```

3. В Settings → Pages → Custom domain введите ваш домен

## 🛠️ Настройка

### Контактные данные

Отредактируйте контакты в `index.html` и `js/calculator.js`:

```javascript
// calculator.js
const phone = '+359988746138';  // Измените телефон
const email = 'missisnatalea@gmail.com';  // Измените email
```

### Добавление/изменение автомобилей

Отредактируйте `js/cars-data.js`:

```javascript
const cars = [
  {
    id: 14,  // Новый ID
    model: "Новая модель",
    slug: "new-model",  // Для URL папки с фото
    engine: "1.6L",
    fuel: "gasoline",  // gasoline/diesel/hybrid
    transmission: "automatic",  // manual/automatic
    passengers: 5,
    description: {
      ru: "Описание на русском",
      en: "Description in English",
      bg: "Описание на български"
    },
    features: ["air_conditioning", "4_airbags"],
    deposit: 200,
    prices: {
      season: { 1: 50, 2: 50, 3: 50, "4-6": 30, "7-14": 25, "15-30": 20 },
      offSeason: { 1: 40, 2: 40, 3: 40, "4-6": 25, "7-14": 20, "15-30": 15 }
    },
    images: ["1.jpg"],
    available: true
  }
];
```

### Цветовая схема

Измените цвета в `css/style.css`:

```css
:root {
  --primary: #1e40af;      /* Основной цвет */
  --accent: #f59e0b;       /* Акцентный цвет */
  /* ... */
}
```

## 📱 Функциональность

### Многоязычность

- Автоопределение языка браузера при первом посещении
- Сохранение выбранного языка в localStorage
- Поддержка: Русский (RU), English (EN), Български (BG)

### Калькулятор стоимости

- Расчет цены в зависимости от количества дней
- Учет сезонности (высокий/низкий сезон)
- Автоматический расчет депозита и общей суммы
- Все цены только в евро (€)

### Бронирование

При нажатии "Забронировать" открывается диалог с вариантами связи:
- WhatsApp (предзаполненное сообщение)
- Viber
- Telegram
- Email (предзаполненная тема и текст)
- Прямой звонок

### Sticky Header

- Фиксированное меню при прокрутке
- Мобильное бургер-меню
- Вертикальный переключатель языков в мобильной версии

### Модальное окно

- Галерея с 3-4 фото каждого автомобиля
- Навигация стрелками и клавиатурой
- Touch/Swipe поддержка на мобильных
- Закрытие по ESC или клику вне окна

## 🎨 Технологии

- **HTML5**: Семантическая верстка
- **CSS3**: Flexbox, Grid, CSS Variables, Animations
- **JavaScript (ES6+)**: Vanilla JS, без библиотек
- **Google Fonts**: Inter (основной шрифт)
- **SVG**: Иконки и графика

## 📊 Браузерная поддержка

- Chrome/Edge: последние 2 версии
- Firefox: последние 2 версии
- Safari: последние 2 версии
- Mobile browsers: iOS Safari, Chrome Mobile

## 🔧 Разработка

### Добавление нового языка

1. Добавьте переводы в `js/i18n.js`:
```javascript
const translations = {
  // ...
  de: {  // Немецкий
    site_title: "Autovermietung in Burgas",
    // ...
  }
};
```

2. Добавьте кнопку в `index.html`:
```html
<button data-lang="de">DE</button>
```

### Изменение условий аренды

Отредактируйте секцию `#conditions` в `index.html` и переводы в `js/i18n.js`.

## 📝 Лицензия

© 2026 Great Rent a Car. Все права защищены.

## 🤝 Контакты

- **Телефон**: +359-988-746-138, +359-988-393-440
- **Email**: missisnatalea@gmail.com
- **Адрес**: Аэропорт Бургас, Болгария

---

## 🚀 Готово к использованию!

Сайт полностью функционален и готов к деплою. Просто добавьте фотографии автомобилей и разместите на GitHub Pages или любом другом хостинге.

**Следующие шаги:**
1. Замените плейсхолдеры изображений на реальные фото автомобилей
2. Проверьте контактную информацию
3. Настройте цветовую схему под ваш бренд (опционально)
4. Задеплойте на GitHub Pages
5. Подключите Google Analytics/Yandex Metrica (опционально)

Удачи! 🚗💨
