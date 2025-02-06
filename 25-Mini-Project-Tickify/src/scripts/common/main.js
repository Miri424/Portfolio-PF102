import { getLocalStorageItem } from "../helpers/helper.js";
import { getAll, handleError } from "../services/index.js";
import { renderCards } from "./cards.js";

const searchInput = document.querySelector(".searchInp");
const searchResults = document.querySelector(".search-results");
const loggedInUser = getLocalStorageItem("loggedInUser");
let isLoggedIn = !!loggedInUser;

checkAdmin();

checkUser();

updateAuthButton();

await init();

sideBar();

hideSearchResults();

isCardClicked();

inputSearch();

function isCardClicked() {
  const card = document.querySelectorAll(".event-card");
  card.forEach((c) => {
    c.addEventListener("click", () => {
      const id = c.getAttribute("data-id");
      console.log(id);
      window.location.href = `details.html?id=${id}`;
    });
  });
}

async function searchEvents(query) {
  try {
    if (query.length === 0) {
      return;
    }

    const response = await getAll(`events?name_like=${query}`);
    console.log(response);
    renderSearchResults(response);

    if (response.length === 0) {
      document.getElementsByTagName("tbody").innerHTML =
        "<tr><td colspan='5'>No events found.</td></tr>";
    }
  } catch (err) {
    handleError(err);
  }
}

function inputSearch() {
  let debounceTimer;

  searchInput.addEventListener("keyup", (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value.trim().toLowerCase();

    debounceTimer = setTimeout(() => {
      if (query === "") {
        searchResults.innerHTML = "Try to search something";
      } else {
        searchEvents(query);
      }
    }, 300);
  });
}

async function init() {
  try {
    const events = await getAll("events");
    renderCards(events);
  } catch (err) {
    handleError(err);
  }
}

function sideBar() {
  const sidebar = document.querySelector(".sidebar");
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("toggleSidebar");

  openBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}

function renderSearchResults(data) {
  const searchResults = document.querySelector(".search-results");
  searchResults.innerHTML = "";

  if (data.length === 0) {
    searchResults.innerHTML = "<p>No events found.</p>";
    return;
  }
  searchResults.style.display = "block";

  data.forEach((event) => {
    const eventItem = document.createElement("div");
    eventItem.classList.add("search-item");

    const poster = document.createElement("img");
    poster.src = event.posterURL;
    poster.alt = event.name;
    poster.classList.add("search-poster");

    const name = document.createElement("p");
    name.textContent = event.name;
    name.classList.add("search-name");

    eventItem.append(poster, name);
    searchResults.appendChild(eventItem);
  });
}

function hideSearchResults() {
  searchInput.addEventListener("blur", () => {
    searchResults.style.display = "none";
  });
}


function updateAuthButton() {
  const auth = document.getElementById("auth");
  const isLoggedIn = !!loggedInUser;

  auth.textContent = isLoggedIn ? "Log Out" : "Log In";

  auth.onclick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("loggedInUser");
      window.location.reload();
    } else {
      window.location.href = "registerUser.html";
    }
  };
}

function checkUser() {
  const profile = document.getElementById("profileNav");
  if (loggedInUser && loggedInUser.role === "user") {
    profile.style.display = "block";
    profile.addEventListener("click", () => {
      window.location.href = "clientProfile.html";
    });
  }
}

function checkAdmin() {
  if (loggedInUser && loggedInUser.role === "admin") {
    document.getElementById("dashboardBtn").classList.add("active");
    const dashboardText = document.getElementById("dashboardText");
    dashboardText.textContent = "Dashboard";
    dashboardText.classList.add("active");
  }
}