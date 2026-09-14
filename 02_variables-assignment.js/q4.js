let x; 
let y = null; 

console.log("x =", x); //undefined
console.log("y =", y); // null

console.log("typeof x:", typeof x);  //undefined
console.log("typeof y:", typeof y);  //null

console.log("x == y:", x == y); //true
console.log("x === y:", x === y); //false

// A variable is undefined when it has been declared but no value has been assigned to it.
// we use null when  intentionally want to indicate that a variable has no value or is empty.