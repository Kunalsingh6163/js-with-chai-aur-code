//find the two num of LCM first find the highest common fector (HCF) OR gretest commen deviser (GCD)
// then (num1 * num2)/hcf

function checkHCF(num1, num2) {
  let hcf = 0;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
};

function checkLCM(num1, num2) {
  let hcf = checkHCF(num1, num2);
  return (num1 * num2) / hcf;
}

console.log(checkHCF(20, 30));
//
console.log(checkLCM(6, 8));

// second method
function gcd(num1, num2) {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

function lcm(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

// Example
console.log(lcm(12, 18));
