const input = document.querySelector("#searchInp");
const mainUl = document.querySelector("#searchUl");
const BASE_URL = "https://randomuser.me/api/?results=100";

mainUl.innerHTML = "It's as empty as your pocket. Fill it up by typing";

function getElement(query) {
  axios(`${BASE_URL}`)
    .then(({ data }) => {
      const filteredUsers = data.results.filter((user) => {
        return (
            user.name.first.toLowerCase().includes(query.toLowerCase()) ||
            user.name.last.toLowerCase().includes(query.toLowerCase()) ||
            user.location.city.toLowerCase().includes(query.toLowerCase()) ||
            user.location.country.toLowerCase().includes(query.toLowerCase())
          );
        });

      renderUsers(filteredUsers);
    
    })
    .catch((error) => {
        if (error.response && error.response.status === 404) {
            mainUl.innerHTML = "Congratulations, you found... absolutely nothing :))";
          } else {
            console.error(error);
          }
    });
}


function renderUsers(users) {
  mainUl.innerHTML = "";


  if (users.length === 0) {
    mainUl.innerHTML = "Congratulations, you found... absolutely nothing :))";
    return;
  }

  users.forEach((u) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = u.picture.thumbnail;
   
    const textContainer = document.createElement("div");
    textContainer.className = "text-container";

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = `${u.name.first} ${u.name.last}`;

    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = `${u.location.city}, ${u.location.country}`;
    li.classList.add("li-flex");

    textContainer.append(nameParagraph, locationParagraph);
    li.append(img, textContainer);
    mainUl.append(li);


    // Style JS
    img.style.width ="50px"
    img.style.height = "50px"
    img.style.borderRadius = "50%"
    locationParagraph.style.color = "gray"
    // 
  });
}

let timeout;

function searchUsers() {
    input.addEventListener("input", (event) => {
      const query = event.target.value;

        if (query === "") {
        mainUl.innerHTML = "It's as empty as your pocket. Fill it up by typing";
        return;
      }
  
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        getElement(query);
      }, 300);
    });
  }
  
  searchUsers();