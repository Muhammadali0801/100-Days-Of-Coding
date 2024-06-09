//          DAY 66 CHALLENGE
console.log("******************\n");
console.log("* UNION TYPES *\n");
console.log("******************\n");
var myFavoriteNumber;
myFavoriteNumber = "Five"; // Valid assignment
console.log(myFavoriteNumber);
myFavoriteNumber = 5;
console.log(myFavoriteNumber); // Valid assignment
// Uncommenting the line below would result in a TypeScript error
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.
console.log("******************\n");
console.log(" * LITERAL TYPES *\n");
console.log("******************\n");
var direction;
function setColor(color) {
    //...
}
console.log("******************\n");
console.log(" * NULLABLE TYPES *\n");
console.log("******************\n");
var userName = "Glicher"; // The variable can hold a string or null
var ageEx = null; // The variable can hold a number or null
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest! ");
    }
    else {
        console.log("Hello, ".concat(username, "! "));
    }
}
greetUser("Glicher");
greetUser(null);
console.log("******************\n");
console.log(" * TYPE ALIAS *\n");
console.log("******************\n");
var myName = "Glicher";
var myValue = 10;
var alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
var bob = {
    name: "Bob",
    age: 25,
};
console.log(alice);
console.log(bob);
