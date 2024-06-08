//src\js\slick-carousel.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
  $('.main-slider-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
   
      arrows: true,
      prevArrow: $('.main-prev-slide'),
      nextArrow: $('.main-next-slide'),
   
   
      centerPadding:'30px',
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
