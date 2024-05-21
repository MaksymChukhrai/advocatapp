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
                    links.forEach(link => link.classList.remove('select'));
                    this.classList.add('select');
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
                links.forEach(link => link.classList.remove('select'));
                document.querySelector(`a[data-url="${url}"]`).classList.add('select');
            })
            .catch(error => console.error('Ошибка загрузки:', error));
    });
});
