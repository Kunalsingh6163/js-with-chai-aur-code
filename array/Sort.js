//The JS array.sort() method rearranges the array elements alphabetically and returns a sorted array.
//It does not create a new array but updates the original array.
let fruits = ["banana", "apple", "cherry", "date", "elderberry"];

fruits.sort(); // sorts the array in-place
console.log(fruits); // Output: ["apple", "banana", "cherry", "date....]

//Note:--> The sorting with JavaScript’s sort() is different from languages like C++ , Java and Python. 
// It compares array elements alphabetically as strings rather than numbers. 
// This causes elements to be sorted based on character Unicode values instead of numerical order.

const ar = [ 10, 20, 25, 100 , 40]
console.log(ar.sort((a,b) => a - b))

const array = ['a', 'c' , 'b', 'e', 'd'];

console.log(array.sort());