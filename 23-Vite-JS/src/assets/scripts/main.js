import { getAll, handleError, deleteMovie } from "../services";
import { renderCards } from "./cards";

async function displayMovies() {
    try {
        const movies = await getAll('movies');
        renderCards(movies);
    } catch (err) {
        handleError(err);
    }
}
displayMovies();

document.querySelectorAll('.fa-trash').forEach(trashIcon => {
    trashIcon.addEventListener('click', (e) => {
        const movieId = e.target.closest('.card').dataset.movieId; 
        console.log('Deleting movie with ID:', movieId);
        deleteMovie(movieId); 
    });
});

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#loader").classList.add("hidden");
});
