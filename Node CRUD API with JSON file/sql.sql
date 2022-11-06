show databases;

create database `studentdb`;

use studentdb;

create table students(id int primary key auto_increment, firstName varchar(255), lastName varchar(255), age int, email varchar(255) unique);

show tables;

select * from students;

truncate table students;
drop table students;

/* 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Tharindu@1563';
flush privileges;
*/

select host, user from mysql.user;
