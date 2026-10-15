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


// 11
// in local scope we cant acess the variable outside the function but in global scope we can acess a variable anywhere
function displayAge(age){
    return age
}
console.log(displayAge(20))

// it shows reference error

let subjecT = "javascript";
function course(subject){
    return subject 
}
console.log(course(subjecT))

// 12
function analyzeStudent(name,m1,m2,m3){
    total = m1 +m2 +m3
    avg = total / 3
    return  `${name} scored total ${total} with average ${average}`
}
console.log(analyzeStudent("abhi",89,78,99))

// 13
// A nested function is function with in a function
function StudentReport(name,m1,m2,m3){
    function total(m1,m2,m3){
        return m1+m2+m3
    };
    totalMarks = m1 + m2 + m3
    return `the name of the student is ${name} gets a total marks ${totalMarks}`
}
console.log(StudentReport("sunil",56,78,89))

// 14
function generateReport(name,a,b,c){
    avg = (a+b+c)/3
    if (avg >=40){
        console.log("pass")
    }else{
        console.log("fail")
    }
}
generateReport("abhi",90,76,89)
generateReport("Ale",40,96,99)

//15
function sumOfThree(a,b,c) {
    return a + b+ c
}
console.log(sumOfThree(10,20,30))

function averageOfTwo(x,y){
    return (x +y)/2
}
console.log(averageOfTwo(50,70))

function maxOfTwo(a,b){
    if(a>b){
        return `${a} is greater than ${b}`
    }else{
        return `${b} is greater than ${a}`
    }
}
console.log(maxOfTwo(14,15))

function name(first,last){
    return first+last
}

console.log(name("Abhiit", "Pathy"))

// 16
function calculateGrade(a){
    percentage = (a/100)*100
    if (percentage >=90){
        return "A+"
    }if (percentage>=80 && percentage<=89){
        return "A"
    }if (percentage>=70 && percentage<=79){
        return "B"
    }if (percentage>=60 && percentage<=69){
        return "c"
    }if (percentage>=40 && percentage<=59){
        return "D"
    }if ( percentage<40){
        return "f"
    }
}
console.log(calculateGrade(88))

