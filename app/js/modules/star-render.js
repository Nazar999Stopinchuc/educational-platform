function starRender(bgr, heightStep, widthStep) {
  const bg = document.querySelector(bgr);


  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  function starsRend() {
    for (let i = widthStep; i < 100; i += widthStep) {
      for (let j = heightStep; j < 100; j += heightStep) {
        bg.innerHTML += `<div class="star" style="top: ${j}%; left: ${i}%; animation-delay: ${getRandomNumber(4, 40)}s;"></div>`;
      }
    }
  }

  starsRend();

}
export default starRender;

