// Addition
//q1 A school collected ₹15,000 from one class and ₹12,500 from another class. Find the total collection.
let class1 = 15000;
let class2 = 12500;

let total = class1 + class2;

console.log("Total collection = Rs" + total);

//q2 A person reads 18 pages in the morning and 25 pages in the evening. Find the total pages read.
let morning = 18;
let evening = 25;

let totalPages = morning + evening;

console.log("Total pages read =", totalPages);

//q3 A shop sold 125 items on Monday and 178 items on Tuesday. Find the total items sold.
let mondaySold = 125;
let tuesdaySold = 178;
let totalSold = mondaySold + tuesdaySold
console.log("total sold items =",totalSold);


// Subtraction
//q1 A bus has 80 seats, and 53 seats are occupied. Find the number of empty seats.
let totalSeats = 80;
let occupiedSeats = 53;

let emptySeats = totalSeats - occupiedSeats;

console.log("Empty seats =", emptySeats);

//q2 A student has 500 marks and loses 35 marks due to incorrect answers. Find the final marks
let marks = 500;
let lostMarks = 35;

let finalMarks = marks - lostMarks;

console.log("Final marks =", finalMarks);

//q3 A warehouse has 2,500 boxes and sends 875 boxes to a store. Find the remaining boxes
let totalBoxes = 2500;
let sentBoxes = 875;

let remainingBoxes = totalBoxes - sentBoxes;

console.log("Remaining boxes =", remainingBoxes);

// Multiplication
//1q One notebook costs ₹45. Calculate the cost of buying 8 notebooks.
let price = 45;
let notebooks = 8;

let totalPrice = price * notebooks;

console.log("Total cost = ₹" + totalPrice);

//2q A machine produces 120 bottles per hour. Calculate its production in 6 hours.
let bottlesPerHour = 120;
let hours = 6;

let totalBottles = bottlesPerHour * hours;

console.log("Total production =", totalBottles);

//3q A garden has 7 rows with 15 plants in each row. Find the total number of plants
let rows = 7;
let plantsPerRow = 15;

let Plants = rows * plantsPerRow;

console.log("Total plants =", Plants);

//Division 
// q1 A teacher distributes 144 pencils equally among 12 students. Find the number of pencils each student receives
let pencils = 144;
let Students = 12;

let eachStudent = pencils / Students;

console.log("Pencils each student receives =", eachStudent);

//q2 A train travels 360 kilometres in 6 hours. Find its average distance travelled per hour
let Distance = 360;
let time = 6;

let average = Distance / time;

console.log("Average distance per hour =", average, "km");

//3q A company distributes ₹72,000 equally among 9 departments. Find the amount received by each department
let amount = 72000;
let departments = 9;

let eachDepartment = amount / departments;

console.log("Amount received by each department = ₹" + eachDepartment);

// Modulus 
// q1 A teacher has 53 students and forms groups of 5. Find the number of students left over.
let totalStudents = 53;
let groupSize = 5;

let leftOver = totalStudents % groupSize;

console.log("Students left over =", leftOver);

//q2 A shop has 128 candies and packs 10 candies in each box. Find the number of candies left unpacked.
let candies = 128;
let boxSize = 10;

let remainingBox = candies % boxSize;

console.log("Candies left unpacked =", remainingBox);

//q3  A number is given by the user. Check whether it is even or odd using the modulus operator.
let n = Number(prompt("Enter a number: "));

console.log(n % 2 == 0 ? "Even number" : "Odd number");

// Exponentiation
// q1 Find the volume of a cube with a side length of 6 cm using side ** 3.
let Side = 6;

let volume = Side ** 3;

console.log("Volume of cube =", volume, "cm³");

//q2  A bacteria culture doubles every hour. Calculate the number of bacteria after 4 hours using exponentiation.
let bacteria = 1;
let hour = 4;

let totalBacteria = bacteria * (2 ** hours);

console.log("Number of bacteria =", totalBacteria);

//q3 Calculate the total number of cells in a square arrangement with 9 cells on each side using side ** 2.
let sides = 9;
let totalCells = sides ** 2;

console.log("Total number of cells =", totalCells);

//simple Assignment

//q1
let age = 18
console.log(age)
//q2
let penPrice = 15;
console.log(penPrice);
//q3
let daysInWeek = 7;
console.log(daysInWeek);
//q4
let city = "Ahmedabad";
console.log(city);
// q5
const pi = 3.14159;
console.log(pi)

// Add and assign
//q1
let Marks = 200;
Marks += 35;

