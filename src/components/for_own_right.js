// forOwnRight
// Iterates over all own properties of an object in reverse, running a callback for each one.

// Use Object.keys(obj) to get all the properties of the object, Array.prototype.reverse() to reverse their order and Array.prototype.forEach() to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach((key) => fn(obj[key], key, obj));

forOwnRight({ foo: "bar", a: 1 }, (v) => console.log(v)); // 1, 'bar'
