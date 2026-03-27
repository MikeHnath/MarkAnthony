// ================================================================
// Mark Anthony Home Improvement — main.js
// Scroll reveal (IntersectionObserver) + Slideshow autoplay
// ================================================================

const obs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08 }
);
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');
const cur    = document.getElementById('scur');
let idx = 0, timer;

function goTo(n) {
  slides[idx].classList.remove('active');
  dots[idx].classList.remove('active');
  idx = (n + slides.length) % slides.length;
  slides[idx].classList.add('active');
  dots[idx].classList.add('active');
  cur.textContent = idx + 1;
}

function kick() {
  clearInterval(timer);
  timer = setInterval(() => goTo(idx + 1), 5000);
}

document.getElementById('snext').addEventListener('click', () => { goTo(idx + 1); kick(); });
document.getElementById('sprev').addEventListener('click', () => { goTo(idx - 1); kick(); });
dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); kick(); }));

kick();
