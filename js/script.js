$(document).ready(function () {

 // smooth scroll

 $('nav a').on('click', function () {
  let el = $(this);
  let dest = el.attr('href');
  if (dest !== undefined && dest !== '') {
   $('html').animate({
    scrollTop: $(dest).offset().top
   }, 500
   );
  }
  return false;
 });

 // slider

 $('.slider-reviews').slick({
  // autoplay: true,
  // dots: false,
 });

 // tabs

 $('.questions__tabs-head').click(function () {
  $(this).toggleClass('active');
  $(this).next('.questions__tabs-body').slideToggle(500);
 });
 $('.questions__tabs-body').css({ 'display': 'none' });

});

// circle

document.querySelector('.circle').innerHTML = "WELCOME TO US WELCOME TO US WELCOME TO US WELCOME TO US WELCOME TO US".split('')
 .map((e, i) => `<span style="--rot:${i * 5.15}deg">${e}</span>`).join('');


document.querySelector('.circle--big').innerHTML = "ROYAL FORTE ROYAL FORTE ROYAL FORTE ROYAL FORTE ROYAL FORTE".split('')
 .map((e, i) => `<strong style="--rot:${i * 6}deg">${e}</strong>`).join('');

// send

const btn = document.querySelector('.form__btn');
const modal = document.querySelector('.popup');
const modalClose = document.querySelector('.popup__close');

btn.addEventListener('click', function (e) {
 e.preventDefault();
 modal.classList.remove('visually-hidden');
});

modalClose.addEventListener('click', function (e) {
 modal.classList.add('visually-hidden');
});