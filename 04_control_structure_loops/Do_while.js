// Q1. Print Numbers in Reverse
let reverseCount = 10;

do {
    console.log(reverseCount);
    reverseCount--;
} while (reverseCount >= 1);


// Q2. Print Even Numbers
let evenCount = 2;

do {
    console.log(evenCount);
    evenCount += 2;
} while (evenCount <= 20);

// Q3. Sum of Natural Numbers
let naturalLimit = Number(prompt("Enter n:"));
let naturalCount = 1;
let naturalSum = 0;

do {
    naturalSum += naturalCount;
    naturalCount++;
} while (naturalCount <= naturalLimit);

console.log("Sum =", naturalSum);

// Q4. Product of Digits
let productNumber = Number(prompt("Enter a positive integer:"));
let digitProduct = 1;

do {
    let productDigit = productNumber % 10;
    digitProduct *= productDigit;
    productNumber = Math.floor(productNumber / 10);
} while (productNumber > 0);

console.log("Product =", digitProduct);


// Q5. Find the First Digit
let firstDigitNumber = Number(prompt("Enter a positive integer:"));

do {
    if (firstDigitNumber < 10) {
        break;
    }

    firstDigitNumber = Math.floor(firstDigitNumber / 10);
} while (firstDigitNumber >= 10);

console.log("First digit =", firstDigitNumber);


// Q6. Calculate a Power
let powerBase = Number(prompt("Enter the base:"));
let powerExponent = Number(prompt("Enter the exponent:"));
let powerResult = 1;
let powerCount = 0;

do {
    if (powerExponent === 0) {
        break;
    }

    powerResult *= powerBase;
    powerCount++;
} while (powerCount < powerExponent);

console.log("Result =", powerResult);


// Q7. Print Multiples with Conditions


let multipleCount = 1;

do {
    if (multipleCount % 4 === 0 && multipleCount % 8 !== 0) {
        console.log(multipleCount);
    }

    multipleCount++;
} while (multipleCount <= 100);


// Q8. Check a Palindrome Number
let palindromeInput = Number(prompt("Enter a positive integer:"));
let palindromeOriginal = palindromeInput;
let palindromeReverse = 0;

do {
    let palindromeDigit = palindromeInput % 10;

    palindromeReverse = palindromeReverse * 10 + palindromeDigit;
    palindromeInput = Math.floor(palindromeInput / 10);
} while (palindromeInput > 0);

if (palindromeOriginal === palindromeReverse) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}


// Q9. Find the Greatest Common Divisor (GCD)
let gcdFirst = Number(prompt("Enter the first number:"));
let gcdSecond = Number(prompt("Enter the second number:"));
let gcdRemainder;

do {
    gcdRemainder = gcdFirst % gcdSecond;
    gcdFirst = gcdSecond;
    gcdSecond = gcdRemainder;
} while (gcdSecond !== 0);

console.log("GCD =", gcdFirst);

// Q10. Convert Decimal to Binary

let binaryDecimal = Number(prompt("Enter a non-negative integer:"));
let binaryResult = "";
let binaryRemainder;

do {
    binaryRemainder = binaryDecimal % 2;
    binaryResult = binaryRemainder + binaryResult;
    binaryDecimal = Math.floor(binaryDecimal / 2);
} while (binaryDecimal > 0);

console.log("Binary =", binaryResult);