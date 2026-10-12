// for loop
// 1. Count temperatures hotter than 30°C
let temperatures = [28, 32, 25, 40, 18, 35];
let count = 0;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > 30) {
        count++;
    }
}

console.log(count);

// 2. Sum of all digits
let num1 = 4729;
let sum1 = 0;

for (; num1 > 0; num1 = Math.floor(num1 / 10)) {
    sum1 += num1 % 10;
}

console.log(sum1);

// 3. Divisible by 3 and 5, but not 7
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
        console.log(i);
    }
}

// 4. Remove vowels from "JavaScript"
let str = "JavaScript";
let result1 = "";

for (let i = 0; i < str.length; i++) {
    if (
        str[i] !== "a" &&
        str[i] !== "e" &&
        str[i] !== "i" &&
        str[i] !== "o" &&
        str[i] !== "u"
    ) {
        result1 += str[i];
    }
}

console.log(result1);


// 5. Find the second-largest number
let arr = [10, 45, 23, 78, 56, 90];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest);


// 6. Check perfect number
let num2 = 28;
let sum2 = 0;

for (let i = 1; i < num2; i++) {
    if (num2 % i === 0) {
        sum2 += i;
    }
}

if (sum2 === num2) {
    console.log("Perfect Number");
} else {
    console.log("Not a Perfect Number");
}



// 7. Print the series

// 1 2 4 8 16 32 64 128

let value = 1;

for (let i = 1; i <= 128; i *= 2) {
    console.log(i);
}


let result = "";

for (let i = 1; i <= 128; i *= 2) {
    result += i + " ";
}

console.log(result);
// 8. First 20 Fibonacci numbers
let a = 0;
let b = 1;

for (let i = 1; i <= 20; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}

// 9. Average + students above average
let scores = [45, 78, 90, 32, 56, 88];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

let average = sum / scores.length;
let aboveAverage = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > average) {
        aboveAverage++;
    }
}

console.log("Average:", average);
console.log("Above average:", aboveAverage);

// 10. Decimal to binary without toString(2)
let num = 99;
let binary = "";

for (; num > 0; num = Math.floor(num / 2)) {
    let remainder = num % 2;
    binary = remainder + binary;
}

console.log(binary);

// continue
// 1. Skip numbers divisible by 4
for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}
// 2. Sum only positive numbers
let arr3 = [10, -5, 8, -3, 20, -7, 4];
let sum3 = 0;

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < 0) {
        continue;
    }
    sum3 += arr3[i];
}

console.log(sum3);
// 3. Print characters but skip spaces
let str1 = "Hello World";

for (let i = 0; i < str1.length; i++) {
    if (str1[i] === " ") {
        continue;
    }
    console.log(str1[i]);
}
// 4. Multiplication table of 6, skip products divisible by 5
for (let i = 1; i <= 12; i++) {
    let product = 6 * i;

    if (product % 5 === 0) {
        continue;
    }

    console.log("6 x " + i + " = " + product);
}
// 5. Print only voting-eligible ages
let ages = [12, 18, 25, 15, 30, 17, 22];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        continue;
    }

    console.log(ages[i]);
}

// break
// 1. Find first occurrence of 7
let arr4 = [3, 5, 9, 7, 2, 7, 10];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] === 7) {
        console.log("7 found at index:", i);
        break;
    }
}
// 2. Password checker — maximum 5 attempts
let correctPassword = "hello123";
let access = false;

for (let i = 1; i <= 5; i++) {
    let password = prompt("Enter password:");

    if (password === correctPassword) {
        console.log("Access granted");
        access = true;
        break;
    }

    console.log("Wrong password");
}

if (access === false) {
    console.log("Account locked");
}
// 3. Add numbers until sum exceeds 100
let sum4 = 0;

for (let i = 1; ; i++) {
    sum4 += i;

    if (sum4 > 100) {
        console.log("Last number added:", i);
        break;
    }
}
// 4. Find first name starting with "S"
let names = ["Rahul", "Amit", "Priya", "Sameer", "Sahil"];

for (let i = 0; i < names.length; i++) {
    if (names[i][0] === "S") {
        console.log(names[i]);
        break;
    }
}
// 5. Stop at first perfect square greater than 20
for (let i = 1; i <= 50; i++) {
    let root = Math.sqrt(i);

    if (root === Math.floor(root) && i > 20) {
        console.log("Perfect square found:", i);
        break;
    }

    console.log(i);
}

// Reverse for loop
// 1
for (let i = 50;i>=1;i--){
    if(i%3==0 && i%9!==0){
        console.log(i)
    }

}
// 2
let arr8 = [12, 45, 7, 23, 56, 89, 34];
let largest8 = -Infinity;

for (let i = arr8.length - 1; i >= 0; i--) {
    if (arr8[i] < 50 && arr8[i] > largest8) {
        largest8 = arr8[i];
    }
}

console.log(largest8);

// 3
let num8 = 4729;
let product = 1;

for (let i = num8; i > 0; i = Math.floor(i / 10)) {
    let digit = i % 10;

    if (digit % 2 !== 0) {
        product *= digit;
    }
}

console.log(product);

// 4
let str8 = "Programming";
let resul8t = "";

for (let i = str8.length - 1; i >= 0; i--) {
    let ch = str8[i];

    if (!"aeiouAEIOU".includes(ch)) {
        resul8t += ch;
    }
}

console.log(resul8t);

// 5
let e = 0;
let r = 1;
let fib = [];

for (let i = 0; i < 15; i++) {
    fib[i] = e;
    let next = e + r;
    e = r;
    r = next;
}

for (let i = 14; i >= 0; i--) {
    console.log(fib[i]);
}

