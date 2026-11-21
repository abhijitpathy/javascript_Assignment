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