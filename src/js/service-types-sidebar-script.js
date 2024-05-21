// src/js/service-types-sidebar-script.js

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    const content = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('data-url');
            
            // Подгрузка контента услуги
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    // Извлечение контента между тегами <body>
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'text/html');
                    const newContent = doc.querySelector('#content').innerHTML;

                    content.innerHTML = newContent;

                    // Обновление истории браузера
                    history.pushState(null, '', url);

                    // Обновление активного класса
                    links.forEach(link => link.parentElement.classList.remove('select'));
                    this.parentElement.classList.add('select');
                    console.log('Added select class to', this.parentElement); // Проверка добавления класса
                })
                .catch(error => console.error('Ошибка загрузки:', error));
        });
    });

    // Обработка изменения состояния истории (при навигации назад/вперед)
    window.addEventListener('popstate', function() {
        const url = location.pathname.split('/').pop();
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const newContent = doc.querySelector('#content').innerHTML;

                content.innerHTML = newContent;

                // Обновление активного класса
                links.forEach(link => link.parentElement.classList.remove('select'));
                const activeLink = document.querySelector(`a[data-url="${url}"]`);
                if (activeLink) {
                    activeLink.parentElement.classList.add('select');
                    console.log('Added select class to', activeLink.parentElement); // Проверка добавления класса
                }
            })
            .catch(error => console.error('Ошибка загрузки:', error));
    });

    // Проверка начального состояния для текущей страницы
    const initialUrl = location.pathname.split('/').pop();
    const initialActiveLink = document.querySelector(`a[data-url="${initialUrl}"]`);
    if (initialActiveLink) {
        initialActiveLink.parentElement.classList.add('select');
        console.log('Added select class to', initialActiveLink.parentElement); // Проверка добавления класса
    }
});
