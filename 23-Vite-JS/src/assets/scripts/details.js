import { getMovieById, handleError } from "../services";

async function movieDetailsAsync(id) {
    try {
        const movie = await getMovieById('movies', id);
        return movie;
    } catch (err) {
        handleError(err);
    }
}


function renderMovieDetails(movie) {
    const loader = document.getElementById("loader");
    loader.style.display = "none";

    const movieCard = document.getElementById('movie-card');
    movieCard.style.display = "block";

    document.getElementById('movie-image').src = movie.image;
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-year').textContent = `Year: ${movie.year}`;
    document.getElementById('movie-rating').textContent = `Rating: ${movie.imDbRating}`;
    document.getElementById('movie-description').textContent = movie.description;
}

document.addEventListener('DOMContentLoaded', async () => {
    const movieId = new URLSearchParams(window.location.search).get('id');
    if (!movieId) {
        console.error("No movie ID found in the URL.");
        return;
    }

    const loader = document.getElementById('loader');
    loader.style.display = 'block'; 

    const movie = await movieDetailsAsync(movieId); 
    if (movie) {
        renderMovieDetails(movie);
        console.error("Movie details not found.");
    }
});
