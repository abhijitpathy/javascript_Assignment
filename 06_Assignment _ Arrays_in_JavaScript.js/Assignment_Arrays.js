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

JavaScript
console.log(colors[0]);

// uploading values

//1  How do you update a specific value inside an existing JavaScript array?

// You access the element using its index and reassign a new value to it using the assignment operator (=), like this: arrayName[index] = newValue;.

//2  Given var marks = [80, 75, 90];, what code would you write to change the second element (75) to 95?

// JavaScript
marks[1] = 95;


//3  After executing the update from the previous question, what will console.log(marks); output?

[80, 95, 90]

//4  True or False: You need to use a special built-in method like update() to change an array element's value.

// False. You do not need any special method; you simply use direct assignment via the index (arrayName[index] = newValue).

//5  Can you update a value at an index that is currently outside the bounds of the array? What happens if you assign a value to a much higher index?

// Yes, you can. If you assign a value to an index higher than the current maximum index, JavaScript will automatically expand the array, fill the intervening empty slots with empty items (which evaluate to undefined), and update the array's length property to accommodate the new index plus one.