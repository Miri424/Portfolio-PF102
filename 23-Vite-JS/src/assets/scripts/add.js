import { addMovie, handleError } from "../services";

document.querySelector("form").addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const fullTitle = document.querySelector('#fullTitle').value;
    const year = document.querySelector('#year').value;
    const image = document.querySelector('#image').value;
    const rating = document.querySelector('#rating').value;

    const movie = { title, fullTitle, year, image, rating };

    try {
        await addMovie(movie);
        window.history.back()
    } catch (err) {
        handleError(err);  
    }
});
