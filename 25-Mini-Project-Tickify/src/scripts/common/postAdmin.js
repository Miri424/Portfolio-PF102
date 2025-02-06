import { postAsync, handleError } from "../services/index.js";

const form = document.getElementById("addEventForm")


form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const eventData = {
        name: document.getElementById("eventName").value,
        dateTime: document.getElementById("eventDate").value,
        venueName: document.getElementById("eventLocation").value,
        venueAddress: document.getElementById("eventVenueAddress").value,
        venueCapacity: parseInt(document.getElementById("venueCapacity").value),
        organizer: document.getElementById("eventOrganizer").value,
        description: document.getElementById("eventDescription").value,
        ticketsAvailable: parseInt(document.getElementById("eventTickets").value),
        category: document.getElementById("eventCategory").value,
        price: parseFloat(document.getElementById("eventPrice").value),
        ageRestriction: document.getElementById("ageRestriction").value,
        posterURL: document.getElementById("posterURL").value,
        duration: document.getElementById("eventDuration").value,
        soldTickets: 0
    }

    try {
        const response = await postAsync('events', eventData) 
        alert('posted')

        form.reset();

    } catch(err) {
        console.log(err);
        alert("calismiyor qaqa")
    }
})