console.log(Marks);

//q2
let balance = 5000;
balance += 1200;

console.log(balance);
//q3
let battery = 45;
battery += 30;

console.log(battery);
//q4
let score = 1250;
score += 375;

console.log(score);
//q5
let books = 840;
books += 160;

console.log(books);

// subtract and assign
//q1
let totalWater = 1000;
let usedWater = 375;
totalWater -= usedWater;
console.log("remainning water is",totalWater + " litres");
//q2
let totalBalance = 500;
let spendMoney = 180;
totalBalance -= spendMoney;
console.log("remainning money  is ",totalBalance + " rs");
//q3
let batteryUsed = 90;
battery -= 45;

console.log(batteryUsed);

//q4
let boxes = 2400;
boxes -= 950;

console.log(boxes);
//q5
let totalScore = 2000;
totalScore -= 625;

console.log(score);

// multiply and assign
//q1
let population = 5000;
population *= 3;

console.log(population);
//q2
let production = 120;
production *= 4;

console.log(production);
//q3
let savings = 2000;
savings *= 2;

console.log(savings);
//q4
let totalPlants = 50;
totalPlants *= 5;
console.log(totalPlants)

//q5
let gameScore = 150;
gameScore *= 3;

console.log(gameScore);

// divide and assign
//q1
let cloth = 1200;
cloth /= 4;

console.log(cloth);
//q2
let budget = 80000;
budget /= 8;

console.log(budget);
//q3
let sugar = 960;
sugar /= 6;

console.log(sugar);
//q4
let distance = 450;
distance /= 5;

console.log(distance);
//q5
let totalMarks = 2500;
totalMarks /= 10;

console.log(totalMarks);

//Modulus and assign
//q1
let totalCandies = 137;
totalCandies %= 10;
console.log(totalCandies);
//q2
let students = 250;
students %= 7;

console.log(students);
//q3
let days = 1000;
days %= 7;

console.log(days);
//q4
let chairs = 89;
chairs %= 5;

console.log(chairs);
//q5
let months = 365;
months %= 12;

console.log(months);

// exponentiation and assign
//q1
let side = 10;
side **= 2;

console.log(side);
//q2
let edge = 4;
edge **= 3;
console.log(edge)
//q3
let factor = 3;
factor **= 2;

console.log(factor);

// comparision & relation operators
//Loose equality ==
//q1
let storedPassword = 1234;
let userPassword = "1234";

console.log(storedPassword == userPassword);
//q2
let userAnswer = 0;
let defaultAnswer = false;

console.log(userAnswer == defaultAnswer);
//q3
let userInput = "";
let submitted = false;

console.log(userInput == submitted);
//q4
let backend = null;
let frontend = undefined;

console.log(backend == frontend);
//q5
let score1 = 500;
let score2 = "500";

console.log(score1 == score2);

// loose equality =!
//q1
let code1 = "SAVE10";
let code2 = "SAVE20";

console.log(code1 != code2);
//q2
let userRole = "admin";
let defaultRole = "guest";

console.log(userRole != defaultRole);
//q3
let correctAnswer = 42;
let Answer = "40";

console.log(correctAnswer != Answer);
//q4
let email = "";
let emptyFlag = false;

console.log(email != emptyFlag);
//q5
let userId = null;
let validId = 101;

console.log(userId != validId);

// strict Equality ===
//q1
let passStored = 1234;
let passEntered = "1234"; 
console.log(passStored === passEntered);
//q2
let acctNumA = 1234567890;  
let acctNumB = 1234567890; 
console.log(acctNumA === acctNumB);
//q3
let flagStatus = true;
let stateValue = 1;

console.log(flagStatus === stateValue);
//q4
let dbEntry = null; 
let cacheEntry = undefined; 
console.log(dbEntry === cacheEntry);

//q5
let marksA = 85; 
let marksB = 85; 
console.log(marksA === marksB);

// strict inequality !==
//q1
let textId = "101";
let numericId = 101;

console.log(textId !== numericId);
//q2
let boolStatus = true;
let numberStatus = 1;

console.log(boolStatus !== numberStatus);
//q3
let mainPass = "abc123";
let verifyPass = "abc124";

console.log(mainPass !== verifyPass);
//q4
let serverInfo = null;
let localInfo = undefined;

console.log(serverInfo !== localInfo);
//q5
let playerOne = 10;
let playerTwo = 20;

console.log(playerOne !== playerTwo);

