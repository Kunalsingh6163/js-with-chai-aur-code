//2. Check if a string is a palindrome.

function checkPelindrome(text) {
  let result = "";

  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  if (text === result) {
    console.log("The string is a palindrome");
  } else {
    console.log("The string is not a palindrome");
  }
  return result;
}

checkPelindrome("LaL");
