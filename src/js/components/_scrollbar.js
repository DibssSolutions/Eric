import PerfectScrollbar from 'perfect-scrollbar';
const container = $('.js-scrollbar')[0];
console.log(container);
const ps = new PerfectScrollbar(container, {
  useBothWheelAxes: true,
  maxScrollbarLength: 220
});
setTimeout(() => {
  $(container).trigger('click');
//   $(ps).as
}, 1000);

