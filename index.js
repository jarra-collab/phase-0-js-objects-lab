// 1️⃣ Create the attendee object in its original state
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// 2️⃣ Functions

// Log the attendee name
function logAttendeeName(att) {
  console.log(att.name);
}

// Log the ticket price
function logTicketPrice(att) {
  console.log(att.ticketPrice);
}

// Update ticket type
function updateTicketType(att, newType) {
  att.ticketType = newType;
}

// Update ticket price
function updateTicketPrice(att, newPrice) {
  att.ticketPrice = newPrice;
}

// Remove the event property
function removeEventProperty(att) {
  delete att.event;
}

// Add a checkedIn property
function addCheckedInProperty(att) {
  att.checkedIn = true;
}

// 3️⃣ Export for tests
module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};
