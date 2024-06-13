// src/js/service-types-sidebar-script.js
import $ from 'jquery';
//заменил на 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = window.location.pathname.split('/').pop();

  const $links = $('.service-buttons li a');
  const $currentLink = $(`.service-buttons li a[href="/${currentUrl}"]`);

  if ($currentLink.length > 0) {
    Array.from($links).forEach(link => $(link).parent().removeClass('select'));
    Array.from($currentLink).forEach(link => $(link).parent().addClass('select'));
  }
});
