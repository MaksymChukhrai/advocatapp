//src\js\slick-carousel.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
    $('.slider-wrapper').slick({
        slidesToShow: 1.1, // Отображение полтора слайда на экране
        slidesToScroll: 1,
        arrows: true, // Использование кастомных стрелок
        prevArrow: $('.prev-slide'),
        nextArrow: $('.next-slide'),
      
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,
             
            }
          }
        ]
    });
});
