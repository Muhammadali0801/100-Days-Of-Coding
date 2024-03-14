// DAY 6 CHALLENGE;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ["Muhammad Anas", "Abdul Ahad", "Muhammad Bilal"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Irfan");
guests.splice(guests.length / 2, 0, "Suhail");
guests.push("Laresh");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
 and you can only invite two guests.*/
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
var Places = ["Dubai", "Saudia Arabia", "Malysia", "Canada", "Turkey"];
console.log("Original order:", Places);
console.log("Alphabetical order:", __spreadArray([], Places, true).sort());
console.log("Original order:", Places);
console.log("Reverse alphabetical order:", __spreadArray([], Places, true).sort().reverse());
console.log("Original order:", Places);
Places.reverse();
console.log("Reversed order:", Places);
Places.reverse();
console.log("Original order:", Places);
Places.sort();
console.log("Alphabetical order:", Places);
Places.reverse();
console.log("Reverse alphabetical order:", Places);
