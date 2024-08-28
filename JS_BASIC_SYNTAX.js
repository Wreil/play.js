// 1. DECLARING AND ASSIGNMENT OF VARIABLES

let userName = "Wreil"; // let is used for values that can change
let userAge = 34;
let enjoysHobbies = false;

const fixedName = "Wreil"; // const is used for values that should not change

// * CONDITIONAL STATEMENTS
if (enjoysHobbies) { // if enjoysHobbies is true
    console.log("I enjoy hobbies.");
} else {
    console.log("I don't have hobbies.");
}

if (userAge > 30) {
    console.log("You are older than 30.");
} else if (userAge < 30) {
    console.log("You are younger than 30.");
} else {
    console.log("You are 30 years old.");
}

switch (userName) {
    case "Wreil":
        console.log("Welcome, Wreil!");
        break;
    case "Cyay":
        console.log("Hello, Cyay!");
        break;
    default:
        console.log("Nice to meet you.");
}

// 2. PRINTING TO THE CONSOLE

console.log(userName);
console.log(userAge);
console.log(enjoysHobbies);

console.log(fixedName);

console.log(`My name is ${userName} and I am ${userAge} years old.`); // string interpolation

// 3. ARRAY DECLARATION

let favoriteActivities = ["Reading", "Traveling"];

// Printing the array
console.log(favoriteActivities); // Output: ["Reading", "Traveling"]
// Accessing an element in the array
console.log(favoriteActivities[0]); // Output: Reading

for (let activity of favoriteActivities) {
    console.log(activity);
}

// Adding an element to the array
favoriteActivities.push("Cycling");

console.log(favoriteActivities); // Output: ["Reading", "Traveling", "Cycling"]

// MAPPING AN ARRAY
// Mapping is used to loop through an array and modify the elements
favoriteActivities = favoriteActivities.map((activity) => {
    return activity + " is enjoyable";
});

console.log(favoriteActivities); // Output: ["Reading is enjoyable", "Traveling is enjoyable", "Cycling is enjoyable"]

// 4. OBJECT DECLARATION

let userProfile = {
    name: "Wreil",
    age: 34,
    hasInterests: false,
    introduce() { // this is a method/function of the object
        console.log("Hi, I am " + this.name); // "this" refers to the object itself
    }
};

// Accessing object properties
console.log(userProfile.name); // Output: Wreil
console.log(userProfile.age); // Output: 34
console.log(userProfile.hasInterests); // Output: false

// Calling the object's method
userProfile.introduce(); // Output: Hi, I am Wreil

// 5. FUNCTION DECLARATION

// Regular function declaration
function greetUser() {
    console.log("Hello there!");
}

// Calling the function
greetUser(); // Output: Hello there!

// Arrow function declaration
const getGreeting = () => {
    return "Hello there!"; // RETURN is used to return a value from the function
};

// Calling the arrow function
console.log(getGreeting()); // Output: Hello there!

// Adding parameters/arguments to functions
function describePerson(personName, personAge) { // this is a function that takes in two parameters/arguments
    console.log("This individual is " + personName + " and is " + personAge + " years old.");
}

describePerson(userName, userAge); // Output: This individual is Wreil and is 34 years old.

// Another way to write a function using an arrow function
const describePersonArrow = (personName, personAge) => {
    return `This individual is ${personName} and is ${personAge} years old.`;
};

console.log(describePersonArrow(userName, userAge)); // Output: This individual is Wreil and is 34 years old.
