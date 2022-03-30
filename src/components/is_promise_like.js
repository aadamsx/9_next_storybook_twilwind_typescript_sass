// isPromiseLike
// Returns true if an object looks like a Promise, false otherwise.

// Check if the object is not null, its typeof matches either object or function and if it has a .then property, which is also a function.

const isPromiseLike = (obj) =>
  obj !== null &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

isPromiseLike({
  then: function () {
    return "";
  },
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
