// takeRight
// Returns an array with n elements removed from the end.

// Use Array.prototype.slice() to create a slice of the array with n elements taken from the end.

const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]