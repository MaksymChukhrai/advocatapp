//src\js\service-types-script.js

document.addEventListener('DOMContentLoaded', () => {
    const currentPageUrl = window.location.href;
    const selectElement = document.getElementById('service');
  
    // Отметить выбранный элемент в выпадающем списке
    if (selectElement) {
      const options = selectElement.options;
      for (let i = 0; i < options.length; i++) {
        const optionUrl = options[i].getAttribute('data-url');
        if (optionUrl && currentPageUrl.includes(optionUrl)) {
          options[i].selected = true;
          break;
        }
      }
    }
  });
  