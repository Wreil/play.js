let name = "John"; // declaring and assigning a variable
let age = 25;
let hasHobby = true;
let hobbies = ["reading", "Coding", "Gaming"]; // this is an array

// Accessing array elements
// console.log(hobbies[0]);
// console.log(hobbies[1]);

const fullName = "John Doe";

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        "Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby
    );
}

// Function to summarize the name, age, and hobbies bool.
// console.log(summarizeUser(name, age, hasHobby));

function add(x, y) {
    return x + y;
}

// Function to add
// console.log(add(1, 1)); // Output: 2

// Looping through array
// Method 1
for (let hobby of hobbies) {
    console.log(hobby);
}

// Method 2
hobbies.map((hobby) => {
    console.log(hobby);
});

// Method 3
hobbies.forEach((hobby) => {
    console.log(hobby);
});

// This is a function
function summarizeUser(userName, userAge, userHasHobby) {
    return (
        "Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby
    );
}

const person = {
    name: "John", // key: value pair
    age: 25,
    greet: function () {
        console.log("Hello, I am " + this.name);
    },
};

if (age > 60) {
    console.log("You are a senior!");
} else if (age > 18) {
    console.log("You are an adult!");
} else {
    console.log("You are a minor!");
}

console.log(fullName);
console.log(person);
console.log(hobbies);
console.log(summarizeUser(name, age, hasHobby));
console.log(summarizeUser("Jane", 30, true));