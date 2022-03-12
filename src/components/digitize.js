// digitize
// Converts a number to an array of digits.

// Convert the number to a string, using the spread operator (...) to build an array. Use Array.prototype.map() and parseInt() to transform each value to an integer.

const digitize = (n) => [...`${n}`].map((i) => parseInt(i));

digitize(123); // [1, 2, 3]
