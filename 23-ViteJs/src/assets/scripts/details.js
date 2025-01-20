import { getMovieDetails, handleError } from "../services";

window.addEventListener('DOMContentLoaded', async () => {
    document.querySelector("#loader").classList.add("hidden")
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');  
    if (!movieId) {
        handleError("Movie ID is missing!");
        return;
    }

    try {
        const movie = await getMovieDetails(movieId);
        renderMovieDetails(movie);
    } catch (err) {
        handleError(err);
    }
});

function renderMovieDetails(movie) {
    const detailsContainer = document.querySelector(".movie-details");
    detailsContainer.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.fullTitle}</p>
        <p>${movie.year}</p>
        <img src="${movie.image}" alt="${movie.title}">
        <p>Rating: ${movie.imDbRating}</p>
    `;
}