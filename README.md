Сверстать страницу, содержащую поле ввода и кнопку для поиска информации о погоде в заданном городе. По нажатию на кнопку происходит вызов внешнего API погоды (например, https://openweathermap.org/api). Получаемые данные (не менее 5 элементов) отрисовываются на этой же странице. Для отрисовки полученных данных должен использоваться один из клиентских шаблонизаторов (например, https://proglib.io/p/templating-languages-and-engines/). Для визуального оформления страницы используется CSS препроцессор (SASS, LESS, Stylus). Работа делается в публичном github-репозитории. Все необходимые инструкции для локального запуска проекта должны быть описаны в README.md в корне проекта.


Страницу можно найти по адресу https://juliazenovskaya.github.io/weatherforecast/

Чтобы изменить sass стили, нужно установить программу Prepros и открыть в нем проект. Далее в любом редакторе менять style.sass, style.css будет обновляться автоматически.
Чтобы сделать это без сторонних программ нужно установить sass (npm install -g sass). Далее в консоли прописать sass /имя файла sass/ /имя файла css/
