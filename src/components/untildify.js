// untildify
// Converts a tilde path to an absolute path.

// Use String.prototype.replace() with a regular expression and OS.homedir() to replace the ~ in the start of the path with the home directory.

const untildify = (str) =>
  str.replace(/^~($|\/|\\)/, `${require("os").homedir()}$1`);

untildify("~/node"); // '/Users/aUser/node'
