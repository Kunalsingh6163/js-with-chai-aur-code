const myArray = [1, 2, [3, 4, [5, 6, [7, 8]]]];


function flattenArray(arr) {
  const result = [];

  function helper(subArray) {
    for (let i = 0; i < subArray.length; i++) {
      if (Array.isArray(subArray[i])) {
        helper(subArray[i]); // Recursively flatten nested arrays
      } else {
        result.push(subArray[i]); // Add non-array elements to result
      }
    }
  }

  helper(arr);
  return result;
}

const flattenedArray = flattenArray(myArray);
console.log(flattenedArray);
