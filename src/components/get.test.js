const rewire = require("rewire");
const getFile = rewire("./get");
const get = getFile.__get__("get");
// @ponicode
describe("get", () => {
  test("0", () => {
    let object = [1, 2, { a: "test" }];
    let result = get(
      { selector: { to: { val: "val to select" } }, target: object },
      "selector.to.val",
      "target[0]",
      "target[2].a"
    );
    expect(result).toEqual(["val to select", 1, "test"]);
  });
});
