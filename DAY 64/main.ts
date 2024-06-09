             // Day 64 CHALLENGE
//Type Annotations With Objects
let car : {
    brand: string;
    model: string;
    year: number ;
};

car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2017,
};

console.log(car.brand,car.model,car.year);


//And there is yet another method

// Define an object type with type annotations

let cars : {
    brand: string;
    model: string; 
    year: number ;
} = {
    brand: "Honda",
    model: "Civic",
    year: 2020,
}
console.log(cars.brand,cars.model,cars.year);
 