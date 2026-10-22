// what is an array

// 1What is the definition of an array in JavaScript?

// An array is a special variable that can hold more than one value at a time, stored in a single list-like data structure.

// 2 What is the technical term for the position of a value inside an array?

// Index

//3  At which number does the index of an array always start?

// 0 (Zero-indexed)

//4 Given the array var numbers = [10, 20, 30, 40];, what value is stored at index 2?

// 30 (Since index 0 is 10, index 1 is 20, and index 2 is 30)

//5  For the same array var numbers = [10, 20, 30, 40];, what is the index of the number 40?

// 3 (Indices go: 0 for 10, 1 for 20, 2 for 30, and 3 for 40)



// 2 creating arrays

//1 What are the two ways mentioned in the notes to create an array in JavaScript?

// Using an array literal (square brackets []) and using the Array constructor (using the new Array() syntax).

// 2 Which method of creating an array is recommended by the notes?

// The array literal method (using square brackets []) is generally recommended for its simplicity, readability, and performance.

// 3 Write the syntax to create an array named students containing the names "Jenil", "Mahir", "Priyesha", and "Yashvi" using the recommended method.

// JavaScript
// var students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

//4 Write the syntax to create an array named marks containing 85, 90, and 78 using the Array constructor.

// JavaScript
// var marks = new Array(85, 90, 78);


//5  What keyword is used when instantiating an array using the constructor approach?

// The new keyword.

// Accesssing values in an arrays

//1  What do you use to access a specific value stored in an array?

// You use the array's name followed by the item's index enclosed in square brackets (e.g., arrayName[index]).

//2  Given
//  var students = ["Jenil", "Mahir", "Priyesha"];, what does console.log(students[0]); output?

// Jenil (since index 0 corresponds to the first element).

//3  For the same array, what does console.log(students[2]); output?

// Priyesha (since index 2 corresponds to the third element).

//4  What value does JavaScript return if you attempt to access an index that does not exist (such as students[10])?

// undefined

//5 Write a line of code to log the first element of an array named colors.

// JavaScript
// console.log(colors[0]);

// uploading values

//1  How do you update a specific value inside an existing JavaScript array?

// You access the element using its index and reassign a new value to it using the assignment operator (=), like this: arrayName[index] = newValue;.

//2  Given var marks = [80, 75, 90];, what code would you write to change the second element (75) to 95?

// JavaScript
// marks[1] = 95;


//3  After executing the update from the previous question, what will console.log(marks); output?

[80, 95, 90]

//4  True or False: You need to use a special built-in method like update() to change an array element's value.

// False. You do not need any special method; you simply use direct assignment via the index (arrayName[index] = newValue).

//5  Can you update a value at an index that is currently outside the bounds of the array? What happens if you assign a value to a much higher index?

// Yes, you can. If you assign a value to an index higher than the current maximum index, JavaScript will automatically expand the array, fill the intervening empty slots with empty items (which evaluate to undefined), and update the array's length property to accommodate the new index plus one.

// 5 Array lenght 

//1  lenght

//2  4

//3 undefiend

//4 Becuase in array the items are in index from 0 , and lenght check those indexes and calculate how many items are in array through the index

// lenght is a property , it is directly access as arr.length 

// 6. Looping Through Arrays

// 1   THE TWO WAYS FOR LOOPING THROUGH ARRAYS ARE FOR ND WHILE LOOP

// 2  THEE STANARD CONDITION IS I <= ARR.LENGHT-1

// 3 IT IS WRITTEN AFTER PRINTING OF THE CODE IN ARR WHILE LOOP

// 4 
var students = ["Abhijit","alexa", "koby",]
for(let i=0;i<students.length-1;i++){
    console.log(students[i])
}

// 5 if it uses <= it doest skip the last index and says undefined because we have laten lenght-1 to prevent it from saying undefined

//6
var students = ["jenil","Mahir","kalaua"]
for(var student of students){
    console.log(student)
}
// 7
// the main advantage is that the redability of code increases and also no index management which will prevent error, it also gives direct access to the value of each element

// 8
// const colors = ["Red", "Blue", "Green"];
// for (const color of colors) {
//     console.log(color, indexOf(color))
// }



// 7 Adding elements to the Arrays
// 1. push() is used to add an element at the end of the array
// 2. unshift() is used to add an element at the start of the array

// 3. 
let nums = [1,2,3]
nums.push(4)
console.log(nums)

// 4 
nums.unshift(0)
console.log(nums)

// 5
// yes both push() and unshift  modifies the array


// 8 Removing Elements
// 1. pop() methos removes the last element of ana array
// 2. undefined
// 3. 
let n1ums = [100, 200, 300, 400, 500];
n1ums.pop()
// removes 500 from the array

// 4.
nums.shift()
//  it removes 100 from the array

// 5
// No pop and shift only modifies the array, they dont return the removed element

// 9 Searching in the array

// 1.
// it returns the position of the variable in the array
// 2.
// it returns undefined
// 3.
// -1, it returns
// .4
// undefined
// 5
const students = ["jenil","Mahir","kalaua","ranjan","hojit","priyesha"]
console.log(students.indexOf("priyesha"))

// 10 Array 
// 1.
// yes a javascript array can store difdferent dataa types inside the same array
// 2.
// Array with different data types
let data = [22,"ojas",null,undefined,100n,[1,3],{}]
console.log(data[data.length-2])

// 3.
//  we check data types of each element by the use of typeof in the array
// 4.
// int
// 5.
//  no it will return string 

// 11 

