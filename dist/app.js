const cards = document.querySelectorAll('.link-card');
const notice = document.querySelector('.notice');

requestAnimationFrame(() => {
  cards.forEach((card) => {
    card.classList.remove('reveal-pending');
    card.classList.add('reveal-visible');
  });
});

function handleUnavailable(event) {
  const card = event.currentTarget;
  if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  notice.textContent = `${card.querySelector('.label').textContent}: link em breve.`;
}

cards.forEach((card) => {
  card.addEventListener('click', handleUnavailable);
  card.addEventListener('keydown', handleUnavailable);
});
