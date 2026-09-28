
let student = {
    name: "Abhijit",
    age: 18,
    isEnrolled: true
};

console.log(student);


console.log(student.name);


console.log(student.age);

let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
console.log(numbers);
console.log(mixed);

// its better to keep arrays with single data type becuase its easier to understand , easier to process , fewer errors, better performance.

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("everyone")); // hello everyone!
console.log(greet("sam")) // hello sam !