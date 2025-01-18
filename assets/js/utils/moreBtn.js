export function setupCardToggle() {
  const hiddenCards = document.querySelectorAll('.hidden-card');
  hiddenCards.forEach(card => (card.style.display = 'none'));

  const seeMoreButton = document.getElementById('see-more-btn');
  if (!seeMoreButton) {
    console.error('See More button not found');
    return;
  }

  seeMoreButton.addEventListener('click', () => {
    const isHidden = hiddenCards[0].style.display === 'none';

    hiddenCards.forEach(card => (card.style.display = isHidden ? 'flex' : 'none'));
    seeMoreButton.textContent = isHidden ? 'See Less' : 'See More';

    if (isHidden) {
      hiddenCards[hiddenCards.length - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else {
      document.querySelector('#certificate-grid').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}
