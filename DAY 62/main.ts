//             DAY 62 CHALLENGE

/*What is TypeScript?
TypeScript is a programming language developed by Microsoft. It's a superset of JavaScript, which means it builds on
 JavaScript by adding new features.*/

 /*Why Use TypeScript?
Better Code Quality: TypeScript adds types to JavaScript. This helps catch errors early during development, making
 your code more reliable and easier to understand.

Improved Tooling: With TypeScript, you get better autocompletion, navigation, and refactoring in your code editor.

Modern JavaScript Features: TypeScript supports all the latest JavaScript features and more, even if your target
 environment (like an old browser) doesn’t support them yet.*/


 //Key Features

/* Static Typing: You can define what types of values (like numbers, strings, or objects) are expected in different parts 
of your code. This helps catch mistakes early.*/

let name1: string = 'John'; // name must be a string
let age: number = 30; // age must be a number

/*Type Inference: TypeScript can often figure out the type for you, even if you don’t explicitly provide it.*/

let greeting = 'Hello'; // TypeScript infers that greeting is a string

//How to Get Started

//Install TypeScript: You can install it using npm (Node Package Manager).

//npm install -g typescript

//Write TypeScript Code: Create a file with a .ts extension and write your TypeScript code.

let message: string = 'Hello, TypeScript!';
console.log(message);

//Compile to JavaScript: Use the TypeScript compiler (tsc) to convert your TypeScript code to JavaScript.

// tsc main.ts

//This will generate a .js file that you can run in any JavaScript environment.









