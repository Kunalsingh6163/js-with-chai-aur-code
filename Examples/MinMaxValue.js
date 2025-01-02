const numArray = [1, 8, 5, 6, 77, 11, 5, 99];

let min = numArray[0];

let max = numArray[0];

function MinMaxValue() {
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < min) {
      min = numArray[i];
    } else if (numArray[i] > max) {
      max = numArray[i];
    }
  }
  console.log("The min value:- ", min, " max value:-", max);
}

MinMaxValue();
