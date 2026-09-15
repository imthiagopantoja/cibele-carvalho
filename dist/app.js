const cards = document.querySelectorAll('.link-card');

requestAnimationFrame(() => {
  cards.forEach((card) => {
    card.classList.remove('reveal-pending');
    card.classList.add('reveal-visible');
  });
});
