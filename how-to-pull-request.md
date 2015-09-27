# Как сделать pull request

- [Как сделать pull request в windows](how-to-pull-request.md#Как-сделать-pull-request-в-windows)
- [Как сделать pull request в linux](how-to-pull-request.md#Как-сделать-pull-request-в-linux)
- [Как сделать pull request в windows, используя git shell](how-to-pull-request.md#Как-сделать-pull-request-в-windows-используя-git-shell)

### Как сделать pull request в windows

Если у вас нет аккаунта на Github – регистрируемся по ссылке: http://github.com/join  
<img src="https://img-fotki.yandex.ru/get/6408/32167648.0/0_133851_81fbcf7_L">

Если есть – просто входим по ссылке: http://github.com/login  
<img src="https://img-fotki.yandex.ru/get/6307/32167648.0/0_13384d_1ee05872_L">

Теперь заходим в репозиторий задачи, например, первой: https://github.com/urfu-2015/verstka-tasks-1  
И делаем форк (личная копия) задачи к себе. Для этого жмём «fork» в правом верхнем углу:  
<img src="https://img-fotki.yandex.ru/get/9827/32167648.0/0_133854_3102696d_L">

Затем скачивание приложение по ссылке: https://desktop.github.com/  
<img src="https://img-fotki.yandex.ru/get/4406/32167648.0/0_13384a_dc19a8f2_L">

Устанавливаем. После установки приложение попросит настроить его. Вводим логин и пароль:    
<img src="https://img-fotki.yandex.ru/get/6202/32167648.0/0_133852_43021b38_L">

Затем полное имя и электронную почту (обычно уже верно заполнены):     
<img src="https://img-fotki.yandex.ru/get/9309/32167648.0/0_133850_5b9707d2_L">

После настройки вы попадёте в приложение. Теперь клонируем репозиторий с задачей.  
Для этого нажимаем «+» в левом верхнем углу, выбираем свой логин слева,
и репозиторий `verstka-tasks-1` справа  
<img src="https://img-fotki.yandex.ru/get/6444/32167648.0/0_133855_64f040ea_L">

Выбираем рабочую директорию (обычно уже подходящая):  
<img src="https://img-fotki.yandex.ru/get/6743/32167648.0/0_133847_fd40a417_L">

Теперь создадим ветку, в которой будем работать. Нажимаем иконку –
в окне вводим имя ветки (например, *my-solution*) и нажимаем «Create new branch»  
<img src="https://img-fotki.yandex.ru/get/15570/32167648.0/0_133845_f86f0ac7_L">

Теперь заходим в директорию (там должны быть файлы index.html и README.md):  
<img src="https://img-fotki.yandex.ru/get/4211/32167648.0/0_13384b_772b4c2e_L">

Решаем задачу, редактируем файлы в любимом редакторе. В приложении видим изменения:  
<img src="https://img-fotki.yandex.ru/get/3914/32167648.0/0_13384c_7fc4d032_L">

Когда всё готов создадим коммит. Для этого внизу в поле «summary» вводим поясняющий текст,
и нажимаем «Commit to %имя ветки%»:    
<img src="https://img-fotki.yandex.ru/get/4514/32167648.0/0_133848_4ae57cb9_L">

В результате видим сообщение:  
<img src="https://img-fotki.yandex.ru/get/16108/32167648.0/0_133849_c2daf700_L">

Таким образом мы утвердили наши изменения в локальном (склонированном) репозитории.  
Теперь необходимо отправить изменения в удалённый на github.com и сделать pull request.  
В качестве название пулл-реквеста вводим своё ФИО и нажимаем «Send Pull Request»  
<img src="https://img-fotki.yandex.ru/get/4213/32167648.0/0_13384e_eb48d131_L">

В результате видим сообщение:  
<img src="https://img-fotki.yandex.ru/get/3700/32167648.0/0_13384f_90bbfdd2_L">

**Готово!**

Если нужны правки. Вносим их в любимом редакторе, и снова делаем коммит.
Затем нажимаем «Sync» в правом верхнем углу:   
<img src="https://img-fotki.yandex.ru/get/4802/32167648.0/0_1338d3_69bf713_L">

### Как сделать pull request в linux

Если у вас нет аккаунта на Github – регистрируемся по ссылке: http://github.com/join  
<img src="https://img-fotki.yandex.ru/get/6408/32167648.0/0_133851_81fbcf7_L">

Если есть – просто входим по ссылке: http://github.com/login  
<img src="https://img-fotki.yandex.ru/get/6307/32167648.0/0_13384d_1ee05872_L">

Теперь заходим в репозиторий задачи, например, первой: https://github.com/urfu-2015/verstka-tasks-1  
И делаем форк (личная копия) задачи к себе. Для этого жмём «fork» в правом верхнем углу:  
<img src="https://img-fotki.yandex.ru/get/9827/32167648.0/0_133854_3102696d_L">

В linux git уже установлен и обычно настроен. Поэтому выполняем следующее:  

```bash
# Клонируем репозиторий (вместо gogoleff – ваш логин)
git clone https://github.com/gogoleff/verstka-tasks-1.git verstka-tasks-1

# Заходим в созданную папку с клоном
cd verstka-tasks-1

# Связываем свой репозиторий с удалённым
git remote add upstream https://github.com/urfu-2015/verstka-tasks-1.git

# Создаём ветку
git checkout -b my-solution

# Решаем задачу...

# Добавляем файлы в коммит
git add .

# Коммитим
git commit -am "Моё решение задачи"

# Отправляем в удалённый репозиторий
git push -u origin my-solution
```

Затем заходим по ссылке, где вместо my-solution – ваша ветка, вместо gogoleff – ваш логин:  
https://github.com/urfu-2015/verstka-tasks-1/compare/urfu-2015:master...gogoleff:my-solution

Нажимаем, «Create pull request».

**Готово!**

Если нужны правки. Вносим их в любимом редакторе, и снова делаем коммит.

```bash
# Добавляем файлы в коммит
git add .

# Коммитим
git commit -am "Мои правки"

# Отправляем изменения в удалённый репозиторий
git push
```

### Как сделать pull request в windows, используя git shell

Если у вас нет аккаунта на Github – регистрируемся по ссылке: http://github.com/join  
<img src="https://img-fotki.yandex.ru/get/6408/32167648.0/0_133851_81fbcf7_L">

Если есть – просто входим по ссылке: http://github.com/login  
<img src="https://img-fotki.yandex.ru/get/6307/32167648.0/0_13384d_1ee05872_L">

Теперь заходим в репозиторий задачи, например, первой: https://github.com/urfu-2015/verstka-tasks-1  
И делаем форк (личная копия) задачи к себе. Для этого жмём «fork» в правом верхнем углу:  
<img src="https://img-fotki.yandex.ru/get/9827/32167648.0/0_133854_3102696d_L">

Скачиваем приложение по ссылке: https://desktop.github.com/  
<img src="https://img-fotki.yandex.ru/get/4406/32167648.0/0_13384a_dc19a8f2_L">

Устанавливаем. После установки приложение попросит настроить его. Вводим логин и пароль:    
<img src="https://img-fotki.yandex.ru/get/6202/32167648.0/0_133852_43021b38_L">

Затем полное имя и электронную почту (обычно уже верно заполнены):     
<img src="https://img-fotki.yandex.ru/get/9309/32167648.0/0_133850_5b9707d2_L">

После установки приложения, в систему установится **git shell**. Запускаем его.

Далее смотрим [как сделать pull request в linux](how-to-pull-request.md#Как-сделать-pull-request-в-linux)
