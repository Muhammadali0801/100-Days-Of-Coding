// DAY 21 CHALLENGE;
/*Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles
using enums, and show one example.*/
// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Filling in the blueprint with an example student
var student = {
    name: "Alice",
    age: 22,
    courses: ["Math", "Science", "History"]
};
// Showing the student's information
console.log(student);
// Describing a circle using our Shape type
var circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail. 
