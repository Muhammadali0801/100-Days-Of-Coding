"use strict";
// DAY 2 Challenge;
// QUESTION 4: Famouse Qoute: Find a qoute from a famouse person you admire. Print the qoute and the name of its author.;
console.log('Steve Jobs Once Said,"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma - which is living with the results of other peoples thinking"');
// QUESTION 5: Reapeat Exercise 4, But this time to store the famouse person's name in a variable called famouse_person.Then compose your message and store it in a new variable called message.Print your message;
let famouse_person = "Steve Jobs";
let message = `${famouse_person} Once Said,"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma - which is living with the results of other peoples thinking."`;
console.log(message);
//Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
let name1 = "\t\n muhammad Ali \t\n";
console.log(name1);
console.log(name1.trim());
