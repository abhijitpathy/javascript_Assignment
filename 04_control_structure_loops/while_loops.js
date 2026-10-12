// Q1. Print Numbers (1 to 10)
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}
// Q2. Sum of Natural Numbers (First 10)
let i1 = 1;
let sum = 0;

while (i1 <= 10) {
    sum = sum + i1;
    i1++;
}

console.log("Sum =", sum);


// Q3. Multiplication Table
let num = Number(prompt("Enter a number:"));
let i2 = 1;

while (i2 <= 10) {
    console.log(num + " x " + i2 + " = " + (num * i2));
    i2++;
}

// Q4. Count the Digits
let num1 = Number(prompt("Enter a positive integer:"));
let count = 0;

while (num1 > 0) {
    num1 = Math.floor(num1 / 10);
    count++;
}

console.log("Total digits =", count);


// Q5. Reverse a Number
let num2 = Number(prompt("Enter a positive integer:"));
let reverse = 0;

while (num2 > 0) {
    let digit = num2 % 10;
    reverse = reverse * 10 + digit;
    num2 = Math.floor(num2 / 10);
}

console.log("Reversed number =", reverse);


// Q6. Sum of Digits
let num3 = Number(prompt("Enter a number:"));
let sum3 = 0;

while (num3 > 0) {
    let digit = num3 % 10;
    sum3 = sum3 + digit;
    num3 = Math.floor(num3 / 10);
}

console.log("Sum of digits =", sum3);

// Q7. Print Numbers with Conditions



let i4 = 1;

while (i4 <= 100) {
    if (i4 % 3 === 0 && i4 % 5 === 0 && i4 % 7 !== 0) {
        console.log(i4);
    }
    i4++;
}

// Q8. Calculate Factorial
let num5 = Number(prompt("Enter a non-negative integer:"));
let factorial = 1;
let i5 = 1;

while (i5 <= num5) {
    factorial = factorial * i5;
    i5++;
}

console.log("Factorial =", factorial);


// Q9. Check a Palindrome Number



let num6 = Number(prompt("Enter a number:"));
let original = num;
let reverse6 = 0;

while (num6 > 0) {
    let digit = num6 % 10;
    reverse6 = reverse6 * 10 + digit;
    num6 = Math.floor(num6 / 10);
}

if (original === reverse6) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}


// Q10. Convert Decimal to Binary
let num7 = Number(prompt("Enter a positive integer:"));
let binary = "";
let remainder;

while (num7 > 0) {
    remainder = num7 % 2;
    binary = remainder + binary;
    num7 = Math.floor(num7 / 2);
}

console.log("Binary =", binary);