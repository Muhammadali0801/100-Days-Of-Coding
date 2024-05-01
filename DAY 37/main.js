// DAY 37 CHALLENGE;
//Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Checks the current hour and logs "Good Morning" if it's before 12 PM
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
// This simple check helps us greet users appropriately based on the time of day.     
//Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(85)); // Outputs: B
console.log(assignGrade(55)); // Outputs: F
//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// This function categorizes a person's age group
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(12)); // Outputs: child
console.log(categorizeAge(18)); // Outputs: teenager
console.log(categorizeAge(25)); // Outputs: adult
// Based on the age provided, we log the corresponding age group.
