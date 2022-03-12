// partial
// Creates a function that invokes fn with partials prepended to the arguments it receives.

// Use the spread operator (...) to prepend partials to the list of arguments of fn.

const partial =
  (fn, ...partials) =>
  (...args) =>
    fn(...partials, ...args);

const greet = (greeting, name) => greeting + " " + name + "!";
const greetHello = partial(greet, "Hello");
greetHello("John"); // 'Hello John!'