// 6
let nu6m = 121;
let original = nu6m;
let reverse = 0;

for (; nu6m > 0; nu6m = Math.floor(nu6m / 10)) {
    let digit = nu6m % 10;
    reverse = reverse * 10 + digit;
}

if (original === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// 7. Count temperatures colder than 30°C
let temp = [32, 28, 41, 19, 35, 27, 38];
let count3 = 0;

for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] < 30) {
        count3++;
    }
}

console.log(count3);

Output: 3

// 8. Decimal to binary — print binary digits in reverse



let num4 = 13;

for (; num4 > 0; num4 = Math.floor(num4 / 2)) {
    console.log(num4 % 2);
}

// 9. Reverse loop + break
let score5s = [90, 85, 70, 95, 60, 88, 75];

for (let i = score5s.length - 1; i >= 0; i--) {
    if (score5s[i] > 80) {
        console.log("Score:", score5s[i]);
        console.log("Index:", i);
        break;
    }
}


// 10. Reverse loop + continue — skip perfect squares
for (let i = 40; i >= 1; i--) {
    let square = Math.sqrt(i);

    if (square === Math.floor(square)) {
        continue;
    }

    console.log(i);
}
// pattern problems
// 1. Right-triangle consecutive numbers
let num3 = 1;

for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += num3 + " ";
        num3++;
    }

    console.log(row);
}
// 2. Right-triangle alphabet pattern
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 0; j < i; j++) {
        row += String.fromCharCode(65 + j) + " ";
    }

    console.log(row);
}
// 3. Hollow right-triangle
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === 5) {
            row += "* ";
        } else {
            row += "  ";
        }
    }

    console.log(row);
}
// 4. Reverse right-angle stars
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
// 5. Reverse row-number pattern
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }

    console.log(row);
}
// 6. Reverse right-angle numbers
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    console.log(row);
}
// 7. Reverse consecutive numbers
let num5 = 15;

for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += num5 + " ";
        num5--;
    }

    console.log(row);
}
// 8. Reverse hollow right-angle stars
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === 5) {
            row += "* ";
        } else {
            row += "  ";
        }
    }

    console.log(row);
}
// 9. 5×5 stars — skip main diagonal
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        if (i !== j) {
            row += "* ";
        } else {
            row += "  ";
        }
    }

    console.log(row);
}
// 10. Multiplication tables 1–5 — only even products
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 10; j++) {
        let product = i * j;

        if (product % 2 === 0) {
            row += product + " ";
        }
    }

    console.log(row);
}
// 11. Matrix of absolute differences

// Using 0-based indices:

let p = 5;

for (let i = 0; i < p; i++) {
    let row = "";

    for (let j = 0; j < p; j++) {
        let difference = Math.abs(i - j);
        row += difference + " ";
    }

    console.log(row);
}
// 12. Unique pairs where sum is a perfect square
for (let i = 1; i <= 10; i++) {
    for (let j = i + 1; j <= 10; j++) {
        let sum = i + j;
        let root = Math.sqrt(sum);

        if (root === Math.floor(root)) {
            console.log("(" + i + ", " + j + ")");
        }
    }
}
// 13. Diamond number pattern
let v = 5;

for (let i = 1; i <= v; i++) {
    let row = "";

    for (let s = 1; s <= v - i; s++) {
        row += " ";
    }

    for (let j = 1; j <= i; j++) {
        row += j;
    }

    for (let j = i - 1; j >= 1; j--) {
        row += j;
    }

    console.log(row);
}

for (let i = v - 1; i >= 1; i--) {
    let row = "";

    for (let s = 1; s <= v - i; s++) {
        row += " ";
    }

    for (let j = 1; j <= i; j++) {
        row += j;
    }

    for (let j = i - 1; j >= 1; j--) {
        row += j;
    }

    console.log(row);
}
// 14. 6×6 spiral matrix

// This one needs a little more logic because every number has to be placed according to the spiral boundaries.

let o = 6;
let matrix = [];

for (let i = 0; i < o; i++) {
    matrix[i] = [];

    for (let j = 0; j < o; j++) {
        matrix[i][j] = 0;
    }
}

let num9 = 1;
let top = 0;
let bottom = o - 1;
let left = 0;
let right = o - 1;

while (top <= bottom && left <= right) {

    for (let j = left; j <= right; j++) {
        matrix[top][j] = num9++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num9++;
    }
    right--;

    for (let j = right; j >= left; j--) {
        matrix[bottom][j] = num9++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num9++;
    }
    left++;
}

for (let i = 0; i < o; i++) {
    let row = "";

    for (let j = 0; j < o; j++) {
        row += matrix[i][j] + "\t";
    }

    console.log(row);
}
// 16. Pascal's Triangle — 8 rows
let n = 8;

for (let i = 0; i < n; i++) {

    let spaces = "";

    for (let s = 0; s < n - i; s++) {
        spaces += " ";
    }

    let row = spaces;
    let value = 1;

    for (let j = 0; j <= i; j++) {
        row += value + " ";

        value = value * (i - j) / (j + 1);
    }

    console.log(row);
}
// 17. Border = 1, inside = 0, divisible-by-3 = 2
let rows = 5;
let cols = 6;

for (let i = 0; i < rows; i++) {
    let row = "";

    for (let j = 0; j < cols; j++) {

        let value;

        if ((i + j) % 3 === 0) {
            value = 2;
        } else if (
            i === 0 ||
            i === rows - 1 ||
            j === 0 ||
            j === cols - 1
        ) {
            value = 1;
        } else {
            value = 0;
        }

        row += value + " ";
    }

    console.log(row);
}