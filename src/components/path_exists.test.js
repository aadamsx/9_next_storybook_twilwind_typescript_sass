const rewire = require("rewire");
const path_exists = rewire("./path_exists");
const pathExists = path_exists.__get__("pathExists");
// @ponicode
describe("pathExists", () => {
  test("0", () => {
    let object2 = [{ a: 1 }, { b: 2 }, { c: 3 }];
    let object = [{ x: 1 }, { y: 2 }, { z: 3 }];
    let result = pathExists(
      { a: { b: { c: { d: { e: object }, f: object2 } } } },
      "a.b.c.d.z"
    );
    expect(result).toBe(false);
  });

  test("1", () => {
    let object2 = [{ a: 1 }, { b: 2 }, { c: 3 }];
    let object = [{ x: 1 }, { y: 2 }, { z: 3 }];
    let result = pathExists(
      { a: { b: { c: { d: { e: object }, f: object2 } } } },
      "a.b.c.d.e"
    );
    expect(result).toBe(true);
  });

  test("2", () => {
    let result = pathExists("", "");
    expect(result).toBe(false);
  });

  test("3", () => {
    let callFunction = () => {
      pathExists(undefined, undefined);
    };

    expect(callFunction).toThrow("Cannot read property 'split' of undefined");
  });
});
