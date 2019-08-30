--CREANDO LA BASE DE DATOS

CREATE DATABASE crudenodejsmysql;

--usando la base de datos

use crudenodejsmysql;

--creando las tablas

CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL 
);

--PARA MOSTRAR TODAS LAS TABLAS

SHOW TABLES;

--DESCRIBE LAS TABLAS

describe customer;