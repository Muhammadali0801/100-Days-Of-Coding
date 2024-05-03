       // DAY 42 CHALLENGE;

//Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

// Defines an object with a name property and a method to return its name
const person = {
    name: "Alice",
    getName: function () {
      return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
    },};
  console.log(person.getName()); // Outputs: Alice
  // This method correctly identifies and returns the object's 'name' property using 'this'.

  //Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
  // An object with multiple properties and a method that interacts with them using 'this'
const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
      return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },};
  console.log(rectangle.calculateArea()); // Outputs: 20
  // The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.

  //Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
  // Demonstrates 'this' behavior change in a nested function
const myObject = {
    property: "Value",
    outerMethod: function () {
      console.log(this.property); // Works as expected, logs "Value"
  
      const innerMethod = () => {
        console.log(this.property); /* Still accesses myObject's 'property' due to arrow function capturing
         'this' from outer scope*/
      };
      innerMethod();
    },};
  myObject.outerMethod();
  // This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.