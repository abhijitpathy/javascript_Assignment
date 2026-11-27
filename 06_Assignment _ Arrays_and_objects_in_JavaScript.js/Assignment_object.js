// Section 1: What Is an Object?
// 1 
var book = {
    title :"harry potter and the philosophers stone",
    author: "jk rowling",
    pages:576
}
console.log(book)

// 2
var student = {
    name : "kailash",
    rollNo:12,
    isMale : true
}
console.log(student)

// 3
var person = {
  name: "Aarav Sharma",              
  age: 21,                           
  isStudent: true,                   
  skills: ["JavaScript", "HTML", "CSS"], 
  address: {                         
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: 380001
  }
};

console.log(person);
// 4
const developer = {
  name: "Rohan",                          
  experience: 2,                        
  isAvailable: true,                     
  languages: ["JavaScript", "Python"],   
  location: {                          
    city: "Gandhinagar",
    country: "India"
  },
  introduce: function () {                
    return `Hi, I'm ${this.name} from ${this.location.city}.`;
  }
};

console.log(developer.introduce()); 
// 5. student Object with a Greeting Method
var student = {
  name: "Priya",
  grade: "A",
  greet: function () {
    return `Hello, ${this.name}! Welcome to the class.`;
  }
};

console.log(student.greet());

// 2 why do we need objects
// 1
var person = {
    name : "RAhul",
    age:21,
    City:"Mumbai"
}
// 2
var product = {
    name:"bottle",
    price: 1200,
    isavailabile:true
}
console.log(product)

// 3
// using a object makes more easier to read and fill in more information without using more variables

// 4
var student = {
  name: "Aarav Patel",
  rollNumber: 104,
  course: "Computer Science",
  semester: 1,
  isPresent: true
};

var book = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  pages: 472,
  genre: "Programming",
  isAvailable: true
};

console.log(`${student.name} is reading "${book.title}" by ${book.author}.`);
// 5
const carBrand = "Tata";
const carModel = "Nexon";
const carYear = 2024;
const carColor = "Daytona Grey";
const isElectric = true;
const car = {
  brand: "Tata",
  model: "Nexon",
  year: 2024,
  color: "Daytona Grey",
  isElectric: true
};

console.log(car);

// 3 Creating objects
// 1
var book = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  pages: 472,
  genre: "Programming",
  isAvailable: true
};
// 2
const laptop = new Object();

laptop.brand = "Apple";
laptop.model = "MacBook Air";
laptop.ram = "16GB";

console.log(laptop);
// 3
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
const car1 = new Car("Tata", "Nexon");
const car2 = new Car("Hyundai", "Creta");

console.log(car1); 
console.log(car2); 

// 4. Same Employee Data via Object Literal vs. Constructor Function
const employeeLiteral = {
  id: 101,
  name: "Karan Mehta",
  department: "Backend Engineering",
  salary: 65000
};

function Employee(id, name, department, salary) {
  this.id = id;
  this.name = name;
  this.department = department;
  this.salary = salary;
}

const employeeConstructor = new Employee(101, "Karan Mehta", "Backend Engineering", 65000);

console.log("Object Literal:", employeeLiteral);
console.log("Constructor:", employeeConstructor);
// 5.

function Student(name, rollNo, grade) {
  this.name = name;
  this.rollNo = rollNo;
  this.grade = grade;
}
const student1 = new Student("Aarav", 1, "A");
const student2 = new Student("Priya", 2, "A+");
const student3 = new Student("Rohan", 3, "B");

const students = [student1, student2, student3];

console.log(students);


// sec 4 
// 1
var student ={
}
student.name = "Abhi"
student.age =12
console.log(student)

// 2
student["full name "] = "Abhijit pathy"
console.log(student)

//3
var person ={
  name : "Abhijit",
  age :19
} 
console.log(person.age)
// 4
var person ={
  name:"Abhijit",
  age:20,
  isStudent:true,
  gender:"male",
  city:"behrampur"
}
console.log(person.name) 
console.log(person.age) 
console.log(person.isStudent) 
console.log(person.gender) 
console.log(person.city) 

