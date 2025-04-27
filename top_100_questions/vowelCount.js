let str = "elephant";

let vowel = "aeiou";
let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
  if (vowel.includes(str[i].toLowerCase())) {
    vowelCount++;
  }
}

console.log(vowelCount);
