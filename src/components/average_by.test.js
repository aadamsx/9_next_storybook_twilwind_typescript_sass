const rewire = require("rewire");
const average_by = rewire("./average_by");
const averageBy = average_by.__get__("averageBy");

// @ponicode
describe("averageBy", () => {
  test("0", () => {
    let param1 = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    let result = averageBy(param1, "n");
    expect(result).toBe(5);
  });

  test("1", () => {
    let param1 = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    let result = averageBy(param1, (o) => o.n);
    expect(result).toBe(5);
  });
});
