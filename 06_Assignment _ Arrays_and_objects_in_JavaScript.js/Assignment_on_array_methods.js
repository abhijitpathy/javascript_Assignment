// push()
// 1.
let colors = ["red","white","yellow"];
colors.push("orange","grey")
console.log(colors)
// 2
let nu =[];
nu.push(5,10,15)
console.log(nu)
// 3
let acessesories = ["pen","book"]
acessesories.push("Eraser","Scale",)
console.log(acessesories)
// 4
// push adds new elements  at the end of the array
// 5
// yes push changed the original array by adding new elemets to it

//pop()
// 1
let a = [1,2,3,4,5];
a.pop()
a.pop()
console.log(a)

// 2
let rgb = ["Red","Blue","Green"]
console.log(rgb.pop())
console.log(rgb)

// 3
let n = [100,200,300,400]
let retValue = n.pop()
console.log(retValue)
console.log(n)

// 4
//pop() returns the elements in an array with suntracting the last elememt of the array
// 5
let r =[]
r.pop()
console.log(r)
// it prints empty arrays

// unshift()
// 1
let subj = ["css","javascript"]
subj.unshift("html")
console.log(subj)
// 2
let num = [20,30,40]
num.unshift(5,10)
console.log(num)
// 3
let city = []
city.unshift("oakland","bern","newvalia")
console.log(city)

// 4
// unshift() adds new elements at the starting of the array
// 5
// yes unshift can add more than one element at a single time it bascially stores the first as first 

// shift()
// 1
let city1 =["delhi","mumbai","dharmasala","nagpur"]
console.log(city1.shift())
console.log(city1)
// 2
let arr = [10, 20, 30, 40]
console.log(arr.shift())
console.log(arr.shift())
console.log(arr)
// 3
let fruits = ["Apple", "Banana", "Mango"];
let remFruits = (fruits.shift());
console.log(remFruits);

// 4
// shift is different from pop beacuse pop removes elements from back whereas shift removes elements from front

// 5
// it returns the array after removing the first element of the array

// indexof()
// 1
let fruits1 = ["apple","orange","litchi","guava","banana","peach"]
console.log(fruits1.indexOf("apple"))
console.log(fruits1.indexOf("kiwi"))

// 2
let alpha = ["A","B","c","B","E","B",]
console.log(alpha.indexOf("B"))

// 3
let nm = ["Abhi","RAhul","rakesh","Rakul"]
console.log(nm.indexOf("rakesh"))

// 4
// indexof() reurns -1 when the element is not found inside an element

// 5
// indexof() only takes the index value of the first character and not his repeatatives

// lastindexof()

// 1
let o = [1,1,1]
console.log(o.lastIndexOf(1))
// 2
let ch = ["X", "Y", "Z", "Y", "X"]
console.log(ch.lastIndexOf("X"))
console.log(ch.lastIndexOf("Y"))
// 3
let b = [1,2,1,3,1]
console.log(b.lastIndexOf(1))
// 4
// last index is diff from index beacuase imdex find the first elelment where lastindex find the last element in an array

// 5
// i would prefer it if i have find the last index of an repeatative elemet in an array

//7 includes()
// 1. Check for a Friend's Name

const friends = ["Aarav", "Rohan", "Priya", "Sneha"];
const searchName = "Priya";

if (friends.includes(searchName)) {
  console.log(`${searchName} is in the friends list.`);
} else {
  console.log(`${searchName} is not in the friends list.`);
}
// Output: Priya is in the friends list.
// 2. Check Numbers in [11, 22, 33, 44]
const numbers = [11, 22, 33, 44];

console.log(numbers.includes(33)); // Output: true
console.log(numbers.includes(55)); // Output: false
// 3. Check Subjects (Existing vs. Non-Existing)

const subjects = ["Math", "Physics", "Computer Science", "English"];

console.log(subjects.includes("Physics")); // Output: true (exists)
console.log(subjects.includes("History")); // Output: false (does not exist)
// 4. What does includes() return?
// includes() returns a boolean value:

// true if the specified element is found in the array.

// false if the element is not found.

// 5. Does includes() work the same way for both numbers and strings?
// Yes, it uses strict equality (similar to ===) for both, meaning both the value and data type must match. For strings, it is also case-sensitive (e.g., "math" will return false for "Math"), and "33" (string) will not match 33 (number).