// Greater Than >
//q1
let personAge = 20;
let legalAge = 18; 
console.log(personAge >= legalAge);
//q2
let orderAmount = 650; 
let shippingLimit = 500; 
console.log(orderAmount >= shippingLimit);
//q3
let Score = 1200; 
let unlockScore = 1000; 
console.log(Score >= unlockScore);
//q4
let salaryAmount = 40000; 
let incomeRequirement = 30000; 
console.log(salaryAmount >= incomeRequirement);
//q5
let dailySteps = 11000; 
let stepGoal = 10000; 
console.log(dailySteps >= stepGoal);

// less than <
//q1
let studentMarks = 30;
let failMarks = 35;

console.log(studentMarks < failMarks);
//q2
let totalExpenses = 8000;
let spendingLimit = 10000;

console.log(totalExpenses < spendingLimit);
//q3
let stockCount = 7;
let stockLimit = 10;

console.log(stockCount < stockLimit);
//q4
let vehicleSpeed = 40;
let speedMinimum = 50;

console.log(vehicleSpeed < speedMinimum);
//q5
let timeLeft = 4;
let warningTime = 5;

console.log(timeLeft < warningTime);

// Greater Than or Equal >=
//q1
let voterAge = 18;
let votingRequirement = 18;

console.log(voterAge >= votingRequirement);
//q2
let studentPercentage = 75;
let scholarshipMinimum = 75;

console.log(studentPercentage >= scholarshipMinimum);
//q3
let subscriberAge = 14;
let ageRequirement = 13;

console.log(subscriberAge >= ageRequirement);
//q4
let currentPoints = 500;
let pointsNeeded = 500;

console.log(currentPoints >= pointsNeeded);
//q5
let workExperience = 3;
let experienceNeeded = 2;

console.log(workExperience >= experienceNeeded);

// less  than or equal <=
//q1
let liftPeople = 7;
let liftCapacity = 8;

console.log(liftPeople + 1 <= liftCapacity);
//q2
let uploadSize = 5;
let fileLimit = 5;

console.log(uploadSize <= fileLimit);
//q3
let juniorAge = 12;
let juniorAgeLimit = 12;

console.log(juniorAge <= juniorAgeLimit);
//q4
let usedData = 9.5;
let dataLimit = 10;

console.log(usedData <= dataLimit);
//q5
let classStudents = 40;
let classLimit = 40;

console.log(classStudents <= classLimit);

// part D Logical And &&
// q1
let storedUserName = "admin";
let storedPwd =  1234;
let userName = true;
let paasword = false;
var isValid = userName && paasword;
console.log(isValid)

// q2 
let isLoggedIn = true;
let hasPermission = true;
let canaccess = isLoggedIn && hasPermission;
console.log(canaccess)

// q3
let inStock = true;
let atPrice = true;
var canBuy = inStock && atPrice;
console.log(canBuy)

//q4
let ScoredMarks = 75;
let attendance = 80;

console.log(ScoredMarks > 65 && attendance > 70);

//q5

let isWeekend = true;
let isHoliday = false;

console.log(isWeekend && isHoliday);


//q6
// let a = 0;
// let b = 10;
// let result = a && b;
// console.log(result);
//10

//q7
// let x = 5;
// let y = 10;
// let result = (x > 3 && y) || 0;
// console.log(result);
//""

//q8
// let p = "Hello";
// let q = "";
// let r = "World";
// let result = p && q && r;
// console.log(result);
//0

//q9
// let val = 5;
// let condition = val && (val = 0);
// console.log(condition);
// console.log(val);
//0

//q10
// let x = 10;
// let y = 20;
// let result = (x && y) && (x > y);
// console.log(result);
//false


// logical OR ||
// 1
let passwordCorrect = true;
let otpValid = false;
console.log(passwordCorrect || otpValid);



// 2
let isMember = false;
let hasCoupon = true;
console.log(isMember || hasCoupon);



// 3
let $age = 16;
let height = 155;
console.log($age > 18 || height > 150);



// 4
let emailGiven = true;
let phoneGiven = false;
console.log(emailGiven || phoneGiven);



// 5
let $score = 900;
let timeBonus = true;
console.log($score > 1000 || timeBonus);

//q6
// let a = 0;
// let b = false;
// let c = "";
// let d = null;
// let e = 42;
// let result = a || b || c || d || e;
// console.log(result);
//42

//q7
// let x = "Hello" || 0;
// let y = 0 || "Hi";
// console.log(x, y);
//Hello Hi

