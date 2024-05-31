// DAY 61 CHALLENGE
/*Arrow functions are a concise way to write function expressions in JavaScript ES6 (ECMAScript 2015), offering a
 different syntax and behavior compared to traditional function expressions.*/
//Basic Syntax
//Traditional function expression:
var add = function (a, b) {
    return a + b;
};
//Arrow function:
var adds = function (a, b) { return a + b; };
/*If an arrow function returns a single expression, you can omit curly braces and the return keyword.*/
var addition = function (a, b) { return a + b; };
//Parameters
//Single Parameter:
/*If a function has only one parameter, then parentheses are optional.*/
var square = function (x) { return x * x; };
//Multiple Parameters:
// If there are multiple parameters, then parentheses are mandatory.
var multiply = function (a, b) { return a * b; };
// No Parameters:
// If there are no parameters, then empty parentheses are used.
var greet = function () { return console.log('Hello!'); };
