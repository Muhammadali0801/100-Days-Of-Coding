"use strict";
//DAY 10 CHALLENGE;
//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let Age = 25;
if (Age < 2) {
    console.log("The person is a baby.");
}
else if (Age < 4) {
    console.log("The person is a toddler.");
}
else if (Age < 13) {
    console.log("The person is a kid.");
}
else if (Age < 20) {
    console.log("The person is a teenager.");
}
else if (Age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let Favourite_fruits = ["Apples", "Banana", "Mango"];
if (Favourite_fruits.includes("Banana")) {
    console.log("You really like bananas!");
}
if (Favourite_fruits.includes("Apples")) {
    console.log("You really like apples!");
}
if (Favourite_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
//Question 30: Hello Admin: Greet users differently, especially 'admin'.
let usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
