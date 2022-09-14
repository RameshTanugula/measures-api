CREATE DATABASE measures_db;

CREATE TABLE IF NOT EXISTS measures (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    years varchar(255)
  );

  CREATE TABLE IF NOT EXISTS users (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userName varchar(255) NOT NULL,
    password varchar(255)
  );
  
  insert into users (userName, password) values('Admin', 'Admin@123');
