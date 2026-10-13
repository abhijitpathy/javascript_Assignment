// 1
//  function is a block of code whch can be reused when called
// four advantages are:
// it gives better readibility
// we can use the needed code again with writing the code again and again
// it saves time and space complexity
//  it gives better structure


// 2
function greetStudent(name){
    return `hello ${name} , Welcome to coding gita`

}
console.log(greetStudent("Akash"))

// 3
// hoisting is a feature in javascript through which we can  call a function ahead of his declaration in javascript, it works beacuse javascript first counts all the variable and functions present in the code and then it executes it
// eg:-

console.log(greet())
function greet(){
    return "Hello"
}

// 4
function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

//  converting it into a function expression

let average = function(a,b,c){
    return (a+b+c)/3
}
console.log(average(12,14,16))

//5

function multiply(x, y) {  // x,y are parameters
    return x * y;
}
console.log(multiply(12, 5));  // 12,5 are arguments

// 6
function isEven(a){
    if(a%2==0){
        console.log("True")
    }else{
        console.log("false")
    }

}


// 7
function findPercentage(obtainedMarks,totalMarks){
    percentage = (obtainedMarks / totalMarks)*100
    return percentage 

}

console.log(findPercentage(80,100))

// 8
//  if return statement is not in a function then it returns undefined

// eg;-
function name(){
    return
}
console.log(name())

// 9
function calculateSimpleInterest(principal,rate,time){
    simpleInterest = (principal*rate*time)/100
    return simpleInterest

}
console.log(calculateSimpleInterest(1000,5,2))

// 10
// function decleration cant support hoisting but function expression support hoisting 
function studentMarks(name,marks){
    return `student ${name} has scored ${marks} marks`
}
console.log(studentMarks("abhi",80))
console.log(studentMarks("sahil",70))


