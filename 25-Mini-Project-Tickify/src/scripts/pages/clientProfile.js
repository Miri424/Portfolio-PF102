import { BASE_URL } from "../constants/api.js";
import { getUserData, removeLocalStorageItem, setLocalStorageItem } from "../helpers/helper.js";
import { getAll, handleError, updateUserData } from "../services/index.js";

const profileImage = document.querySelector("#profileImage");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const usernameInput = document.querySelector("#username");
const imageInput = document.querySelector("#image")
const emailInput = document.querySelector("#email");
const ticketCountInput = document.querySelector("#ticketCount");
const updateProfileBtn = document.querySelector("#updateProfileBtn");
const currentPasswordInput = document.querySelector("#currentPassword");
const newPasswordInput = document.querySelector("#newPassword");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const changePasswordBtn = document.querySelector("#changePasswordBtn");
const ticketsTableBody = document.querySelector("#ticketsTableBody");
const changePhotoBtn = document.querySelector("#changePhotoBtn");
const myTickets = document.querySelector(".myTickets")
const user = getUserData();

loadUserProfile();

isUpdateButtonClicked();

await getUserTicketById(user.id)



async function getUserTicketById(userId) {
    if(!user) return;
    
    try {
        const response = await axios(`${BASE_URL}/tickets?userId=${userId}`);
        const data = response.data;  
        renderTable(data);
    } catch (error) {
        console.error(error);
        alert("Failed to load tickets.");
    }
}

function loadUserProfile() {


    if (user) {
        profileImage.src = user.profilePictureURL;
        userName.textContent = user.username;
        userEmail.textContent = user.email;
        usernameInput.value = user.username;
        emailInput.value = user.email;
        imageInput.value = user.profilePictureURL;
    } else {
        alert("Server is having problems. Thats all we know :/");
        window.location.href = "home.html";
    }
}

async function handleProfileUpdate() {

    if (!user) return;

    const updatedData = {
        username: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        profilePictureURL: imageInput.value.trim(),
    };

    try {
        const updatedUser = await updateUserData(user?.id, updatedData);
        alert("Profile has been updated successfully!");
        removeLocalStorageItem("loggedInUser")
       
        setLocalStorageItem("loggedInUser", updatedUser);

    } catch (error) {
        handleError(error)
        alert("Server is having problems. Thats all we know :/")
    }
}

function isUpdateButtonClicked() {
    updateProfileBtn.addEventListener("click", handleProfileUpdate);
}

function renderTable(tickets) {
    ticketsTableBody.innerHTML = "";

    if (!tickets || tickets.length === 0) {
        ticketsTableBody.innerHTML = "<tr><td colspan='5'>No tickets available</td></tr>";
        return;
    }

    tickets.forEach(ticket => {
        const row = document.createElement("tr");
        
        const ticketIdCell = document.createElement("td");
        ticketIdCell.textContent = ticket.id;

        const ticketNameCell = document.createElement("td");
        ticketNameCell.textContent = ticket.ticketCode;

        const ticketPriceCell = document.createElement("td");
        ticketPriceCell.textContent =`$${ticket.price}`;

        const ticketQuantityCell = document.createElement("td");
        ticketQuantityCell.textContent = ticket.quantity;

        row.appendChild(ticketIdCell);
        row.appendChild(ticketNameCell);
        row.appendChild(ticketPriceCell);
        row.appendChild(ticketQuantityCell);
        
        ticketsTableBody.appendChild(row);
    });
}

function isClickedMyTickets() {
    scrollToSection(myTickets)
}
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }