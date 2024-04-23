// DAY 27 CHALLENGE;
/*Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for
 make, model, and year. Then, show how you can access the model property of the car.*/
// This sets up an object for a car with specific details
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Accessing and showing the car's model
console.log(car.model); // Outputs: Corolla
// We use dot notation (car.model) to get the model of the car from our object.
/*Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update
 the year property to 2021. Show how to perform these operations.*/
// Starting with our car object
var car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};
// Adding a new property 'color' and updating 'year'
car1.color = "blue"; // Adds a new property 'color'
car1.year = 2021; // Updates the 'year' property
// Showing the updated car object
console.log(car1); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.
/*Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all
 of its properties and values.*/
// This function shows every detail about an object
function logObjectProperties(obj) {
    for (var property in obj) {
        // Loops through each property in the object
        console.log("".concat(property, ": ").concat(obj[property]));
        // Shows the property name and its value
    }
}
// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// It tells us each piece of information stored about the car.
