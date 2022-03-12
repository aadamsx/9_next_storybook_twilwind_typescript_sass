const rewire = require("rewire");
const pickFile = rewire("./pick");
const pick = pickFile.__get__("pick");
// @ponicode
describe("pick", () => {
  test("0", () => {
    let result = pick({ a: 1, b: "2", c: 3 }, ["a", "c"]);
    expect(result).toEqual({ a: 1, c: 3 });
  });
});
