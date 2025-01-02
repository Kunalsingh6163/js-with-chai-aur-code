function Triangle(number) {
  for (let i = 0; i <= 10; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

Triangle(5)