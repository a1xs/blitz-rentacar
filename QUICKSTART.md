# 🚗 Blitz Rent a Car - Инструкция по запуску

## ✅ Что сделано

Полностью функциональный одностраничный сайт для проката автомобилей в Бургасе.

### Реализованный функционал:

✅ **Современный дизайн**
- Чистый, минималистичный интерфейс
- Адаптивный дизайн для всех устройств
- Плавные анимации и переходы

✅ **Многоязычность**
- Автоопределение языка браузера (RU/EN/BG)
- Русский язык по умолчанию
- Сохранение выбора в localStorage

✅ **Sticky Header**
- Фиксированное меню при прокрутке
- Мобильное бургер-меню
- Вертикальный переключатель языков в мобильной версии

✅ **13 автомобилей**
- Улучшенные описания на 3 языках
- Реальные фотографии с текущего сайта
- Детальные характеристики

✅ **Модальная галерея**
- Просмотр фото автомобилей
- Навигация стрелками и клавиатурой
- Touch/Swipe поддержка на мобильных

✅ **Калькулятор стоимости**
- Расчет цены в реальном времени
- Учет сезонности (высокий/низкий)
- Только евро (€)
- Автоматический расчет депозита

✅ **Контактные кнопки**
- WhatsApp (предзаполненное сообщение)
- Viber
- Telegram
- Email
- Прямой звонок

✅ **Условия аренды**
- Детальные условия на 3 языках
- Понятная структура
- Все важные моменты

---

## 🚀 Быстрый старт

### Локальное тестирование

Откройте `index.html` в браузере напрямую или через локальный сервер:

```bash
# Вариант 1: Python
python3 -m http.server 8000

# Вариант 2: PHP
php -S localhost:8000

# Вариант 3: Node.js
npx serve
```

Затем откройте: http://localhost:8000

---

## 📤 Деплой на GitHub Pages

### Шаг 1: Инициализация Git

```bash
git init
git add .
git commit -m "Initial commit: Modern car rental website"
```

### Шаг 2: Создание репозитория на GitHub

1. Перейдите на https://github.com/new
2. Создайте репозиторий `blitz-rentacar`
3. НЕ добавляйте README, .gitignore или license (у нас уже есть)

### Шаг 3: Push кода

```bash
git branch -M main
git remote add origin https://github.com/ваш-username/blitz-rentacar.git
git push -u origin main
```

### Шаг 4: Активация GitHub Pages

1. Откройте Settings → Pages
2. Source: выберите `main` branch
3. Folder: выберите `/ (root)`
4. Нажмите Save

✅ Сайт будет доступен через 1-2 минуты по адресу:
`https://ваш-username.github.io/blitz-rentacar/`

---

## 🎨 Что можно улучшить (опционально)

### 1. Добавить больше фотографий

Добавьте 2-3 дополнительных фото для каждого автомобиля:

```bash
images/cars/opel-astra/
├── 1.jpg  # Уже есть
├── 2.jpg  # Добавьте
├── 3.jpg  # Добавьте
└── 4.jpg  # Добавьте (опционально)
```

Затем обновите в `js/cars-data.js`:

```javascript
{
  id: 1,
  model: "Opel Astra Bertone Cabrio",
  // ...
  images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]  // Добавьте новые
}
```

### 2. Настроить цвета под бренд

Отредактируйте `css/style.css`:

```css
:root {
  --primary: #1e40af;      /* Основной цвет (синий) */
  --accent: #f59e0b;       /* Акцентный цвет (оранжевый) */
}
```

### 3. Добавить аналитику

Вставьте в `<head>` в `index.html`:

**Google Analytics:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Yandex Metrica:**
```html
<!-- Yandex.Metrika -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym(XXXXXXXX, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });
</script>
```

### 4. Кастомный домен

Если есть домен (например, blitz-rentacar.com):

1. Создайте файл `CNAME` в корне:
```
blitz-rentacar.com
```

2. Настройте DNS записи:
```
Type: A, Host: @, Value: 185.199.108.153
Type: A, Host: @, Value: 185.199.109.153
Type: A, Host: @, Value: 185.199.110.153
Type: A, Host: @, Value: 185.199.111.153
Type: CNAME, Host: www, Value: ваш-username.github.io
```

3. В Settings → Pages → Custom domain введите домен

### 5. Добавить секцию "Почему мы?"

Вставьте перед секцией `#cars` в `index.html`:

```html
<section class="section features-section">
  <div class="container">
    <h2 class="section-title" data-i18n="features_section_title">Почему выбирают нас</h2>
    <div class="features-grid">
      <div class="feature-card">
        <span class="feature-icon">✅</span>
        <h3 data-i18n="feature_1_title">Прозрачные цены</h3>
        <p data-i18n="feature_1_desc">Без скрытых платежей и доплат</p>
      </div>
      <!-- Добавьте больше карточек -->
    </div>
  </div>
</section>
```

---

## 📱 Тестирование

### Чеклист проверки:

- [ ] Главная страница загружается
- [ ] Меню работает (переход по секциям)
- [ ] Переключение языков работает (RU/EN/BG)
- [ ] Карточки автомобилей отображаются
- [ ] Модальное окно открывается при клике
- [ ] Галерея фото работает (стрелки, клавиши)
- [ ] Калькулятор считает правильно
- [ ] Кнопка "Забронировать" работает
- [ ] Контактные кнопки открывают правильные приложения
- [ ] Мобильное меню работает
- [ ] Сайт адаптивен на всех устройствах

### Тестирование на устройствах:

**Desktop:**
- Chrome DevTools (F12) → Toggle device toolbar
- Проверьте: 1920×1080, 1366×768, 1280×720

**Mobile:**
- iPhone (375×667, 390×844)
- Android (360×640, 412×915)

**Tablet:**
- iPad (768×1024)
- Android Tablet (800×1280)

---

## 🔧 Устранение проблем

### Фотографии не загружаются

Проверьте пути к изображениям в `js/cars-data.js`:
```javascript
images: ["1.jpg", "2.jpg"]  // Файлы должны существовать
```

### Переводы не работают

1. Проверьте консоль браузера (F12)
2. Убедитесь, что `js/i18n.js` загружается до `js/app.js`
3. Проверьте порядок `<script>` в `index.html`

### Калькулятор не считает

1. Откройте консоль (F12)
2. Проверьте, что `currentCar` не `null`
3. Убедитесь, что цены заполнены в `js/cars-data.js`

---

## 📞 Контакты

**Great Rent a Car**
- Телефон: +359-988-746-138, +359-988-393-440
- Email: missisnatalea@gmail.com
- Адрес: Аэропорт Бургас, Болгария

---

## 🎉 Готово!

Сайт полностью готов к использованию. Просто задеплойте на GitHub Pages и начинайте принимать бронирования!

**Следующие шаги:**
1. ✅ Протестируйте сайт локально
2. ✅ Загрузите на GitHub
3. ✅ Активируйте GitHub Pages
4. ✅ Поделитесь ссылкой с клиентами

Удачи с новым сайтом! 🚗💨
