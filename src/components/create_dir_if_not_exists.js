// createDirIfNotExists
// Creates a directory, if it does not exist.

// Use fs.existsSync() to check if the directory exists, fs.mkdirSync() to create it.

const fs = require("fs");
const createDirIfNotExists = (dir) =>
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;

createDirIfNotExists("test"); // creates the directory 'test', if it doesn't exist
