# EditorConfig

В каждую задачу мы будем размещать файл `.editorconfig`. Этот файл содержит
__базовые правила__ оформления кода (codestyle), понятные для большинства
редакторов: WebStorm, Notepad++, Sublime, Atom, ...

Обычно редакторы, обнаруживая этот файл, сами приводят ваш код в порядок.
Для чаще всего необходимо установить модуль для редактора:

- __WebStorm__   
  Он уже там есть, достаточно включить его в настройках «Настройки -> Плагины -> Editorconfig».

- __Notepad++__    
  Устанавливаем через менеджер плагинов «Plugins -> Plugin Manager -> Show Plugin Manager -> Available».
  Находим «EditorConfig» и нажимаем «Install».

- __Sublime__   
  Устанавливаем плагин https://packagecontrol.io/search/Editorconfig

- __Atom__   
  Устанавливаем плагин https://atom.io/packages/editorconfig

Сам файл содержит следующие правила:  

```ini
# Для всех файлов
[*]

# Установить кодировку utf-8
charset = utf-8

# В качестве переноса строки использовать символ LF (line feed)
end_of_line = lf

# В качестве отступов использовать 4 пробела
indent_size = 4
indent_style = space

# В конце файла добавить пустую строку
insert_final_newline = true

# В конце каждой строки удалять лишниее пробелы
trim_trailing_whitespace = true
```

Подробнее можно почитать на http://editorconfig.org/  

![](http://editorconfig.org/logo.png)
