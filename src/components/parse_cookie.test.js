const rewire = require("rewire");
const parse_cookie = rewire("./parse_cookie");
const parseCookie = parse_cookie.__get__("parseCookie");
// @ponicode
describe("parseCookie", () => {
  test("Parse an HTTP Cookie header string and return an object of all cookie name-value pairs", () => {
    let result = parseCookie("foo=bar; equation=E%3Dmc%5E2");
    expect(result).toEqual({ foo: "bar", equation: "E=mc^2" });
  });
});
