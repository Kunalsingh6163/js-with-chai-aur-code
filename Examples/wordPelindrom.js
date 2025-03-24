function isPalindrome(word) {
    // Convert the word to lowercase and remove non-alphanumeric characters
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the word and compare it to the original
    const reversedWord = cleanedWord.split('').reverse().join('');
    
    return cleanedWord === reversedWord;
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
