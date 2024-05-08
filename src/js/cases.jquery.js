import $ from 'jquery';

$(document).ready(function() {
  $('.case-card-module').each(function() {
    const $module = $(this);
    const $containers = $module.find('> .card-image-container');
    const $caseCards = $module.find('.case-card');

    $caseCards.addClass('is-hidden'); // Скрываем все описания при загрузке страницы

    $containers.on('click', function() {
      const $container = $(this);
      const $caseCard = $container.find('.case-card');

      // Если контейнер уже широкий, переключаем показ/скрытие описания
      if ($container.hasClass('wide-image')) {
        $caseCard.toggleClass('is-hidden');
        return;
      }

      // Если контейнер узкий, делаем его широким
      if ($container.hasClass('narrow-image')) {
        const $wideContainer = $containers.filter('.wide-image');
        const $narrowContainers = $containers.not($wideContainer).not($container);

        $wideContainer.removeClass('wide-image').addClass('narrow-image');
        $narrowContainers.removeClass('narrow-image').addClass('wide-image');
        $container.removeClass('narrow-image').addClass('wide-image');
        $container.prependTo($module);
        $caseCard.removeClass('is-hidden');
        $caseCards.not($caseCard).addClass('is-hidden');

        reorderContainers($module, $containers);
      }
    });
  });
});

function reorderContainers($module, $containers) {
  const $wideContainer = $containers.filter('.wide-image');
  const $narrowContainers = $containers.not($wideContainer);

  $narrowContainers.detach();
  $wideContainer.prependTo($module);
  $narrowContainers.appendTo($module);
}

