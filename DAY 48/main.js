// DAY 48 CHALLENGE;
//Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
// Creates a Promise that resolves with "Hello, World!" after 2 seconds
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
// After 2 seconds, "Hello, World!" will be logged to the console.
//Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
//Creates a Promise that either resolves or rejects based on a condition
var conditionPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5; // Randomly choose success or failure
    if (success) {
        resolve("success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionPromise
    .then(function (result) { return console.log(result); }) // Handles a successful resolution
    .catch(function (error) { return console.log(error.message); }); // Handles a rejection
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
//Question 144: Explain the use of the Promise.all() method with an example.
// Example using Promise.all to wait for multiple promises to resolve
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values); // Outputs: [3, 42, "foo"]    
});
// This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.
