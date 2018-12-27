import {SCROLL_TO} from '../utils';

let scrollBtn = $('.js-hero-scroll-btn');

scrollBtn.click((event) => {
  event.preventDefault();
  let position = $('#about-eric').offset().top;
  SCROLL_TO(Math.floor(position));
});
