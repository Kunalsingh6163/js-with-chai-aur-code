let str = "hello world";

let reversed = str.split("").reverse().join("");

console.log(reversed);


let revers = [];

for (let i = str.length - 1; i >= 0; i--) {
  revers += str[i];
}
console.log("🚀 ~ revers:", revers);
