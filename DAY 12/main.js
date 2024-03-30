"use strict";
//DAY 12 CHALLENGE;
// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
let pizzas = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(pizzas => {
    console.log(`I like ${pizzas} pizza.`);
});
console.log("I really love pizza!");
//Question 35: Animals: Highlight animals with a common trait.
let animals = ["dog", "cat", "rabbit"];
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
//Question 36: T-Shirt: Create a function for customizing t-shirts.
function make_shirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt("medium", "Code is Life");
