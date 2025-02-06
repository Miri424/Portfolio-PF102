const jokes = [
    "Why did the JavaScript developer go to therapy? Because they couldnt handle their async issues😁",
    "Why did the front-end developer get kicked out of the bakery? They kept trying to slice the bread with JavaScript!",
    "Why did the front-end developer cross the road? To get to the other SITE!",
    "Why did the front-end developer break up with their partner? They said the relationship wasnt responsive!",
    "Why did the front-end developer get kicked out of the library? They kept trying to console.log the books!",
];

let currentJokeIndex = 0; 

const jokeElement = document.querySelector('.sorrying p:nth-of-type(3)'); 
const button = document.querySelector('#change-joke-btn'); 

button.addEventListener('click', () => {
    currentJokeIndex = (currentJokeIndex + 1) % jokes.length; 
    jokeElement.textContent = jokes[currentJokeIndex]; 
});
