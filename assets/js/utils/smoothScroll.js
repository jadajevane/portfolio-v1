export const setupSmoothScrolling = () => {
  document.querySelectorAll('a.smooth-scroll[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document
      .querySelectorAll('a.smooth-scroll')
      .forEach((link) => link.classList.remove('text-pink-500', 'font-bold'));
      
      this.classList.add('text-pink-500', 'font-bold');
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth',
        });
      }
    });
  });
};
