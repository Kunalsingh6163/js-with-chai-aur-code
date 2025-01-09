//Certainly, let's break down the reduce() method in JavaScript.
//What is the reduce() method?

//The reduce() method iterates over an array and accumulates a single value by repeatedly applying a provided 
// function to each element and the accumulated result.
// It's a powerful tool for performing calculations like:
// Summing all elements in an array.
// Finding the maximum or minimum value.
// Creating an object from an array of objects.
// Flattening a nested array.

/////////////////////////////Eg-1////////////////////////
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sum); // Output: 15

///////////////////////////////////////////Eg-2/////////////
const numbersNew = [5, 10, 2, 8, 1];
const max = numbersNew.reduce((accumulator, currentValue) => (currentValue > accumulator ? currentValue : accumulator));
console.log(max); // Output: 10


//////////////////////////////////////////
const numbersNew2 = [5, 10, 2, 8, 1, 15];

const maxNumber = numbersNew2.reduce((max, current) => {
  return current > max ? current : max;
}, numbersNew2[0]); // Initial value is the first element of the array

console.log(maxNumber); // Output: 10
