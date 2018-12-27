import { DOC, WIN } from '../constants';

const header = $('.js-header');
const subscribe = $('.js-subscribe-btn-modal');

WIN.on('scroll', function() { 
  let top = DOC.scrollTop();
  let winHeight = WIN.height();

  (top >= winHeight) 
    ? header.addClass('is-fixed')
    : header.removeClass('is-fixed');

  (top >= winHeight)
    ? subscribe.addClass('js-subscribe-btn-modal-showed')
    : subscribe.removeClass('js-subscribe-btn-modal-showed');
});
