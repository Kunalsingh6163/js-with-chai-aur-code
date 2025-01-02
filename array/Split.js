//The split method is used on strings to divide them into an array of substrings based on a specified separator.
//syntax
//string.split(separator, limit);

// separator: The pattern (string or regular expression) used to determine where to divide the string.
// limit: (Optional) A number specifying the maximum number of splits.

// Differences Between slice and split
// Feature	                    slice	                                split
// Input Type	                Arrays and Strings	                    Strings only
// Output Type	                Array or String (depending on input)	Array
// Modification	                Does not modify the original data	    Does not modify the original string
// Use Case	                    Extracts a portion	                    Divides a string into parts

const sentence = "JavaScript is amazing";

// Split by space adding the space is Represent like a comma(,)
const words = sentence.split(" "); // ["JavaScript", "is", "amazing"]

console.log(words);