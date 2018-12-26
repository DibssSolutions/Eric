import { DOC, WIN } from '../constants';

const header = $('.js-header');

WIN.on('scroll', function() { 
  let top = DOC.scrollTop();
  let winHeight = WIN.height();

  (top >= winHeight) 
    ? header.addClass('is-fixed')
    : header.removeClass('is-fixed');
});
