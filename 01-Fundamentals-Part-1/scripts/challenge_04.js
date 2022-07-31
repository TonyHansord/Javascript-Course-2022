let bill = Number(prompt(`Please Enter Bill Amount`));

let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The Bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);