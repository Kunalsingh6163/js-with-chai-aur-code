//The JavaScript for in statement loops through the properties of an Object:

//syntax of for in : --> for (key in object) {
// code block to be executed }

const myArray = [5, 4, 8, 5, 4, 2, 1];

const count = {};

for (x in myArray) {
  let num = myArray[x];
  if (count[num]) {
    count[num] += 1;
  } else {
    count[num] = 1;
  }
}

console.log(count);
