const rewire = require("rewire");
const maskFile = rewire("./mask");
const mask = maskFile.__get__("mask");
// @ponicode
describe("mask", () => {
  test("0", () => {
    let result = mask("123456789", null);
    expect(result).toBe("#####6789");
  });

  test("1", () => {
    mask("123456789", "_");
  });
});
