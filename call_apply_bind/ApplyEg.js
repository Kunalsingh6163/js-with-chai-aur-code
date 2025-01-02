function sumNumbers(a, b) {
    return a + b;
  }
  
  const numbers = [5, 3];
  const result = sumNumbers.apply(null, numbers); // Output: 8