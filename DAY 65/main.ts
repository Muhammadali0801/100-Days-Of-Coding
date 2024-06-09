          // DAY 65 CHALLENGE
//type annotation with function

//function to calculate the area of  a ractangle
function calculateRactangleArea(long: number, width: number): number {
    return long * width;
}

//calling the function with valid arguments

const long = 5;
const width = 3;
const area = calculateRactangleArea(long, width);
console.log(`the area of the ractangle is : ${area}`);

// Optional And Default Parameter

//optional Parameter

function greetingOptional(name:string, age?: number) {
    if (age !== undefined ) {
        console.log(`hello ${name}! you are ${age} years old.`);
    } else {
        console.log(`Hello ${name}!`);
        
    }
}

greetingOptional("Alice");
greetingOptional("bob",30);


// Default Parameters:
function greetDefault(name: string, age: number = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
  greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."

// Function with a rest parameter and type annotations
function addAll(... nums:number[]) {
    let result = 0;
    for(let i = 0; i < nums.length; i ++ ){
        result += nums[i];
} 
    return result;

}

// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 171.5



//Arrow function

const addWithArrow =( num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10,20)); //output: 30

// ANONYMOUS FUNCTION 

const add = function (num1: number, num2: number): number {
    return num1 + num2;
  };
  console.log(add(10, 20)); // Output: 30


  //VOID & NEVER

//   VOID

  function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  
  function noReturnValue(): void {
    // This function doesn't return a value (implicitly returns undefined).
  }

// never
function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {
      // This function never exits (infinite loop).
    }
  }
