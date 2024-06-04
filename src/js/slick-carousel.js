//src\js\slick-carousel.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
  $('.slider-wrapper').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.prev-slide'),
      nextArrow: $('.next-slide'),
      adaptiveHeight: true,
      centerMode:false,
      centerPadding:'24px',
      responsive: [

        {
          breakpoint: 1280, // до 1280px - tab
          settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768, // до 768px - mob
          settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
          }
        },

      ]
  });

  // Добавляем пассивные обработчики событий
  document.addEventListener('touchstart', onTouchStart, { passive: true });
  document.addEventListener('touchmove', onTouchMove, { passive: true });

  function onTouchStart(event) {
      // Обработчик touchstart
  }

  function onTouchMove(event) {
      // Обработчик touchmove
  }
});
