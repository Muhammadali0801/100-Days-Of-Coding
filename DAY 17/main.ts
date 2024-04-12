//        DAY 17 CHALLENGE;

/* Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
 It should log each hobby with a statement saying you enjoy that hobby.*/

// Defines a function that accepts multiple hobbies as arguments

function myHobbies(...hobbies: string[]) {
  // Loops through each hobby in the array
  hobbies.forEach((hobby) => {
    // Logs a statement for each hobby
    console.log(`I enjoy ${hobby}.`);
  });
}
// Calls the function with three hobbies
myHobbies("Reading", "Coding", "cycling");

/* Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your
 ideal day. Include at least three different activities.*/

// Using template literals to define a multiline string
let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a job.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;

// Logging the multiline string to the console
console.log(myIdealDay);

/*Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
 and refactor it into an arrow function.*/

// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number =>
  width * height;

// Example usage of the arrow function
console.log(calculateAreaArrow(5, 7)); // Logs the area of the rectangle
