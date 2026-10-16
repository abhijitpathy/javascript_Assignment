// 1 
//  city is declared in the global scope
// country is declared in the functional scope
// ya

// 2
var price = 500;
function calculate() {
    var tax = 50;
    console.log(price + tax);
}
calculate();
console.log(price);
//  550 500

// 3
var college = "ABC College"; // global
function student() {
    var name = "Rahul"; // functional
    var age = 20; // functional
}
function teacher() {
    var subject = "JavaScript"; // functional
}

// 4
// function first() {
//     var number = 100;
// }
// function second() {
//     console.log(number);
// }
// first();
// second();
//  if we execute the code it will show error becuase number variable is a functional scope and not a global scope

// 5
var city = "Albama"
function display(){
    var country = "japan";
    console.log(city);
    console.log(country);
}
display()

// 6
var game = "Cricket";
function play() {
    console.log("I like " + game);
}
play();
console.log(game);

// i like cricket
// cricket

// 7
var language = "English";
function showLanguage() {
    console.log(language);
}
function changeLanguage() {
    language = "Gujarati";
}
showLanguage();
changeLanguage();
showLanguage();
console.log(language);

// English
// Gujarati
// Gujarati

// 8
function displayMarks() {
    console.log(marks);
}
var marks = 75;
displayMarks();

//  no error becuase marks is a global scope

// 9
var color = "Red";
function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}
showColor();
console.log(color);
// console.log(message);
//  favorite color red
//  red
// error

// 10
var school = "sunrise school"
function showSchool(){
    console.log(school)
}
function updateSchool(){
    var school = "Green valley school"
}
showSchool()
updateSchool()

// 11
// function calculateTotal() {
//     var first = 100;
//     var second = 200;
//     console.log(first + second);
// }
// calculateTotal();
// console.log(first);
// error because its functional scope

// 12
// function employee() {
//     var salary = 30000;
// }
// employee();
// console.log(salary);
//  here we are printing a functional scope which would not work

// 13
var number = 15;
function test() {
    var number = 25;
    console.log(number);
}
test();
console.log(number);
//  25
// 15

// 14
function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}
calculate();
calculate();
// 50
// 50
// yes
//  no 
// 15

// 15
function calculateArea(){
    let lenght = 8;
    let width = 4;
    area = lenght* width;
    console.log(area)

}
calculateArea()

// 16
if (10 > 5) {
    var result = "Success";
}
console.log(result);
// sucess

// 17
var number = 1;
if (true) {
    var number = 2;
}
console.log(number);
// 2

// 18
var message = "Start";
{
    var message = "End";
}
console.log(message);
// end

// 19
if (false) {
    var result = 100;
}
console.log(result);
//  sucess

// 20
if (true) {
    var secret = "Hidden";
}
console.log(secret);
// hidden

// 21
for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}
console.log("Final:", number);
// 8

// 22
var count = 10;
for (var count = 1; count <= 3; count++) {
    console.log(count);
}
console.log("Count:", count);
// 4

// 23
var i = 5;
while (i > 2) {
    console.log(i);
    i--;
}
console.log("After loop:", i);
// 2

// 24
for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}
console.log("Last item:", item);
// 4
// 25
for (let step = 1; step <= 4; step++) {
    console.log(step);
}

// 26
function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }
    console.log("Final:", number);
}
calculate();
// 4

//27
function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }
    console.log(marks);
}
student();
console.log(marks);
// s60
// 70
// 80
// 90
// 75

// 28
function test() {
    var value = 5;
    while (value < 8) {
        console.log(value);
        value++;
    }
    console.log("Final value:", value);
}
test();

// the loop iterates 3 times


// 29
// function calculate() {
//     for (var i = 1; i <= 2; i++) {
//         console.log(i);
//     }
// }
// console.log(i);
// calculate();
//  the error is in the var as it functions as a block scope
// the order does matter because without it will show error

// 30
function printNumbers(){
    for(var i = 1;i<=5;i++) {
        console.log(i);
    }
    console.log(i)
}
calculate(i)





// sec 7
// 31
function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}
console.log(i);
calculate();
// because var is not a block scope and var can be acessed

// 32
var a = 10;
function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}
test();
// undefined
// 20

// 33

console.log(first);
console.log(second);
var first = 100;
var second = 200;
console.log(first);
console.log(second);
// 1st and 2nd lines arise undefined beacuse js know that there is the variable
// present



// 34
function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}
calculate();
// undefined
// 50

// 35
var price = 100;
function showPrice() {
    console.log(price);
    var price = 500;
}
showPrice();
console.log(price);
// undefined
// 100

// the local variable price is hoisted inside the function after the execution of console.log  and the first console.log is inside the function

// 36
sayHello();
function sayHello() {
    console.log("Hello from CodingGita");
}
// Hello from condingita
//  this code is running due to hoisting

// 37
display();
function display() {
    console.log("Function is hoisted completely");
}
// function is hoisted completely 
//  the difference from normal var variable is that var variables can be reassign many times up whereas hoisting wouldn't

