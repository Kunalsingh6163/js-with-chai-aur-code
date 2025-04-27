//method 1
const myArray = [1, 2, 3, 4, 5, 8];

const flatenArray = myArray.map((num) => num);

const sum = flatenArray.reduce((acc, cur) => (sumElem = acc + cur), 0);

console.log(sum);

//method 2

let arr = [1, 2, 3, 4];

function sumofArray(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

console.log(sumofArray(arr));
