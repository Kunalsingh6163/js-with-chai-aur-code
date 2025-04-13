const arr = [1, 2, 3, 4, 7, 2, 5, 3, 8, 4];


// this mathod remove the duplicate elements from the above array without creating new array. 
//its remove element from the origin array
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--; // Decrement j to check the new element at the same position
    }
  }
}

console.log(arr);


let removeDuplicate = [];

for(let i = 0; i < arr.length; i++){
  if(!removeDuplicate.includes(arr[i])){
    removeDuplicate.push(arr[i]);
  }
};
console.log(removeDuplicate);