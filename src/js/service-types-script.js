//src\js\service-types-script.js


function redirectToPage(selectElement) {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const url = selectedOption.getAttribute('data-url');

  if (url) {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const prefix = isLocalhost ? '' : '/advocatapp';
    const fullUrl = `${window.location.origin}${prefix}/${url}`;
    window.location.href = fullUrl;
  }
}

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
  