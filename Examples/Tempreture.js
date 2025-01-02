var array = [2, 42, 82, 35, 122, 162, 202, 242, 282, 322, 362];

// function closest(array, num) {
//   var i = 0;
//   var minDiff = 1000;
//   var ans;
//   for (i in array) {
//     var m = Math.abs(num - array[i]);
//     if (m < minDiff) {
//       minDiff = m;
//       ans = array[i];
//     }
//   }
//   return ans;
// }
// console.log(closest(array, 300));


const findClosestNumber = (array, target) => {
    // Validate the array is not empty
    // if (array.length === 0) return null;
  
    // Initialize the closest value
    let closest = array[0];
  
    // Loop through the array to find the closest number
    for (let num of array) {
      if (Math.abs(target - num) < Math.abs(target - closest)) {
        closest = num;
      }
    }
  
    return closest;
  };


  console.log(findClosestNumber(array, 30));