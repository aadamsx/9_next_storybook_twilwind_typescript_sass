const arr = [
  { a: { b: { c: { d: { e: "hello" } } } } },
  { a: { b: { c: { d: { e: { f: "there" } } } } } },
];

// get object from object array
const extractObj = (obj, path) => {
  // get the last element of the path
  const lastElement = path.split(".").pop();

  const result = path.split(".").reduce((acc, key) => {
    if (acc && key && key === lastElement) {
      return acc[key];
    }
  }, obj);

  return result;
};

extractObj(arr, "a.b.c.d.e");
