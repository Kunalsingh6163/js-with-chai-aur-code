//1. Reverse a string without using `.reverse()`.

const str = "Hello";

let result = "";

for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}

console.log(result);
