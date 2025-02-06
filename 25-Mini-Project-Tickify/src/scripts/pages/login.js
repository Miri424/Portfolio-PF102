import { getAll, handleError } from "../services/index.js";
import { setLocalStorageItem } from "../helpers/helper.js";

const signInForm = document.getElementById("signin-form");

signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value.trim();

    try {
        const users = await getAll("users");
        const userFound = users.find(user => user.email === email && user.password === password);

        if (userFound) {
            setLocalStorageItem("loggedInUser", userFound);

            if (userFound.role === "admin") {
                window.location.href = "home.html";
            } else {
                window.location.href = "home.html";
            }
        } else {
            alert("Wrong Credentials");
        }
    } catch (error) {
        alert("Something went wrong. Please try again later.");
        handleError(error);
    }
});