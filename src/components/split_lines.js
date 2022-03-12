// splitLines
// Splits a multiline string into an array of lines.

// Use String.prototype.split() and a regular expression to match line breaks and create an array.

const splitLines = (str) => str.split(/\r?\n/);

splitLines("This\nis a\nmultiline\nstring.\n"); // ['This', 'is a', 'multiline', 'string.' , '']
