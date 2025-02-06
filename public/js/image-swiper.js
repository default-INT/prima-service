const imageSwiper = new Swiper('.image-swiper', {
  loop: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.image-swiper-button-next',
    prevEl: '.image-swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
