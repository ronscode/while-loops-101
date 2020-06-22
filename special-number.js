/* Problem: Special Number
•Write a function to check if given number is special:
• Special numbers are divisible by all of their digits
without remainder
• Receives a number and check whether it is a special number
• Print "{num} is special" if the number is special
• Otherwise, print "{num} is not special"
  */

function specialNumber(num) {
  let numDigits = num;
  let isSpecial = true;
    while (numDigits > 0) {
      let digit = numDigits % 10;
      numDigits = Math.floor(numDigits / 10);
    if (digit != 0 && num % digit != 0) {
      isSpecial = false;
    break; 
}
}
// TODO: Print the final output
}

specialNumber(204);
specialNumber(23);