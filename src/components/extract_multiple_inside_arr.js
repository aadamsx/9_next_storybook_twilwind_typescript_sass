const arr = [
  {
    a: {
      z: "test",
      b: {
        c: {
          d: {
            e: [{ x: 1 }, { y: 2 }, { z: 3 }],
          },
          f: [{ a: 1 }, { b: 2 }, { c: 3 }],
        },
      },
    },
  },
  {
    a: {
      b: {
        c: {
          d: {
            e: [{ x: 6 }, { y: 7 }, { z: 8 }],
          },
          f: [{ a: 10 }, { b: 20 }, { c: 30 }],
        },
      },
    },
  },
];

// extract array deeply nested inside object
const extract = (obj, path) => {
  const keys = path.split(".");
  let result = obj;
  for (let i = 0; i < keys.length; i++) {
    result = result[keys[i]];
  }
  return result;
};

// extract mutiple arrays with key at different levels inside array of objects
const extractMultipleInsideArray = (arr, paths) => {
  return arr.map((obj) => {
    return paths.map((path) => {
      return extract(obj, path);
    });
  });
};

extractMultipleInsideArray(arr, ["a.z", "a.b.c.d.e"]).flat();
