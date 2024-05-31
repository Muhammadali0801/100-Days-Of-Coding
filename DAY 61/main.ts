                            // DAY 61 CHALLENGE
/*Arrow functions are a concise way to write function expressions in JavaScript ES6 (ECMAScript 2015), offering a
 different syntax and behavior compared to traditional function expressions.*/

 //Basic Syntax
//Traditional function expression:

const add = function(a, b){
    return a + b;
}

//Arrow function:

const adds = (a , b) => a + b
/*If an arrow function returns a single expression, you can omit curly braces and the return keyword.*/

const addition = (a, b) => a + b;

//Parameters
//Single Parameter:
/*If a function has only one parameter, then parentheses are optional.*/

const square = x => x * x;

//Multiple Parameters:
// If there are multiple parameters, then parentheses are mandatory.

const multiply = (a, b) => a * b;

// No Parameters:
// If there are no parameters, then empty parentheses are used.

const greet = () => console.log('Hello!');


//JavaScript specials
/*This chapter provides a brief overview of the JavaScript features we've covered so far, with a focus on subtle nuances.*/

// Code structure
//Statements are delimited with a semicolon:

console.log("Hello"); console.log("World");

//Usually, a line-break is also treated as a delimiter, so that would also work:

console.log("Hello");
console.log("World");

//Strict mode
/*To fully enable all features of modern JavaScript, we should start scripts with "use strict".
'use strict';
Without "use strict", everything still works, but some features behave in the old-fashioned, “compatible” way. We’d 
generally prefer the modern behavior.*/

//Variables
//Can be declared using:

let a = "let allows for reassignment";
const b = "constant, can’t be changed";
var c = "old-style, will see later";

//A variable name can include:

/*A variable name can include:

Letters and digits, but the first character may not be a digit.
Characters $ and _ are normal, on par with letters.
Non-Latin alphabets and hieroglyphs are also allowed, but commonly not used.
Variables are dynamically typed. They can store any value:*/

// let x = 5;
// x = "John";

/*There are 8 data types:

number for both floating-point and integer numbers,
bigint for integer numbers of arbitrary length,
string for strings,
boolean for logical values: true/false,
null – a type with a single value null, meaning “empty” or “does not exist”,
undefined – a type with a single value undefined, meaning “not assigned”,
object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.*/