//q8
// let a = 10;
// let b = 20;
// let result = (a < 5) || (b > 15);
// console.log(result);
//true

//q9
// let val = 5;
// let condition = val || (val = 0);
// console.log(condition);
// console.log(val);
//5 5

//q10
// let x = "" || 0 || false || null || undefined || "OK";
// console.log(x);
//ok

// logical NOT !
// q1
let isBanned = false;
console.log(!isBanned);


// q2
let isCompleted = false;
console.log(!isCompleted);



// q3
let isOn = true;
console.log(!isOn);



// q4
let isActive = false;
console.log(!isActive);



// q5
let isReadOnly = false;
console.log(!isReadOnly);





//q6
// let a = 0;
// let b = 1;
// console.log(!a, !b);
//  true, false

//q7
// let x = "Hello";
// let y = "";
// console.log(!x, !y);
//  false, true
//q8 
// let val = 5;
// let result = !val;
// console.log(result);
// false
//q9 
// let a = 10;
// let b = 20;
// let result = !(a && b);
// console.log(result);
// false
//q10
// let x = 0;
// let y = 1;
// let result = !(x || y);
// console.log(result);
//  false


// Mixed LOgical operators

//1q
let is$$Member = true;
let is$Banned = false;

console.log(is$$Member && !is$Banned);

Output: true

//q2
let isStudent = true;
let isSenior = false;
let is$$Banned = true;

console.log((isStudent || isSenior) && !is$$Banned);


//q3
let nameGiven = true;
let email$Given = false;
let phone$Given = true;

console.log(nameGiven && (email$Given || phone$Given));


//q4
let isAdmin = true;
let hasToken = false;
let isSuspended = false;

console.log((isAdmin || hasToken) && !isSuspended);


//q5
let s$core = 1200;
let t$imeBonus = false;
let extraLife = true;

console.log(s$core > 1000 && (t$imeBonus || extraLife));

//q6
let a = 0;
let b = 10;
let c = 20;
let result = a || b && c;
console.log(result);
//20

//q7
let p = true;
let q = false;
let r = true;
let $result = p && q || r;
console.log(result);
// true

//q8
let x = 10;
let y = 20;
let re$sult = !(x && y) || (x > 5 && y < 30) && true;
console.log(re$sult);
// true

//q9
let a$ = 5;
let b$ = 0;
let c$ = 10;
let result$ = a$ && b$ || c$;
console.log(result$);
// true

//q10

let val1 = false;
let val2 = true;
let val3 = false;
let resu$lt = !(val1 || val2) && val3 || true;
console.log(resu$lt);
// true

// part E: Increment / Decrement Operators (++ / --)
// part a
// q1
let counter = 5;
counter++;
console.log(counter);
// q2
let lives = 3;
lives--;
console.log(lives);
// q3
let sco$re = 10;
score++;
console.log(sco$re);
// q4
let items = 8;
items--;
console.log(items);
// q5
let count = 0;
count++;
count++;
console.log(count);

// part b
// q6
let k = 5;
let l = x++;
console.log(k, l);


// q7
let j= 5;
let h = ++a;
console.log(j, h);


// q8
let live$s = 3;
let previousLives = live$s--;
console.log(live$s, previousLives);


// q9
let attempts = 0;
let currentAttempts = ++attempts;
console.log(attempts, currentAttempts);

// q10
let points = 100;
points++;
points--;
console.log(points);

// part c
// q11
// let x = 10;
// let y = x++;
// let z = ++x;
// console.log(x, y, z);
//  12 10 12

// q12
// let a = 5;
// let b = a-- + ++a;
// console.log(a, b);
//  5 10
// q13 
// // let m = 7;
// let n = --m + m++;
// console.log(m, n);
// 7 13
// q14
// let p = 3;
// let q = p++ + ++p + p;
// console.log(p, q);
//  5 13
// q15
// let val = 0;
// val = val++ + ++val;
// console.log(val);
//  2

//  Part f :typeof operator
// q1
let name = "Rahul";
console.log(typeof name);
// q2
let a$ge = 25;
console.log(typeof a$ge);
// q3
let isS$tudent = true;
console.log(typeof isS$tudent);
// q4
let cit$y;
console.log(typeof cit$y);
// q5
console.log(typeof null);

// q6.
// console.log(typeof 42);
// console.log(typeof "Hello");
// console.log(typeof true);
// console.log(typeof undefined);
number
string
boolean
undefined
//Q7.
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);
object
object
object
// q8.
// console.log(typeof NaN);
// console.log(typeof Infinity);
// console.log(typeof function(){});
number
number
functioN
// q9.
// Create three variables:

