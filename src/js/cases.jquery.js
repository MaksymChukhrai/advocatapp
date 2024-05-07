import $ from 'jquery';

$(document).ready(function() {
    $('.card-image-container').on('click', function() {
        // Проверяем, является ли текущая карточка wide-image
        if ($(this).hasClass('wide-image')) {
            // Убираем класс is-hidden только у текущей карточки
            $(this).find('.case-card').removeClass('is-hidden');
            return;
        }

        // Если элемент narrow-image, переключаем классы и убираем is-hidden у текущей карточки
        if ($(this).hasClass('narrow-image')) {
            $(this).removeClass('narrow-image').addClass('wide-image');
            $('.card-image-container.wide-image').not(this).removeClass('wide-image').addClass('narrow-image');
            $(this).appendTo('.case-card-module'); // Перемещаем wide-image карточку в конец контейнера
            $(this).find('.case-card').removeClass('is-hidden'); // Убираем класс is-hidden у текущей карточки
        } else {
            $(this).removeClass('wide-image').addClass('narrow-image');
        }

        // При любом клике в рамках контейнера card-image-container,
        // добавляем класс is-hidden ко всем элементам case-card
        $('.card-image-container').find('.case-card').addClass('is-hidden');
    });
});

