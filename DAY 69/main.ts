//             DAY 69 CHALLENGE

console.log("*******************");
console.log(" * ENUMS *");
console.log("*******************");


enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}
const today: Days = Days.Wednesday;

console.log(`Today is ${Days[today]}`);

// console.log(Days.Sunday);

//More examples


enum TrafficLight {
    Red,
    Yellow,
    Green,
}

let currentLight: TrafficLight = TrafficLight.Red;
console.log(TrafficLight[currentLight]);

//Example with String Values:
enum TrafficLightStr {
    Red = "Red",
    Yellow = "Yellow",
    Green = "Green"
}

let currentLightStr: TrafficLightStr = TrafficLightStr.Yellow;
console.log(TrafficLightStr[currentLightStr]);
