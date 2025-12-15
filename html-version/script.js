// Navigation scroll effect
let lastScrollTop = 0;
const nav = document.getElementById('navigation');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScrollTop = scrollTop;
});

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const navToggle = document.getElementById('navToggle');
  
  mobileMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const mobileMenu = document.getElementById('mobileMenu');
  const navToggle = document.getElementById('navToggle');
  
  if (element) {
    const navHeight = nav.offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  }
}

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const sections = document.querySelectorAll('.section');
  
  // Add initial animation state
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  const mobileMenu = document.getElementById('mobileMenu');
  const navToggle = document.getElementById('navToggle');
  const navContainer = document.querySelector('.nav-container');
  
  if (mobileMenu.classList.contains('active') && 
      !navContainer.contains(event.target) && 
      !mobileMenu.contains(event.target)) {
    mobileMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
});

// Prevent body scroll when mobile menu is open
const mobileMenu = document.getElementById('mobileMenu');
const observer2 = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  });
});

observer2.observe(mobileMenu, { attributes: true });

// Add keyboard navigation support
document.addEventListener('keydown', (event) => {
  const mobileMenu = document.getElementById('mobileMenu');
  const navToggle = document.getElementById('navToggle');
  
  // Close mobile menu on Escape key
  if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
});

// Smooth reveal animation for hero section
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      heroText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      heroText.style.opacity = '1';
      heroText.style.transform = 'translateY(0)';
    }, 100);
  }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links button, .mobile-menu button');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    const linkText = link.textContent.toLowerCase();
    const sectionId = current;
    
    if (linkText === sectionId || 
        (linkText === 'about' && sectionId === 'about') ||
        (linkText === 'education' && sectionId === 'education') ||
        (linkText === 'projects' && sectionId === 'projects') ||
        (linkText === 'experience' && sectionId === 'experience') ||
        (linkText === 'skills' && sectionId === 'skills') ||
        (linkText === 'achievements' && sectionId === 'achievements') ||
        (linkText === 'contact' && sectionId === 'contact')) {
      link.style.color = 'var(--color-primary)';
    } else {
      link.style.color = '';
    }
  });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll-heavy operations
const debouncedScroll = debounce(() => {
  // Any additional scroll operations can go here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// Add loading state
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Preload critical images
const preloadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', preloadImages);
} else {
  preloadImages();
}

// Add smooth hover effects for cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Console message for developers
console.log('%c👋 Hello Developer!', 'font-size: 20px; font-weight: bold; color: #007bff;');
console.log('%cThis portfolio is built with vanilla HTML, CSS, and JavaScript.', 'font-size: 14px; color: #888;');
console.log('%cFeel free to explore the code!', 'font-size: 14px; color: #888;');
