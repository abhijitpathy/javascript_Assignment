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