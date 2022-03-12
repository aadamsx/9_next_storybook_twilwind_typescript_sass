// drop
// Returns a new array with n elements removed from the left.

// Use Array.prototype.slice() to slice the remove the specified number of elements from the left.

const drop = (arr, n = 1) => arr.slice(n);

drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
