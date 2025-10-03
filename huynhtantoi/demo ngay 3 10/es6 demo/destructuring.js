console.log("=== Destructuring Object & Array ===");

// Object destructuring
const user = { name: "Bob", age: 25, country: "VN" };
const { name, age, country } = user;
console.log(`${name} - ${age} tuổi - ${country}`);

// Array destructuring
const numbers = [10, 20, 30, 40];
const [first, second, ...rest] = numbers;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);
