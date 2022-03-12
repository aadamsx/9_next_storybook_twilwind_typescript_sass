// renameKeys
// Replaces the names of multiple object keys with the values provided.

// Use Object.keys() in combination with Array.prototype.reduce() and the spread operator (...) to get the object's keys and rename them according to keysMap.

const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );

const obj = { name: "Bobo", job: "Front-End Master", shoeSize: 100 };
renameKeys({ name: "firstName", job: "passion" }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
