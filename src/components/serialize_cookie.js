// serializeCookie
// Serialize a cookie name-value pair into a Set-Cookie header string.

// Use template literals and encodeURIComponent() to create the appropriate string.

const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie("foo", "bar"); // 'foo=bar'