// 38
// greet();
// var greet = function() {
//     console.log("Hi");
// };
//  in function expression there may be error during hoisting 
//  and it behave diffferently because we are assigning a variable to a function

// 39
console.log(typeof myFunc);
function myFunc() {
    return "I am hoisted";
}
console.log(myFunc());
// function
//  i am hoisted

// 40
greeting("alex")
function greeting(name){
    console.log("hello " + name )
}

// 41
var institute = "CodingGita";
function department() {
    var dept = "CSE";
    function batch() {
        var year = 2025;
        console.log(year);
        console.log(dept);
        console.log(institute);
    }
    batch();
}
department();
// year = 2025
// dept = cse
// institute = coding gita
// here js first checks the inner function then the outer function and then at alst the global if the required keyword is not present it will show error

// 42
// var globalVar = "I am global";
// function outer() {
//     var outerVar = "I am outer";
//     function inner() {
//         console.log(globalVar);
//         console.log(outerVar);
//         console.log(innerVar); // this line
//     }
//     inner();
// }
// outer();

// the scope chain first searhes the inner if not found then the outer one if there also not found it goes to the global one and there also not found it will shoot error
// I am global
//  i am outer
// at that line it shoots  reference error

// 43
var a = 1;
function level1() {
    var b = 2;
    function level2() {
        var c = 3;
        function deep() {
            console.log(a, b, c);
        }
        deep();
    }
    level2();
}
level1();
// all variables a,b , c are accessible inside the deep()

// 44
var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
console.log(x);

// first
// global

// 45

let globalVar = "I am a Global Variable";

function outerFunction() {
    let outerVar = "I am an Outer Variable";

    function middleFunction() {
        let middleVar = "I am a Middle Variable";

        function innerFunction() {
            let innerVar = "I am an Inner Variable";

            console.log(innerVar);
            console.log(middleVar);
            console.log(outerVar);
            console.log(globalVar);
        }

        innerFunction();
    }

    middleFunction();
}

outerFunction();


// 46
var x = "global";
function first() {
    var x = "first";
    function second() {
        console.log(x);
    }
    second();
}
console.log(x);
// first
// global

// 47
var name = "Global Name";
function show() {
    var name = "Local Name";
    console.log(name);
}
show();
console.log(name);

// local name
// global name

// 48
var value = 10;
function update() {
    value = 20;          // no var
    console.log(value);
}
update();
console.log(value);
// 20
// 20
// without var it will direct acess the global scope

// 49
var color = "Blue";
function changeColor() {
    var color = "Red";
    console.log("Inside:", color);
}
changeColor();
console.log("Outside:", color);
// inside red
// outside blue

// 50
var marks = 70;
function decMarks(){
    var marks = 95;
    console.log(marks)
}
decMarks()
console.log(marks) 
//  95
// 70

// 51
function outer() {
    var teacher = "Kartik Sir";
    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }
    inner();
}
outer();
// jenil
// kartik sir

// 52
function parent(){
    var a = "parent";
    function child(){
        var b = "child";
        function grandchild(){
            var c = "grandchild";
            console.log(a);
            console.log(b);
            console.log(c);
        }
        grandchild();
    }
    child();
}
parent();
// parent
// child
// grandchild
// here accessibility is that js searches the values in scope chain 

// 53
// function outer() {
//     var secret = "Hidden";
//     function inner() {
//         console.log(secret);
//     }
// }
// inner();
// outer();
// error is that the inner function hadn't returned after completion of the code


// 54
function createMessage() {
    var greeting = "Hello";
    function show() {
        console.log(greeting + " students");
    }
    return show;
}
var messageFunc = createMessage();
messageFunc();
// hello students 
// the inner function acess the variable by chained scoping method of js

// 55
function studentInfo(){
    var name = "alex"
    var course = "javascript"
    function display(){
        console.log(name);
        console.log(course);
    }
    return display();
}
studentInfo()

// 56
function test() {
    x = 100; // missing var
}
test();
console.log(x);
// the unintended side effect of the missing var is that due to this there can be errors sometimes as js can interpret them as reference error
// output 100

// 57
if (true) {
    var x = 20;
}
console.log(x);
// 20
// the misconception is the var is a blocked scope and it does exist outside the loop


// 58
console.log(a);
var a = 10;
// here is no reference value because js used hoisting here

// 59
var x = 10;
var x = 20;
console.log(x);
// yes it is allowed with var but it becomes confusion because var lets you declare a variable as many times you want which leads toconfusion 

// 60
// function calculate() {
//     total = 0;
//     for (var i = 1; i <= 5; i++) {
//         total = total + i;
//     }
//     console.log(total);
// }
// calculate();
console.log(total); // currently works, but should not
//  to avoid making it a global variable use let instead of var
function calculate() {
    total = 0;
    for (let i = 1; i <= 5; i++) {
        total = total + i;
    }
    console.log(total);
}
calculate();


