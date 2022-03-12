// Create a function that masks a string of characters with # except for the last four (4) characters.

mask("123456789"); // "#####6789"

// Answer
// There are many ways to solve this problem, this is just one one of them.

// Using String.prototype.slice() we can grab the last 4 characters of the string by passing -4 as an argument. Then, using String.prototype.padStart(), we can pad the string to the original length with the repeated mask character.

const mask = (str, maskChar = "#") => {
  return str.slice(-4).padStart(str.length, maskChar);
};

// Good to hear
// Short, one-line functional solutions to problems should be preferred provided they are efficient
