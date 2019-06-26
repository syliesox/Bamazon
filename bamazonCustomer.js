// Required NPM Packages
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(error) {
    if (error) throw error;
    displayProducts();
});

function displayProducts() {
    connection.query("SELECT * FROM products", function(error, res) {
        if (error) throw error;

        console.log("============================");
        console.log("Current Inventory: ");
        console.log("============================");
        for (i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id + ", Product Name: " + res[i].product_name + " Department: " + res[i].department_name + " Price: $" + res[i].price + "In Stock: " + res[i].stock_quantity);

            // console.log("Item ID: " + res[i].item_id);
            // console.log("Product Name: " + res[i].product_name);
            // console.log("Department: " + res[i].department_name);
            // console.log("Price: $" + res[i].price);
            // console.log("In Stock: " + res[i].stock_quantity);
            // console.log("============================")
        };
    })
}
