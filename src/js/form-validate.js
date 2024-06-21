// src/js/form-validate.js

import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded. Initializing form validation.');
  initFormValidation('.form');

  // Обработчик для кнопки отправки в модальном окне
  const modalSubmitBtn = document.querySelector('.modal-submit-btn');
  if (modalSubmitBtn) {
    modalSubmitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const modalForm = document.querySelector('.modal-order-window .form');
      if (modalForm) {
        modalForm.dispatchEvent(new Event('submit'));
      } else {
        console.error('Modal form not found');
      }
    });
  }
});

function initFormValidation(formSelector) {
  console.log(`Initializing validation for forms: ${formSelector}`);
  const forms = document.querySelectorAll(formSelector);
  
  forms.forEach((form, index) => {
    const isModal = form.closest('.modal-order-window') !== null;
    console.log(`Form ${index + 1} is modal: ${isModal}`);

    const submitButton = isModal 
      ? document.querySelector('.modal-submit-btn') 
      : form.querySelector('.btn-submit');
    const telInput = form.querySelector('[data-validate-field="tel"]');
    const nameInput = form.querySelector('[data-validate-field="name"]');
    
    // Настройка Inputmask для поля телефона
    const inputMask = new Inputmask('+38 (999) 999-99-99', {
      placeholder: "",
      showMaskOnHover: false,
      clearIncomplete: true
    });
    inputMask.mask(telInput);

    console.log(`Creating JustValidate instance for form ${index + 1}`);
    const validation = new JustValidate(form, {
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        color: 'red',
        textDecoration: 'underlined',
      },
      focusInvalidField: false,
    });

    validation
      .addField('[data-validate-field="name"]', [
        {
          rule: 'required',
          errorMessage: 'Ім\'я обов\'язкове',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Мінімальна довжина 2 символи',
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: 'Максимальна довжина 30 символів',
        },
        {
          rule: 'customRegexp',
          value: /^[A-Za-zа-яА-ЯёЁіІїЇєЄ'\s-]+$/,
          errorMessage: 'Допустимі тільки літери, апостроф та дефіс',
        },
      ])
      .addField('[data-validate-field="tel"]', [
        {
          rule: 'required',
          errorMessage: 'Номер телефону обов\'язковий',
        },
        {
          rule: 'function',
          validator: function() { 
            const value = telInput.inputmask.unmaskedvalue();
            const isValid = value.length === 10;
            console.log(`Phone number validation: ${isValid ? 'passed' : 'failed'}, Value: ${value}`);
            return isValid;
          },
          errorMessage: 'Введіть коректний номер телефону',
        },
      ]);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(`Form ${index + 1} submission attempt`);
      validation.validate().then((isValid) => {
        console.log(`Form ${index + 1} validation result: ${isValid ? 'valid' : 'invalid'}`);
        if (isValid) {
          if (isModal) {
            handleModalFormSubmit(form);
          } else {
            handleFormSubmit(form);
          }
        } else {
          console.log(`Validation failed for form ${index + 1}`);
        }
      });
    });

    // Добавляем обработчики для активации/деактивации кнопки отправки
    [nameInput, telInput].forEach(input => {
      input.addEventListener('input', () => {
        validation.revalidate().then(isValid => {
          submitButton.disabled = !isValid;
        });
      });
    });

    // Изначально деактивируем кнопку отправки
    submitButton.disabled = true;
  });
}

function handleFormSubmit(form) {
  console.log('Handling form submission');
  const formData = new FormData(form);
  console.log('Form data:', Object.fromEntries(formData));

  // Здесь должен быть код для отправки данных на сервер
  // Поскольку у вас нет бэкенда, мы просто имитируем отправку

  setTimeout(() => {
    console.log('Form data sent successfully');
    showThanksModal();
    form.reset();
  }, 1000);
}

function handleModalFormSubmit(form) {
  console.log('Handling modal form submission');
  const formData = new FormData(form);
  console.log('Modal form data:', Object.fromEntries(formData));

  // Имитация отправки данных
  setTimeout(() => {
    console.log('Modal form data sent successfully');
    
    // Закрываем модальное окно
    const modalElement = form.closest('.backdrop');
    if (modalElement) {
      modalElement.classList.remove('is-visible');
      console.log('Modal window closed');
    } else {
      console.log('Modal element not found');
    }

    // Показываем модальное окно с благодарностью
    showThanksModal();

    form.reset();
    console.log('Modal form reset after submission');
  }, 1000);
}

function showThanksModal() {
  console.log('Showing thanks modal');
  const thanksModal = document.querySelector('.thanks-backdrop');
  if (thanksModal) {
    thanksModal.classList.add('is-visible');

    const okButton = thanksModal.querySelector('.thanks-btn-submit');
    okButton.addEventListener('click', () => {
      thanksModal.classList.remove('is-visible');
      console.log('Thanks modal closed');
    });
  } else {
    console.log('Thanks modal not found');
  }
}