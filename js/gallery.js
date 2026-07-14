// Gallery and Modal functionality
let currentCarIndex = 0;
let currentImageIndex = 0;
let currentCar = null;

// Initialize gallery
function initGallery() {
  const modal = document.getElementById('carModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const galleryPrev = document.getElementById('galleryPrev');
  const galleryNext = document.getElementById('galleryNext');
  
  // Close modal handlers
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  });
  
  // Gallery navigation
  galleryPrev.addEventListener('click', showPrevImage);
  galleryNext.addEventListener('click', showNextImage);
  
  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  
  const galleryMain = document.querySelector('.gallery-main');
  
  galleryMain.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  galleryMain.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        showNextImage();
      } else {
        showPrevImage();
      }
    }
  }
}

// Open modal with car details
function openCarModal(carId) {
  const car = cars.find(c => c.id === carId);
  if (!car) return;
  
  currentCar = car;
  currentImageIndex = 0;
  
  const modal = document.getElementById('carModal');
  const lang = getCurrentLang();
  
  // Update modal content
  document.getElementById('modalTitle').textContent = car.model;
  document.getElementById('modalDescription').textContent = car.description[lang];
  
  // Update specs
  document.getElementById('specEngine').textContent = car.engine;
  document.getElementById('specFuel').textContent = t(`fuel_${car.fuel}`);
  document.getElementById('specTransmission').textContent = t(`transmission_${car.transmission}`);
  document.getElementById('specPassengers').textContent = car.passengers;
  
  // Update features
  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = '';
  car.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = featureTranslations[feature][lang];
    featuresList.appendChild(li);
  });
  
  // Setup gallery
  setupGallery(car);
  
  // Setup calculator
  setupCalculator(car);
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  const modal = document.getElementById('carModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  currentCar = null;
}

// Setup gallery images
function setupGallery(car) {
  const mainImage = document.getElementById('modalMainImage');
  const thumbsContainer = document.getElementById('galleryThumbs');
  
  // Clear previous thumbs
  thumbsContainer.innerHTML = '';
  
  // Set main image
  const imagePath = `images/cars/${car.slug}/${car.images[currentImageIndex]}`;
  mainImage.src = imagePath;
  mainImage.alt = car.model;
  
  // Create thumbnails
  car.images.forEach((img, index) => {
    const thumb = document.createElement('div');
    thumb.className = `gallery-thumb ${index === currentImageIndex ? 'active' : ''}`;
    thumb.innerHTML = `<img src="images/cars/${car.slug}/${img}" alt="${car.model} ${index + 1}" loading="lazy">`;
    thumb.addEventListener('click', () => showImage(index));
    thumbsContainer.appendChild(thumb);
  });
  
  // Show/hide navigation arrows if only one image
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  if (car.images.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = '';
    nextBtn.style.display = '';
  }
}

// Show specific image
function showImage(index) {
  if (!currentCar) return;
  
  currentImageIndex = index;
  const mainImage = document.getElementById('modalMainImage');
  const imagePath = `images/cars/${currentCar.slug}/${currentCar.images[currentImageIndex]}`;
  
  // Fade effect
  mainImage.style.opacity = '0';
  setTimeout(() => {
    mainImage.src = imagePath;
    mainImage.style.opacity = '1';
  }, 150);
  
  // Update thumbnails
  document.querySelectorAll('.gallery-thumb').forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentImageIndex);
  });
}

// Show previous image
function showPrevImage() {
  if (!currentCar || currentCar.images.length <= 1) return;
  
  currentImageIndex = (currentImageIndex - 1 + currentCar.images.length) % currentCar.images.length;
  showImage(currentImageIndex);
}

// Show next image
function showNextImage() {
  if (!currentCar || currentCar.images.length <= 1) return;
  
  currentImageIndex = (currentImageIndex + 1) % currentCar.images.length;
  showImage(currentImageIndex);
}

// Render cars grid
function renderCarsGrid() {
  const grid = document.getElementById('carsGrid');
  const lang = getCurrentLang();
  
  grid.innerHTML = '';
  
  cars.forEach(car => {
    // Calculate minimum price
    const minPrice = Math.min(
      ...Object.values(car.prices.offSeason).filter(p => typeof p === 'number')
    );
    
    const card = document.createElement('div');
    card.className = 'car-card fade-in';
    card.onclick = () => openCarModal(car.id);
    
    card.innerHTML = `
      <img src="images/cars/${car.slug}/${car.images[0]}" alt="${car.model}" class="car-image" loading="lazy">
      <div class="car-content">
        <h3 class="car-title">${car.model}</h3>
        <div class="car-specs">
          <div class="car-spec">
            <span>🔧</span>
            <span>${car.engine}</span>
          </div>
          <div class="car-spec">
            <span>⚙️</span>
            <span>${t(`transmission_${car.transmission}`)}</span>
          </div>
          <div class="car-spec">
            <span>👥</span>
            <span>${car.passengers} ${lang === 'en' ? 'seats' : lang === 'bg' ? 'места' : 'мест'}</span>
          </div>
        </div>
        <div class="car-price">
          <div>
            <div class="price-from">${t('price_from')}</div>
            <div class="price-amount">${minPrice}€<span style="font-size: 0.875rem; font-weight: 400;">/${lang === 'en' ? 'day' : lang === 'bg' ? 'ден' : 'день'}</span></div>
          </div>
          <button class="car-btn">${t('btn_details')}</button>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// Update content when language changes
window.addEventListener('languageChanged', () => {
  renderCarsGrid();
  
  // If modal is open, update it
  if (currentCar) {
    const lang = getCurrentLang();
    document.getElementById('modalDescription').textContent = currentCar.description[lang];
    
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    currentCar.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = featureTranslations[feature][lang];
      featuresList.appendChild(li);
    });
    
    // Update specs
    document.getElementById('specFuel').textContent = t(`fuel_${currentCar.fuel}`);
    document.getElementById('specTransmission').textContent = t(`transmission_${currentCar.transmission}`);
    
    // Recalculate with current values
    calculateRentalCost();
  }
});
