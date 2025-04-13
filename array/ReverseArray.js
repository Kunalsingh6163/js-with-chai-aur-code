const arr = [1, 2, 3, 4, 5];

const reverseArray = arr.reverse(arr);

console.log(reverse);

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temporary = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temporary;
}

console.log(arr);

function reverse(myarr) {
  for (let i = 0, j = myarr.length - 1; i <= j; i++, j--) {
    let temporary = myarr[i];
    myarr[i] = myarr[j];
    myarr[j] = temporary;
    console.log(temporary);
  }
}

console.log(reverse(arr));


const reversed = [];

for(i = arr.length-1; i >= 0; i--){
    reversed.push(arr[i]);
};

console.log(reversed);
