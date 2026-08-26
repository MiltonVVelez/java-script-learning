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

console.log("=".repeat(60))

////////////////////////////////////////////////////////

// 8. A client is building a conference check-in dashboard. The attendee data comes in as a single string with a prefix and lowercase names, separated by a comma.

console.log("8. Exercise:")

const rawAttendee = "attendee:alan,turing";

const cleanNames = rawAttendee.replace("attendee:", "");

const nameParts = cleanNames.split(",");

const firstName = nameParts[0];
const lastName = nameParts[1];

const badgeName = (firstName + " " +lastName).toUpperCase();

console.log(`Badge: ${badgeName} | First: ${firstName}, Last: ${lastName}`);

console.log("=".repeat(60));

// 9. A client has an image upload feature on their site that only accepts .png files.

console.log("Exercise 9:");

const uploadedFileName = " profile-picture.PNG ";

const cleanFileName = uploadedFileName.trim().toLowerCase();

const isValidFormat = cleanFileName.includes(".png");

extensionIndex = cleanFileName.indexOf(".png");

console.log(`File: ${cleanFileName} | Valid PNG: ${isValidFormat} | Extension starts at index: ${extensionIndex}`);

console.log("=".repeat(60));


// 10. A client is building a social profile page. When a user registers with their full name, the platform automatically generates a default handle/username format.

console.log("Exercise 10:");

const fullName = "  Ada Lovelace  ";

const fullNameFormatted = fullName.trim();

const userHandle = "@" + fullNameFormatted.replace(" ", "_").toLowerCase();

console.log(`Profile created for: ${fullNameFormatted} | Handle: ${userHandle}`);

console.log("=".repeat(60));

// 11. A client wants to automatically display their brand name in uppercase on their website footer, extracted from their raw domain URL.

console.log("Exercise 11:");

const websiteURL = "https://www.shopify.com";

const startIndex = websiteURL.indexOf("www.") + 4;
const endIndex = websiteURL.indexOf(".com");

const brandName = websiteURL.slice(startIndex, endIndex).toUpperCase();

console.log(`Brand: ${brandName} | Original URL: ${websiteURL}`);

console.log("=".repeat(60));

// 12. A client runs an online store and needs to clean up raw product tags entered by a vendor so their search filter can index them properly.

console.log("Exercise 12:");

const rawTags = "electronics, LAPTOPS , computers";

const arrayRawTags = rawTags.toLowerCase().split(",");

const featuredTag = arrayRawTags[1].trim();

const hasLaptops = rawTags.toLocaleLowerCase().includes("laptops");

console.log(`Featured Tag: ${featuredTag} | Has Laptops tag: ${hasLaptops}` );

console.log("=".repeat(60));














