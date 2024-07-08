const filter = () => {
  const controlBox = document.querySelector('.categories__control');
  const controlItems = document.querySelectorAll('.categories__control-item');
  const contentItems = document.querySelectorAll('.categories__options-item');

  function elementFilter() {
    controlBox.addEventListener('click', (e) => {
      let target = e.target;

      if (target.tagName === 'LI') {
        let targetData = target.getAttribute('data-filter');

        controlItems.forEach(item => {
          item.classList.remove('categories__control-item--active');
        });

        target.classList.add('categories__control-item--active');

        contentItems.forEach(item => {
          item.style.display = 'none';

          if (item.classList.contains(targetData)) {
            item.style.display = 'block';  
          };
        });
      }
    });
  }
  elementFilter();
};

export default filter;