// price = 99.99
// message = "Welcome"
// isActive = false
// Print the type of each variable with a clear message
let pr$ice = 99.99;
let message = "Welcome";
let isA$ctive = false;

console.log("price:", typeof pr$ice);
console.log("message:", typeof message);
console.log("isActive:", typeof isA$ctive);

// q10.
// let value = null;
// console.log(typeof value);
// console.log(typeof value === "object");
object
true

// q11.
// console.log(typeof typeof 100);
// console.log(typeof typeof "Hi");
// console.log(typeof typeof true);
string
string
string

// q12.
// let a = 10;
// let b = "10";
// console.log(typeof a === typeof b);
// console.log(typeof a == typeof b);
false
false

// q13.
// console.log(typeof null === "object");
// console.log(typeof [] === "object");
// console.log(typeof {} === "object");
true
true
true

// q14.
// let x;
// console.log(typeof x);
// x = null;
// console.log(typeof x);
// x = 0;
// console.log(typeof x);
undefined
object
number

// q15.
// console.log(typeof NaN === "number");
// console.log(typeof Infinity === "number");
// console.log(typeof (1 / 0));
true
true
number

// Part G: Type Coercion
//  part 1
// q1.
var num = Number("25");
console.log(num + 10);
// q2.
let num = String(100);
console.log(num + " rupees");
// q3.
var value = Boolean(0);
console.log(value);
// q4.
let value = Boolean("Hello");
console.log(value);
// q5.
let num = +"50";
console.log(num * 2);


// q6
// console.log("10" - 5);
// console.log("10" + 5);
// console.log("10" * 2);
// console.log("10" / 2);
5
105
20
5
// q7
// console.log("5" - "2");
// console.log("5" + "2");
// console.log("5" * "2");
// console.log("5" / "2");
3
52
10
2.5
// q8
// console.log(Number("123"));
// console.log(Number("123abc"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
123
NaN
1
0
0
NaN
// q9
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("0"));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(null));
false
false
true
true
true
false
// q10
// console.log(String(100));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));
// console.log(100 + "");
100
true
null
undefined
100

// part c
// q11.
// console.log("5" + 3 + 2);
// console.log(5 + 3 + "2");
// console.log("5" - 3 + 2);
// console.log(5 - "3" + "2");
532
82
4
22
// q12
// console.log(true + true);
// console.log(true + false);
// console.log(true + "false");
// console.log(false + "true");
2
1
truefalse
falsetrue
// q13
// console.log(null + 5);
// console.log(undefined + 5);
// console.log(null + "5");
// console.log(undefined + "5");
5
NaN
null
undefined
// q14
// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});
""
"[object Object]"
"[object Object]"
"[object Object][object Object]"
// q15.
// let a = "10";
// let b = 5;
// let c = a + b;
// let d = a - b;
// let e = +a + b;
// console.log(c, typeof c);
// console.log(d, typeof d);
// console.log(e, typeof e);
// 105 string
// 5 number
// 15 number


// q16.

// console.log(!!"Hello");
// console.log(!!"");
// console.log(!!0);
// console.log(!!1);
// console.log(!!null);
// console.log(!!undefined);
true
false
false
true
false
false
// q17
// console.log(Number(""));
// console.log(Number(" "));
// console.log(Number("0"));
// console.log(Number("  25  "));
// console.log(Number("25px"));
0
0
0
25
NaN
// q18
// let val1 = "5";
// let val2 = 2;
// console.log(val1 + val2);
// console.log(+val1 + val2);
// console.log(val1 - val2);
// console.log(val1 * val2);
// console.log(val1 / val2);
52
7
3
10
2.5

// Bonus Mixed Practice Questions:
// q19
number
6
number
7

//q20
// let x = "10";
// let y = ++x;
// console.log(x, y, typeof x, typeof y);
// 11 11 number number


// q21 
// let a = "5";
// let b = a++;
// console.log(a, b, typeof a, typeof b);
// 6 5 number number

// q22 string
// console.log(typeof (1 + "2"));
// console.log(typeof (1 - "2"));
// console.log(typeof (1 * "2"));
// console.log(typeof (1 / "2"));
number
number
number
// q23
// let val = null;
// console.log(typeof val);
// console.log(val + 1);
// console.log(val - 1);
// console.log(val * 1);
// console.log(Boolean(val));

object
1
-1
0
false
