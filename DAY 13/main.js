"use strict";
//DAY 13 CHALLENGE:
//Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
//Question 38: Cities: Describing cities with a function.;
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("karachi");
describe_city("Lahore");
describe_city("tokyo", "Japan");
//Question 39: City Names: Formatting city-country pairs.
function city_country(city, country) {
    return `${city} ,  ${country}`;
}
console.log(city_country("lahore", "pakistan"));
console.log(city_country("tokyo", "japan"));
console.log(city_country("paris", "france"));
