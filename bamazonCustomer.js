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
    purchaseInfo();
});

function displayProducts() {
    connection.query("SELECT * FROM products", function(error, res) {
        if (error) throw error;

        console.log("============================");
        console.log("Current Inventory: ");
        console.log("============================");
        console.log("Item ID | Price | In Stock |         Product Name         |   Department ");
        for (i = 0; i < res.length; i++) {
            console.log(res[i].item_id.toString().padEnd(9), res[i].price.toString().padStart(5), res[i].stock_quantity.toString().padStart(10).padEnd(12), res[i].product_name.padEnd(30), res[i].department_name);

            // console.log("Item ID: " + res[i].item_id);
            // console.log("Product Name: " + res[i].product_name);
            // console.log("Department: " + res[i].department_name);
            // console.log("Price: $" + res[i].price);
            // console.log("In Stock: " + res[i].stock_quantity);
            // console.log("============================")
        };
        
    })
}

function purchaseInfo() {
    inquirer.prompt([item_identification_prompt, item_quantity_prompt]).then(function(answer) {
        console.log("Item selected: " + answer.type);
        console.log("Quantity indicated: " + answer.quantity);

        var type = answer.type;
        var quantity = answer.quantity;

        connection.query("SELECT * FROM products WHERE ?", {item_id: type}, function(error, products) {
            if (error) throw error;

            var availableStock = products[0].stock_quantity;
            // console.log(availableStock);
            // console.log(quantity);
            console.log("============================")
            if (availableStock >= quantity) {
                console.log("That quantity is available! :-)")
            } else {
                console.log("Sorry, insufficient quantity! :-(")
            };
            console.log("============================")
            // console.log(availableStock - quantity);
            connection.query("UPDATE products SET stock_quantity = " + (availableStock - quantity) + " WHERE item_id = " + type, function(error, res) {
                if (error) throw error;
                console.log("============================")
                console.log("INVOICE")
                var subtotal = products[0].price * quantity;
                var tax = subtotal * 0.06;
                console.log("Your Subtotal is: $" + subtotal);
                console.log("Sales Tax: $" + tax);
                console.log("Your Total is: $" + (subtotal + tax));
                console.log("Thank you for your purchase! See you next time! :-)");
                console.log("============================")
                displayProducts();
            });
        })
        connection.end;

        

    })
}

var item_identification_prompt = {
        type: "number",
        name: "type",
        message: "Which item would you like to buy? Input Item ID below",
        validate: validation
    };

var item_quantity_prompt = {
        type: "number",
        name: "quantity",
        message: "Please indicate quantity:",
        validate: validation
    };

var validation = {
    function( value ) {
        var valid = !isNaN(parseInt(value));
        return valid || "Please enter a whole number.";
    }
};
