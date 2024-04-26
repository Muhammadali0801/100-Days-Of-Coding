       // DAY 32 CHALLENGE;

// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

// Defines an array with some words
const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
// Uses .map() to create a new array with the length of each word
const lengths: number[] = words.map(word => word.length);

console.log(lengths); // Outputs: [5, 5, 10, 10]
// Each number in the new array represents the length of the corresponding word in the original array.

//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

// This function filters an array, keeping only numbers greater than 10

function filterGreaterThenTen(numbers:number[]): number[] {
    return numbers.filter(number => number > 10);
}

// Example: Filtering an array of numbers
const numbers: number[] = [5,10,15,20,25];
console.log(filterGreaterThenTen(numbers)); // Outputs: [15, 20, 25]
// The new array contains only the numbers that are greater than 10.

//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// This function calculates the sum of all numbers in an array
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Example: Calculating the sum of an array of numbers
const numbers1: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers1)); // Outputs: 15
// It adds up all the numbers in the array, resulting in a single sum value.

