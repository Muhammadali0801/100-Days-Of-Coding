            // DAY 23 CHALLENGE;
/*Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that
 represents a number (e.g., "5"). Return their sum as a number.*/

 // This function adds a number and a string that represents a number
function addNumberAndString(number1: number, numberString: string): number {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
}

// Trying it with 10 and "5"
console.log(addNumberAndString(10, "5")); // Shows 15
// The string "5" is turned into the number 5, and then added to 10.


/*Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
 Round the result to two decimal places.*/

 // This function multiplies two decimal numbers
function multiplyDecimals(num1:number,num2: number): number {
        // Multiplies the numbers and rounds the result to two decimal places
return Math.round((num1 * num2) * 100) / 100;
}
// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1,0.2)); 
// Shows 0.02 After multiplying, we round to make the result easier to read.


/*Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the
 quotient and the remainder. Use an object to return both values.*/

 // This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(divident:number,divisor:number): {qoutient: number; remainder:number} {
        // Calculates the quotient and remainder
      let qoutient = Math.floor(divident / divisor);
      let remainder = divident % divisor;
          // Returns both in an object
return{qoutient,remainder};
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(10,3));
// Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.

