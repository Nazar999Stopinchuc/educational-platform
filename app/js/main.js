import starRender from "./modules/star-render";
import scrollAnimation from "./modules/scroll-animation";
import filter from "./modules/filter";
import slider from "./modules/slider";
import burger from "./modules/burger";
import setOfNumbers from "./modules/setOfNumbers";
import scrollUpToShow from "./modules/scroll-up";
import modals from "./modules/popup";

window.addEventListener('DOMContentLoaded', () => {
  scrollAnimation();
  filter()
  slider();
  burger();
  setOfNumbers();
  scrollUpToShow();
  modals();
});

starRender('.top-screen__decor-bg', 10, 4);
