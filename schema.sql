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

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Scalp Massager Tool", "Personal Care", 7.49, 100),
	("Stardew Valley", "Video Games", 14.99, 100),
    ("Adult Coloring Book", "Books", 5.54, 100),
    ("Jawbone Wireless Head Phones", "Electronics", 99.95, 100),
    ("Zoodler", "Kitchen", 23.99, 100),
    ("Hammer", "Tools", 10.99, 100),
    ("Scarf", "Clothing", 10.99, 100),
    ("Candles", "Home", 18.70, 100),
    ("Catan", "Board Games", 43.60, 100),
    ("Basketball", "Sports", 20.99, 100);
    
    
    
