// q1 Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.
let n = 15;
if (n % 5 === 0) {
    console.log("Divisible by 5");
}
// q2 
let age = 75;
if (age >= 60) {
    console.log("Senior Citizen");
}
// q3
let s = 200;
if(s >100){
    console.log("Big number")
}
// q4
let temp = -3;
if (temp<10){
    console.log("very cold");
};
// q5
let score = 100
if(score ==100){
    console.log("perfect score");
};
// q6
let num = -21;
if(num<0){
    console.log("Negative number");
};
// q7
let str ="";
if(str==""){
    console.log("No input Provided");
};
// q8
let year = 1200;
if (year % 100 ==0){
    console.log("Century year");
};
// q9
let m= 22;
if (m %2==0 && m>0){
    console.log("positive Even Number");
};
// q10
let mrks =67;
if (mrks>35 && mrks<100){
    console.log("Valid marks")
} 

//  if...else statement
// q1
let no = 12

if (no % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
// q2
let aGe = 33

if (aGe >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
// q3
let number = 24;

if (number > 0) {
    console.log("Positive");
} else {
    console.log("Zero");
}
// q4
let marks = 95

if (marks >= 35) {
    console.log("Passed");
} else {
    console.log("Failed");
}
// q5
let ch = "s";

if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase Letter");
} else {
    console.log("Not an Uppercase Letter");
}
// q6
let nUm =21;

if (nUm % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not Divisible by 3");
}
// q7
let password = prompt("Enter password:");

if (password === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}
// q8

let yr = 2028;
if (yr %4 ==0 && yr % 100 !=0 || yr % 400 ==0){
    console.log("year is leap year");
}else{
    console.log("is not a leap year");
};
// q9
let a = 68;
let b = 69;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}
// q10
var numb = 23;

if (numb >= 0) {
    if (numb === 0) {
        console.log("Zero");
    } else {
        console.log("Positive");
    }
} else {
    console.log("Negative");
}