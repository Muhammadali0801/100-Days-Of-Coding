"use strict";
//DAY 8 CHALLENGE;
/*Question 22: Intentional Error: Try to produce an array index error in one of
 your programs. Correct the error before finishing.*/
let friends = ["ALI", "Bilal", "Huzair"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Huzair"; // Correcting the error by accessing a valid index.
console.log(friends);
//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
console.log("Is car != 'SUBARU'? I predict True.");
console.log(car != 'SUBARU');
console.log("Is car != 'subaru'? I predict False.");
console.log(car != "subaru");
console.log("Is car.length == 6 ? I predict True.");
console.log(car.length == 6);
console.log("Is car.length == 10 ? I predict False.");
console.log(car.length == 10);
console.log("Is 10  > 9 ? I predict True.");
console.log(10 > 9);
console.log("Is 10  < 9 ? I predict False.");
console.log(10 < 9);
console.log("Is car == 'subaru' && car.length == 6? predict True.");
console.log(car == "subaru" && car.length == 6);
console.log("Is car == 'Subaru' || car.length == 10? predict False.");
console.log(car == "Subaru" || car.length == 10);
//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
//Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
