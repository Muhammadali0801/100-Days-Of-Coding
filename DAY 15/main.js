//DAY 15 CHALLENGE;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magicians = ["Alice", "David", "Chris"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
var copymagicianArray = copyArray(magicians);
make_great(copymagicianArray);
console.log("\n orignal Array");
show_magicians(magicians);
console.log("\n Modified Array");
show_magicians(copymagicianArray);
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.;
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with: ".concat(items.join(","), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
//Question 45: Cars: Create detailed car objects with flexible properties.;
// function make_car(manufacturer:string, model: string,...options:[string,any][]):Object{
//     let car = {manufacturer, model};
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// } 
// console.log(make_car("toyota","corolla",["color", "red"],["year",2020]));
// console.log(make_car("ford","fiesta",["color", "blue"],["sunroof",true]));
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
