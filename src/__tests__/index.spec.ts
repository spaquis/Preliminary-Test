// Prepare args value
process.argv = process.argv.filter((s: string) => s === "");
process.argv.push("node");
process.argv.push("src/index.ts");

// Invalid args constants
const INVALID_ARGS =
  "Only integer number is accepted (positive or negative). Please review your arguments";

/**
 * Integration Test execution of closestToZero Program
 */
describe("closestToZero Function", () => {
  beforeEach(() => {
    // Reset args value
    process.argv = process.argv.slice(0, 2);
  });
  test("Args are empty", () => {
    var mainFile = require("../index");
    mainFile.executeProgram();
    // Expected no Error
  });
  test("Args contains invalid value", () => {
    // Mock Args
    process.argv.push("1", "2", "test");
    try {
      var mainFile = require("../index");
      mainFile.executeProgram();
    } catch (e) {
      expect(e.message).toEqual(INVALID_ARGS);
    }
  });
  test("Array contains integers value", () => {
    // Mock Args
    process.argv.push("1", "2", "-3", "-5");
    var mainFile = require("../index");
    mainFile.executeProgram();
    // Expected no Error
  });
});
