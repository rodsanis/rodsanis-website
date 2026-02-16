/* ============================================
   Rodsan Innovative Solutions - Website Scripts
   ============================================ */

(function () {
  'use strict';

  // ---------- DOM Elements ----------
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const allNavLinks = document.querySelectorAll('.navbar__link');
  const sections = document.querySelectorAll('section[id]');
  const revealElements = document.querySelectorAll('.reveal');

  // ---------- Mobile Menu ----------
  function openMobileMenu() {
    navLinks.classList.add('active');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileOverlay.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMobileMenu() {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.contains('active');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close on overlay click
  mobileOverlay.addEventListener('click', closeMobileMenu);

  // Close on nav link click
  allNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // ---------- Sticky Navbar ----------
  var lastScrollY = 0;
  var scrollThreshold = 50;

  function handleNavbarScroll() {
    var currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // ---------- Active Nav Link on Scroll ----------
  var sectionObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');

        allNavLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, sectionObserverOptions);

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // ---------- Scroll Reveal Animations ----------
  var revealObserverOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(function (el, index) {
    // Stagger animation delay for cards in a grid
    var parent = el.parentElement;
    if (parent && parent.classList.contains('services__grid')) {
      el.style.transitionDelay = (index * 0.1) + 's';
    }
    revealObserver.observe(el);
  });

  // ---------- Smooth Scroll (fallback for browsers without CSS scroll-behavior) ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = navbar.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------- Initialize ----------
  // Set navbar state on page load
  handleNavbarScroll();

})();
