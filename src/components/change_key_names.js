// const arrT = extractMultiple(newObj, [
//   "formControls.sequenceNumber.value",
//   "formControls.fieldAlias.value.label",
// ]);

const obj = [
  { a: 1, b: 3 },
  { a: 2, b: 5 },
];

// change more than one key name in an array of objects
const changeKeyNames = (arr, oldKeys, newKeys) => {
  return arr.map((obj) => {
    for (let i = 0; i < oldKeys.length; i++) {
      if (obj[oldKeys[i]]) {
        // if oldKey exists
        obj[newKeys[i]] = obj[oldKeys[i]];
        delete obj[oldKeys[i]];
      } else {
        // oldKey doesn't exist in array
        delete obj[newKeys[i]];
      }
    }
    return obj;
  });
};

changeKeyNames(obj, ["a", "z"], ["d", "r"]);

// changeKeyNames(arrT, ["value", "label"], ["c", "z"]);

// change the key name in an array of objects
// const changeKeyName = (arr, oldKey, newKey) => {
//   return arr.map((obj) => {
//     obj[newKey] = obj[oldKey];
//     delete obj[oldKey];
//     return obj;
//   });
// };

// changeKeyName(
//   [
//     { a: 1, b: 3 },
//     { a: 2, b: 5 },
//   ],
//   "a",
//   "c"
// );
// changeKeyName(
//   [
//     { a: 1, b: 3 },
//     { a: 2, b: 5 },
//   ],
//   "b",
//   "z"
// );

// change more than one key name in an array of objects
// const changeKeyNames = (arr, oldKeys, newKeys) => {
//   return arr.map((obj) => {
//     for (let i = 0; i < oldKeys.length; i++) {
//       obj[newKeys[i]] = obj[oldKeys[i]];
//       delete obj[oldKeys[i]];
//     }
//     return obj;
//   });
// };

// changeKeyNames(
//   [
//     { a: 1, b: 3 },
//     { a: 2, b: 5 },
//   ],
//   ["a", "b"],
//   ["c", "z"]
// );
