//          DAY 57 CHALLENGE
// Comparison in javaScript
//String comparison
//To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
console.log("Z" > "A"); //true
console.log("Glow" > "Glee"); //true
console.log("Bee" > "Be"); // true
//Comparison of different types
console.log("2" > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1);
// Strict equality
/*A strict equality operator === checks the equality without type conversion.

In other words, if a and b are of different types, then a === b immediately returns false without an
 attempt to convert them.

Let’s try it:*/
console.log(0 === false); // false, because the types are different
/*Conditional branching: if, '?'
Sometimes, we need to perform different actions based on different conditions.

To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.*/
/*The “if” statement
The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

For example:*/
var year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015)
    alert('You are right!');
/*The “else” clause
The if statement may contain an optional else block. It executes when the condition is falsy.

For example:*/
var year = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year == 2015) {
    console.log('You guessed it right!');
}
else {
    console.log('How can you be so wrong?'); // any value except 2015
}
/*Several conditions: “else if”
Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

For example:*/
var year1 = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year1 < 2015) {
    console.log('Too early...');
}
else if (year1 > 2015) {
    console.log('Too late');
}
else {
    console.log('Exactly!');
}
