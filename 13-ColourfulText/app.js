const container = document.querySelector(".container");
const increaseScale = document.querySelector(".increaseScale");
const decreaseScale = document.querySelector(".decreaseScale");
const buttonApply = document.querySelector(".buttonApply");
const inputColour = document.querySelector(".inputColour");
const parag = document.querySelector(".parag");





increaseScale.addEventListener("click", () => {
    let currentFontSize = window.getComputedStyle(parag).fontSize;
    currentFontSize = parseFloat(currentFontSize);
    let newFontSize = currentFontSize + 2;
    parag.style.fontSize = newFontSize + "px";
});

    buttonApply.addEventListener("click", () => {
    applyColorChange();

});

decreaseScale.addEventListener("click", () => {
    let currentFontSize = window.getComputedStyle(parag).fontSize;

    currentFontSize = parseFloat(currentFontSize);

    let newFontSize = currentFontSize - 2;

    parag.style.fontSize = newFontSize + "px";
});
function applyColorChange() {
    const selectedColor = inputColour.value;

    if (selectedColor) {
        parag.style.color = selectedColor; 
        inputColour.value = "";
    } else {
        alert("Lütfen geçerli bir renk girin!");
    }
}
