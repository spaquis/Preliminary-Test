import closestToZero from "./closestToZero";
var args = process.argv;

/**
 * Run Function
 */
const run = () => {
    // Get Array from args and convert it to number array (Remove 2 first elements from array "node" && "src/index.ts")
    const arrayNumber: Array<number> = args.slice(2, args.length).map((value: string) => +value);
    // get the closest value
    const closestToZeroValue = closestToZero(arrayNumber);
    // Print to user the closest value
    console.log('-------------------------------');
    console.log('The number closestToZero is ', closestToZeroValue);
    console.log('-------------------------------');
}

run();