// 8 reverse()
// 1. Reverse an Array of 5 Numbers

const numbers3 = [10, 20, 30, 40, 50];

console.log("Before:", numbers3); 
numbers.reverse();
console.log("After:", numbers3); 
// 2. Reverse ["A", "B", "C", "D"]
const letters = ["A", "B", "C", "D"];
letters.reverse();

console.log(letters); 
// 3. Reverse an Array of 4 City Names

const cities = ["Ahmedabad", "Mumbai", "Delhi", "Bengaluru"];
cities.reverse();

console.log(cities); 
// 4. Does reverse() create a new array or modify the original one?
// It modifies (mutates) the original array directly. Although reverse() returns a reference to the array, it is the exact same array in memory—not a copy. (Note: If you ever need a reversed copy without changing the original, JavaScript offers .toReversed()).

// 5. What is the meaning of “in-place” when we say reverse() works in-place?
// "In-place" means the algorithm rearranges the elements directly inside the existing memory space of the original array (typically by swapping the first and last elements, second and second-to-last, etc.) rather than allocating extra memory to build a separate array.

// 9 sort()
// 1. Sort an Array of 5 Student Names Alphabetically

const students = ["Rohan", "Aarav", "Priya", "Sneha", "Karan"];
students.sort();

console.log(students); 
// 2. Sort ["Dog", "Cat", "Elephant", "Ant"]
const animals = ["Dog", "Cat", "Elephant", "Ant"];
animals.sort();

console.log(animals); 
// 3. Sort [40, 100, 5, 25]
const numbers2 = [40, 100, 5, 25];
numbers2.sort();

console.log(numbers); 
// 4. Why does sort() give an incorrect order for [40, 100, 5, 25]?
// By default, sort() converts every element into a string and compares them alphabetically using their UTF-16 character codes (dictionary order) rather than their numerical values. Because "1" comes before "2", "4", and "5", "100" is sorted before "25", "40", and "5".

// (To sort numbers properly, pass a compare function: numbers.sort((a, b) => a - b)).

// 5. Does sort() change the original array?
// Yes, sort() mutates (modifies) the original array in-place. (If you need a sorted copy without changing the original array, JavaScript provides .toSorted()).


// 10 join()
// 1. Join 4 Programming Languages with " | "
const languages = ["JavaScript", "Python", "C", "Java"];
const result = languages.join(" | ");

console.log(result); // Output: "JavaScript | Python | C | Java"
// 2. Join ["HTML", "CSS", "JavaScript"] with " - "
const webTech = ["HTML", "CSS", "JavaScript"];
const joinedWebTech = webTech.join(" - ");

console.log(joinedWebTech); 
// 3. Join 3 Favorite Subjects with " / "

const subjects1 = ["Data Structures", "Web Development", "Mathematics"];
const joinedSubjects = subjects1.join(" / ");

console.log(joinedSubjects); 
// 4. What happens if you do not pass any separator to join()?
// If no separator is passed (i.e., array.join()), JavaScript uses a comma (,) as the default separator with no spaces (e.g., "HTML,CSS,JavaScript").

// 5. What does join() return – an array or a string?
// join() returns a string. The original array remains unchanged.

// 11 concat()
// 1
let q = [1,2]
let w = [1,2]
console.log(q.concat(w))
// 2
let arr4 =[1,2]
let arr3 = [3,4]
console.log(arr4.concat(arr3))
// 3
const arr1 = ["A", "B"];
const arr2 = ["C", "D"];
const arr7 = ["E", "F"];

const combined = arr1.concat(arr2, arr7);

console.log(combined); // Output: ["A", "B", "C", "D", "E", "F"]
// 4. Does concat() change the original arrays?
// No, concat() does not modify any of the original arrays. It creates and returns a brand-new shallow copy containing the merged elements, leaving arr1, arr2, and arr3 completely intact.

// 5. Can you combine more than two arrays using one concat() call?
// Yes, concat() accepts any number of arguments separated by commas (e.g., arr1.concat(arr2, arr3, arr4, ...)), allowing you to merge as many arrays—or even individual values—as needed in a single call.

// 12 slice()
// 1. Extract Elements from Index 2 to 5 from [5, 10, 15, 20, 25, 30]

