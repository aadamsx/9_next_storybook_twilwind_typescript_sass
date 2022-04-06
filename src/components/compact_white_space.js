// compactWhitespace
// Returns a string with whitespaces compacted.

// Use String.prototype.replace() with a regular expression to replace all occurences of 2 or more whitespace characters with a single space.

const compactWhitespace = (str) => str.replace(/\s{2,}/g, " ");

compactWhitespace("Lorem    Ipsum"); // 'Lorem Ipsum'
compactWhitespace("Lorem \n Ipsum"); // 'Lorem Ipsum'
