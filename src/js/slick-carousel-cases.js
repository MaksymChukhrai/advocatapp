//src\js\slick-carousel.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
  $('.cases-slider-wrapper').slick({
      slidesToShow: 1.95,
      slidesToScroll: 3,
   
      arrows: true,
      prevArrow: $('.cases-prev-slide'),
      nextArrow: $('.cases-next-slide'),
   
   
      centerPadding:'10px',
      responsive: [

        {
          breakpoint: 1280, // до 1280px - tab
          settings: {
              slidesToShow: 1.95,
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
