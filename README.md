# Parcel template

Этот проект был создан при помощи Parcel. Для знакомства и настройки
дополнительных возможностей [обратитесь к документации](https://parceljs.org/).
В этот репозиторий выложены исходные файлы проекта

## Клонирование репозитория и подготовка к редакции проекта

1. Убедитесь что на компьютере установлена LTS-версия Node.js.
   [Скачайте и установите](https://nodejs.org/en/) её если необходимо.
2. Склонируйте этот репозиторий.
3. Откройте проект в VSCode, запустите терминал и свяжите проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
4. Установите зависимости проекта в терминале командой `npm install` .
5. Запустите режим разработки, выполнив команду `npm start`.
6. Перейдите в браузере по адресу [http://localhost:1234](http://localhost:1234).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Файлы и папки

- Все паршалы файлов стилей лежат и должны лежать в папке `src/sass` и импортироваться в
  файлы стилей страниц. Например, для `index.html` файл стилей называется
  `index.scss`.
- Изображения добавляйте в папку `src/images`. Сборщик оптимизирует их, но только
  при деплое продакшн версии проекта. Все это происходит в облаке, чтобы не
  нагружать твой компьютер, так как на слабых машинах это может занять много
  времени.

## Деплой на GitHub

Для настройки деплоя проекта необходимо выполнить несколько дополнительных шагов
по настройке вашего репозитория. Зайдите во вкладку `Settings` и в подсекции
`Actions` выберите выбери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистайте страницу до последней секции, в которой убедитесь что выбраны опции как
на следующем изображении и нажми `Save`. Без этих настроек у сборки будет
недостаточно прав для автоматизации процесса деплоя.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версия проекта будет автоматически собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например,
после прямого пуша или принятого пул-реквеста. 

```json
"homepage": "https://maksymchukhrai.github.io/advocatapp/index.html",
	"scripts": {
		"start": "parcel src/index.html",
		"build": "parcel build src/*.html --public-url /advocatapp/"
	},
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://maksymchukhrai.github.io/advocatapp/index.html](https://maksymchukhrai.github.io/advocatapp/index.html).

Если открывается пустая страница, убедитесь что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у вас неправильное значение свойства `homepage` или скрипта `build` в
файле `package.json`.

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.

# Сборка Production версии проекта.
Объём версии DEV может достигать 0,5 Гб за счёт многочисленных вспомогательных файлов папки `node_modules` и кеша. В то же время, собранная оптимизированная версия проекта занимает до 10 Мб места, использует традиционные настройки серверов большинства хостинг провайдеров.

## Деплой на хостинг провайдера Host IQ
Данное приложение с доменом [igor-tarasenko.com](https://igor-tarasenko.com/) хостится у провайдера [HostIQ](https://hostiq.ua/ukr/)

### Подготовка файлов и деплой на хостинг Host IQ
После того, как вы закончили работу с файлами проекта, проверили корректную работу функционала на [http://localhost:1234](http://localhost:1234), выполните следующие действия:

1. В файле `package.json` измените название корневого каталога (он же - базовый URL). А именно
базовый URL-адрес должен быть установлен в `/`, так как на сервере провайдера ваш проект находится в корневой директории вашего сайта (`/public_html`).

Измените скрипт build в файле `package.json` следующим образом:
```json
"scripts": {
    "start": "parcel src/.html",
    "build": "parcel build src/*.html --public-url /"
}, 
```
2. Удалите файлы лишнего кеша из папки `.parcel-cache` и файлы из папки `dist`.
3. В консоли VScode выполните команду `npm run build` для сборки Production версии проекта. После компиляции файлы проекта будут собраны в папке `dist`
4. Используя ftp доступ на сервер, перенесите все файлы папки `dist` на сервер в папку `/public_html`. Файл `src\mail.php` и папку `src\phpmailer` при необходимости перенесите отдельно, так как они не попадают в пакет сборки Production.
5. По окончании выгрузки файлов на сервер, проверьте работоспособность функционала, используя [домен проекта](https://igor-tarasenko.com/).
