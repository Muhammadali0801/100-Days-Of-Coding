"use strict";
//DAY 15 CHALLENGE;
//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magicians = ["Alice", "David", "Chris"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}
const copymagicianArray = copyArray(magicians);
make_great(copymagicianArray);
console.log("\n orignal Array");
show_magicians(magicians);
console.log("\n Modified Array");
show_magicians(copymagicianArray);
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.;
function make_sandwich(...items) {
    console.log(`making a sandwich with: ${items.join(",")}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
//Question 45: Cars: Create detailed car objects with flexible properties.;
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("toyota", "corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunroof", true]));
