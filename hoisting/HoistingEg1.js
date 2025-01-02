//This is hoisting example with variavles 

console.log("🚀 ~ num:", num); // here we are tring to access the num before their intialization.

var num ;

console.log(num); // in the num there is no value so it will print undefined.

num = 10;
console.log("🚀 ~ num:", num);

