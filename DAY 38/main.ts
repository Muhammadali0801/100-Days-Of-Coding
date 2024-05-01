      // DAY 38 CHALLENGE;

//Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Creates a new Map to store countries and their capitals

const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countries);
// Logs the Map with the countries and their capitals.

//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(countries: Map<string, string>): void {
    if (countries.has("Canada")) {
      console.log(`The capital of Canada is ${countries.get("Canada")}`);
    } else {
      console.log("Canada is not in the Map.");
    }
  }
  
  // Assuming countries Map from Question 112
  logCapitalOfCanada(countries);
  // Checks if Canada is in our Map and logs the capital if it exists.

  //Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

  // Creates a Map to store student IDs (keys) and names (values)
const students = new Map<number, string>();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");

// Iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.
