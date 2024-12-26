

import { setDataInLocal, getDataFromLocal } from "./Storage-helpers.js";

const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const signUpBtn = document.querySelector(".SignUp");
const form = document.querySelector(".form");
const validation = document.querySelector(".validation");

function registerUser() {
    const enteredUsername = username.value.trim();
    const enteredEmail = email.value.trim();
    const enteredPassword = password.value.trim();

    const users = getDataFromLocal("users") || [];

    const sameUser = users.some(
        user => user.username === enteredUsername || user.email === enteredEmail
    );

    if (sameUser) {
        validation.textContent = "Username or Email already has been taken";
        return;
    }

    const user = {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
        id: Date.now(),
    };

    users.push(user);
    setDataInLocal("users", users);

    window.location.href = "./logIn.html";
}


signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    registerUser();
    form.reset();
});

const eyeBtn = document.querySelector(".fa-eye");

eyeBtn.addEventListener("click", () => {
    const password = document.querySelector(".password");
    if (eyeBtn.classList.contains("fa-eye")) {
        eyeBtn.classList.remove("fa-eye");
        eyeBtn.classList.add("fa-eye-slash");
        password.type = "text";
    } else {
        eyeBtn.classList.add("fa-eye");
        eyeBtn.classList.remove("fa-eye-slash");
        password.type = "password";
    }
});
