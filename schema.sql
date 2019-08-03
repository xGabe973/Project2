DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
USE project2_db;
CREATE TABLE shelters(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(100) NOT NULL,
address VARCHAR(250) NOT NULL,
gender VARCHAR(30) NOT NULL,
capacity INTEGER(4),
phone_number VARCHAR(15),
PRIMARY KEY (id)
);
INSERT INTO shelters(name, address, gender, capacity, phone_number)
VALUES ("The Salvation Army Center of Hope Shelter", "534 Spratt St, Charlotte, NC 28206", "Women and Youth", "340","704-348-2560"),
("Men's Shelter of Charlotte", "1210 N Tryon St, Charlotte, NC 28206", "Men", "410", "704-334-3187"),
("The Relatives, Inc.","1100 East Blvd. Charlotte, NC 28203","Youth", "0", "704-377-0602"),
("Urban Ministry Center", "945 North College Street Charlotte, NC 28206","Women and Men", "0", "704-347-0278"),
("Hoskins Park Ministries", "107 Cromer St Charlotte, NC 28104","Men", "0", "704-391-3303"),
("My Sister's House","3239 Beatties Ford Road Charlotte, NC 28216", "Women", "0", "704-200-2807"),
("Charlotte Family Housing","2410 The Plaza, Charlotte, NC 28205", "Family", "0", "704-335-5488"),
("Charlotte Men's Shelter","3410 Statesville Ave, Charlotte, NC 28206","Men", "0", "704-334-3187");
SELECT * FROM shelters;