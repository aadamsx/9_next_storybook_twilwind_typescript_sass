// words
// Converts a given string into an array of words.

// Use String.prototype.split() with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings. Use Array.prototype.filter() to remove any empty strings. Omit the second argument to use the default regexp.

const words = (str, pattern = /[^a-zA-Z-]+/) =>
  str.split(pattern).filter(Boolean);

words("I love javaScript!!"); // ["I", "love", "javaScript"]
words("python, javaScript & coffee"); // ["python", "javaScript", "coffee"]
