// pick
// Picks the key-value pairs corresponding to the given keys from an object.

// Use Array.prototype.reduce() to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.

const pick = (obj, arr) => {
  return arr.reduce(
    (acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
    {}
  );
};

// pick({ a: 1, b: "2", c: 3 }, ["a", "c"]); // { 'a': 1, 'c': 3 }
