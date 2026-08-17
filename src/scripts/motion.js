/*
 * The whole motion layer: one requestAnimationFrame-throttled scroll handler
 * for the hero, one IntersectionObserver for everything else.
 *
 * The hero is the only thing that writes to element.style — its timeline *is*
 * the scroll position, so those properties must never carry a CSS transition.
 * Every discrete change (nav, CTA bar, reveals, timeline, dots) is a class
 * toggle, and the transition lives in the stylesheet where the breakpoints are.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const phone = window.matchMedia('(max-width: 759.98px)');

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

/* ------------------------------------------------------------------ hero -- */

function initHero() {
  const track = document.querySelector('[data-hero-track]');
  const pageHero = document.querySelector('[data-page-hero-track]');
  const nav = Array.from(document.querySelectorAll('[data-nav]'));
  const cta = document.querySelector('[data-cta-bar]');
  const parallax = document.querySelector('[data-parallax]');

  // Nothing to drive the chrome from (or motion is off): it is simply always there.
  if ((!track && !pageHero) || reduceMotion.matches) {
    nav.forEach((el) => el.classList.add('is-visible'));
    cta?.classList.add('is-visible');
    pageHero?.querySelector('[data-page-hero-standfirst]')?.classList.add('is-visible');
    pageHero?.classList.add('is-flat');
    if (parallax) initParallaxOnly(parallax);
    return;
  }

  if (!track) {
    initPageHero(pageHero, nav);
    if (parallax) initParallaxOnly(parallax);
    return;
  }

  const photo = track.querySelector('[data-hero-photo]');
  const veil = track.querySelector('[data-hero-veil]');
  const title = track.querySelector('[data-hero-title]');
  const year = track.querySelector('[data-hero-year]');
  const links = track.querySelector('[data-hero-links]');
  const hint = track.querySelector('[data-hero-hint]');

  let scheduled = false;

  const frame = () => {
    const isPhone = phone.matches;
    const span = Math.max(1, track.offsetHeight - window.innerHeight);
    const p = clamp01(-track.getBoundingClientRect().top / span);
    const ramp = (a, b) => clamp01((p - a) / (b - a));

    if (photo) {
      photo.style.transform = `scale(${(1 + (isPhone ? 0.09 : 0.1) * p).toFixed(4)})`;
    }

    if (veil) {
      const base = isPhone ? 0.14 : 0.15;
      const to = isPhone ? ramp(0.02, 0.42) : ramp(0.02, 0.45);
      veil.style.opacity = (base + (1 - base) * to).toFixed(3);
    }

    if (title) {
      const e = easeOutCubic(isPhone ? ramp(0.08, 0.4) : ramp(0.1, 0.42));
      const from = isPhone ? 0.42 : 0.44;
      title.style.opacity = e.toFixed(3);
      title.style.letterSpacing = `${(from - 0.14 * e).toFixed(3)}em`;
      title.style.transform = `translateY(${((1 - e) * (isPhone ? 18 : 22)).toFixed(2)}px)`;
    }

    if (year) {
      const e = easeOutCubic(isPhone ? ramp(0.28, 0.56) : ramp(0.3, 0.58));
      year.style.opacity = e.toFixed(3);
      year.style.transform = `translateY(${((1 - e) * (isPhone ? 14 : 16)).toFixed(2)}px)`;
    }

    if (links) {
      const e = easeOutCubic(isPhone ? ramp(0.5, 0.78) : ramp(0.52, 0.8));
      links.style.opacity = e.toFixed(3);
      links.style.transform = `translateY(${((1 - e) * (isPhone ? 16 : 18)).toFixed(2)}px)`;
    }

    if (hint) {
      hint.style.opacity = (1 - (isPhone ? ramp(0, 0.1) : ramp(0, 0.12))).toFixed(3);
    }

    const past = p > (isPhone ? 0.9 : 0.92);
    nav.forEach((el) => el.classList.toggle('is-visible', past));
    cta?.classList.toggle('is-visible', past);
    if (!past) closeMenu();

    if (parallax) applyParallax(parallax, isPhone);
  };

  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      frame();
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  frame();
}

/* ------------------------------------------------------------- page hero -- */

/*
 * Sub-pages open on the photograph alone. The pane is sticky inside a taller
 * track, so the page appears to hold still while the standfirst and the nav
 * fade up under the scroll; only once they have arrived does the hero release.
 *
 * Same rule as the homepage hero: the scroll position *is* the timeline, so
 * these properties are written straight to the element and must not carry a
 * transition — hence `is-scrubbed`, which turns the stylesheet's off.
 */
