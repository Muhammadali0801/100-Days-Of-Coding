// DAY 63 CHALLENGE

// Multiple types in typescript

console.log("**************");
console.log(" * TYPE ANOTATIONS *");
console.log("**************");

let favoriteNumber: number = 5;
let favoriteName: string = "Ali";

console.log("My  favorite Number Is:", favoriteNumber); 
console.log("My favorite name Is:", favoriteName);

// Another way to write this code is as follows:

let favotiteNumbers: number;
let favoriteNames: string;

favotiteNumbers = 42;
favoriteNames = "Subhan, Ali";

console.log("My  favorite Numbers Is:", favotiteNumbers);
console.log("My favorite Names Is:", favoriteNames);

// DYNAMIC TYPE DETERMINATION 

console.log("***********");
console.log( "* DYNAMIC TYPE DETERMINATION *");
console.log("***********");

let greeting = "hello world";
console.log(`${greeting}\n`);

// type "any"

console.log("***********");

console.log(" * ANY TYPE * ");

console.log("***********");


let myVariable: any = 42;
myVariable = "hello world";
console.log(myVariable);

