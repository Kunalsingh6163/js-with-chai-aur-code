//The forEach() method calls a function for each element in an array.
//The forEach() method is not executed for empty elements.

//Syntax of forEach loop :--> array.forEach(function(currentValue, index, arr), thisValue)

let myArr = [4, 5, 8, 5, 4, 2, 1];

myArr.forEach((countItem, index) => {
  console.log(index + ":" + countItem);
});

let count = {};

myArr.forEach((item) => {
  if (count[item]) {        // in this line we are checking if element is in the count
    count[item]++;          // we increse that item with ++;
  } else {
    count[item] = 1;        // if it find at first time we make initail with 1;
  }
});

console.log(count);