function initPageHero(track, nav) {
  const standfirst = track.querySelector('[data-page-hero-standfirst]');
  const photo = track.querySelector('[data-page-hero-photo]');

  nav.forEach((el) => el.classList.add('is-scrubbed'));
  standfirst?.classList.add('is-scrubbed');

  let scheduled = false;

  const frame = () => {
    const span = Math.max(1, track.offsetHeight - window.innerHeight);
    const p = clamp01(-track.getBoundingClientRect().top / span);
    const ramp = (a, b) => clamp01((p - a) / (b - a));

    if (photo) photo.style.transform = `scale(${(1 + 0.05 * p).toFixed(4)})`;

    if (standfirst) {
      const e = easeOutCubic(ramp(0.1, 0.5));
      standfirst.style.opacity = e.toFixed(3);
      standfirst.style.transform = `translateY(${((1 - e) * 12).toFixed(2)}px)`;
    }

    // The bar follows the line, a beat behind it.
    const n = easeOutCubic(ramp(0.2, 0.68));
    const usable = n > 0.6;
    nav.forEach((el) => {
      el.style.opacity = n.toFixed(3);
      el.style.transform = `translateY(${(-(1 - n) * 100).toFixed(2)}%)`;
      el.style.pointerEvents = usable ? 'auto' : 'none';
    });
    if (!usable) closeMenu();
  };

  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      frame();
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  frame();
}

/* -------------------------------------------------------------- parallax -- */

function applyParallax(img, isPhone) {
  // Measured on the frame, not on the image: the image is the element being
  // transformed, so reading its own rect would feed the offset back into itself.
  const frame = img.closest('[data-parallax-frame]') ?? img.parentElement;
  const rect = frame.getBoundingClientRect();
  const vh = window.innerHeight;
  if (rect.bottom <= 0 || rect.top >= vh) return;
  const k = (rect.top + rect.height / 2 - vh / 2) / vh;
  const shift = (k * (isPhone ? -20 : -26)).toFixed(2);
  img.style.transform = `translateY(${shift}px) scale(${isPhone ? 1.1 : 1.08})`;
}

/** The Vinoteka photograph still drifts on pages without a hero. */
function initParallaxOnly(img) {
  if (reduceMotion.matches) return;
  let scheduled = false;
  const onScroll = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyParallax(img, phone.matches);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
}

/* --------------------------------------------------------------- reveals -- */

function activate(el) {
  el.classList.add('is-in');
  if (el.hasAttribute('data-stats')) countUp(el);
}

function initReveals() {
  const targets = Array.from(document.querySelectorAll('[data-reveal], [data-timeline]'));

  if (reduceMotion.matches) {
    // Content renders in place; the counters land on their final figures.
    targets.forEach((el) => {
      el.classList.add('is-in');
      if (el.hasAttribute('data-stats')) settleCounters(el);
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        activate(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: '0px 0px -4% 0px' }
  );

  targets.forEach((el) => io.observe(el));

  // Anything at or near the fold on load reveals straight away — without this
  // the first section under the hero reads as a blank gap.
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 1.15) {
      io.unobserve(el);
      activate(el);
    }
  });
}

/* -------------------------------------------------------------- counters -- */

// 100.000 in Slovenian, 100,000 in English — taken from the page's own lang.
const numberLocale = document.documentElement.lang || 'sl';

const formatFigure = (span, value) =>
  span.hasAttribute('data-thousands') ? value.toLocaleString(numberLocale) : String(value);

function countUp(root) {
  root.querySelectorAll('[data-count]').forEach((span) => {
    const target = Number.parseInt(span.getAttribute('data-count'), 10);
    const duration = 1100;
    const start = performance.now();
    const step = (now) => {
      const k = clamp01((now - start) / duration);
      span.textContent = formatFigure(span, Math.round(target * easeOutCubic(k)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function settleCounters(root) {
  root.querySelectorAll('[data-count]').forEach((span) => {
    span.textContent = formatFigure(span, Number.parseInt(span.getAttribute('data-count'), 10));
  });
}

/* ------------------------------------------------------------ phone menu -- */

let menuButton = null;
let menuPanel = null;

function closeMenu() {
  if (!menuPanel || menuPanel.dataset.open !== 'true') return;
  menuPanel.dataset.open = 'false';
  menuButton?.setAttribute('aria-expanded', 'false');
}

function initMenu() {
  menuButton = document.querySelector('[data-menu-button]');
  menuPanel = document.querySelector('[data-menu-panel]');
  if (!menuButton || !menuPanel) return;

  menuButton.addEventListener('click', () => {
    const open = menuPanel.dataset.open === 'true';
    menuPanel.dataset.open = open ? 'false' : 'true';
    menuButton.setAttribute('aria-expanded', open ? 'false' : 'true');
  });

  menuPanel.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

/* ----------------------------------------------------------------- start -- */

function start() {
  // Stagger index for the timeline, read by the transition-delay calc().
  document.querySelectorAll('[data-timeline]').forEach((timeline) => {
    timeline.querySelectorAll('[data-tl-node]').forEach((node, i) => {
      node.style.setProperty('--i', String(i));
    });
  });

  initMenu();
  initReveals();
  initHero();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}
