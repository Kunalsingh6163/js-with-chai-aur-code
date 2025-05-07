function checkArmstrong(number) {
  let sum = 0;
  let numToString = number.toString();
  let numOfDigit = numToString.length;

  for (let i = 0; i < numOfDigit; i++) {
    sum += Math.pow(Number(numToString[i]), numOfDigit);
  }
  return sum === number;
}

console.log(checkArmstrong(153));
