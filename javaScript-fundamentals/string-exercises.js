// Only String Exercises.

console.log("String exercises");

//7. A banking client wants to display a customer's account number on their dashboard safely by masking all but the last 4 digits for privacy.

const accountNumber = "9876543210";

//Exctrating the last 4 numbers.

const last4Numbers = accountNumber.slice(-4);
console.log(last4Numbers);

// Creating the masked version.

const maskedAccount = `*************${last4Numbers}`;

const hasZero = accountNumber.includes("0");

console.log(`Masked Account: ${maskedAccount} | Contains zero: ${hasZero}`);

////////////////////////////////////////////////////////



