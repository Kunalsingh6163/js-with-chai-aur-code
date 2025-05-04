

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
  console.log(nextBiggest(arr));

  // second

  function secondLargest(array) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        secondLargest = largest;
        largest = array[i];
      } else if (array[i] > secondLargest && array[i] !== largest) {
        secondLargest = array[i];
      }
    }
  
    return secondLargest;
  }
  
  const ar = [77, 44, 88, 105, 98, 750];
  console.log(secondLargest(ar)); // Output: 105
  