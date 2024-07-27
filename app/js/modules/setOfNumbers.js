const setOfNumbers = () => {
  const time = 3000;

  function numbersAnim(num, elem, step) {
    let out = document.querySelector(`#${elem}`);
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
       if (n >= num) {
        n = num;
        clearInterval(interval);
       }
       out.textContent = n;
      
    }, t);
  }

  let scrolled = false;

  window.addEventListener('scroll', () => {
    let swiperContainer = document.querySelector('.presentation__list');
    let swiperRect = swiperContainer.getBoundingClientRect();
    let viewportHeight = window.innerHeight;

    if (!scrolled && swiperRect.top < viewportHeight) {
      numbersAnim(600, 'numb-courses', 10);
      numbersAnim(82, 'numb-leading', 2);
      numbersAnim(14795, 'numb-graduates', 100);
      scrolled = true;
    };
  });
};

export default setOfNumbers;