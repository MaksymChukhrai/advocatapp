//src\js\service-types-script.js

function redirectToPage(selectElement) {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const url = selectedOption.getAttribute('data-url');

  if (url) {
    window.location.href = url;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const currentPageUrl = window.location.pathname.split('/').pop();
  const selectElement = document.getElementById('service');

  if (selectElement) {
    const options = selectElement.options;
    for (let i = 0; i < options.length; i++) {
      const optionUrl = options[i].getAttribute('data-url');
      if (optionUrl === currentPageUrl) {
        options[i].selected = true;
        break;
      }
    }

    // Добавляем обработчик события change
    selectElement.addEventListener('change', () => {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      const url = selectedOption.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  }
});
  