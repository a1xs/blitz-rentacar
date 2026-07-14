// Rental calculator functionality (EUR only)

let calculatorInitialized = false;

// Setup calculator for a car
function setupCalculator(car) {
  const daysInput = document.getElementById('calcDays');
  const seasonInputs = document.querySelectorAll('input[name="season"]');
  const bookBtn = document.getElementById('btnBook');
  
  // Reset to default values
  daysInput.value = 7;
  document.querySelector('input[name="season"][value="season"]').checked = true;
  
  // Remove previous listeners
  if (calculatorInitialized) {
    daysInput.removeEventListener('input', calculateRentalCost);
    seasonInputs.forEach(input => {
      input.removeEventListener('change', calculateRentalCost);
    });
  }
  
  // Add event listeners
  daysInput.addEventListener('input', calculateRentalCost);
  seasonInputs.forEach(input => {
    input.addEventListener('change', calculateRentalCost);
  });
  
  // Book button handler
  bookBtn.onclick = () => handleBooking(car);
  
  calculatorInitialized = true;
  
  // Initial calculation
  calculateRentalCost();
}

// Calculate rental cost
function calculateRentalCost() {
  if (!currentCar) return;
  
  const days = parseInt(document.getElementById('calcDays').value) || 1;
  const season = document.querySelector('input[name="season"]:checked').value;
  
  const result = calculatePrice(currentCar, days, season);
  
  // Update UI
  document.getElementById('dailyRate').textContent = result.dailyRate;
  document.getElementById('daysCount').textContent = days;
  document.getElementById('rentalCost').textContent = result.rentalCost;
  document.getElementById('depositAmount').textContent = currentCar.deposit;
  document.getElementById('totalAmount').textContent = result.total;
}

// Calculate price based on days and season
function calculatePrice(car, days, season) {
  const priceList = car.prices[season];
  let dailyRate = 0;
  
  // Determine daily rate based on rental period
  if (days === 1) {
    dailyRate = priceList[1];
  } else if (days === 2) {
    dailyRate = priceList[2];
  } else if (days === 3) {
    dailyRate = priceList[3];
  } else if (days >= 4 && days <= 6) {
    dailyRate = priceList["4-6"];
  } else if (days >= 7 && days <= 14) {
    dailyRate = priceList["7-14"];
  } else if (days >= 15 && days <= 30) {
    dailyRate = priceList["15-30"];
  } else {
    // 30+ days - use 15-30 rate as base
    dailyRate = priceList["15-30"];
  }
  
  const rentalCost = dailyRate * days;
  const deposit = car.deposit;
  const total = rentalCost + deposit;
  
  return {
    dailyRate,
    rentalCost,
    deposit,
    total
  };
}

// Handle booking action
function handleBooking(car) {
  const days = parseInt(document.getElementById('calcDays').value) || 1;
  const season = document.querySelector('input[name="season"]:checked').value;
  const result = calculatePrice(car, days, season);
  
  const lang = getCurrentLang();
  const phone = '+359988746138';
  
  // Check if mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // On mobile - direct call
    window.location.href = `tel:${phone}`;
  } else {
    // On desktop - show contact options dialog
    const message = prepareBookingMessage(car, days, season, result, lang);
    showBookingOptions(message);
  }
}

