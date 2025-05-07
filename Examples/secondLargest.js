const ar = [16, 32, 55, 145, 22];

// i am showing how to use (let value of array) and access the complete elements from array.
for(let elem of ar){
    console.log(elem);
};

function findSecondLargest(arr) {
    if (arr.length < 2) {
      return undefined;
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
      }
    }
  
    return secondLargest === -Infinity ? undefined : secondLargest;
  };
  console.log("the second largest elem form array 1",findSecondLargest(ar));
  

  function nextBiggest(arr) {
    let max = -Infinity, result = -Infinity;
  
    for (const value of arr) {
      const nr = Number(value)
  
      if (nr > max) {
        [result, max] = [max, nr] // save previous max
      } else if (nr < max && nr > result) {
        result = nr; // new second biggest
      }
    }
  
    return result;
  }
  
  const arr = ['20','120','111','215','54','78'];
  console.log("the second largest elem form array 2",nextBiggest(arr));