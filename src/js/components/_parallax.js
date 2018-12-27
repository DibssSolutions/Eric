import paroller from 'paroller.js';
$(window).ready(() => {
  $('.js-parallax, [data-paroller-factor]').paroller({
    factor: 0.15,
    type: 'foreground' // background, foreground
  });
});

