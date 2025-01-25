export function renderCards(eventData) {
    const container = document.querySelector('.cardHolder');
  
    eventData.forEach(event => {
      // Ana kart container
      const card = document.createElement("div");
      card.className = "event-card";
  
      // Poster resmi
      const poster = document.createElement("img");
      poster.className = "event-poster";
      poster.src = event.posterURL;
      poster.alt = "Event Poster";
      card.appendChild(poster);
  
      // Kart içeriği
      const content = document.createElement("div");
      content.className = "event-content";
  
      // Etkinlik başlığı
      const title = document.createElement("h2");
      title.className = "event-title";
      title.textContent = event.name;
      content.appendChild(title);
  
      // Tarih ve saat
      const datetime = document.createElement("p");
      datetime.className = "event-datetime";
      datetime.textContent = ` ${new Date(event.dateTime).toLocaleDateString()} ${new Date(event.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      content.appendChild(datetime);
  
      // Mekan bilgisi
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
