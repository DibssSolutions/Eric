$(document).ready(function() {

  $('.js-accordeon-head').on('click', accordeon);
});
  
function accordeon() {
  $('.js-accordeon-head').not($(this)).removeClass('is-active');
  $(this).toggleClass('is-active');
  $('.js-accordeon-body').not($(this).next()).slideUp(400);
  $(this).next().slideToggle(400);
  
}
