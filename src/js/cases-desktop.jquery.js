//src\js\cases-desktop.jquery.js

import $ from 'jquery';

// Функция для проверки ширины экрана
const isDesktopWidth = () => {
  return window.matchMedia('(min-width: 768px)').matches;
}

const addOddClass = () => {
  $('.card-image-pc-container').odd().addClass('is-odd');
}

const closeDescription = ($element) => {
  animateDescriptionToggle($element, () => {
    $element.addClass('is-hidden');
  })
}

const isRightAlignedCard = ($card) => {
  return $card.hasClass("is-odd");
}

const handleWideCardClick = function($card) {
  const $description = $card.find('.case-description-container');
  const $previousDescription = $('.case-description-container:not(.is-hidden)');
  const isRightAligned = isRightAlignedCard($card);

  // Закрытие предыдущего открытого описания
  closeDescription($previousDescription);

  // Открытие текущего описания
  if ($description.hasClass('is-hidden')) {
    // Центрирование описания
    if (isRightAligned) {
      $description.css('transform', 'translateX(-26vw)');
    } else {
      $description.css('transform', 'translateX(0)');
    }

    animateDescriptionToggle($description, () => {
      $description.removeClass('is-hidden');
    });
  }
};

const handleNarrowCardClick = function($card) {
  const $description = $card.find('.case-description-container');
  const $previousDescription = $('.case-description-container:not(.is-hidden)').not($description);
  const $siblingCard = $card.siblings('.card-image-pc-container').not($card);
  const isRightAligned = isRightAlignedCard($card)

  // Закрытие предыдущего открытого описания
  closeDescription($previousDescription);

  animateCardExpansion($card, $siblingCard, () => {
    $card.removeClass('narrow-image').addClass('wide-image');
    $siblingCard.removeClass('wide-image').addClass('narrow-image');

    console.log(isRightAligned);

    // Центрирование описания
    if (isRightAligned) {
      $description.css('transform', 'translateX(-26vw)');
    } else {
      $description.css('transform', 'translateX(0)');
    }

    animateDescriptionToggle($description, () => {
      $description.removeClass('is-hidden');
    });
  });
};

const animateCardExpansion = function($card, $siblingCard, complete = () => {}) {
  const cardWidth = $card.outerWidth();
  const siblingWidth = $siblingCard.outerWidth();

  $card.animate({ width: cardWidth + siblingWidth }, { duration: 500 });
  $siblingCard.animate({ width: 0 }, { duration: 500, complete });
};

const animateDescriptionToggle = function($description, complete = () => {}) {
  $description.animate({ height: 'toggle', opacity: 'toggle' }, { duration: 500, complete });
};

$(document).ready(function () {
  if (!isDesktopWidth()) return;

  addOddClass();

  $('.case-card-pc-module').on('click', '.card-image-pc-container', function() {
    const $card = $(this);

    if ($card.hasClass('wide-image')) {
      handleWideCardClick($card);
    } else {
      handleNarrowCardClick($card);
    }
  })
})
