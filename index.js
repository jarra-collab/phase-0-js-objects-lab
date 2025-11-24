//Write your code here
// 1. Create attendee objects
let attendee1 = {
    id: 101,
    name: "Alice Johnson",
    event: "Tech Conference 2025",
    ticketType: "VIP",
    ticketPrice: 150
};

let attendee2 = {
    id: 102,
    name: "Bob Smith",
    event: "Tech Conference 2025",
    ticketType: "Standard",
    ticketPrice: 75
};

let attendee3 = {
    id: 103,
    name: "Carlos Rivera",
    event: "Tech Conference 2025",
    ticketType: "Student",
    ticketPrice: 40
};

// 2. Store all attendees in an array
let attendees = [attendee1, attendee2, attendee3];

console.log("Initial Attendees:");
console.log(attendees);

// 3. Access and print details of a specific attendee
console.log("\nAccessing Specific Attendee:");
console.log("Name:", attendees[1].name);             // Bob Smith
console.log("Ticket Type:", attendees[1].ticketType);

// 4. Update an attendee's information
console.log("\nUpdating Attendee Information:");
// Bob upgrades ticket from Standard → VIP
attendees[1].ticketType = "VIP";
attendees[1].ticketPrice = 150;

console.log("Updated Attendee:", attendees[1]);

// 5. Remove an attendee (e.g., attendee cancels)
console.log("\nRemoving an Attendee:");
attendees.splice(0, 1);  // Remove Alice (index 0)

console.log("Attendees After Removal:");
console.log(attendees);

// 6. Final attendee list
console.log("\nFinal Attendee List:");
for (let attendee of attendees) {
    console.log(`${attendee.name} - ${attendee.ticketType} Ticket`);
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};