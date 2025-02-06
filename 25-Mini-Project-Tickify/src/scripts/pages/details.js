import { getLocalStorageItem } from "../helpers/helper.js";
import { getEventById, handleError, patchAsync } from "../services/index.js";

const button = document.querySelector(".buyBtn");
const input = document.querySelector("#quantity");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const user = getLocalStorageItem("loggedInUser");

const eventName = document.querySelector(".nameHolder h2");
const eventDescription = document.querySelector(".descHolder p");
const venueAddress = document.querySelector(".venueAdress span:nth-child(2)");
const eventPrice = document.querySelector(".price span:nth-child(2)");
const availableTickets = document.querySelector(".availableTickets span:nth-child(2)");
const eventImage = document.querySelector(".imgHolder img");
const soldTickets = document.querySelector(".soldTickets");

let event;

async function getEventInfo() {
  try {
    event = await getEventById("events", id);
    updateEventUI();
  } catch (err) {
    handleError(err);
  }
}

function updateEventUI() {
  eventName.textContent = event.name;
  eventDescription.textContent = event.description;
  venueAddress.textContent = event.venueAddress;
  eventPrice.textContent = `$${input.value * event.price}`;
  availableTickets.textContent = event.ticketsAvailable;
  eventImage.src = event.posterURL;
  soldTickets.textContent = event.soldTickets;
}

input.addEventListener("input", () => {
  if (input.value.includes(".")) {
    alert("Don't enter a decimal value");
    window.location.reload();
    return;
  }

  eventPrice.textContent = `$${input.value * event.price}`;
});

async function handleTicketPurchase() {
  const quantity = parseInt(input.value);

  if (!user) {
    alert("Please log in first!");
    return;
  }

  if (quantity <= 0) {
    alert("Please enter a valid quantity");
    return;
  }

  if (quantity > event.ticketsAvailable) {
    alert("Not enough tickets available!");
    return;
  }

  const totalPrice = quantity * event.price;

  if (totalPrice > user.balance) {
    alert("Not enough money!");
    return;
  }

  try {
    const ticket = {
      userId: user.id,
      eventId: id,
      quantity,
      price: totalPrice,
      purchaseDate: new Date().toISOString(),
      ticketCode: generateTicketCode(),
    };

    await axios.post("http://localhost:3000/tickets", ticket);
    await patchAsync("events", id, { ticketsAvailable: event.ticketsAvailable - quantity });
    await patchAsync("events", id, { soldTickets: event.soldTickets + quantity });
    await patchAsync("users", user.id, { balance: user.balance - ticket.price });

    alert("Ticket purchased successfully!");
  } catch (err) {
    handleError(err);
  }
}

function generateTicketCode() {
  return `TK-${Math.floor(1000 + Math.random() * 9000)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
}

button.addEventListener("click", handleTicketPurchase);

if (id) {
  getEventInfo();
}
