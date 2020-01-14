/**
 * Return the closest to 0 number from an array
 * @param numbers : Array of number to check
 */
const closestToZero = (numbers: Array<number>): number => {
  // Return 0 if array undefined or empty
  if (!numbers || numbers.length === 0) {
    return 0;
  }

  // Get Closest To Zero value
  const closestToZeroValue = numbers.reduce((a: number, b: number) =>
    Math.abs(a) < Math.abs(b) ? a : b
  );

  // If closestToZeroValue is negative, we check if same positive value exist in array
  if (closestToZeroValue < 0) {
    const positiveValue = numbers.find(
      (n: number) => Math.abs(closestToZeroValue) === n
    );
    return positiveValue ? positiveValue : closestToZeroValue;
  }

  return closestToZeroValue;
};

export default closestToZero;
