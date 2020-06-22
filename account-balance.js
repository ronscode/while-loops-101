/* Problem: Account Balance
Write a function to calculate an account balance
▪ Receives a sequence of incomes / expenses, until "End" is
read
▪ Adds the money to the balance (starting from 0) and print
"Increase: {money} " or "Decrease: {money}"
▪ Finally, prints the account balance (like shown below) */

function accountBalance(lines) {
  let balance = 0;
  let line = lines.shift();
  while (line !== 'End' && line !== undefined) {
  let amount = Number(line);
  balance += amount;
// TODO: Print Increase / Decrease line = lines.shift();
}

console.log(`Balance: ${balance.toFixed(2)}`); }

accountBalance(['500', '15.5', '80.35', 'End']);