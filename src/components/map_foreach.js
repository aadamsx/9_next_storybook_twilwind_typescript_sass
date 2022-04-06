// What is the difference between the array methods map() and forEach()?
// Answer
// Both methods iterate through the elements of an array. map() maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, forEach() invokes the callback function for each element but does not return a new array. forEach() is generally used when causing a side effect on each iteration, whereas map() is a common functional programming technique.

// Good to hear
// Use forEach() if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.
// map() is the right choice to keep data immutable where each value of the original array is mapped to a new array.
// Additional
