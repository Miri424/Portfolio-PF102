import axios from "axios";
import { getAll, handleError } from "../services";
import { renderCards } from "./cards";

const input = document.querySelector("#search-input");
const select = document.querySelector("#sort-select");

async function searchMovies(search) {
  try {
    const movies = await getAll(`movies?title_like=${search}`);
    console.log(movies);
    return movies;
  } catch (err) {
    handleError(err);
  }
}

async function sortMovies(order) {
  try {
    const movies = await getAll(`movies?_sort=title&_order=${order}`);
    return movies;
  } catch (err) {
    handleError(err)
  }

}

select.addEventListener('change', async (e) => {
    try {
        if(e.target.value === "default") {
            const movies = await getAll('movies');
            renderCards(movies)
            return;
        }
        const order = e.target.value === "az" ? "asc" : "desc";
        const movies = await sortMovies(order)
        renderCards(movies)
    } catch (err) {
        handleError(err);
    }
});

let timer;
input.addEventListener("keyup", (e) => {
    clearTimeout(timer);
    try {
        timer = setTimeout(async () => {
            const movies = await searchMovies(e.target.value.toLowerCase().trim());
            renderCards(movies);
        }, 250);
  } catch (err) {
      handleError(err);
    }
});