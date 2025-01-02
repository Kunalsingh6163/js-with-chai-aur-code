const myArray =[5,6,8,15,42,14,66];

//this is the way we print the Array Data but it not suitable 
// let a = myArray[0];
// let b = myArray[1];
// console.log(a, b)

//we can use ...rest operator and destruct the array.

let [a, b, ...rest] = myArray;
console.log(a, b, rest);

let newArryData = [...rest] = myArray;
console.log("🚀 ~ newArryData:", newArryData)

