const scrollUpToShow = () => {
  const scrollBtn = document.querySelector('.scroll-up');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
};

export default scrollUpToShow;