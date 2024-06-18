//src\js\cases.jquery.js

import $ from 'jquery';


// Функция для проверки ширины экрана
function isMobileWidth() {
  return window.matchMedia('(max-width: 765px)').matches;
}

if (isMobileWidth()) {
$(document).ready(function() {
  $('.case-card-module').each(function() {
    const $module = $(this);
    const $containers = $module.find('> .card-image-container');
    const $caseDescriptionContainers = $module.find('.case-description-container');

    $caseDescriptionContainers.addClass('is-hidden'); // Скрываем все описания при загрузке страницы

    $containers.on('click', function() {
      const $container = $(this);
      const $caseDescriptionContainer = $container.find('.case-description-container');

      // Если контейнер уже широкий, переключаем показ/скрытие описания
      if ($container.hasClass('wide-image')) {
        $caseDescriptionContainer.toggleClass('is-hidden');
        return;
      }

      // Если контейнер узкий, делаем его широким
      if ($container.hasClass('narrow-image')) {
        const $wideContainer = $containers.filter('.wide-image');
        const $narrowContainers = $containers.not($wideContainer).not($container);

        $wideContainer.removeClass('wide-image').addClass('narrow-image');
        $container.removeClass('narrow-image').addClass('wide-image');
        $container.prependTo($module);

        $caseDescriptionContainer.removeClass('is-hidden');
        $caseDescriptionContainers.not($caseDescriptionContainer).addClass('is-hidden');

        reorderContainers($module, $containers);
      }
    });
  });
});

function reorderContainers($module, $containers) {
  const $wideContainer = $containers.filter('.wide-image');
  const $narrowContainers = $containers.not($wideContainer);

  $narrowContainers.detach();
  $wideContainer.appendTo($module);
  $narrowContainers.prependTo($module);
}
}