// Destructuring objects and arrays 
// Sept 7, 2024


const person = {
    name: 'Jm',
    age: 20,
    hobbies: ['gaming', 'sleeping'],
    greet: function() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old. ');
    }
};

//When to use destructuring?
// Destructuring is useful when you only need a specific property of an object.

// Regular function
// Regular passing of object
const printName = (personData) => { 
    console.log(personData.name); 
};

// Even though we are passing the whole object, we are only using the name property
printName(person);

// If we are only interested in the name property of the object, we can use destructuring
// Destructuring the object
const printNameDestructured = ({ name }) => {
    console.log(name);
};

// We pass the object as an argument to the function
printNameDestructured(person);

// Destructuring multiple properties
const { name, age } = person;
console.log(name, age);

// Destructuring arrays
const hobbies = ['gaming', 'sleeping'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

/* Reminders when using destructuring:
- The property name must match the object property name.
- The property name must be enclosed in curly braces for objects.
- The array elements are accessed by their order in square brackets.
*/

