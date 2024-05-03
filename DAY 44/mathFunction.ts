          // DAY 44 CHALLENGE;

//Question 130: Explain how to export a function from one JavaScript file and import it into another file.

// In file: mathFunctions.ts

export const add = (a: number, b: number): number => a + b;
// This line exports an add function from mathFunctions.ts

//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

// In file: mathFunction.ts
export class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  // Exports the Person class

  //Question 132: Discuss the difference between default and named exports in JavaScript modules.

  export default class Calculator {
    // Class definition
  }