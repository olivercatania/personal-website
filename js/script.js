let activeCard = null;

function setActive(card) {
  if (activeCard === card) return;
  if (activeCard) activeCard.classList.remove("is-pressed");
  activeCard = card;
  if (activeCard) activeCard.classList.add("is-pressed");
}

function updateFromPoint(x, y) {
  const el = document.elementFromPoint(x, y);
  const card = el ? el.closest(".projects") : null;
  setActive(card);
}

document.addEventListener("touchstart", (e) => {
  const t = e.touches[0];
  updateFromPoint(t.clientX, t.clientY);
}, { passive: true });

document.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  updateFromPoint(t.clientX, t.clientY);
}, { passive: true });

document.addEventListener("touchend", () => setActive(null), { passive: true });
document.addEventListener("touchcancel", () => setActive(null), { passive: true });
