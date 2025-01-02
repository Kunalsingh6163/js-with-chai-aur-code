const arr = [2, 5, 6, 4, 8, 9];

var max = arr[0];

function FindLargeNum() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max)
}

FindLargeNum();
