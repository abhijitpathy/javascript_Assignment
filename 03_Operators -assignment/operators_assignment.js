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

let totalPlants = rows * plantsPerRow;

console.log("Total plants =", totalPlants);

//Division 
// q1 A teacher distributes 144 pencils equally among 12 students. Find the number of pencils each student receives
let pencils = 144;
let students = 12;

let eachStudent = pencils / students;

console.log("Pencils each student receives =", eachStudent);

//q2 A train travels 360 kilometres in 6 hours. Find its average distance travelled per hour
let distance = 360;
let time = 6;

let average = distance / time;

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
let side = 6;

let volume = side ** 3;

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