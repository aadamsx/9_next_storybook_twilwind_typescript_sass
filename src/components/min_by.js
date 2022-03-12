// minBy
// Returns the minimum value of an array, after mapping each element to a value using the provided function.

// Use Array.prototype.map() to map each element to the value returned by fn, Math.min() to get the maximum value.

const minBy = (arr, fn) =>
  Math.min(...arr.map(typeof fn === "function" ? fn : (val) => val[fn]));

minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n); // 2
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"); // 2
