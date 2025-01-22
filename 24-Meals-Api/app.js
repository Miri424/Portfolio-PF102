const input = document.querySelector("input")
const searchButton = document.querySelector("button")
const cardsHolder = document.querySelector(".cardsHolder")

async function getAll(search) {
    try {
        const response = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

searchButton.addEventListener("click", async () => {
    const {meals} = await getAll(input.value);
    renderCards(meals)

})

function renderCards(meal) {
    meal.forEach((m) => {
        const card = document.createElement('div');
        card.className = 'card';
    
        const imageSide = document.createElement('div');
        imageSide.className = 'imageSide';
    
        const img = document.createElement('img');
        img.src = m.strMealThumb || '';
        imageSide.appendChild(img);
    
        const infoSide = document.createElement('div');
        infoSide.className = 'infoSide';
    
        const title = document.createElement('h3');
        title.className = 'text-center';
        title.textContent = m.strMeal || 'Qaqa serverde problem var';
        infoSide.appendChild(title);
    
        const btnHolder = document.createElement('div');
        btnHolder.className = 'btnHolder text-center';
    
        const button = document.createElement('button');
        button.style.backgroundColor = '#d65108';
        button.textContent = 'Get Recipe';


        btnHolder.appendChild(button);
    
        card.appendChild(imageSide);
        card.appendChild(infoSide);
        card.appendChild(btnHolder);
        cardsHolder.append(card)
    })} 