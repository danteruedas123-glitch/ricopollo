/* ===================================================
   Rico Pollo Gourmet — Interactive JS
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ──────────────────────
  const navbar = document.getElementById('navbar');

  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // initial check

  // ── Mobile menu toggle ────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── Scroll reveal animations ──────────────────
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger children that have .reveal
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 100);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Smooth scroll for anchor links ────────────
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Active nav link highlight ─────────────────
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.navbar__links a[href^="#"]');

  const highlightNav = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navItems.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--color-primary)';
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  // ── Parallax hero image on scroll ─────────────
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroBg = document.querySelector('.hero__bg img');
  if (heroBg && !reduceMotion) {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll < window.innerHeight) {
        heroBg.style.transform = `scale(${1.05 + scroll * 0.0002}) translateY(${scroll * 0.15}px)`;
      }
    }, { passive: true });
  }

  // ── Floating WhatsApp button visibility ───────
  const waFloat = document.getElementById('whatsappFloat');
  if (waFloat) {
    const toggleWa = () => waFloat.classList.toggle('is-visible', window.scrollY > 400);
    window.addEventListener('scroll', toggleWa, { passive: true });
    toggleWa();
  }

  // ── Tilt effect on menu cards (desktop only) ──
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.menu-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.setProperty('--ry', `${x * 6}deg`);
        card.style.setProperty('--rx', `${-y * 6}deg`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.removeProperty('--ry');
        card.style.removeProperty('--rx');
      });
    });
  }

  // ── Count-up en la barra de stats ─────────────
  const counter = document.querySelector('.stats__number[data-target]');
  if (counter && !reduceMotion) {
    const target = Number(counter.dataset.target);
    const countObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      countObserver.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / 900, 1);
        counter.textContent = Math.round(target * t);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    countObserver.observe(counter);
  }

});
