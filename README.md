# Blog API

Este projeto teve o objetivo de desenvolver uma API para um blog utilizando as seguintes tecnologias:
  - Sequelize
  - Nodejs
  - Docker
  - JWT para controle de acesso.

Para executar localmente, clone o repositório e execute os seguintes comandos:

```
$ docker-compose up -d
$ docker exec -it store_manager bash
$ npm run seed
$ npm start
```
### Metodo de login

|Methodo|Rota|Descrição|
| ------ | ------ | ----- |
|post|/login|Retorna um token de acesso|

Formato de requisição para o POST:

```
{
	"email":"MichaelSchumacher@gmail.com",
	"password":"123456"
}
```

### Metodos de usuário

|Methodo|Rota|Descrição|
| ------ | ------ | ----- |
|get|/user|Retorna todos os usuários cadastrados|
|get|/user/id|Retorna um usuário cadastrado com base no id informado|
|post|/user|Cadastra um novo usuário|
|delete|/user/me|Apaga usuário logado na sessão|

Formato de requisição para o POST e PUT:
```
{
  "displayName": "Brett Wilsdtshire",
  "email": "brettd@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```

### Metodos de um blogPost

|Methodo|Rota|Descrição|
| ------ | ------ | ----- |
|get|/post|Retorna todos os posts feitos pelo usuário logado|
|get|/post/search?q=|Retorna os posts que contenham a palavra pesquisada|
|get|/post/:id|Retorna um único post a partir do id|
|post|/post|Cria um novo post|
|put|/post/:id|Edita um post a partir do id|
|delete|/post/:id|Apaga um post a partir do id|

Formato de requisição para o POST e PUT:
```
{
  "title": "New post",
  "content": "The whole text for the blog post goes here in this key",
	"categories":[1,2]
}
```
### Metodos de uma categoria

|Methodo|Rota|Descrição|
| ------ | ------ | ----- |
|get|/categories|Retorna todas as categorias cadastradas|
|post|/categories|Cria uma nova categoria para os posts|

Formato de requisição para o POST:
```
{
  "name": "Typescript"
}
```
