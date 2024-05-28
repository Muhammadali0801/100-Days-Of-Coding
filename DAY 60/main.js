// DAY 60 CHALLENGE
//Functions
/*Function Declaration To create a function we can use a function declaration.
It looks like this:*/
function greet() {
    console.log('Hello everyone!');
}
// Our new function can be called by its name:
greet();
//Local variables
/*A variable declared inside a function is only visible inside that function.*/
function showMessage() {
    var message = "Hello i am typescript"; // local variable
    console.log(message);
}
showMessage(); // hello i am typescript
// console.log(message); the variable is local to function
//Outer variables
/*A function can access an outer variable as well, for example:*/
var userName = "ALi";
function userGreet() {
    var messages = "hello," + userName;
    console.log(messages);
}
userGreet(); // ali
// Parameters
/*We can pass arbitrary data to functions using parameters.In the example below,
 the function has two parameters: from and text.*/
function showDiffMessage(from, text) {
    console.log(from + ': ' + text);
}
showDiffMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showDiffMessage('Ann', "what's up?"); // Ann: What's up? (**)
//Default values
/*You can assign default values to parameters. If the parameter is not provided,
 the default value is used.*/
function greet12(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    console.log("".concat(greeting, ", ").concat(name, "!"));
}
greet12("Alice"); // "Hello, Alice!"
greet12("good morning"); // "Good morning, Alice!"
//Returning a value
/*You can explicitly specify the return type of a function. This helps to
catch errors where the function might return a value of an unexpected type.*/
function add(a, b) {
    return a + b;
}
var sum = add(2, 3); // sum is 5
console.log(sum);
//Function expressions
/*Function expressions are a way to define a function in JavaScript and store
 it in a variable. Their syntax is slightly different from function declarations
  and they provide flexibility, such as using inline anonymous functions.*/
var myFunc = function () {
    //function body
    console.log("This is a function expressions.");
};
//   Funtion is a value
/*In JavaScript, functions are considered first-class citizens. This means that
 functions are treated like values. They can be stored in variables, passed as
  arguments, and returned from other functions.*/
var sayHello = function () {
    console.log("Hello!");
};
//Passing as Arguments: Functions can be passed as arguments to other functions.
function greeting(callback) {
    callback();
}
greeting(function () {
    console.log("Hi there!");
});
//Callback functions
//Callback functions are used when we need to perform some other task after executing a certain operation.
function fetchData(callback) {
    // Simulated asynchronous operation (e.g., fetching data from server)
    setTimeout(function () {
        var data = "This is the fetched data.";
        // Calling the callback function with the fetched data
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}
// Using fetchData function with a callback
fetchData(function (result) {
    console.log("Data received:", result);
});
