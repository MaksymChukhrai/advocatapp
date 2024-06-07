import $ from 'jquery';

// Функция для проверки ширины экрана
function isDesktopWidth() {
  return window.matchMedia('(min-width: 768px)').matches;
}

if (isDesktopWidth()) {
  $(function() {
    console.log('document ready');

    // Обработка клика на узкую карточку
    $('.card-image-pc-container.narrow-image .card-image').click(function() {
      console.log('narrow card clicked');

      const clickedCard = $(this).parent();
      console.log('clickedCard:', clickedCard);

      const row = clickedCard.parent();
      console.log('row:', row);

      const rowIndex = row.index() + 1; // индекс начинается с 1
      console.log('rowIndex:', rowIndex);

      const nextRow = $(`.card-flex-pc-container:nth-child(${rowIndex + 1})`);
      console.log('nextRow:', nextRow);

      // Изменение класса у кликнутой карточки
      clickedCard.removeClass('narrow-image').addClass('wide-image');
      $(this).removeClass(function(index, className) {
        return (className.match(/(^|\s)(\S+)-narrow(\S*)/g) || []).join(' ').replace(/-narrow/g, '-wide');
      });
      console.log('узкая карточка расширилась');

      // Изменение класса у соседних карточек
      row.find('.card-image-pc-container').not(clickedCard).each(function() {
        $(this).removeClass('wide-image').addClass('narrow-image');
        $(this).find('.card-image').removeClass(function(index, className) {
          return (className.match(/(^|\s)(\S+)-wide(\S*)/g) || []).join(' ').replace(/-wide/g, '-narrow');
        });
        console.log('соседние карточки стали узкими');
      });

      // Перемещение соседних карточек в следующий ряд
      row.find('.card-image-pc-container.wide-image').detach().appendTo(nextRow);
      console.log('соседние карточки перемещены в следующий ряд');

      // Отображение описания кейса под широкой карточкой
      clickedCard.find('.case-description-container').slideDown();
      console.log('описание кейса под широкой карточкой открыто');

      // Скрытие описания кейса у соседних карточек
      row.find('.card-image-pc-container').not(clickedCard).each(function() {
        $(this).find('.case-description-container').slideUp();
        console.log('описание кейса у соседних карточек скрыто');
      });
    });

    // Обработка клика на широкую карточку
    $('.card-image-pc-container.wide-image .card-image').click(function() {
      console.log('wide card clicked');

      const clickedCard = $(this).parent();
      console.log('clickedCard:', clickedCard);

      const row = clickedCard.parent();
      console.log('row:', row);

      const rowIndex = row.index() + 1;
      console.log('rowIndex:', rowIndex);

      const prevRow = $(`.card-flex-pc-container:nth-child(${rowIndex - 1})`);
      console.log('prevRow:', prevRow);

      // Изменение класса у кликнутой карточки
      clickedCard.removeClass('wide-image').addClass('narrow-image');
      $(this).removeClass(function(index, className) {
        return (className.match(/(^|\s)(\S+)-wide(\S*)/g) || []).join(' ').replace(/-wide/g, '-narrow');
      });
      console.log('широкая карточка стала узкой');

      // Изменение класса у соседних карточек
      row.find('.card-image-pc-container').not(clickedCard).each(function() {
        $(this).removeClass('narrow-image').addClass('wide-image');
        $(this).find('.card-image').removeClass(function(index, className) {
          return (className.match(/(^|\s)(\S+)-narrow(\S*)/g) || []).join(' ').replace(/-narrow/g, '-wide');
        });
        console.log('соседние карточки стали широкими');
      });

      // Перемещение соседних карточек в предыдущий ряд
      row.find('.card-image-pc-container.narrow-image').detach().appendTo(prevRow);
      console.log('соседние карточки перемещены в предыдущий ряд');

      // Отображение описания кейса под широкой карточкой
      row.find('.card-image-pc-container.wide-image').each(function() {
        $(this).find('.case-description-container').slideDown();
        console.log('описание кейса под широкой карточкой открыто');
      });

      // Скрытие описания кейса у кликнутой карточки
      clickedCard.find('.case-description-container').slideUp();
      console.log('описание кейса у кликнутой карточки скрыто');
    });
  });
}