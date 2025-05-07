//find the two num of highest common fector (HCF) OR gretest commen deviser (GCD)

function checkHCF(num1, num2) {
  let hcf = 0;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

console.log(checkHCF(6, 8));

// second method and the best practice
function gcd(num1, num2) {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}
console.log(gcd(6, 8));
