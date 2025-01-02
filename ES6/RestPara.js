//Concatenate Arrays using Spread Operator
//The spread operator can be used to concatenate more than one array.
const restArray = [4, 5, 8, 7, 44, 77, 45, 74];

const newArray = [5 ,10, 15, 20]

const mixArray = [...restArray, ...newArray];

console.log(mixArray)