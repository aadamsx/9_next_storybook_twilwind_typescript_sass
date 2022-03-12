// find difference array of objects using multiple keys
const differenceObjects = (a, b, keys) => {
  const s = new Set(b.map((v) => keys.map((k) => v[k]).join("")));
  return a.filter((v) => !s.has(keys.map((k) => v[k]).join("")));
};

differenceObjects([{ x: 1, y: 2 }], [{ x: 4, y: 3 }], ["x", "y"]);

differenceObjects([{ x: 1, y: 2 }], [], ["x", "y"]);

differenceObjects(
  [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 1, y: 4 },
  ],
  [{ x: 1, y: 2 }],
  ["x", "y"]
);

differenceObjects(
  [{ x: 1, y: 2 }],
  [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 1, y: 4 },
  ],
  ["x", "y"]
);
