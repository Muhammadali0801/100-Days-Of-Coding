//         DAY 68 CHALLENGE

console.log("******************\n");
console.log(" * TUPLE *\n ");
console.log("******************\n");

// Defining a tuple type

let article: readonly [number, string, boolean] = [11, "title One", true];

// Assigning a new tuple value to the `article` variable
 
article = [12, "Tittle Two", false];

// Trying to push a new element into a tuple (will result in an error)
// article.push(100);

console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);