"use strict";
// DAY 44 CHALLENGE;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.add = void 0;
//Question 130: Explain how to export a function from one JavaScript file and import it into another file.
// In file: mathFunctions.ts
var add = function (a, b) { return a + b; };
exports.add = add;
// This line exports an add function from mathFunctions.ts
//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
// In file: mathFunction.ts
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
// Exports the Person class
//Question 132: Discuss the difference between default and named exports in JavaScript modules.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    return Calculator;
}());
exports.default = Calculator;
