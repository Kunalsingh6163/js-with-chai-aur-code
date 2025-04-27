function febonacci(n) {
  let series = [];
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    series.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return series;
}

console.log(febonacci(12));

// second method using generator function

function* fibonacciGenerator() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacciGenerator();
console.log([...Array(10)].map(() => fib.next().value)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
