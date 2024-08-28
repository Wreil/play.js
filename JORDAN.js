// 1. DECLARING AND ASSIGNMENT OF VARIABLES

let user = "Cyay"; // let is used for values that can change
let userAge = 40;
let enjoysActivities = true;

const fixedUsername = "Cyay"; // const is used for values that should not change

// * CONDITIONAL STATEMENTS
if (enjoysActivities) { // if enjoysActivities is true
    console.log("I enjoy activities.");
} else {
    console.log("I do not enjoy activities.");
}

if (userAge > 40) {
    console.log("You are older than 40.");
} else if (userAge < 40) {
    console.log("You are younger than 30.");
} else {
    console.log("You are exactly 40 years old.");
}

switch (user) {
    case "Cyay":
        console.log("Hello, Cyay!");
        break; // break is used to exit the switch statement
    case "Wreil":
        console.log("Hi, Wreil!");
        break;
    default: // default is used when none of the cases are met
        console.log("Nice to meet you.");
}

// 2. PRINTING TO THE CONSOLE

console.log(user);
console.log(userAge);
console.log(enjoysActivities);

console.log(fixedUsername);

console.log(`My name is ${user} and I am ${userAge} years old.`); // string interpolation fixed

// 3. ARRAY DECLARATION

let favoriteFoods = ["Pizza", "Sushi"];

// Printing the array
console.log(favoriteFoods); // Output: ["Pizza", "Sushi"]
// Accessing an element in the array
console.log(favoriteFoods[1]); // Output: Sushi

for (let food of favoriteFoods) {
    console.log(food);
}

// Adding an element to the array
favoriteFoods.push("Burgers");

console.log(favoriteFoods); // Output: ["Pizza", "Sushi", "Burgers"]

// MAPPING AN ARRAY
// Mapping is used to loop through an array and modify the elements
favoriteFoods = favoriteFoods.map((food) => {
    return food + " is delicious";
});

console.log(favoriteFoods); // Output: ["Pizza is delicious", "Sushi is delicious", "Burgers is delicious"]

// 4. OBJECT DECLARATION

let userProfile = {
    username: "Cyay", // this is a property/field
    age: 40, // this is a property/field
    enjoysActivities: true, // this is a property/field
    introduce() { // this is a method/function of the object
        console.log("Hi, I'm " + this.username); // "this" refers to the object itself
    }
};

// Accessing object properties
console.log(userProfile.username); // Output: Cyay
console.log(userProfile.age); // Output: 32
console.log(userProfile.enjoysActivities); // Output: false

// Calling the object's method
userProfile.introduce(); // Output: Hi, I'm Cyay

// 5. FUNCTION DECLARATION

// Regular function declaration
function greetUser() {
    console.log("Greetings!");
}

// Calling the function
greetUser(); // Output: Greetings!

// Arrow function declaration
const getGreeting = () => {
    return "Greetings!"; // RETURN is used to return a value from the function
};

// Calling the arrow function
console.log(getGreeting()); // Output: Greetings!

// Adding parameters/arguments to functions
function describePerson(username, age) { // this is a function that takes in two parameters/arguments
    console.log("This person is " + username + " and is " + age + " years old.");
}

describePerson(user, userAge); // Output: This person is Cyay and is 40 years old.

// Another way to write a function using an arrow function
const describePersonArrow = (username, age) => {
    return `This person is ${username} and is ${age} years old.`; // Fixed string interpolation
};

console.log(describePersonArrow(user, userAge)); // Output: This person is Cyay and is 40 years old.
