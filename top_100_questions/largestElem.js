// using reduce method;

const arr = [14, 21, 44, 22, 74, 18, 93];

const largestElem = arr.reduce((a, b) => {
  if (b > a) {
    a = b;
  }
  return a;
});

console.log(largestElem);

//using for loop

function larget(array) {
  let storeLarge = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > storeLarge) {
      storeLarge = array[i];
    }
  }
  return storeLarge;
}
const ar = [77, 44, 88, 105, 750];
console.log(larget(ar));

//using best practice

const findLargest = Math.max(...ar);
console.log("🚀 ~ findLargest:", findLargest);
