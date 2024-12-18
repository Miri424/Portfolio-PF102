 const increment = document.querySelector(".increment")
 const counter = document.querySelector(".counter")
 const decrement = document.querySelector(".decrement")
 const  reset = document.querySelector(".reset")


 increment.addEventListener("click" , () => {
    counter.innerHTML = + counter.innerHTML + 1
 })

 decrement.addEventListener("click" , () => {
    if (counter.innerHTML > 0) {
    counter.innerHTML = + counter.innerHTML - 1
 }})

 reset.addEventListener("click" , () => {
    counter.innerHTML = "0"
 })