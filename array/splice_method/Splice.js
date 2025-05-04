
///////with limit

const text = ["apple,banana,cherry,date"];

// Splice into only 3 parts
const limitedSplit = text.splice(); // ["apple", "banana", "cherry"]

console.log(limitedSplit);

/////////////////////////////Example-2//////////////////
const sliceArray = ["apple", "banana", "pineApple", "guava"];

let updateSlice = sliceArray.splice(0,1);
console.log("this is the removed:-", updateSlice);

let addArray = sliceArray.splice(3,0,"Grapes", "coconut");
console.log("this is the original Array:-", addArray);

console.log("this is the original updated Array:-", sliceArray);
