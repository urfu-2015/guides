# JavaScript
Ниже приведен список правил, на которые мы обращаем внимание при приеме домашних заданий.

### Переменные
1. Имена переменных пишутся в `camelCase`, имена констант - заглавными буквами, разделяя подчеркиваниями.
  
  __Плохо:__
  ``` javascript
  var students_count;         // В качестве разделителя используется `_`
  var Language;               // Первая буква - прописная
  const MILLISECONDS_IN_DAY;  // Если константа объявляется через `const` пишем в `camelCase`
  ```

  __Хорошо:__
  ``` javascript
  var studentsCount;
  var language;
  var MILLISECONDS_IN_DAY;    // Если это константа
  const dayInYear;
  ```

2. Для именования переменных использовать только английские слова, не использовать транслит.
  
  __Плохо:__
  ``` javascript
  var cena;
  var ssilka;
  var процент;
  ```

  __Хорошо:__
  ``` javascript
  var price;
  var link;
  var percent;
  ```

3. Название переменной должно нести смысл, быть однозначным и понятным, отражать хранимое значение.
  
  __Плохо:__
  ``` javascript
  var a, b, c;    // Из названия не понятно для чего нужны эти переменные
  var array;      // Слишком общее навание, не понятно к чему относится
  var visible;    // Не понятно данные какого типа хранятся в переменной
  ```

  __Хорошо:__
  ``` javascript
  var beginDate, endDate;
  var posts;
  var isVisible;
  ```
  В качестве итераторов цикла допустимо использовать `i`, `j`, ...

4. Старайтесь не использовать сокращения в переменных. Но и не пишите слишком длинные имена.
  
  __Плохо:__
  ``` javascript
  var idx;
  var btn;
  var dateOfFirstPublicationForCurrentPost;
  ```

  __Хорошо:__
  ``` javascript
  var index;
  var button;
  var publishDate;
  ```

5. Объявляйте переменные максимально близко к месту использования.
  
  __Плохо:__
  ``` javascript
  var canPublish = ...;    // Далеко от места использования 
  var comments = ...;
  var overalRaiting = 0;

  for(var i = 0; i < comments.length; i++) { 
      overalRaiting += comments[i].raiting;
  }

  if (canPublish) { ... }
  ```

  __Хорошо:__
  ``` javascript
  var comments = ...;
  var overalRaiting = 0;

  for(var i = 0; i < comments.length; i++) { 
      overalRaiting += comments[i].raiting;
  }

  var canPublish = ...;    // Максимально близко к месту использования

  if (canPublish) { ... }
  ```
6. Для именования функций используйте глаголы:
  
  __Плохо:__
  ``` javascript
  function length() { ... }
  function title(name) { ... }
  ```

  __Хорошо:__
  ``` javascript
  function getLength() { ... }
  function setTitle(name) { ... }
  ```

### Кодстайл
Для проверки кодстайла используем утилиту [JSCS](https://github.com/jscs-dev/node-jscs). Чтобы запустить её на вашем компьютере
необходимо:
  1. Клонировать репозиторий с домашним заданием ([инструкция](https://github.com/urfu-2015/guides/blob/master/how-to-pull-request.md) по работе с GitHub).
  2. Зайти в консоли в папку с клонированными файлами
  3. Выполнить `npm i` для установки JSCS
  4. Выполнить `npm run lint` каждый раз, когда хотим проверить кодстайл.

Если ваш код полностью удовлетворяет кодстайлу - вы увидите сообщение `No code style errors found.`, иначе – список ошибок.
Если что-то вам не понятно, всегда можно спросить ментора :)

### Общие правила
1. Избегайте большой вложенности
  
  __Плохо:__
  ``` javascript
  function () {
      if (...) { // Первый уровень вложенности
          if (...) { // Второй уровень вложенности
              if (...) { // Третий уровень вложенности
                              // ...
                              if (...) { // Десятый уровень вложенности
                              }
              }
          }
      }
  }
  ```
  
  Старайтесь не использовать больше двух уровней вложенности
  
  __Хорошо:__
  ``` javascript
  function () {
      if (...) { // Первый уровень вложенности
          if (...) { // Второй уровень вложенности
          }
      }
  }
  ```
2. Не передавайте в функцию слишком много аргументов:
  
  __Плохо:__
  ``` javascript
  function (title, annotation, body, publishDate, tags, author) {
      // ...
  }
  ```
  
  Старайтесь передавать не больше трех параметров
  
  __Хорошо:__
  ``` javascript
  function (postData, author, metaData) {
      // ...
  }
  ```
3. Используйте строгий режим.

  ```
  'use strict';     // Пишем вначале каждого файла
  ```
4. Если код кажется вам не очевидным - постарайтесь сделать его проще, лучше, читаемее. 
  Если даже после рефакторинга остались неочевидные места - оставьте комментарий.

5. Не используйте устаревшие конструкции языка:
  ``` javascript
  with (object) { ... }
  void 0;
  arguments.caller;
  // ...
  ```

6. Не повторяйтесь. Не пишите похожий код несколько раз, старайтесь его переиспользовать.

  __Плохо:__
  ``` javascript
  console.log('Среднее: ' + (max + min) / 2);
  // ...
  console.log('Результат: ' + (max + min) / 2);
  ```
  
  __Хорошо:__
  ``` javascript
  var average = (max + min) / 2;

  console.log('Среднее: ' + average);
  // ...
  console.log('Результат: ' + average);
  ```
