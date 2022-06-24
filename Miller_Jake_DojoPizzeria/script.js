function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional",["mozzerella"],["pepperoni","sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara",["mozzerella", "feta"], ["mushrooms","olives", "onions"]);
console.log(p2);
var p3 = pizzaOven("thin", "alfredo",["mozzerella","parmesun"],["chicken","bacon"]);
console.log(p3);
var p4 = pizzaOven("pan", "bbq",["mozzerella", "parmesun"], ["chicken","sausage", "onions"]);
console.log(p4);

// var crustType = ["deep dish", "thin","pan", "original", "stuffed"];

// var sauceType = ["traditional", "marinara", "alfredo", "bbq", "ranch"];

// var cheeses = ["mozzerella","feta","parmesun","cheddar","monterey-jack"];

// var toppings = ["pepperoni", "sausage", "beef", "pinapple", "chicken", "bacon", "onions", "mushrooms", "green peppers", "tomatoes"];
