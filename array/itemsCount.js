let myArray = [1, 1, 2, 3, 1, 2, 3, 4, 8, 4, 4, 4, 4, 4, 9];

//first method
let countItems = {};
myArray.forEach((num) => {
  countItems[num] = (countItems[num] || 0) + 1;
});
// Second method

let countMap = {};
for (let i = 0; i < myArray.length; i++) {
  let num = myArray[i];
  if (num in countMap) {
    countMap[num]++;
  } else {
    countMap[num] = 1;
  }
}

console.log(countItems);
console.log(countMap);
