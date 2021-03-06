// isStream
// Checks if the given argument is a stream.

// Check if the value is different from null, use typeof to check if the value is of type object and the pipe property is of type function.

const isStream = (val) =>
  val !== null && typeof val === "object" && typeof val.pipe === "function";

const fs = require("fs");
isStream(fs.createReadStream("test.txt")); // true