// 5
var person ={
  name:"Abhijit",
  age:20
}
console.log(person.name)
// console.log(age)  thats why it shows here beacause it shows that age is not defined

// sec 5 Adding new properties
// 1 
let fruit = {
  name : "Mango",
  age: 13,
}
fruit.availability = "summer"
console.log(fruit)

// 2
var person = {
  name : "Abhijit",
  age: 18,
  "full name" : "Abhijit parth"
}
person["full name"] = "Abhijit pathy"
console.log(person)

// 3
var student={

}
student.name = "Abhi"
student.age = 18
student.year = 1
console.log(student)

// 4
var student = {
  name : "archit",
  "full name":"Abhijit vaishnav"
}
// 5
var student = {
}
student.name= "Abhi"
student["course"] = "java Script"
console.log(student) 

// sec 6 updating property values
// 1
var student = {
  name : "Abhi",
  age : 13
}
student.age = 19
console.log(student)

// 2
student["name"] = "Akash"
student.age = 24
console.log(student)

// 3
var country = {
  name : "United states of America",
  age : 250
}
console.log(country)
country.name = "India"
country.age = 79
console.log(country)

// 4
var student = {
  name : "Abhi",
  age : 13
}
student.age = "13"
console.log(student)
// 5
var product = {
  name :"milton",
  price:1200
}
product.name = "Aqua steel"
console.log(product)

// sec 7
// 1
var student = {
  name : "Abhi",
  age : 13
}
delete student.name
console.log(student)
// 2
delete student.class
console.log(student)
// it prints the original object

// 3
var student = {
  name : "Abhi",
  age : 13,
  class:8,
  gender :"Male"

}
console.log(student)
delete student.name
delete student.gender
console.log(student)

// 4
var student = {
  name : "Abhi",
  age : 13,
  class:8,
  gender :"Male"

}
delete student.age
console.log(student)
// 5
console.log(student.age) 
// as we know if there is no defined value of a variable it always shows undefined

// sec 8
// 1
var student = {
    name:"Alex",
    rollNumber:23345,
    isStudent:true,
    marks :[89,78,90],
}
console.log(student)

// 2
var student = {
    name:"Alex",
    rollNumber:23345,
    isStudent:true,
    marks :[89,78,90],
    address :{
        houseNo:123,
        city:"kalol",
        pin:68422
    },
}
// 3
var product = {
    name:"milton",
    price:2334,
    isMetal:true,
    color :["black","white"],
    manufacturer:{
        houseNo:123,
        city:"kalol",
        pin:68422
      },
}
console.log(product)
// 4
var student = {
    name:"Alex",
    rollNumber:23345,
    isStudent:true,
    marks :[89,78,90],
    address :{
        houseNo:123,
        city:"kalol",
        pin:68422

    },
    greet : function (){
        return " Hello"
    }
}
// 5
var student = {
    name:"Alex",
    rollNumber:23345,
    isStudent:true,
    marks :[89,78,90],
    address :{
        houseNo:123,
        city:"kalol",
        pin:68422

    },
    greet : function (){
        return " Hello"
    }
}
console.log(student)
console.log(student.name)
console.log(student.marks)

// sec 9
// 1
var person = {
    name : "Abhi",
    age:22,
    greet: function(){
        return "helo,I am " + this.name;
    }
}
console.log(person.greet())
// 2
var student ={
  name:"Abhi",
  marks:92,
  getInfo : function(){
    return this.name +"marks obtained =>" + this.marks
  }
}
console.log(student.getInfo())
// 3
console.log(student.getInfo())
// 4
var student ={
  name:"Abhi",
  marks:92,
  getInfo : function(){
    return this.marks>=40
  }
}
console.log(student.getInfo())
// 5
var person ={
  firstName:"alok",
  lastName:"singh",
  age:28,
  fullname : function(){
    return this.firstName + " "+ this.lastName
  },
  isAdult : function(){
    return this.age>=18
  }
}
console.log(person.fullname(),person.isAdult())

