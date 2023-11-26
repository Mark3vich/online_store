 Реализация прототипа веб-приложения интернет-магазина.
 # Этап 1 
 1) Измените в файле appsettings.json строку DefaultConnection под себя.
 2) Создайте модель для бд командой **dotnet ef migrations add InitialCreate**.
 3) Сделайте миграцию командой **dotnet ef database update**
 # Этап 2
 Откройте pgAdmin или другой интерфейс субд и загрузите данные из excel таблицы в бд. Файл лежит в папке data_excel под именем main.csv.
 Пример где находится в pgAdmin функция для загрузки данных из таблицы:
 
 ![getImport](https://github.com/Mark3vich/online_store/assets/127986058/a722858d-822e-46b3-b82f-2f8af6090377)

 Далее в открывшемся интерфейсе находим путь до нашего файла и нажимаем ок. 
 
![putCsv](https://github.com/Mark3vich/online_store/assets/127986058/b5bd0f4b-cd6d-4ef6-8321-ab39e1745c95)

 # Этап 3
 Для того чтобы запустить веб-приложения потребуется:
 **PowerShall//Git Bash**
 
 1.1) Перейти в папку **frontend** в терминале. Это можно сделать с помощью данной команды: **(ваш путь к папке frontend) cd frontend**.
 
 ![climbFolder](https://github.com/Mark3vich/online_store/assets/127986058/ffc2c6eb-e49b-4cad-8c11-d140d7b17b9c)

 1.2)  Либо через Shift + RMB в папке frontend
 
![anotherWay](https://github.com/Mark3vich/online_store/assets/127986058/1902e705-cd49-4033-971d-ae46b946bb96)

 2) Написать команду: **ng serve -o**. Будет развернут проект в браузере по ссылке: **http://localhost:4200/**
 3) Выйти из папки **frontend** с помощью данной команды: **cd ../**
 4) Перейти в папку **backend** в терминале. Это можно сделать с помощью данной команды: **cd backend**
 5) Написать команду: **dotnet run**. Будет развернут проект в браузере по ссылке: **http://localhost:5166/swagger/index.html**
 6) Не забудьте открыть приложение postgress у себя на компьютере.

# Решение возможных проблем 
Если на клиенте приложения не отображаются данные, то проверьте запущен ли у вас сервер и бд. Проблема должна решиться.
