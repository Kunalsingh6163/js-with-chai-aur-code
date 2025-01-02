//etTimeout and setInterval are two JavaScript functions that allow you to execute code after a specified delay. 
// Here's a breakdown of their usage and differences:
//setTimeout(function, milliseconds)
//Purpose: Executes a function once after a specified delay.
//Usage:- given below

function myFunction() {
    console.log("Hello after 2 seconds!"); 
  }
  setTimeout(myFunction, 2000); // Calls myFunction after 2000 milliseconds (2 seconds)

  