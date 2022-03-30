// merge
// Creates a new object from the combination of two or more objects.

// Use Array.prototype.reduce() combined with Object.keys(obj) to iterate over all objects and keys. Use hasOwnProperty() and Array.prototype.concat() to append values for keys existing in multiple objects.

const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k];
        return acc;
      }, {}),
    {}
  );

const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: "foo",
};
merge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
