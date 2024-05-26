import $ from 'jquery';

// Функция для проверки ширины экрана
function isDesktopWidth() {
  return window.matchMedia('(min-width: 768px)').matches;
}

// Выполнять код только при ширине экрана >= 768px
if (isDesktopWidth()) {
  $(document).ready(function() {
    const $caseModules = $('.case-card-pc-module');

    $caseModules.each(function() {
      const $module = $(this);
      const $containers = $module.find('.card-flex-pc-container');
      const $cards = $module.find('.card-image-pc-container');

      // Функции для обработки кликов и анимаций
      const handleWideCardClick = function($card) {
        const $description = $card.find('.case-description-container');
        const $previousDescription = $('.case-description-container:not(.is-hidden)');

        // Закрываем ранее открытое описание (если есть)
        $previousDescription.addClass('is-hidden');

        $description.toggleClass('is-hidden');
        animateDescriptionToggle($description);
      }

      const handleNarrowCardClick = function($card) {
        const $container = $card.closest('.card-flex-pc-container');
        const $siblingCard = $card.siblings('.card-image-pc-container').not($card);
        const $description = $card.find('.case-description-container');
        const $previousDescription = $('.case-description-container:not(.is-hidden)');

        // Закрываем ранее открытое описание (если есть)
        $previousDescription.addClass('is-hidden');

        animateCardExpansion($card, $siblingCard);

        setTimeout(() => {
          $card.removeClass('narrow-image').addClass('wide-image');
          $siblingCard.removeClass('wide-image').addClass('narrow-image');
          $description.removeClass('is-hidden');
          animateDescriptionToggle($description);
        }, 500);
      }

      const animateCardExpansion = function($card, $siblingCard) {
        const cardWidth = $card.outerWidth();
        const siblingWidth = $siblingCard.outerWidth();

        $card.animate({ width: cardWidth + siblingWidth }, 500);
        $siblingCard.animate({ width: 0 }, 500);
      }

      const animateDescriptionToggle = function($description) {
        $description.animate({ height: 'toggle' }, 500);
      }

      // Добавление обработчиков событий кликов
      $cards.on('click', function() {
        const $card = $(this);

        if ($card.hasClass('wide-image')) {
          handleWideCardClick($card);
        } else {
          handleNarrowCardClick($card);
        }
      });
    });
  });
}
