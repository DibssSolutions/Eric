import slick from 'slick-carousel';

$('.js-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.js-slider-arrow-prev'),
  nextArrow: $('.js-slider-arrow-next')
});
