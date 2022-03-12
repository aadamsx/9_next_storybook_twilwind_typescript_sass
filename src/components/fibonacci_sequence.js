// Generate an array, containing the Fibonacci sequence, up until the nth term.
// Answer
// Initialize an empty array of length n. Use Array.prototype.reduce() to add values into the array, using the sum of the last two values, except for the first two.

const fibonacci = (n) =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
