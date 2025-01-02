function divide(a, b) {
    const result = a / b;
    if (Number.isNaN(result)) {
       return "Invalid division";
    }
    return result;
 }
 
 console.log(divide(10, 2)); // 5
 console.log(divide(0, 0)); // "Invalid division"
 