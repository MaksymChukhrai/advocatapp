import Inputmask from 'inputmask';
console.log('Init!');

// inputmask для поля "Телефон"
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+38 (999) 999-99-99');
inputMask.mask(telSelector);

// inputmask для поля "Имя"
const nameSelector = form.querySelector('input[name="name"]');
const nameMask = new Inputmask({
  regex: "[A-Za-z]{3,15}",
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

// Добавляем обработчик события для кнопки "Передзвонити"
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    if (form.checkValidity()) { // Проверяем валидацию формы
        console.log('Validation passes and form submitted', event);

        let formData = new FormData(form);

        console.log('Form data:', formData);
        console.log('Form data as array:', Array.from(formData.entries()));

        console.log('Form data:', formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Відправлено');
                    // здесь можно добавить alert окно или другую логику для успешной отправки
                }
            }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        form.reset(); // Очищаем форму после отправки
    } else {
        // Если данные введены неправильно, добавляем стилизованное диагностическое сообщение
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Неверный формат данных. Проверьте правильность заполнения полей.';
        form.appendChild(errorMessage);

        // Через некоторое время убираем сообщение об ошибке
        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
    }
});

