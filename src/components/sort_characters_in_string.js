// sortCharactersInString
// Alphabetically sorts the characters in a string.

// Use the spread operator (...), Array.prototype.sort() and String.localeCompare() to sort the characters in str, recombine using String.prototype.join('').

const sortCharactersInString = (str) =>
  [...str].sort((a, b) => a.localeCompare(b)).join("");

sortCharactersInString("cabbage"); // 'aabbceg'
