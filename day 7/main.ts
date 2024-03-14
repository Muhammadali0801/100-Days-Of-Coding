//      DAY 7 CHALLENGE;
/*Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to
 print a message indicating the number of people you are inviting to dinner.*/;

let guests: string[] = ["Irfan","Muhammad Anas","Suhail","Abdul Ahad","Muhammad Bilal"];
console.log(`I am invitng ${guests.length} people to dinner.`);

/*Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers,
 countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/

let countries: string[] = ["canda","Japan","Dubai","Suadia Arabia"]
console.log("Countries I'd like to visit:", countries);

/*Question 21: Think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/


let Car: { CarShowroom: string; CarOwner: string; purchase_year: number } = {
    CarShowroom: "Honda Atlas",
    CarOwner: "Muhammad Ali",
    purchase_year: 2024
};
console.log(`Car Info: Showroom Name ${Car.CarShowroom} Car Owned by ${Car.CarOwner}, Purchasing Year ${Car.purchase_year}`);