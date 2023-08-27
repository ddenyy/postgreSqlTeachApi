# postgresSQL + expressJS

Учебный проект по созданию API для связи с базой данных postgreSQL
при помощи модулей 'pg', 'pg-hstore'.

## Installation

Установим зависимости для запуска проекта.
Проект работает на localhost:8080
```bash
npm install
```

## Usage

Все роуты для обращения к api идут как:

Роуты для взаимодействия с юзером **User**

1) get http://localhost:8080/api/user - получить всех пользователей
2) post http://localhost:8080/api/user - загрузить пользователя
```javascript
    {
        'name': type String,
        'surname': type String,
    }
```
3) put http://localhost:8080/api/user/:id - обновить пользователя
4) delete http://localhost:8080/api/user/:id - удалить пользователя


Роуты для взаимодействия с постами пользователей **Post**

1) post  http://localhost:8080/api/post - загрузить пост

```javascript
    {
        'title': type String,
        'content': type String,
        'userId': type INTEGER
    }
```

2) get   http://localhost:8080/api/post?id=* - получить посты юзера с id
которое передается в query параметрах (userId)

   


