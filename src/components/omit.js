// omit
// Omits the key-value pairs corresponding to the given keys from an object.

// Use Object.keys(obj), Array.prototype.filter() and Array.prototype.includes() to remove the provided keys. Use Array.prototype.reduce() to convert the filtered keys back to an object with the corresponding key-value pairs.

const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

omit({ a: 1, b: "2", c: 3 }, ["b"]); // { 'a': 1, 'c': 3 }
