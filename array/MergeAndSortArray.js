const arr1 = [1, 3, 4, 2, 10, 8, 7];
const arr2 = [5, 1, 3, 6, 8, 2];

// Merging both arrays while maintaining order and removing duplicates
// const mergedArray = [...new Set([...arr1, ...arr2])];
// console.log(mergedArray);

function mergeAndSort(arr1, arr2) {
  const mergedArr = [...arr1, ...arr2];

  for (let i = 0; i < mergedArr.length; i++) {
    for (let j = 0; j < mergedArr.length - i - 1; j++) {
      if (mergedArr[j] > mergedArr[j + 1]) {
        let temp = mergedArr[j];
        mergedArr[j] = mergedArr[j + 1];
        mergedArr[j + 1] = temp;
      }
    }
  }
  return mergedArr;
}

const mergedAndSortArray = mergeAndSort(arr1, arr2);

console.log(mergedAndSortArray);
