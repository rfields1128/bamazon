DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(80) NOT NULL,
department_name VARCHAR(80),
price INT NOT NULL,
stock_quantity INT NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("USB HUB", "ELECTRONICS", 40, 10),
("TOPO CHICO", "GROCERY", 10, 800),
("FLASHLIGHT", "ELECTRONICS", 20, 20),
("ROCKET LEAGUE", "VIDEO GAMES", 60, 10),
("WATERMELON", "GROCERY", 5, 50),
("BANANAS", "GROCERY", 5, 300),
("USB-C CHARGER", "ELECTRONICS", 10, 10),
("COFFEE", "GROCERY", 15, 30),
("DARK SOULS 2", "VIDEO GAMES", 60, 10);

