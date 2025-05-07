// Scope in JavaScript
// var has function scope — variables declared with var are scoped to the function in which they're declared 
// (or globally if not in a function).

// let (and const) have block scope — they are scoped to the nearest enclosing block { ... }, such as a for loop body.

// 2. Closures
// A closure is a function that "remembers" the variables from its lexical scope 
// (i.e., the context in which it was created), even after that scope has finished executing.

const arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
    // setTimeout creates a closure that captures the variable `i`
    setTimeout(() => {
        // After 1000ms, this function runs
        // BUT by then, the loop has finished and `i` has become 3
        // All three closures share the SAME `i` due to function scope of `var`
        console.log(i); // Will print 3 every time
    }, 1000);
};

// var i is not block scoped, so there is only one i variable shared across all iterations.
// The loop runs and finishes almost instantly.
// By the time the callbacks inside setTimeout run (after 1000ms), the loop is over, and i has become 3.
// So all the closures created in the loop capture the same reference to i, and print the final value (3) three times.

// Output after 1 second:
// 3
// 3
// 3

//////////////////Solution/////////////////////////


for (let i = 0; i < arr.length; i++) {
    // `let` is block scoped, so a new `i` is created for EACH iteration
    // Each closure created by setTimeout captures its OWN `i`
    setTimeout(() => {
        // When this runs after 1000ms, it logs the correct `i` for that iteration
        console.log(i); // Will print 0, 1, and 2
    }, 1000);
}
// Output after 1 second:
// 0
// 1
// 2
