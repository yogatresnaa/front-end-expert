// const hamburgerMenu = document.querySelector('.menu');
// const drawerelement = document.querySelector('#drawer');
// const mainElement = document.querySelector('main');

// hamburgerMenu.addEventListener('click', (event) => {
//   drawerelement.classList.toggle('open');
//   event.stopPropagation();
// });

// mainElement.addEventListener('click', (event) => {
//   drawerelement.classList.remove('open');
//   event.stopPropagation();
// });

// const menuToggel = document.querySelector('.menu-toggle input');
// const drawerelement = document.querySelector('#drawer');
// menuToggel.addEventListener('click', function () {
//   drawerelement.classList.toggle('slide');
// });

const menuToggel = document.querySelector('.menu-toggle button');
const drawerelement = document.querySelector('#drawer');
menuToggel.addEventListener('click', function () {
  drawerelement.classList.toggle('slide');
});
