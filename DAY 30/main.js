// DAY 30 CHALLENGE;
/*Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns
 the number rounded to the nearest integer.*/
// This function rounds a decimal number to the nearest whole number
function roundToNearestIntegar(num) {
    return Math.round(num); // Rounds the number
}
console.log(roundToNearestIntegar(4.7)); // Outputs: 5
console.log(roundToNearestIntegar(4.4)); // Outputs: 4
// This shows how the function rounds numbers either up or down.
/*Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123")
 and converts it into an actual number type.*/
// This function changes a string into a number
function convertStringToNumber(str) {
    return parseFloat(str); // Converts the string to a number
}
// Example: Turning a numeric string into a real number
console.log(convertStringToNumber("123.45")); // Outputs: 123.45
console.log(convertStringToNumber("98")); // Outputs: 98
// We're taking strings that look like numbers and turning them into actual numbers.
/*Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and
 return a boolean result.*/
// This function checks if a value is Not a Number (NaN)
function isValueNan(value) {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}
// Examples: Checking different values
console.log(isValueNan("hello")); // Outputs: true, because "hello" isn't a number
console.log(isValueNan(123)); // Outputs: false, because 123 is a number
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.
