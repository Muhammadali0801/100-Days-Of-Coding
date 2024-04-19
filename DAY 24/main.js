// DAY 24 CHALLENGE;
/*Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers
 from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.*/
// This function prints numbers from 1 to 5 using a loop
function printNumberWithLet() {
    for (var i = 1; i <= 5; i++) {
        // Uses `let` for loop variable `i`
        console.log(i); // Logs numbers 1 through 5
    }
    // `i` is not accessible here, outside the loop, because it's defined with `let`
}
printNumberWithLet();
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.
/*Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try
to reassign a const-declared variable and catch the error.*/
// Using `let` for a variable that can be reassigned
var age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age);
// Trying to reassign a `const`-declared variable
var name = "Alice";
try {
    name = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
; // This message is shown
// This example illustrates that `const` prevents changing the variable once it's set.
/*Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both
 let and const. Show how variables declared inside the block are not accessible outside of it.*/
// Demonstrating block scope
{
    var blockLet = "visible inside the block";
    var blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}
try {
    console.log(blockLet); // This will fail
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst); // This will also fail
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
