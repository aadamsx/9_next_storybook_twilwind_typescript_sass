const rewire = require("rewire");
const a_tob = rewire("./a_tob");
const atob = a_tob.__get__("atob");
// @ponicode
describe("atob", () => {
  test("0", () => {
    let result = atob("Zm9vYmFy");
    expect(result).toMatchSnapshot();
    expect(result).toBe("foobar");
  });
});
