import { getAll, handleError, deleteEvent as deleteEventService } from "../services/index.js";

const tbody = document.querySelector(".eventTableBody");

async function getAllEvents() {
    try {
        const response = await getAll('events');
        renderTable(response);
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

async function deleteEventAsync(id, event) {
    event.preventDefault(); // ✅ Sayfanın yenilenmesini önlüyor

    try {
        await deleteEventService(id); // ✅ Servis fonksiyonunu düzgün çağırdık
        console.log(`Event ${id} deleted successfully.`);
        getAllEvents();
    } catch (err) {
        handleError(err);
    }
}

function renderTable(data) {
    tbody.innerHTML = "";

    data.forEach(d => {
        const tr = document.createElement("tr");

        const nameTd = document.createElement("td");
        nameTd.textContent = d.name;

        const dateTd = document.createElement("td");
        dateTd.textContent = d.dateTime;

        const locationTd = document.createElement("td");
        locationTd.textContent = d.venueAddress;

        const categoryTd = document.createElement("td");
        categoryTd.textContent = d.category;

        const actionTd = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", (event) => deleteEventAsync(d.id, event)); // ✅ `event` nesnesini de geçiriyoruz

        actionTd.appendChild(deleteBtn);
        tr.append(nameTd, dateTd, locationTd, categoryTd, actionTd);
        tbody.appendChild(tr);
    });
}

getAllEvents();
