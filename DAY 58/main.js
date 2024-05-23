//DAY 58 CHALLENGE
//Logical operators
/*JavaScript includes three main logical operators: && (AND), || (OR), and ! (NOT). These operators are used to work
 with Boolean values, but they can also be applied to non-Boolean values due to JavaScript's type coercion.

AND Operator (&&)
The AND operator returns true if both operands are true. If either operand is false, it returns false.*/
var a = true;
var b = false;
var resultAnd = a && b; // false, because b is false
console.log(resultAnd); // Output: false
/*OR Operator (||)
The OR operator returns true if at least one of the operands is true. If both operands are false, it returns false.*/
var c = true;
var d = false;
var resultOr = c || d; // true, because c is true
console.log(resultOr); // Output: true
/*NOT Operator (!)
The NOT operator returns the opposite Boolean value of its operand. If the operand is true, it returns false, and
 vice versa.*/
var e = true;
var resultNot = !e; // false, because e is true
console.log(resultNot); // Output: false
/*The nullish coalescing operator (??) is a logical operator introduced in JavaScript (ECMAScript 2020) to handle
 default values. It is used to provide a fallback value when dealing with null or undefined. It is particularly useful
  when you want to treat null and undefined differently from other falsey values like 0, false, or "" (empty string).

  Syntax*/
//   let result = value1 ?? value2;
var name1 = null;
var defaultName = "Guest";
var displayName = name1 !== null && name1 !== void 0 ? name1 : defaultName;
console.log(displayName); // Output: "Guest"
