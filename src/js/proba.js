// js\modal-window-valid.js
console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+38 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введіть ім`я!'
    }
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Телефон обов`язковий',
      
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введіть коректний телефон',
    },
  ])
  .addField('.checkbox', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Підтвердіть згоду',
    },
  ])
  
  
  .onSuccess((event) => {
    event.preventDefault(); // Предотвращаем закрытие окна по умолчанию
  
    if (validation.validate()) { // Проверяем валидацию формы
      console.log('Validation passes and form submitted', event);
  
      let formData = new FormData(event.target);
  
      console.log('Form data:', formData);
      console.log('Form data as array:', Array.from(formData.entries()));
  
      console.log('Form data:', formData);
  
      let xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Відправлено');
            alert('Слава Україні! Ваше повідомлення відправлено.👍');
           
            window.location.reload();
          } else {
            alert('Невдача! Введіть коректні дані і спробуйте знову.😕');
            
          }
        }
      }
  
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
  
      event.target.reset();

    }
  });
 
  