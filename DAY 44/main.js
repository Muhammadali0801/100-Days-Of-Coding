"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// In another file where you want to use the add function:
var mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(2, 3)); // Outputs: 5
// Demonstrates importing the add function from mathFunctions.ts and using it.
// In another file:
var mathFunction_2 = require("./mathFunction");
var alice = new mathFunction_2.Person("Alice");
alice.greet(); // Outputs: Hello, my name is Alice
// This code illustrates the syntax and usage differences between default and named exports.
