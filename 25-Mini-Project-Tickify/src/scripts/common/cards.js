import { getAll, handleError } from "../services/index.js";

export function renderCards(eventData) {
    const container = document.querySelector('.cardHolder');
  
    eventData.forEach(event => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.setAttribute("data-id", event.id);
  
      const poster = document.createElement("img");
      poster.className = "event-poster";
      poster.src = event.posterURL;
      poster.alt = "Event Poster";
      card.appendChild(poster);
  
      const content = document.createElement("div");
      content.className = "event-content";
  
      const title = document.createElement("h2");
      title.className = "event-title";
      title.textContent = event.name;
      content.appendChild(title);
  
      const datetime = document.createElement("p");
      datetime.className = "event-datetime";
      datetime.textContent = ` ${new Date(event.dateTime).toLocaleDateString()} ${new Date(event.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      content.appendChild(datetime);
  
      const venue = document.createElement("p");
      venue.className = "event-venue";
      venue.textContent = ` ${event.venueName}, ${event.venueAddress}`;
      content.appendChild(venue);
  
      const footer = document.createElement("div");
      footer.className = "event-footer";
  
      const tickets = document.createElement("span");
      tickets.className = "event-tickets";
      tickets.textContent = ` Tickets Available: ${event.ticketsAvailable}`;
      footer.appendChild(tickets);
  
      const price = document.createElement("span");
      price.className = "event-price";
      price.textContent = `$${event.price}`;
      footer.appendChild(price);
  
      content.appendChild(footer);
  
      card.appendChild(content);
  
      container.appendChild(card);
    });
  }

  async function getEvents() {
    try {
      const response = await getAll('events');
      if (response && Array.isArray(response)) {
        renderCards(response);
      } else {
        console.error('Invalid data format');
      }
    } catch (err) {
      handleError(err);
      console.error('Error fetching events:', err);
    }
  }
  

  getEvents()