// X lab Studio — main script
document.addEventListener('DOMContentLoaded', () => {

  /* ---- mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- works carousel ---- */
  const track = document.getElementById('worksTrack');
  const prevBtn = document.getElementById('worksPrev');
  const nextBtn = document.getElementById('worksNext');

  if (track && prevBtn && nextBtn) {
    const scrollByCard = (dir) => {
      const card = track.querySelector('.work-item');
      const gap = 18;
      const distance = card ? card.offsetWidth + gap : 240;
      track.scrollBy({ left: dir * distance, behavior: 'smooth' });
    };
    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));
  }

  /* ---- pricing "+" detail toggle ---- */
  document.querySelectorAll('.price-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.price-card');
      const willOpen = !card.classList.contains('is-open');
      card.classList.toggle('is-open', willOpen);
      btn.textContent = willOpen ? '−' : '+';
    });
  });

  /* ---- scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

});
