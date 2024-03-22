"use strict";
// DAY 11 CHALLENGE;
//Question 31: No Users: Ensure your user list isn’t empty.
let username = [];
if (username.length === 0) {
    console.log("We need to find some users!");
}
else {
}
//Question 32: Checking Usernames: Ensure uniqueness in usernames.
let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
//Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
