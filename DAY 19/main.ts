        // DAY 19 CHALLENGE;

/* Question 55: Double Numbers in an Array: Make a list of numbers. Then,
 use a trick to make a new list where each number is twice its original value.*/

 // Starts with a list of numbers
let numbers = [1, 2, 3, 4, 5];

// Doubles each number
let doubledNumbers = numbers.map(number => number * 2);

// Shows the new list of doubled numbers
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// This line takes each number, doubles it, and puts it in a new list.

/*Question 56: Keep Only Strings: Given a mix of different types of items, 
make a new list that has only the words.*/

// A mixed bag of items

let mixedArray = [1,"Apple",2,"Banana", true,"Carrot"];

// Picks out only the words

let stringsArray = mixedArray.filter(item => typeof item === "string");

// Shows the list of just words

console.log(stringsArray);// Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.


/*Question 57: Find the Average Grade: Given a list of grades, 
calculate the average grade.*/

// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.


