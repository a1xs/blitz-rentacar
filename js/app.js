// Main application logic

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n
  initI18n();
  
  // Initialize gallery
  initGallery();
  
  // Render cars grid
  renderCarsGrid();
  
  // Mobile menu toggle
  initMobileMenu();
  
  // Smooth scroll
  initSmoothScroll();
  
  // Sticky header effect
  initStickyHeader();
  
  // Animate on scroll
  initScrollAnimations();
});

// Mobile menu functionality
function initMobileMenu() {
  const burgerMenu = document.getElementById('burgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && 
        !mobileMenu.contains(e.target) && 
        mobileMenu.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Sticky header effect
function initStickyHeader() {
  const header = document.getElementById('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 10) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
  });
}

// Animate elements on scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe car cards
  const observeElements = () => {
    document.querySelectorAll('.car-card:not(.fade-in)').forEach(card => {
      observer.observe(card);
    });
  };
  
  // Initial observation
  observeElements();
  
  // Re-observe when language changes (new cards rendered)
  window.addEventListener('languageChanged', () => {
    setTimeout(observeElements, 100);
  });
}

// Update active navigation link on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-desktop a, .nav-mobile a');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Initialize active nav link tracking
updateActiveNavLink();

// Lazy loading images
function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
}

initLazyLoading();

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Close mobile menu on desktop resize
    if (window.innerWidth > 768) {
      const burgerMenu = document.getElementById('burgerMenu');
      const mobileMenu = document.getElementById('mobileMenu');
      burgerMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  }, 250);
});

// Prevent body scroll when modal is open
function preventBodyScroll(prevent) {
  if (prevent) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// Console info
console.log('%cGreat Rent a Car', 'font-size: 24px; font-weight: bold; color: #1e40af;');
console.log('%cWebsite built with vanilla HTML, CSS, and JavaScript', 'font-size: 14px; color: #64748b;');
console.log('%c© 2026 Great Rent a Car. All rights reserved.', 'font-size: 12px; color: #64748b;');
