let str = "sorry , i have some others work i will try to come fast i am sorry";

let sentence = str.split(" ");

function countWord(ignore, arr) {
  // let ignore = 'sorry';

  let count = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (arr[i] === ignore) {
      continue;
    }
    if (num in count) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  return console.log(count);
}

countWord("sorry", sentence);