// Prepare booking message
function prepareBookingMessage(car, days, season, result, lang) {
  let message = '';
  if (lang === 'ru') {
    message = `Здравствуйте! Хочу забронировать:\n\n`;
    message += `Автомобиль: ${car.model}\n`;
    message += `Период: ${days} ${days === 1 ? 'день' : days < 5 ? 'дня' : 'дней'}\n`;
    message += `Сезон: ${season === 'season' ? 'Высокий' : 'Низкий'}\n`;
    message += `Стоимость: ${result.rentalCost}€\n`;
    message += `Депозит: ${result.deposit}€\n`;
    message += `Итого: ${result.total}€\n\n`;
    message += `Жду вашего ответа.`;
  } else if (lang === 'en') {
    message = `Hello! I would like to book:\n\n`;
    message += `Car: ${car.model}\n`;
    message += `Period: ${days} ${days === 1 ? 'day' : 'days'}\n`;
    message += `Season: ${season === 'season' ? 'High' : 'Low'}\n`;
    message += `Cost: €${result.rentalCost}\n`;
    message += `Deposit: €${result.deposit}\n`;
    message += `Total: €${result.total}\n\n`;
    message += `Looking forward to your reply.`;
  } else {
    message = `Здравейте! Искам да резервирам:\n\n`;
    message += `Автомобил: ${car.model}\n`;
    message += `Период: ${days} ${days === 1 ? 'ден' : 'дни'}\n`;
    message += `Сезон: ${season === 'season' ? 'Висок' : 'Нисък'}\n`;
    message += `Цена: ${result.rentalCost}€\n`;
    message += `Депозит: ${result.deposit}€\n`;
    message += `Общо: ${result.total}€\n\n`;
    message += `Очаквам вашия отговор.`;
  }
  
  return message;
}

// Show booking contact options
function showBookingOptions(message) {
  const encodedMessage = encodeURIComponent(message);
  const phone = '+359988746138';
  const email = 'missisnatalea@gmail.com';
  
  // Create links
  const whatsappLink = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
  const viberLink = `viber://chat?number=${phone.replace(/[^0-9]/g, '')}`;
  const telegramLink = `https://t.me/${phone.replace(/[^0-9]/g, '')}`;
  
  const emailSubject = encodeURIComponent(lang === 'en' ? 'Car Booking' : lang === 'bg' ? 'Резервация на автомобил' : 'Бронирование автомобиля');
  const emailLink = `mailto:${email}?subject=${emailSubject}&body=${encodedMessage}`;
  
  // Create modal dialog
  const dialog = document.createElement('div');
  dialog.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    z-index: 3000;
    max-width: 400px;
    width: 90%;
  `;
  
  const lang = getCurrentLang();
  const title = lang === 'en' ? 'Choose contact method:' : lang === 'bg' ? 'Изберете начин за контакт:' : 'Выберите способ связи:';
  
  dialog.innerHTML = `
    <h3 style="margin-bottom: 20px; text-align: center;">${title}</h3>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <a href="${whatsappLink}" target="_blank" rel="noopener" class="contact-btn whatsapp" style="text-decoration: none;">
        <span>WhatsApp</span>
      </a>
      <a href="${viberLink}" class="contact-btn viber" style="text-decoration: none;">
        <span>Viber</span>
      </a>
      <a href="${telegramLink}" target="_blank" rel="noopener" class="contact-btn telegram" style="text-decoration: none;">
        <span>Telegram</span>
      </a>
      <a href="${emailLink}" class="contact-btn email" style="text-decoration: none;">
        <span>Email</span>
      </a>
      <a href="tel:${phone}" class="contact-btn" style="background: var(--primary); text-decoration: none;">
        <span>${lang === 'en' ? 'Call' : lang === 'bg' ? 'Обаждане' : 'Позвонить'}: ${phone}</span>
      </a>
    </div>
    <button id="closeBookingDialog" style="margin-top: 20px; width: 100%; padding: 12px; background: var(--gray); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
      ${lang === 'en' ? 'Cancel' : lang === 'bg' ? 'Отказ' : 'Отмена'}
    </button>
  `;
  
  // Overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2999;
  `;
  
  document.body.appendChild(overlay);
  document.body.appendChild(dialog);
  
  // Close handlers
  const closeDialog = () => {
    document.body.removeChild(dialog);
    document.body.removeChild(overlay);
  };
  
  document.getElementById('closeBookingDialog').onclick = closeDialog;
  overlay.onclick = closeDialog;
}
