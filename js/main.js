/* ===================================================================
   MAIN.JS — Navigation, scroll effects, and UI interactions
   =================================================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* === Navbar scroll effect === */
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    function handleNavbarScroll() {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });

    /* === Mobile menu === */
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    function toggleMenu() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      navOverlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    }

    function closeMenu() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (hamburger) {
      hamburger.addEventListener('click', toggleMenu);
    }

    if (navOverlay) {
      navOverlay.addEventListener('click', closeMenu);
    }

    /* Close menu on link click */
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    /* === Active section highlighting === */
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

    function highlightActiveSection() {
      const scrollY = window.scrollY + 200;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + sectionId) {
              item.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', highlightActiveSection, { passive: true });

    /* === Scroll reveal (Intersection Observer) === */
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      /* Fallback: show all */
      revealElements.forEach(el => el.classList.add('visible'));
    }

    /* === Dynamic footer year === */
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    /* === Smooth scroll for anchor links === */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

  });
})();
