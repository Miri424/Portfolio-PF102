import { BASE_URL } from "../constant";
import { getAll, deleteMovie } from "../services"; 

export function renderCards(movies) {
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = "";

    movies.forEach(m => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.movieId = m.id;

        const imageSide = document.createElement("div");
        imageSide.classList.add("imageSide");
        const image = document.createElement("img");

        const infoSide = document.createElement("div");
        infoSide.classList.add("infoSide");
        const title = document.createElement("h2");
        const fullTitle = document.createElement("p");
        const madeYear = document.createElement("p");
        const rating = document.createElement("p");
        const actionHolder = document.createElement("div");
        actionHolder.classList.add("flexBox");
        const info = document.createElement("i");
        info.classList.add("fas", "fa-info-circle");
        const trash = document.createElement("i");
        trash.classList.add("fas", "fa-trash");

        image.src = m.image;
        title.textContent = m.title;
        fullTitle.textContent = m.fullTitle;
        madeYear.textContent = m.year;
        rating.textContent = m.imDbRating;
        info.style.cursor = "pointer"

        actionHolder.append(info, trash);
        imageSide.append(image);
        infoSide.append(title, fullTitle, madeYear, rating, actionHolder);
        card.append(imageSide, infoSide);
        cardsContainer.append(card);

        trash.addEventListener('click', (e) => {
            const movieId = e.target.closest('.card').dataset.movieId; 
            deleteMovie(movieId);
            card.remove();
        });
        info.addEventListener('click', (e) => {
            window.location.href = `../../src/assets/pages/details.html?id=${m.id}`;
        });
        
    });
}
