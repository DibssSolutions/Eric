import PerfectScrollbar from 'perfect-scrollbar';
const partners = $('.js-scrollbar');
partners.each((i, el) => {
  let partner = el;
  console.log(partner);
  const psPartners = new PerfectScrollbar(partner, {
    useBothWheelAxes: true,
    suppressScrollY: true
  });
  setTimeout(() => {
    psPartners.update();
  }, 500);
});

// const structure = $('.js-scrollbar-structure')[0];
// const psStructure = new PerfectScrollbar(structure, {
//   useBothWheelAxes: true,
//   suppressScrollY: true,
//   maxScrollbarLength: 330
// });
// setTimeout(() => {
//   psStructure.update();
// }, 500);



