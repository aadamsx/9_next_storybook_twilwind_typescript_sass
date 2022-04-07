// Create a function pipe that performs left-to-right function composition by returning a function that accepts one argument.

const square = (v) => v * v;
const double = (v) => v * 2;
const addOne = (v) => v + 1;
const res = pipe(square, double, addOne);
res(3); // 19; addOne(double(square(3)))

// Gather all supplied arguments using the rest operator ... and return a unary function that uses Array.prototype.reduce() to run the value through the series of functions before returning the final value.

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, fn) => fn(v), x);

// Function composition is the process of combining two or more functions to produce a new function.
