import starRender from "./modules/star-render";
import scrollAnimation from "./modules/scroll-animation";
import filter from "./modules/filter";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => { 
  starRender('.top-screen__decor-bg', 10, 4);
  scrollAnimation();
  filter()
  starRender('.reviews', 6, 2);
  slider();
});
