// src/js/modal-order-window.js
(function() {
  console.log('начало скрипта');

  // Безопасное получение элементов
  function safeQuerySelector(selector) {
    return document.querySelector(selector);
  }

  function safeQuerySelectorAll(selector) {
    return document.querySelectorAll(selector);
  }

  // Получаем ссылки на необходимые элементы
  const backdrop = safeQuerySelector('.backdrop');
  const openModalBtn = safeQuerySelectorAll('[data-modal-open]');
  const closeModalBtn = safeQuerySelector('[data-modal-close]');

  // Функция для открытия модального окна
  function openModal() {
    if (backdrop) {
      backdrop.classList.add('is-visible');
      document.body.classList.add('modal-open');
      console.log('Открытие модального окна');
    }
  }

  // Функция для закрытия модального окна
  function closeModal() {
    if (backdrop) {
      backdrop.classList.remove('is-visible');
      document.body.classList.remove('modal-open');
      console.log('Закрытие модального окна');
    }
  }

  // Функция для закрытия модального окна при клике вне его области
  function closeModalBackdrop(event) {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  }

  // Добавляем проверку существования элементов перед навешиванием обработчиков
  function initModalListeners() {
    console.log('Инициализация listeners');
    
    if (openModalBtn && openModalBtn.length) {
      openModalBtn.forEach(btn => {
        btn.removeEventListener('click', openModal);
        btn.addEventListener('click', openModal);
      });
    }

    if (closeModalBtn) {
      closeModalBtn.removeEventListener('click', closeModal);
      closeModalBtn.addEventListener('click', closeModal);
    }

    if (backdrop) {
      backdrop.removeEventListener('click', closeModalBackdrop);
      backdrop.addEventListener('click', closeModalBackdrop);
    }

    console.log('Listeners добавлены');
  }

  // Инициализируем listeners после полной загрузки DOM
  document.addEventListener('DOMContentLoaded', initModalListeners);

  console.log('конец скрипта');
})();
