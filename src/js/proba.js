import $ from 'jquery';

$(document).ready(function() {
  $('.case-card-module').each(function() {
    const $module = $(this);
    const $containers = $module.find('> .card-image-container');
    const $caseCards = $module.find('.case-card');
    const $cardImages = $module.find('.card-image');

    $caseCards.addClass('is-hidden');

    const narrowThreshold = 500; // Пороговое значение для определения узкого изображения

    function getImageClass(width, imageName) {
      const isNarrow = width < narrowThreshold;
      return isNarrow ? `${imageName}-narrow` : `${imageName}-wide`;
    }

    function handleResize() {
      $cardImages.each(function() {
        const $image = $(this);
        const imageWidth = $image.outerWidth();
        const imageName = $image.attr('class').split(' ')[1].split('-')[0];
        const imageClass = getImageClass(imageWidth, imageName);

        $image.removeClass(`${imageName}-wide ${imageName}-narrow`);
        $image.addClass(imageClass);
      });
    }

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    $cardImages.each(function() {
      resizeObserver.observe(this);
    });

    $containers.on('click', function() {
      const $container = $(this);
      const $caseCard = $container.find('.case-card');

      if ($container.hasClass('wide-image')) {
        $caseCard.toggleClass('is-hidden');
        return;
      }

      if ($container.hasClass('narrow-image')) {
        const $wideContainer = $containers.filter('.wide-image');
        const $narrowContainers = $containers.not($wideContainer).not($container);

        $wideContainer.removeClass('wide-image').addClass('narrow-image');
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

