import Swiper from 'swiper/bundle';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 1,
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    }
  });

  let mySlider = document.querySelector('.swiper');

  mySlider.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
  });

  mySlider.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
  });
}

export default slider;