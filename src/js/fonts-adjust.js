// Получаем все элементы с классом .case-caption
const caseCaptions = document.querySelectorAll('.case-caption');

// Функция для подстройки размера шрифта
function adjustFontSize(element) {
  const fontSize = parseInt(window.getComputedStyle(element).fontSize);
  const maxHeight = element.offsetHeight;
  const maxWidth = element.offsetWidth;
  const textHeight = element.scrollHeight;
  const textWidth = element.scrollWidth;

  // Если текст не помещается в контейнер, уменьшаем размер шрифта
  if (textHeight > maxHeight || textWidth > maxWidth) {
    element.style.fontSize = `${fontSize - 1}px`;
  }
}

// Применяем функцию adjustFontSize ко всем элементам .case-caption
caseCaptions.forEach(caption => {
  adjustFontSize(caption);
});