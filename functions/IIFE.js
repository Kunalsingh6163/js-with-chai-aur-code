//Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately 
// after they are defined. They are typically used to create a local scope for variables to prevent them 
// from polluting the global scope.

var result = (function() {
	var x = 10;
	var y = 20;
	return x + y;
})();

console.log(result); // Output: 30
