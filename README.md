# ExpressJS_React_SimpleCRUD_With_DOCKER


## Create Express App

$ npm init
$ npm install express mysql body-parser cors --save
$ node server.js

## Create React App

$ npx create-react-app myapp
$ npm i axios
$ npm i react
$ npm i react-router-dom

## MySQL to Docker

$ docker pull mysql/mysql-server:latest
$ docker run --name mysql1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql/mysql-server
$ docker ps
$ docker exec -it mysql1 mysql -uroot -p
$ mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
$ mysql> FLUSH PRIVILEGES;
$ mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost';
$ mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'::1';
$ mysql> FLUSH PRIVILEGES;
$ mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
$ mysql> FLUSH PRIVILEGES;

## Host Backend

$ docker build -t venom0039/backend .
$ docker run -p 5000:5000 --name backend -d venom0039/backend

## Host Frontend

$ docker build -t venom0039/frontend .
$ docker run -p 3000:3000 --name frontend -d venom0039/frontend
