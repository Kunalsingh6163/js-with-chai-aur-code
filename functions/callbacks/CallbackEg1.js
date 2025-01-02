//A callback function in JavaScript is a function that is passed as an argument to
//another function and is executed after the completion of that function.
// Callbacks are commonly used for asynchronous operations, such as API calls, file handling, or event handling.

//Key Points/////

//(1).A callback function is not executed immediately; it's "called back" at a later time.
//(2).It can be synchronous or asynchronous depending on the context.

//eg-1 Synchronous Callback

function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}
function showMessage() {
  console.log("Welcome to the JavaScript world!");
}

const HelloWorld = () => console.log(`Hello Kunal`);
console.log(HelloWorld);
// Passing `showMessage` as a callback to `greet`
greet("John", showMessage);
