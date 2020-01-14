import closestToZero from "./closestToZero";

// Invalid Number Constant
const INVALID_NUMBER = "Invalid number";

// Invalid Args Constant
const INVALID_ARGS =
  "Only integer number is accepted (positive or negative). Please review your arguments";

/**
 * Cast a string value to number
 * @param value : string
 * @throws Error: If it's an invalid number
 */
const castStringToNumber = (value: string) => {
  const numberValue = +value;
  if (isNaN(numberValue)) {
    throw new Error(INVALID_NUMBER);
  }
  return numberValue;
};

/**
 * Execute Program Function
 */
export const executeProgram = () => {
  var args = process.argv;
  // Get Array from args and convert it to number array (Remove 2 first elements from array "node" && "src/index.ts")
  let arrayNumber: Array<number> = [];
  try {
    arrayNumber = args
      .slice(2, args.length)
      .map((value: string) => castStringToNumber(value));
  } catch (e) {
    throw new Error(INVALID_ARGS);
  }
  // get the closest value
  const closestToZeroValue = closestToZero(arrayNumber);
  // Print to user the closest to zero value
  console.log("-------------------------------");
  console.log("The number closest to zero is ", closestToZeroValue);
  console.log("-------------------------------");
};

// this module was run directly from the command line
if (require.main === module) {
  executeProgram();
}
