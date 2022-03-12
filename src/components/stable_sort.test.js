const rewire = require("rewire");
const stable_sort = rewire("./stable_sort");
const stableSort = stable_sort.__get__("stableSort");
// @ponicode
describe("stableSort", () => {
  test("0", () => {
    let result = stableSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], () => 0);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
