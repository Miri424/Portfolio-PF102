const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector(".close")
const container = document.querySelector(".container")

closeBtn.addEventListener("click" , () => {
    container.classList.add("transform")
    openBtn.style.display = "block"
})

openBtn.addEventListener("click", () => {
    container.classList.remove("transform")
    openBtn.style.display = "none"
    container.style.transition = "0.3s"
})
