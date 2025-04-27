//The at() and charAt() methods in JavaScript are both used to access individual characters 
// within a string, but they differ in how they handle negative indexes. 


let str = "hello world";

let str_at = str.at(2);
console.log("🚀 ~ strIndex:", str_at)

let str_charAt = str.charAt(6);
console.log("🚀 ~ strIndex:", str_charAt)


// lets see difference between them

let str_at1 = str.at(-12); // index not exist
console.log("🚀 ~ strIndex:", str_at1)

let str_charAt1 = str.charAt(16); // index not exist
console.log("🚀 ~ strIndex:", str_charAt1)