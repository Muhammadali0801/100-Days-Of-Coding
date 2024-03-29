"use strict";
// DAY 6 CHALLENGE;
//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guests = ["Muhammad Anas", "Abdul Ahad", "Muhammad Bilal"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Irfan");
guests.splice(guests.length / 2, 0, "Suhail");
guests.push("Laresh");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
 and you can only invite two guests.*/
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
let Places = ["Dubai", "Saudia Arabia", "Malysia", "Canada", "Turkey"];
console.log("Original order:", Places);
console.log("Alphabetical order:", [...Places].sort());
console.log("Original order:", Places);
console.log("Reverse alphabetical order:", [...Places].sort().reverse());
console.log("Original order:", Places);
Places.reverse();
console.log("Reversed order:", Places);
Places.reverse();
console.log("Original order:", Places);
Places.sort();
console.log("Alphabetical order:", Places);
Places.reverse();
console.log("Reverse alphabetical order:", Places);
