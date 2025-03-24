//When you pass a primitive value to a function, the function receives a copy of that value.
// Any modifications made to the parameter within the function do not alter the original variable outside the function.
function modifyPrimitive(value) {
    value = value + 10;
    console.log("Inside function:", value); // Output: Inside function: 15
  };
  
  
  let originalValue = 5;
  modifyPrimitive(originalValue);
  console.log("Outside function:", originalValue);