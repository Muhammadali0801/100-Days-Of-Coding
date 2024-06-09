// DAY 65 CHALLENGE
//type annotation with function
//function to calculate the area of  a ractangle
function calculateRactangleArea(long, width) {
    return long * width;
}
//calling the function with valid arguments
var long = 5;
var width = 3;
var area = calculateRactangleArea(long, width);
console.log("the area of the ractangle is : ".concat(area));
// Optional And Default Parameter
//optional Parameter
function greetingOptional(name, age) {
    if (age !== undefined) {
        console.log("hello ".concat(name, "! you are ").concat(age, " years old."));
    }
    else {
        console.log("Hello ".concat(name, "!"));
    }
}
greetingOptional("Alice");
greetingOptional("bob", 30);
// Default Parameters:
function greetDefault(name, age) {
    if (age === void 0) { age = 25; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
// Function with a rest parameter and type annotations
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 171.5
//Arrow function
var addWithArrow = function (num1, num2) { return num1 + num2; };
console.log(addWithArrow(10, 20)); //output: 30
// ANONYMOUS FUNCTION 
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20)); // Output: 30
//VOID & NEVER
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
function noReturnValue() {
    // This function doesn't return a value (implicitly returns undefined).
}
// never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // This function never exits (infinite loop).
    }
}
