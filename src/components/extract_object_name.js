// extract object name
const extractObjectName = (obj) => {
  return Object.keys(obj)[0];
};

extractObjectName({
  a: {
    b: {
      c: {
        d: {
          e: [{ x: 1 }, { y: 2 }, { z: 3 }],
        },
      },
    },
  },
});
