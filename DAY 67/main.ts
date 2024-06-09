//          DAY 67 CHALLENGE

console.log("********************\n");
console.log(" * TYPE ANNOTATIONS WITH ARRAYS *\n ");
console.log("********************\n");

// Annotating an array of strings

let fruit: string[] = ["apple","banana","cherry"];

// Using a loop to process each element in the array

for (let i = 0; i < fruit.length; i++) {
    console.log(`Fruit: ${fruit[i].toUpperCase()}`);
}



console.log("********************\n");
console.log(" * TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS  *\n ");
console.log("********************\n");

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A" ,"B", "C"];

let arrayThree: (string | number) [] = [1, 2, 3, 4, 5, "A", "B", "C"];
