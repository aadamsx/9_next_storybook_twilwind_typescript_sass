// nodeListToArray
// Converts a NodeList to an array.

// Use spread operator inside new array to convert a NodeList to an array.

const nodeListToArray = (nodeList) => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
