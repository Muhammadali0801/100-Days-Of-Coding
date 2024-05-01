//DAY 40 CHALLENGE;

//Question 118: Write a loop that logs numbers from 1 to 10 to the console.

// This loop logs numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i); // Logs the current value of i
}
// Each iteration increases the value of i by 1, logging it until it reaches 10.

//Question 119: Create a while loop that logs "Hello, World!" 5 times.

// Initializes a counter
let count = 0;
// This while loop runs until count is 5
while (count < 5) {
  console.log("hello world!"); // Logs "Hello, World!"
  count++; // Increments count by 1
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.

//Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

// Defines an array of favorite movies
const favoriteMovies: string[] = ["Inception","The Matrix","Interstellar","The Prestige",];

// Uses a for...of loop to iterate through favoriteMovies
for (const movie of favoriteMovies) {
  console.log(movie); // Logs each movie name
}
// Each movie in the array is logged to the console, one at a time.
