// --- Project-card "hover-like" press feedback on mobile ---
const projectCards = document.querySelectorAll('.projects');

function clearPressed() {
  projectCards.forEach(c => c.classList.remove('is-pressed'));
}

projectCards.forEach(card => {
  card.addEventListener('touchstart', () => {
    clearPressed();
    card.classList.add('is-pressed');
  }, { passive: true });

  card.addEventListener('touchend', clearPressed, { passive: true });
  card.addEventListener('touchcancel', clearPressed, { passive: true });
});

window.addEventListener('scroll', clearPressed, { passive: true });
