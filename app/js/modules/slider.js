import Swiper from 'swiper/bundle';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 1,
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    autoplay: {
      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    autoplay: true,
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
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