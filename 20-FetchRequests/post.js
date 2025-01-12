const contact = document.querySelector("#contact-title");
const city = document.querySelector("#city-title");
const country = document.querySelector("#country-title");
const form = document.querySelector("#form");
const BASE_URL = "https://northwind.vercel.app/api";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const company = document.querySelector("#company-name").value;
    const contact = document.querySelector("#contact-title").value;
    const city = document.querySelector("#city-title").value;
    const country = document.querySelector("#country-title").value;
    console.log(country);
    const customer = {
        companyName: company,
        contactTitle: contact,
        address: {
            city: city,
            country: country,
        }
    };
    console.log(customer);

    fetch(`${BASE_URL}/customers`, {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json)); 
});