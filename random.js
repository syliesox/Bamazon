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