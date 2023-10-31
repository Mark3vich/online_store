 Реализация прототипа веб-приложения интернет-магазина.
 # Этап 1 
 1) Измените в файле appsettings.json строку DefaultConnection под себя.
 2) Создайте модель для БД.
 3) Сделайте миграцию командой **dotnet ef database update**
 # Этап 2
 Откройте pgAdmin или другой интерфейс субд и загрузите данные из excel таблицы в бд. Файл лежит в папке data_excel под именем main.csv.
 Пример где находится в pgAdmin функция для загрузки данных из таблицы:
 ![Снимок экрана 2023-10-31 215700](https://github.com/Mark3vich/course_paper/assets/93819826/e695ebe1-d509-4cf1-98da-51bbcd8534a7)
 
 Далее в открывшемся интерфейсе находим путь до нашего файла и нажимаем сохранить. 
 # Этап 3
 Для того чтобы запустить веб-приложения потребуется:
 **PowerShall//Git Bash**
 
 1.1) Перейти в папку **frontend** в терминале. Это можно сделать с помощью данной команды: **cd frontend**.
 
 ![1323232](https://github.com/Mark3vich/course_paper/assets/127986058/4b241470-edfe-4559-bc0b-3f520c043952)
 
 1.2)  Либо через Shift + RMB в папке frontend
 
![afsfasfsafas](https://github.com/Mark3vich/course_paper/assets/127986058/2fe214d6-c77e-4fdd-ba24-90c222917983)

 2) Написать команду: **ng serve -o**. Будет развернут проект в браузере по ссылке: **http://localhost:4200/**
 3) Выйти из папки **frontend** с помощью данной команды: **cd ../**
 4) Перейти в папку **backend** в терминале. Это можно сделать с помощью данной команды: **cd backend**
 5) Написать команду: **dotnet run**. Будет развернут проект в браузере по ссылке: **http://localhost:5166/swagger/index.html**
 6) Не забудьте открыть приложение postgress у себя на компьютере.

# Решение возможных проблем 
Если на клиенте приложения не отображаются данные, то проверьте запущен ли у вас сервер и бд. Проблема должна решиться.
