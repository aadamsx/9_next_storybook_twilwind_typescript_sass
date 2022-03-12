// atob
// Decodes a string of data which has been encoded using base-64 encoding.

// Create a Buffer for the given string with base-64 encoding and use Buffer.toString('binary') to return the decoded string.

const atob = (str) => {
  return Buffer.from(str, "base64").toString("binary");
};

// atob("Zm9vYmFy"); // 'foobar'