// sec 10
// 1
for(let keys in person){
  console.log(keys)
}
// 2
for(let key in person){
  console.log(person[key])
}
// 3
for(let key in person){
  console.log(key +":"+person[key])
}
// 4
let count = 0;
for(let key in person){
  count++
}
console.log(count)
// 5
const obj = {
  name: "John",
  age: 25,
  city: "New York",
  marks: 90,
  isStudent: true
};

for (let key in obj) {
  if (typeof obj[key] === "number") {
    console.log(key + ": " + obj[key]);
  }
}

// 11
// 1
var student={
  address:{
    city:"kalol",
    pincode:56348
  }
}
console.log(student.address)
// 2
console.log(student.address.city)
// 3
let company ={
    address:{
        city : "hyderabasd",
        pincode: 23141
    },
    employess:["harus","obama","rakul"]
}
console.log(company)
// 4
for(let key in company.address){
  console.log(key +"=>"+ company.address[key])
}
// 5
let address ={
    India:{
        state:{
          city:"Hyderabad"
        }
    },
}
console.log(address.India.state)

// sec 12
// 1
var student =[
  {name:"Abhi"},
  {name:"Ankhor"},
  {name:"Akrosh"}
]
console.log(student[0])
// 2
for(let i = 0;i<=student.length-1;i++){
  console.log(student[i].name)
}
// 3
var products=[
  {name:"lenevo log 5080"},
  {name:"spoon"},
  {name:"iphone 15 pro"}
]
for(let i = 0;i<=products.length-1;i++){
  console.log(products[i].name)}
// 4
var student =[
  {name:"abhi",marks:98},
  {name:"Badal",marks:99},
  {name:"aroshi",marks:83}
]
for(let i = 0;i<=student.length-1;i++){
    if(student[i].marks>highest){
        highest = student[i].marks
        topper = student[i].name
    }
} 
console.log(topper)
// 5











// 13 obj vs Arrays
// 1
// the object is a correct choice when we need to store entities in it 
// example storing information of employees in a company
// 2
// the array is a correct choice where you need to store a collection of list such as names of student 
// 3
var book={
    name:"HArry potter and chamber of secret",
    pages:576
}
var books = [
    {name:"last of us"},
    {name:"big foot"},
    {name:"power of subconciuous mind"}
]
console.log(book)
console.log(books)
// 4
// the difference between arr and object is 
// Array vs object
// 1.structure=>
// obj => key value pair;{key:value}
// arr => ordered list ; let arr =[123]
// 2.Acess of an else = >
// obj => via key (using dot or bracket notation)

// var obj ={
//     name:osama
// }
// // arr => via index
// const arr =[1,2,3]
// arr[2]

// 3.suitable for :
// obj => to store single or  multiple entity (students,employee, product)
// const student = {
//     name: "Ananya",
//     age: 18,
//     course: "CSE"
// };
// arr => to store the collection of objects (name,color), it can even store entity 
// const name = ["abhi","raut","rakuten"]
// var students =[
//     {name:"ABhi",marks:93},
//     {name:"shane",marks:94},
//     {name:"sataya",marks:97},
//     {name:"pataya",marks:91}
// ]

// 5
var students1 =["rakesh","Alama","kankresh"
]
var students1 = {
  name:"rakesh",
  age:"24",
}
// here in this example if we need to list only students name then we can use arr whereas to write specification of the entity(student) so here object is used

// 14 checking properties & getting keys/value
// 1 
console.log("name" in students1)
// 2
console.log(Object.keys(students1))
// 3
console.log(Object.values(students1))
console.log(Object.entries(students1))
// 4
var object = { name: "Alice" };

console.log(object?.age ?? "Not found");

