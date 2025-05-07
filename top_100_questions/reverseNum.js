let n = 12345;
function reverseNum(num) {
  let str = num.toString();
  console.log(str);
  let store = "";
  for (let i = str.length - 1; i >= 0; i--) {
    store += str[i];
  }
  return parseInt(store);
}

console.log(reverseNum(n));
