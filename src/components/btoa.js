// btoa
// Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.

// Create a Buffer for the given string with binary encoding and use Buffer.toString('base64') to return the encoded string.

const btoa = (str) => Buffer.from(str, "binary").toString("base64");

btoa("foobar"); // 'Zm9vYmFy'
