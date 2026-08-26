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

// 13.A logistics client sends order status updates in a fixed format, but some records have accidental trailing spaces.

console.log("Exercise 13:");

const orderCode = "ORDER#84920-SHIPPED   ";

const cleanedOrder = orderCode.trimEnd();

const orderId = cleanedOrder.slice(cleanedOrder.indexOf("#")+1, cleanedOrder.indexOf("-"));

const isShipped = cleanedOrder.includes("SHIPPED");

console.log(`Order ID: ${orderId} | Is shipped: ${isShipped}`);


console.log("=".repeat(60));

//14. A client wants to generate search-friendly tags for their blog articles. They provide a string of comma-separated topics, but the format is messy. 

console.log("Exercise 14:")

const noCleanTags = "  javascript, WEB DEVELOPMENT, beginner guides  ";

const tagList = noCleanTags.toLowerCase().trim().split(",");

const secondTag = tagList[1].trim().replace(" ", "-");

console.log(`Primary Tag: ${tagList[0]} | Formatted second tag: ${secondTag}`);

console.log("=".repeat(60));


// 15. Clients building search bars often need to clean and validate user input before sending the query to their product database.

console.log("Exercise 15:")

const userQuery = "   FIND React Course   ";

const cleanQuery = userQuery.trim().toLowerCase();

const matchesTopic = cleanQuery.includes("react");

const courseIndex  = cleanQuery.indexOf("course");

console.log(`Normalized Query: ${cleanQuery} | Topic match: ${matchesTopic} | Keyword starts at: ${courseIndex}`);

console.log("=".repeat(60));

// 16. A retail client needs to extract product details from an unformatted receipt line item to prepare a summary for an email receipt.

console.log("Exercise 16:")

const rawReceipt = "  ITEM:Mechanical Keyboard-PRICE:$120  ";

const cleanReceipt = rawReceipt.trim().split("-");

const productName = cleanReceipt[0].replace("ITEM:", "");

const productPrice = cleanReceipt[1].replace("PRICE:$", "");

const isKeyboard = productName.includes("Keyboard");


console.log(`Item: ${productName} | Price: $${productPrice} | Is keyboard: ${isKeyboard}`);

console.log("=".repeat(60));



// 17. A travel client needs to extract and format passenger details from a raw booking string to display on a digital boarding pass. 

console.log("Exercise 17:")

const rawFlightData = "  passenger:sarah connor_flight:AC842_status:confirmed  ";

const trimmedRawFlightData = rawFlightData.trim();

const arrayFlightData = trimmedRawFlightData.split("_");

const passengerName = arrayFlightData[0].toUpperCase().replace("PASSENGER:", "");

const isConfirmed = arrayFlightData[2].includes("confirmed");

console.log(`Passenger: ${passengerName} | Confirmed: ${isConfirmed}`);

console.log("=".repeat(60));





















