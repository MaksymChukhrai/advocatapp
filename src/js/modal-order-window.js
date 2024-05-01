//src\js\modal-order-window.js
// Получаем ссылки на необходимые элементы
const backdrop = document.querySelector('.backdrop');
const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const submitModalBtn = document.querySelector('[data-modal-submit]');

// Функция для открытия модального окна
function openModal() {
  
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  console.log('Клик по кнопке открытия модального окна');
}

// Функция для закрытия модального окна
function closeModal() {
    
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  console.log('Клик по кнопке закрытия модального окна');
}

// Добавляем обработчики событий для открытия модального окна
openModalBtn.forEach(btn => btn.addEventListener('click', openModal));

// Добавляем обработчики событий для закрытия модального окна
closeModalBtn.addEventListener('click', closeModal);
submitModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModalBackdrop);

// Функция для закрытия модального окна при клике вне его области
function closeModalBackdrop(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

