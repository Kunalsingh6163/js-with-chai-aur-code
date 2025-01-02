function Table(number) {
  console.log(`Table of ${number}`);
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(result);
  }
}

Table(2);
