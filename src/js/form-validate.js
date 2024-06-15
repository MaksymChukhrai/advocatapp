//src\js\form-validate.js

import Inputmask from 'inputmask';

// Получаем ссылки на модальные окна
const orderModal = document.querySelector('.main-order-section .backdrop');
const thanksModal = document.querySelector('.thanks-section');

// Инициализация валидации форм
initFormValidation();

function initFormValidation() {
  const forms = document.querySelectorAll('.form, .order-form form');

  forms.forEach(form => {
    const telSelector = form.querySelector('input.input-tel');
    const inputMask = new Inputmask('+38 (999) 999-99-99');
    inputMask.mask(telSelector);

    const nameSelector = form.querySelector('input.input-name');
    const nameMask = new Inputmask({
      regex: "[A-Za-zа-яА-ЯёЁ\\s]{3,30}",
      placeholder: "",
      showMaskOnHover: false,
      clearIncomplete: true,
      oncomplete: function () {
        // Валидация завершена успешно
      },
      onincomplete: function () {
        // Валидация не завершена
      },
      oncleared: function () {
        // Поле очищено
      }
    });
    nameMask.mask(nameSelector);

    form.addEventListener('submit', handleFormSubmit);
  });
}

function handleFormSubmit(event) {
  console.log('Form submitted:', event.target);
  event.preventDefault();

  const form = event.target;

  if (form.checkValidity()) {
    // Проверяем валидацию формы
    console.log('Validation passes and form submitted', event);
    const formData = new FormData(form);
    console.log('Form data:', formData);
    console.log('Form data as array:', Array.from(formData.entries()));

    // Отправляем форму на сервер с помощью AJAX
    sendFormData(formData);
  } else {
    // Если данные введены неправильно, добавляем стилизованное диагностическое сообщение
    const errorMessages = Array.from(form.querySelectorAll('.error-message'));
    errorMessages.forEach(message => message.remove());

    const invalidFields = Array.from(form.querySelectorAll(':invalid'));
    invalidFields.forEach(field => {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = 'Введіть коректні дані';
      field.parentNode.appendChild(errorMessage);
    });

    // Через некоторое время убираем сообщение об ошибке
    setTimeout(() => {
      const errorMessages = Array.from(form.querySelectorAll('.error-message'));
      errorMessages.forEach(message => message.remove());
    }, 3000);
  }
}

function sendFormData(formData) {
  // Здесь вы можете добавить код для отправки формы на сервер, например, с помощью AJAX
  // После получения ответа от сервера об успешной отправке вызовите функцию showThanksModal()

  console.log('Отправляемые данные формы:', Array.from(formData.entries()));
  // Пример с использованием XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'mail.php', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Форма успешно отправлена
      console.log('Отправлено')
      // Показать отдельное окно src\partials\includes\modal-thanks.html
      showThanksModal();
    } else {
      // Произошла ошибка
      console.error('Ошибка отправки формы');
    }
  };
  xhr.send(formData);
}

function showThanksModal() {
  // Закрываем модальное окно с формой
  orderModal.classList.remove('thanks-is-hidden');

  // Показываем модальное окно "Спасибо" (проверить код на хостинге)
  thanksModal.style.display = 'block';

  // Здесь вы можете добавить код для закрытия модального окна "Спасибо" при нажатии на кнопку "Ok"
  const okButton = thanksModal.querySelector('.btn-submit');
  okButton.addEventListener('click', () => {
    thanksModal.style.display = 'none';
  });
}

