function factorial(n) {
  result = 1;
  for (let i = 2; i <= n; i++) {
    // result *= i;
    result = result * i;
  }
  return result;
}
console.log(factorial(4));
