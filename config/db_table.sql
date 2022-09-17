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
  
 CREATE TABLE IF NOT EXISTS measures_metadata (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    nextButton boolean NOT NULL,
    prevButton boolean NOT NULL,
    json_data longtext NOT NULL
  );
  -- sample insert query
  insert into measures_metadata(title, nextButton, prevButton, json_data) values("Population", 1, 0, '[{ "isSelected": false, "content": "Quota for social housing", value: 3 },
      { "isSelected": false, "content": "Low assessment rate for property tax B", value: 1 },
      { "isSelected": false, "content": "Development of new residential areas (1 point per 100 units)", value: -1 },
      { "isSelected": false, "content": "Addition of storeys to existing buildings (1 point per 100 CU)", value: -1 },
      { "isSelected": false, "content": " Redensification on open spaces (1 point per 100 units)", value: -1 },
      { "isSelected": false, "content": "Attractive design (greenery, tranquility, water, ...)", value: 2 },
      { "isSelected": false, "content": "Conversion of residential use to other use", value: -2 }
      ]');
