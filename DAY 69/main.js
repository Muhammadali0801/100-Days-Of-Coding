//             DAY 69 CHALLENGE
console.log("*******************");
console.log(" * ENUMS *");
console.log("*******************");
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var today = Days.Wednesday;
console.log("Today is ".concat(Days[today]));
// console.log(Days.Sunday);
//More examples
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));
var currentLight = TrafficLight.Red;
console.log(TrafficLight[currentLight]);
//Example with String Values:
var TrafficLightStr;
(function (TrafficLightStr) {
    TrafficLightStr["Red"] = "Red";
    TrafficLightStr["Yellow"] = "Yellow";
    TrafficLightStr["Green"] = "Green";
})(TrafficLightStr || (TrafficLightStr = {}));
var currentLightStr = TrafficLightStr.Yellow;
console.log(TrafficLightStr[1]);
