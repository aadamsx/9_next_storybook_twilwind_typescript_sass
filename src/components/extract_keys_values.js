// // extract key and values from array of objects
// const extractKeysAndValues = (arr, keys) => {
//   return arr.map((obj) => {
//     return keys.reduce((acc, key) => {
//       acc[key] = obj[key];
//       return acc;
//     }, {});
//   });
// };

// extractKeysAndValues(
//   [
//     { a: 1, b: 3 },
//     { a: 2, b: 5 },
//   ],
//   ["a", "b"]
// );

// extract keys and values from an array of objects
const extractKeysAndValues = (arr, keys) => {
  return arr.map((obj) => {
    return keys.reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
  });
};

extractKeysAndValues(
  [
    { a: 1, b: 3, c: 5, d: 7 },
    { a: 2, b: 5, c: 6, d: 8 },
  ],
  ["a", "b"]
);
