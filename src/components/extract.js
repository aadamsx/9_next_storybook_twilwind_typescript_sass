// extract key value pair inside nested object pair
// const extract = (obj, path) => {
//   const keys = path.split(".");
//   let result = obj;
//   for (let i = 0; i < keys.length; i++) {
//     result = result[keys[i]];
//   }
//   return result;
// };

// // extract array deeply nested inside object
// const extract = (obj, path) => {
//   const keys = path.split(".");
//   let result = obj;
//   for (let i = 0; i < keys.length; i++) {
//     result = result[keys[i]];
//   }
//   return result;
// };

// extract array deeply nested inside object
const extract = (obj, path) => {
  const keys = path.split(".");
  let result = obj;
  for (let i = 0; i < keys.length; i++) {
    result = result[keys[i]];
  }
  return result;
};

const obj = {
  a: {
    b: {
      c: {
        d: {
          e: [{ x: 1 }, { y: 2 }, { z: 3 }],
        },
      },
    },
  },
};

extract(obj, "a.b.c.d.e");
