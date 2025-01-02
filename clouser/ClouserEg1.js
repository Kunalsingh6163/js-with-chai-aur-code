// What is clouser?
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
// (the lexical environment). In other words, a closure gives a function access to its outer scope.
// In JavaScript, closures are created every time a function is created, at function creation time.

let age = 26;

function UsersDetails() {
  let name = "John";
  console.log(name, ",", age);

  function Student1() {
    let rollNo = 1;
    console.log(name, ",", age, ",", rollNo);
  }
  Student1();
}
// In the above example, the function Student1 is a closure because it has access to the variables of their parent.

UsersDetails();
