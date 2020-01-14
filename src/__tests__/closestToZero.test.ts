import closestToFunction from "../closestToZero";

/**
 * Tests execution of closestToZero Function
 */
describe("closestToZero Function", () => {
  test("Array is null", () => {
    const result = closestToFunction(null);
    expect(result).toEqual(0);
  });
  test("Array is undefined", () => {
    const result = closestToFunction(undefined);
    expect(result).toEqual(0);
  });
  test("Array is empty", () => {
    const result = closestToFunction([]);
    expect(result).toEqual(0);
  });
  test("Array contains positive values", () => {
    const result = closestToFunction([8, 5, 10]);
    expect(result).toEqual(5);
  });
  test("Array contains negative values", () => {
    const result = closestToFunction([-2, -5, -4]);
    expect(result).toEqual(-2);
  });
  test("Array contains positive and negative values", () => {
    const result = closestToFunction([5, 4, -9, 6, -10, -1, 8]);
    expect(result).toEqual(-1);
  });
  test("Array contains same closest number (positive and negative), positive first", () => {
    const result = closestToFunction([8, 2, 3, -2]);
    expect(result).toEqual(2);
  });
  test("Array contains same closest number (positive and negative), negative first", () => {
    const result = closestToFunction([8, -2, 3, 2]);
    expect(result).toEqual(2);
  });
  test("Array contains 0", () => {
    const result = closestToFunction([8, 2, 3, -2, 0]);
    expect(result).toEqual(0);
  });
  test("Array contains null value", () => {
    const result = closestToFunction([8, 5, 10, null]);
    expect(result).toEqual(5);
  });
  test("Array contains undefined value", () => {
    const result = closestToFunction([8, 5, 10, undefined]);
    expect(result).toEqual(5);
  });
});
