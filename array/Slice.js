//The slice method is used to extract a portion of an array or a string without modifying
// the original array or string. It creates a shallow copy of the specified portion.

//array.slice(start, end);
//string.slice(start, end);

// start: The zero-based index where extraction begins.
// end: (Optional) The zero-based index where extraction ends (not included in the result).
// If no end is provided, it extracts until the end of the array or string.

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Extract a portion of the array
const slicedFruits = fruits.slice(1, 4); // ["banana", "cherry", "date"]

console.log(slicedFruits);
console.log(fruits); // Original array remains unchanged

///with string

const str = "Hello, World!";

// Extract a substring
const slicedStr = str.slice(7, 12); // "World"

console.log(slicedStr);
console.log(str); // Original string remains unchanged



const arrayItems = [5,8,10,12,44];

let sliceArray = arrayItems.slice(1, 3);

console.log("This is my sliceData:-", sliceArray)