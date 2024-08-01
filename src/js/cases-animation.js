// Найти все карточки с изображениями
const cardImages = document.querySelectorAll('.card-image');

// Перебрать каждую карточку
cardImages.forEach(cardImage => {
    // Добавить слушатель события на изменение размеров
    cardImage.addEventListener('resize', () => {
        // Проверить, является ли карточка узкой или широкой
        const isNarrow = cardImage.classList.contains('narrow-image');
        // Получить текущий класс изображения
        const currentClass = cardImage.classList.contains('euro-wide') ? 'euro' : 'bispart';

        // Определить новый класс изображения в зависимости от текущего и типа карточки
        const newClass = isNarrow ? `${currentClass}-narrow` : `${currentClass}-wide`;

        // Удалить текущий класс изображения и добавить новый класс
        cardImage.classList.remove('euro-wide', 'euro-narrow', 'bispart-wide', 'bispart-narrow');
        cardImage.classList.add(newClass);

        // Добавить анимацию для плавного изменения ширины карточки
        cardImage.style.transition = 'width 0.3s ease-in-out';
        cardImage.style.width = isNarrow ? '100%' : 'calc((100% - 15px) / 2)';
    });
});

// Генерировать событие resize при изменении ширины карточки (можно заменить на нужное событие)
window.addEventListener('resize', () => {
    cardImages.forEach(cardImage => {
        cardImage.dispatchEvent(new Event('resize'));
    });
});
