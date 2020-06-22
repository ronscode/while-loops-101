/* Problem: Special Bonus
• Write a function to apply a 20% bonus for certain number:
• Receives a number from the input: the "stop number"
• Receives numbers from the input until it finds the stop
number
• When the stop number is found, increase the value of the
20 30 25
  25
previous number before it with 20% and print it */

function specialBonus(stopNum, nums) {
  let previousNum = stopNum;
  while (true) {
    let num = nums.shift();
    if (num == stopNum ||
        num == undefined)
    break;
    previousNum = num;
}
  console.log(previousNum * 1.2);
}

specialBonus(25, [20, 30, 25]);