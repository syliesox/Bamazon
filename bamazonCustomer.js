// Required NPM Packages
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnections({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " err.stack);
    }
    displayProducts();
});

function displayProducts() {
    
}