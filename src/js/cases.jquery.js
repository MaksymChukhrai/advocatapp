import $ from 'jquery';
$(document).ready(function() {
    $('.card-image-container').on('click', function() {
        if ($(this).hasClass('wide-image')) {
            return;
        }

        if ($(this).hasClass('narrow-image')) {
            $(this).removeClass('narrow-image').addClass('wide-image');
            $('.card-image-container.wide-image').not(this).removeClass('wide-image').addClass('narrow-image');

            // Перемещаем wide-image карточку в начало контейнера
            $(this).appendTo('.case-card-module');
        } else {
            $(this).removeClass('wide-image').addClass('narrow-image');
        }
    });
});