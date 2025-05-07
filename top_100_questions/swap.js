// swap two variable without using third variable.

function swap(a, b) {
  console.log(a, b);
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(a, b);
}

swap(2, 3);
