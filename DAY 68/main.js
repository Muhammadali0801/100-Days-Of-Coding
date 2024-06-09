//         DAY 68 CHALLENGE
console.log("******************\n");
console.log(" * TUPLE *\n ");
console.log("******************\n");
// Defining a tuple type
var article = [11, "title One", true];
// Assigning a new tuple value to the `article` variable
article = [12, "Tittle Two", false];
// Trying to push a new element into a tuple (will result in an error)
// article.push(100);
console.log(article);
// Destructuring the tuple into individual variables
var id = article[0], title = article[1], published = article[2];
console.log(id);
console.log(title);
console.log(published);
