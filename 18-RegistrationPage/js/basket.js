import { getDataFromLocal, setDataInLocal } from "./Storage-helpers.js";

const users = getDataFromLocal("users") || [];
const activeUser = users.find((i) => i.isLogged == true)
const register = document.querySelector(".register")
const login = document.querySelector(".login")
const logOut = document.querySelector(".logOut")

if (activeUser.isLogged == true) {
    register.style.display = "none"
    login.style.display = "none"
    logOut.style.display = "block"
}


