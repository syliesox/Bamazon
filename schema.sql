DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products( 
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DECIMAL(5,2),
stock_quantity INTEGER(11),
primary key(item_id)
);

SELECT * FROM products;


