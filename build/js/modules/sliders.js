'use strict';

(function () {

  var headerLineSlider = new Swiper('.page-header__line.swiper-container', {
    updateOnWindowResize: true,
    speed: 400,
    slidesPerView: 8,
    slidesPerGroup: 1,
    loop: true,
  });

  var promoSlider = new Swiper('.promo__slider.swiper-container', {
    speed: 400,
    slidesPerView: 1,
    navigation: {
      nextEl: ".promo__slider-btn.swiper-button-next",
      prevEl: ".promo__slider-btn .swiper-button-prev"
    },
    pagination: {
      el: '.promo__slider-pagination.swiper-pagination',
      clickable: true,
    },
  });
})();
