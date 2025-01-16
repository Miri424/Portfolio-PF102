
import { BASE_URL } from "./constant.js";

export async function getData() {
  try {
    const response = await axios(`${BASE_URL}`);
    return response.data
  } catch(err) {
    console.error(err);
  }
}

const cards = document.querySelector(".cards");

export function renderUsers(data) {
  cards.innerHTML = ""
  data.forEach(c => {
    const cardHolder = document.createElement("div");
    cardHolder.classList.add("cardHolder");

    const imageSide = document.createElement("div");
    imageSide.classList.add("imageSide");

    const flagImg = document.createElement("img");
    flagImg.src = c.flags.png;
    imageSide.append(flagImg);

    const infoSide = document.createElement("div");
    infoSide.classList.add("infoSide");

    const name = document.createElement("h2");
    name.textContent = c.name.common;

    const staticPopulationText = document.createElement("strong");
    staticPopulationText.textContent = "Population: ";
    const population = document.createElement("span");
    population.textContent = c.population || "No data available";

    const staticRegionText = document.createElement("strong");
    staticRegionText.textContent = "Region: ";
    const region = document.createElement("span");
    region.textContent = c.region;

    const capitalLabel = document.createElement("strong");
    capitalLabel.textContent = "Capital: ";
    const capital = document.createElement("span");
    capital.textContent = c.capital || "No capital";

    infoSide.append(
      name,
      staticPopulationText, population, document.createElement("br"),
      staticRegionText, region, document.createElement("br"),
      capitalLabel, capital
    );

    cardHolder.append(imageSide, infoSide);

    cards.appendChild(cardHolder);
  });
}

async function init() {
  const data = await getData();
  renderUsers(data);  
}

init();


let cachedData = [];

async function initCache() {
  cachedData = await getData();
  renderUsers(cachedData);
}

selectFilter.addEventListener("change", (event) => {
  const selectedRegion = event.target.value;
  if(selectedRegion == "") {
    return;
  }
  const filteredData = selectedRegion 
    ? cachedData.filter(c => c.region === selectedRegion) 
    : cachedData;

  renderUsers(filteredData);
})

document.addEventListener("DOMContentLoaded", () => {
  getData();

  const moonIcon = document.querySelector(".fa-moon");
  const sunIcon = document.querySelector(".fa-sun");
  const darkModeText = document.querySelector(".darkMode");
  const body = document.body;
  const input = document.querySelector(".input");
  const selectFilter = document.querySelector("#selectFilter");
  const header = document.querySelector("header");

  const toggleDarkMode = () => {
    const isDarkMode = body.classList.toggle("dark");
    header.classList.toggle("dark");
    input.classList.toggle("dark");
    selectFilter.classList.toggle("dark");

    document.querySelectorAll(".cardHolder").forEach(card => {
      card.classList.toggle("dark");
    });

    moonIcon.style.display = isDarkMode ? "none" : "inline";
    sunIcon.style.display = isDarkMode ? "inline" : "none";
    darkModeText.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  };

  moonIcon.addEventListener("click", toggleDarkMode);
  sunIcon.addEventListener("click", toggleDarkMode);
  darkModeText.addEventListener("click", toggleDarkMode);
});
