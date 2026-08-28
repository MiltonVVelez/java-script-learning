// 1 .A Canadian retail client needs a quick checkout calculation script. When a customer applies a coupon code, the system must reduce the subtotal by a percentage discount, add a fixed shipping charge, and format the final charge to 2 decimal places.
console.log("Exercise number 1:")

let cartTotal = 150;
const discountRate = 0.15; // 15% off
const shippingFee = 12.5;

cartTotal *= 1 - discountRate;
cartTotal += shippingFee;

const finalCharge = cartTotal.toFixed(2);


console.log(finalCharge);

console.log(`Final Amount Due: $${finalCharge}`);

console.log("=".repeat(60));

// 2. A Canadian enterprise application controls dashboard permissions based on user role and account status. The client needs a script that verifies whether a user qualifies for admin settings access.

console.log("Exercise number 2:")

const userRole = "admin";
const isActive = true;
const loginAttempts = 3;
const maxAttempts = 5;

let isAuthorized = userRole === "admin" && isActive === true && loginAttempts < maxAttempts;

let accessMessage;


if (isAuthorized === true) {
    accessMessage = "Access Granted: Welcome to Admin Portal"
} else {
    accessMessage = "Access Denied = Restricted Area"
}

console.log(accessMessage);

console.log("=".repeat(60));
