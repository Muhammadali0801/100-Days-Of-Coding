// DAY 29 CHALLENGE;
/*Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word
"code" within any given string and returns its position.*/
// This function finds where "code" first shows up in a text
function findCodePosition(str) {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}
// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with JavaScript")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.
/*Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a
 given string. It should return true if found, otherwise false.*/
// This function checks if a sentence has "JavaScript" in it
function hasJavaScript(str) {
    return str.includes("JavaScript"); // Checks for "JavaScript" and returns true or false
}
// Example: Seeing if a text mentions JavaScript
console.log(hasJavaScript("I love coding in JavaScript!")); // Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false if it's not.
//Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// This function takes out the first 10 characters from any text
function extractFirstTenChars(str) {
    return str.substring(0, 10); // Gets characters from start to position 10
}
// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("Hello, JavaScript world!")); // Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.
