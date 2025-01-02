let longWord = ["This is my hello world program written into javascript language"];


let largestWord = longWord[0]
  .split(" ") // Split the string into an array of words
  .reduce((longest, current) => current.length > longest.length ? current : longest, "");

console.log("The largest word is:", largestWord);



let sentence = longWord[0]; // Access the string inside the array
let words = sentence.split(" "); // Split the sentence into an array of words
let largestNewWord = ""; // Variable to store the largest word

for (let i = 0; i < words.length; i++) {
  if (words[i].length > largestNewWord.length) {
    largestNewWord = words[i]; // Update the largest word if current word is longer
  }
}

console.log("The largest word is:", largestNewWord);
