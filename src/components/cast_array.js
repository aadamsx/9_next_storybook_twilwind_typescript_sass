// castArray
// Casts the provided value as an array if it's not one.

// Use Array.prototype.isArray() to determine if val is an array and return it as-is or encapsulated in an array accordingly.

const castArray = (val) => (Array.isArray(val) ? val : [val]);

castArray("foo"); // ['foo']
castArray([1]); // [1]
