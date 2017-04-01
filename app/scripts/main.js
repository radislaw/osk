var slider = new Swiper('.slider', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  spaceBetween: 30,
  effect: 'fade',
  centeredSlides: true,
  autoplay: 2500,
  autoplayDisableOnInteraction: false,
});


if (window.window.innerWidth <= 600) {
  document.querySelector('.swiper-button-next').style.display = 'none';
  document.querySelector('.swiper-button-prev').style.display = 'none';
  // document.querySelector('.swiper-pagination-bullets').style.display  = 'none';
}

var favorites = new Swiper('.favorites', {
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 5,
  paginationClickable: true,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: '',
    },
  }
});
