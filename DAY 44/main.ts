// In another file where you want to use the add function:
import { add } from "./mathFunction";

console.log(add(2, 3)); // Outputs: 5
// Demonstrates importing the add function from mathFunctions.ts and using it.

// In another file:
import { Person } from "./mathFunction";

const alice = new Person("Alice");
alice.greet(); // Outputs: Hello, my name is Alice
// This snippet imports the Person class and uses it to create an instance.

// Importing named exports:
import { utilOne, utilTwo } from "./until";

// Importing a default export:
import Calculator from "./mathFunction";

// This code illustrates the syntax and usage differences between default and named exports.