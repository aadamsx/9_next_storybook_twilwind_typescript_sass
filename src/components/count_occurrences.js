// countOccurrences
// Counts the occurrences of a value in an array.

// Use Array.prototype.reduce() to increment a counter each time you encounter the specific value inside the array.

const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