// 5
var person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

console.log(Object.keys(person).length);

// Section 15: Complete Example
// 1. Create a student object with a scores array and a method that returns the total of all scores.
let student = {
    name: "Rahul",
    scores: [80, 90, 75, 85],

    getTotal: function() {
        let total = 0;

        for (let score of this.scores) {
            total += score;
        }

        return total;
    }
};

console.log("Total:", student.getTotal());



// 2. Modify the getAverage method so that it works for any number of scores.
let student = {
    name: "Rahul",
    scores: [80, 90, 75, 85],

    getAverage: function() {
        let total = 0;

        for (let score of this.scores) {
            total += score;
        }

        return total / this.scores.length;
    }
};

console.log("Average:", student.getAverage());


// 3. Create an object with a method that returns both total and average of marks.
let student = {
    name: "Priya",
    marks: [85, 90, 80, 95],

    getResult: function() {
        let total = 0;

        for (let mark of this.marks) {
            total += mark;
        }

        let average = total / this.marks.length;

        return {
            total: total,
            average: average
        };
    }
};

console.log(student.getResult());


// 4. Write a method that returns the highest score from the scores array using this.
let student = {
    name: "Amit",
    scores: [75, 90, 85, 95, 80],

    getHighest: function() {
        return Math.max(...this.scores);
    }
};

console.log("Highest Score:", student.getHighest());


// 5. Create a student object with name, scores array, and two methods: one for average and one for grade (A/B/C based on average).
let student = {
    name: "Rahul",
    scores: [85, 90, 80, 95],

    getAverage: function() {
        let total = 0;

        for (let score of this.scores) {
            total += score;
        }

        return total / this.scores.length;
    },

    getGrade: function() {
        let average = this.getAverage();

        if (average >= 80) {
            return "A";
        } 
        else if (average >= 60) {
            return "B";
        } 
        else {
            return "C";
        }
    }
};

console.log("Name:", student.name);
console.log("Average:", student.getAverage());
console.log("Grade:", student.getGrade());


// Section 16: Common Mistakes
// 1. Show the wrong and correct way of accessing a property when the key is stored in a variable.
// Wrong Way:
// let student = {
//     name: "Rahul",
//     age: 20
// };

// let key = "name";

// console.log(student.key);

let student = {
    name: "Rahul",
    age: 20
};

let key1 = "name";

console.log(student[key1]);


// 2. Create an object that has a property with a space in its key and access it correctly.
let student = {
    name: "Rahul",
    "full address": "Ahmedabad, Gujarat"
};

console.log(student["full address"]);


// 3. Explain why we should not depend on the order of properties in an object. Give a short example.
let student = {
    name: "Rahul",
    age: 20,
    city: "Ahmedabad"
};

console.log(student.name);
console.log(student.age);
console.log(student.city);


// 4. Write code that incorrectly uses this and then correct it.
// Wrong Way:
// let student = {
//     name: "Rahul",

//     showName: function() {
//         console.log(this);
//         console.log(name);
//     }
// };

// student.showName();

// Correct Way:
let student = {
    name: "Rahul",

    showName: function() {
        console.log(this.name);
    }
};

student.showName();



// 5. Identify and fix three common mistakes in a given incorrect object-related code snippet.
// Incorrect Code:
// let student = {
//     name: "Rahul",
//     age: 20,
//     marks: [80, 90, 85],

//     getTotal: function() {
//         let total = 0;

//         for (let mark of marks) {
//             total += mark;
//         }

//         return total;
//     }
// };

// let key = "name";

// console.log(student.key);
// console.log(student.getTotal);


// Correct Code:
let student = {
    name: "Rahul",
    age: 20,
    marks: [80, 90, 85],

    getTotal: function() {
        let total = 0;

        for (let mark of this.marks) {
            total += mark;
        }

        return total;
    }
};

let key = "name";

console.log(student[key]);
console.log(student.getTotal());

Output:
Rahul
255

