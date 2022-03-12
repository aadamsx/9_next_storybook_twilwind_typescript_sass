// extract array deeply nested inside object
const extract = (obj, path) => {
  const keys = path.split(".");
  let result = obj;
  for (let i = 0; i < keys.length; i++) {
    result = result[keys[i]];
  }
  return result;
};

// extract mutiple arrays at different levels inside object
const extractMultiple = (obj, paths) => {
  return paths.map((path) => {
    return extract(obj, path);
  });
};

const obj = {
  a: {
    b: {
      c: {
        d: {
          e: [{ x: 1 }, { y: 2 }, { z: 3 }],
        },
        f: [{ a: 1 }, { b: 2 }, { c: 3 }],
      },
    },
  },
};

extractMultiple(obj, ["a.b.c.f", "a.b.c.d.e"]).flat();

///

// get key value pair from object
// const extractObj = (obj, path) => {
//   const lastElement = path.split(".").pop();
//   const result = path.split(".").reduce((acc, key) => {
//     // if (acc && key && key === lastElement) {
//     return acc[key];
//     // }
//   }, obj);

//   return result;
// };

// const test1 = extractObj(
//   { a: { b: { c: { d: { e: "hello" } } } } },
//   "a.b.c.d.e"
// );

// const extractMultiple = (arr, paths) => {
//   return arr.map((obj) => {
//     return paths.map((path) => {
//       return extractObj(obj, path);
//     });
//   });
// };

// extractMultiple(
//   [
//     { a: { b: { c: { d: { e: "hello" } } } } },
//     { a: { b: { c: { d: { e: { f: "there" } } } } } },
//   ],
//   ["a.b.c.d.e", "a.b.c.d.e.f"]
// );
