// isPrimitive
// Returns a boolean determining if the passed value is primitive or not.

// Create an object from val and compare it with val to determine if the passed value is primitive (i.e. not equal to the created object).

const isPrimitive = (val) => Object(val) !== val;

isPrimitive(null); // true
isPrimitive(50); // true
isPrimitive("Hello!"); // true
isPrimitive(false); // true
isPrimitive(Symbol()); // true
isPrimitive([]); // false
