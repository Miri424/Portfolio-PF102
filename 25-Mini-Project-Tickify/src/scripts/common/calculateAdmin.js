import { getAll } from "../services/index.js";

randomCounterPrinter();

function randomCounterPrinter() {
  const valueElement = document.querySelector(".online-people");
  const changeElement = document.querySelector(".change");
  const salesElement = document.querySelector(".sales");

  const currentValue = parseInt(valueElement.textContent, 10) || 66323;
  const currentSales = parseInt(salesElement.textContent, 10) || 12331;
  
  const randomCounter = Math.floor(Math.random() * 2372);
  
  const result = currentValue + randomCounter;
  const result2 = currentSales + randomCounter;
  
  valueElement.textContent = `${result}`;
  changeElement.textContent = `+${randomCounter}`;
  salesElement.textContent = `$${result2}`;
  
  return result;
}
 
  
  setInterval(() => {
    randomCounterPrinter();
  }, 2000);
  

getLengthOfStats();

getLengthOfTickets();

getLengthOfUsers();


async function getLengthOfStats() {
 const response = await getAll('events')
  const eventsLength = response.length;
  document.querySelector('.events').textContent = `Events: ${eventsLength}`;
}

async function getLengthOfTickets() {
  const response = await getAll('tickets')
   const ticketsLength = response.length;
   document.querySelector('.tickets').textContent = `Tickets: ${ticketsLength}`;
 }

 async function getLengthOfUsers() {
  const response = await getAll('users')
   const usersLength = response.length;
   document.querySelector('.users').textContent = `Users: ${usersLength}`;
 }