/* Problem: Find Min and Max
•Write a function to find the min and max numbers
• Reads numbers until "END" is reached
• Prints the biggest and the smallest number
  */

function minAndMax(lines) {
  let min = Infinity;
  let max = -Infinity;
  let nextLine = lines.shift();
    while (nextLine !== "END" && nextLine !== undefined) {
      let num = Number(nextLine);
      if (num < min) { 
        min = num;
      }
      if (num > max) {
        max = num;
      }
      nextLine = lines.shift();
    }
// TODO: Print the output
    console.log(min,max)

}

minAndMax([10, 20, 30, -5, 'END']);