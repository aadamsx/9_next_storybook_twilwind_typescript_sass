const rewire = require("rewire");
const pick_by = rewire("./pick_by");
const pickBy = pick_by.__get__("pickBy");
describe("pickBy", () => {
  test("0", () => {
    const type = (x) => {
      return typeof x === "number";
    };
    let result = pickBy({ a: 1, b: "2", c: 3 }, type);
    expect(result).toEqual({ a: 1, c: 3 });
  });
});
