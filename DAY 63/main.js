// DAY 63 CHALLENGE
// Multiple types in typescript
console.log("**************");
console.log(" * TYPE ANOTATIONS *");
console.log("**************");
var favoriteNumber = 5;
var favoriteName = "Ali";
console.log("My  favorite Number Is:", favoriteNumber);
console.log("My favorite name Is:", favoriteName);
// Another way to write this code is as follows:
var favotiteNumbers;
var favoriteNames;
favotiteNumbers = 42;
favoriteNames = "Subhan, Ali";
console.log("My  favorite Numbers Is:", favotiteNumbers);
console.log("My favorite Names Is:", favoriteNames);
// DYNAMIC TYPE DETERMINATION 
console.log("***********");
console.log("* DYNAMIC TYPE DETERMINATION *");
console.log("***********");
var greeting = "hello world";
console.log("".concat(greeting, "\n"));
// type "any"
console.log("***********");
console.log(" * ANY TYPE * ");
console.log("***********");
var myVariable = 42;
myVariable = "hello world";
console.log(myVariable);
