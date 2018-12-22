import {ACTIVE, OPEN, BODY} from '../constants';

const sandwich = $('.js-sandwich');
const header = $('.js-header');
$('.toggle-menu').on('click', function() {
  sandwich.toggleClass(ACTIVE);
  header.toggleClass(OPEN);
  BODY.toggleClass('is-fixed');
});

$('.nav__link').on('click', function() {
  sandwich.removeClass(ACTIVE);
  header.removeClass(OPEN);
  BODY.removeClass('is-fixed');
});
