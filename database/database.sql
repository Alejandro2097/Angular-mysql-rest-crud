CREATE DATABASE ng_person;

USE ng_person;

CREATE TABLE person (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    birth VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DESCRIBE game;