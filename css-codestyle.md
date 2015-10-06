# Требования к оформлению CSS

* Длина строки не должна превышать **80 символов**.

* В качестве отступов используем **4 пробела**.

* В конце файла оставляем пустую строку

* Имена селекторов должны отражать смысл

    ```css
    /* Плохо */
    .a,
    .foo,
    .red,
    {}

    /* Хорошо */
    .logo
    {}
    ```

* В именах селекторов можно использовать только `a-z` и `-`

    ```css
    /* Плохо */
    .user_name,
    .user-1,
    .LOGO
    {}

    /* Хорошо */
    .user-name,
    .first-user,
    .logo
    {}
    ```

* Каждый новый селектор пишем с новой строки

    ```css
    /* Плохо */
    .user-name, .first-user, .logo
    {}


    /* Хорошо */
    .user-name,
    .first-user,
    .logo
    {}
    ```

* Открывающую скобку размещаем с новой строки:

    ```css
    /* Плохо */
    .user-name {
        font-weight: bold;
    }

    /* Хорошо */
    .user-name
    {
        font-weight: bold;
    }
    ```

* Между наборами правил размещаем одну пустую строку

    ```css
    /* Плохо */
    .user-name
    {
        font-weight: bold;
    }
    .logo
    {
        float: left;
    }

    /* Хорошо */
    .user-name
    {
        font-weight: bold;
    }

    .logo
    {
        float: left;
    }
    ```

* Каждое правило размещаем в новой строке

    ```css
    /* Плохо */
    .user-name
    {
        font-weight: bold; color: #f00;
    }

    /* Хорошо */
    .user-name
    {
        font-weight: bold;
        color: #f00
    }
    ```


* Каждое правило обязательно заканчиваем `;` (даже последнее)

    ```css
    /* Плохо */
    .user-name
    {
        font-weight: bold;
        color: #f00
    }

    /* Хорошо */
    .user-name
    {
        font-weight: bold;
        color: #f00; /* <--- */
    }
    ```

* Между правилом и значением ставим `:` и один пробел

    ```css
    /* Плохо */
    .user-name
    {
        font-weight : bold;
        color:#f00;
    }

    /* Хорошо */
    .user-name
    {
        font-weight: bold;
        color: #f00;
    }
    ```

* Не используем `id` в качестве селекторов в CSS

    ```css
    /* Плохо */
    #user-name
    {
        color: #f00;
    }

    /* Хорошо */
    .user-name
    {
        color: #f00;
    }
    ```

### В HTML

* Не используем атрибут `style`, вместо него указываем атрибут `class`,
  стили пишем в CSS в отдельном файле

    ```html
    <!-- Плохо -->
    <div style="color: red;">gogoleff</div>

    <!-- Хорошо -->
    <div class="user-name">gogoleff</div>
    ```

### Рекомендованные правила

* Рекомендуется не указывать единицы измерения у нулевых значений

    ```css
    /* Плохо */
    .user-name
    {
        width: 0px;
    }

    /* Хорошо */
    .user-name
    {
        width: 0;
    }
    ```
* Рекомендуется не указывать 0 в целой части у дробных значений

    ```css
    /* Плохо */
    .user-name
    {
        font-size: 0.5em;
    }

    /* Хорошо */
    .user-name
    {
        font-size: .5em;
    }
    ```

* Рекомендуется в качестве указания цвета использовать HEX строчными буквами,  
  по возможности сокращая

    ```css
    /* Плохо */
    .user-name
    {
        color: red;
        color: #ff0000;
        color: #FF0000;
        color: rgb(255, 0, 0);
    }

    /* Хорошо */
    .user-name
    {
        color: #f00;
    }
    ```
