// Spread Operator and Rest Parameters
// ? What is spread operator?
// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g., an array) and expands it into individual elements.
// The spread operator is used to copy an array, merge arrays, add
// elements to an array, and add properties to an object.

// Example 1
// Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]

// Example 2
// Merging arrays
const ex2_arr1 = [1, 2, 3];
const ex2_arr2 = [4, 5, 6];
const ex2_arr3 = [...ex2_arr1, ...ex2_arr2];
console.log(ex2_arr3); // [1, 2, 3, 4, 5, 6]

// Example 3
// Adding elements to an array
const ex3_arr1 = [1, 2, 3];
const ex3_arr2 = [...ex3_arr1, 4, 5, 6];
console.log(ex3_arr2); // [1, 2, 3, 4, 5, 6]

// The spread operator is not only used for arrays, but it can also be used for objects.

// Example 4
// Copying an object
const obj1 = { name: 'Jm', age: 20 };
const obj2 = { ...obj1 };
console.log(obj2); // { name: 'Jm', age: 20 }

// Example 5
// Merging objects
const obj3 = { name: 'Jm', age: 20 };
const obj4 = { city: 'Batangas', country: 'Philippines' };
const obj5 = { ...obj3, ...obj4 };
console.log(obj5); // { name: 'Jm', age: 20, city: 'Batangas', country: 'Philippines' }

// Example 6
// Adding properties to an object
const obj6 = { name: 'Jm', age: 20 };
const obj7 = { ...obj6, city: 'Batangas', country: 'Philippines' };
console.log(obj7); // { name: 'Jm, age: 20, city: 'Batangas', country: 'Philippines' }

// Example 7
// Overriding properties
const obj8 = { name: 'Jm', age: 20 };
const obj9 = { ...obj8, age: 28 };
console.log(obj9); // { name: 'Jm', age: 28 }

// Rest Parameters
// Rest parameters are used to represent an indefinite number of arguments as an array.
// It allows you to pass an arbitrary number of arguments to a function.

// Example 8
function sum(...args) {
    return args;
}
console.log(sum(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]

// Instructions
// Create a function printHobbies that prints the last element of the hobbies array.
const hobbies = ['Sleeping', 'Gaming', 'Watching'];

function printHobbies(...hobbies) {
    console.log(hobbies[hobbies.length - 1]);
}
printHobbies(...hobbies); // Watching

// Create an arrow function ultimateHobby that prints the last element of the hobbies array.
const ultimateHobby = (...hobbies) => {
    console.log(hobbies[hobbies.length - 1]);
};
ultimateHobby(...hobbies); // Waltching

// Play around with the spread operator and rest parameters.
