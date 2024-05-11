        //  DAY 49 CHALLENGE;
//Question 145: Create a function that accepts a callback and invokes it with some arguments.
    
// This function accepts a callback function and invokes it with given arguments
function executeCallback(
    callback: (arg1:number, arg2:number) => void,
    arg1: number,
    arg2: number,
): void {
    callback(arg1, arg2);  // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const add = (a: number, b: number) => {
    console.log(a + b);  // Outputs the sum of a and b
};
executeCallback(add, 5, 3);   // Outputs: 8
// Demonstrates invoking a callback function with arguments to perform an addition.

//Question 146: Show an example of a callback function used to filter an array of numbers.

// This array of numbers will be filtered
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 5
const filteredNumbers: number[] = numbers.filter((number) => number > 5);
console.log(filteredNumbers);  // Outputs: [6, 7, 8, 9, 10]
// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.

//Question 147: Explain how to handle errors in a callback pattern.

// Function that uses a callback pattern, including error handling
function fetchData(
    callback: (error: Error | null, data?: string) => void
    ): void {
      // Simulating an error condition
      const error = new Error("Failed to fetch data");
      const data = "some data";
        // Simulate fetching data with a chance of error
        if(Math.random() > 0.5) {
            callback(null, data); // No error, data is fetched successfully
        } else {
            callback (error);  // Passes error to the callback
        }
}
// Using the fetchData function with error handling in the callback
fetchData((error, data) => {
    if (error) {
      console.error(error.message); // Handles the error
    } else {
      console.log(data); // Processes the data
    }
  });
  // Demonstrates a callback pattern where errors are handled gracefully.