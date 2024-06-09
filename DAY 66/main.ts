//          DAY 66 CHALLENGE

console.log("******************\n");
console.log("* UNION TYPES *\n");
console.log("******************\n");

let myFavoriteNumber: string | number;

myFavoriteNumber = "Five";     // Valid assignment
console.log(myFavoriteNumber);


myFavoriteNumber = 5;
console.log(myFavoriteNumber); // Valid assignment

// Uncommenting the line below would result in a TypeScript error
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.



console.log("******************\n");
console.log(" * LITERAL TYPES *\n");
console.log("******************\n");

let direction: "left" | "right" | "Up" | "Down";
function setColor(color:"Red" | " Green" | "Blue") {
    //...
}


console.log("******************\n");
console.log(" * NULLABLE TYPES *\n");
console.log("******************\n");

let userName: string | null = "Glicher"; // The variable can hold a string or null
let ageEx: number | null = null; // The variable can hold a number or null

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest! ");
        
    } else {
        console.log(`Hello, ${username}! `);
        
    }
}

greetUser("Glicher");
greetUser(null);



console.log("******************\n");
console.log(" * TYPE ALIAS *\n");
console.log("******************\n");

type MyString = string;
let myName: MyString = "Glicher"

type MyStringOrNumber = string | number;

let myValue:MyStringOrNumber = 10;

//another example

type Employe = {
    name: string;
    age: number;
    email?: string;
};

const alice: Employe = {
    name: "Alice",
    age: 30,
    email:  "alice@example.com",
};

const bob: Employe = {
    name: "Bob",
    age: 25,
  };
  
  console.log(alice);
  console.log(bob);


console.log("******************\n");
console.log(" * INTERSECTION TYPE *\n");
console.log("******************\n");


type firstType = {
    name: string;
    age: number;
};

type secondType = {
    address: string;
    phone: string;
};

type CombinedType = firstType & secondType;

const persone: CombinedType = {
    name: "John Doe",
    age: 30,
    address: "123 main st",
    phone: "123-456-7890",
};