const arrc = [5, 10, 15, 20, 25, 30];
const extracted = arrc.slice(2, 5);

console.log(extracted); // Output: [15, 20, 25]


// 2. Use slice(1, 4) on [10, 20, 30, 40, 50]
const original = [10, 20, 30, 40, 50];
const sliced = original.slice(1, 4);

console.log("New Array:", sliced);        // Output: New Array: [20, 30, 40]
console.log("Original Array:", original); // Output: Original Array: [10, 20, 30, 40, 50]
// 3. Extract the First 3 Elements from an Array of 6 Numbers

const numbers4 = [2, 4, 6, 8, 10, 12];
const firstThree = numbers4.slice(0, 3);

console.log(firstThree); // Output: [2, 4, 6]
// 4. Does slice() modify the original array?
// No, slice() does not modify the original array. It returns a brand-new shallow copy of the selected portion while leaving the original array untouched.

// 5. What happens if you omit the second argument in slice()?
// If you omit the second (end) argument (e.g., arr.slice(2)), slice() extracts all elements starting from the given start index all the way to the very end of the array.

// 13 splice()
// 1. Remove Two Elements Starting at Index 1
const numbers8 = [10, 20, 30, 40, 50];
const removed = numbers.splice(1, 2);

console.log("Updated Array:", numbers8);
console.log("Removed Items:", removed); 


// 2. Replace Elements in an Array Using splice()


const fruits5 = ["Apple", "Banana", "Cherry", "Date"];
fruits5.splice(1, 2, "Mango", "Orange");

console.log(fruits); 

// 3. Insert a New Element at Index 2 Without Deleting Anything

const colors4 = ["Red", "Green", "Yellow", "Purple"];
colors4.splice(2, 0, "Blue");

console.log(colors); 


// 4. Does splice() modify the original array?
// Yes, splice() modifies (mutates) the original array directly in-place—unlike slice(), which returns a shallow copy without touching the original.

// 5. What does splice() return?
// splice() always returns a new array containing the deleted/removed elements. If no elements were removed (for example, when the delete count is 0), it returns an empty array ([]).

// tostring()
// 1. Convert 4 Favorite Movies into a String
const movies = ["Inception", "Interstellar", "3 Idiots", "The Dark Knight"];
const movieString = movies.toString();

console.log(movieString); // Output: "Inception,Interstellar,3 Idiots,The Dark Knight"
// 2. Convert [1, 2, 3, 4] to a String

const numbers6 = [1, 2, 3, 4];
const numberString = numbers6.toString();

console.log(numberString); // Output: "1,2,3,4"
// 3. Convert an Array of 3 Subject Names Using toString()

const subjects4 = ["JavaScript", "Data Structures", "Operating Systems"];
const subjectString = subjects4.toString();

console.log(subjectString);
// 4. How is toString() different from join()?
// Custom Separator: join(separator) lets you choose any separator (such as " | ", " - ", or ""), whereas toString() takes no arguments and always separates elements with a comma.

// Inheritance: toString() is a built-in method inherited from Object.prototype (available on almost all JavaScript data types), whereas join() is specific to arrays.

// 5. What separator does toString() use by default?
// toString() always uses a comma (,) with no spaces as its separator.

// 15 fill()
// 1. Fill an Array of 6 Numbers with 10
const numbers7 = [1, 2, 3, 4, 5, 6];
numbers7.fill(10);

console.log(numbers); // Output: [10, 10, 10, 10, 10, 10]
// 2. Fill [1, 2, 3, 4, 5] with 0
const arr5 = [1, 2, 3, 4, 5];
arr5.fill(0);

console.log(arr); // Output: [0, 0, 0, 0, 0]
// 3. Fill an Array of 4 Elements with "Hello"
const words = ["A", "B", "C", "D"];
words.fill("Hello");

console.log(words); 

// 4. Does fill() change the original array?
// Yes, fill() mutates (modifies) the original array directly in-place and returns a reference to that same modified array.

// 5. Can fill() change only a part of the array?
// Yes. fill(value, start, end) accepts optional start (inclusive) and end (exclusive) index arguments to overwrite only a specific range:

const items = [10, 20, 30, 40, 50];
items.fill(99, 1, 4);
console.log(items);