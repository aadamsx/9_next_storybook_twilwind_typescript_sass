// path exists in object
const pathExists = (obj, path) => {
  const keys = path.split(".");
  let result = obj;
  for (let i = 0; i < keys.length; i++) {
    if (result[keys[i]]) {
      result = result[keys[i]];
    } else {
      return false;
    }
  }
  return true;
};

// const obj = {
//   a: {
//     b: {
//       c: {
//         d: {
//           e: [{ x: 1 }, { y: 2 }, { z: 3 }],
//         },
//         f: [{ a: 1 }, { b: 2 }, { c: 3 }],
//       },
//     },
//   },
// };

// pathExists(obj, "a.b.c.d.z");
