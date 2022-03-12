const rewire = require("rewire");
const is_even = rewire("./is_even");
const isEven = is_even.__get__("isEven");
// @ponicode
describe("isEven", () => {
  test("0", () => {
    let result = isEven(2);
    expect(result).toMatchSnapshot();
    expect(result).toBe(false);
  });

  test("1", () => {
    let result = isEven(3);
    expect(result).toMatchSnapshot();
    expect(result).toBe(true);
  });

  test("2", () => {
    let result = isEven(1.0);
    expect(result).toMatchSnapshot();
    expect(result).toBe(false);
  });

  test("3", () => {
    let result = isEven(3.0);
    expect(result).toMatchSnapshot();
    expect(result).toBe(true);
  });

  test("4", () => {
    let result = isEven(2.0);
    expect(result).toMatchSnapshot();
    expect(result).toBe(false);
  });

  test("5", () => {
    let result = isEven(-Infinity);
    expect(result).toMatchSnapshot();
    expect(result).toBe(undefined);
  });
});
