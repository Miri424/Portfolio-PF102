import { getDataFromLocal, setDataInLocal } from "./Storage-helpers.js";

const signIn = document.querySelector(".signIn");
const validate = document.querySelector(".validation");
const eyeBtn = document.querySelector(".fa-solid");

function userLogInCheck() {
    const usernameOrEmail = document.querySelector(".usernameOrEmail").value.trim();
    const password = document.querySelector(".password").value.trim();

    if (!usernameOrEmail || !password) {
        validate.textContent = "Please enter both username/email and password.";
        return;
    }

    const users = getDataFromLocal("users");

    const checkUser = users.some((user) => {
        const normalizedUsernameOrEmail = usernameOrEmail.toLowerCase();
        return (user.username.toLowerCase() === normalizedUsernameOrEmail || user.email.toLowerCase() === normalizedUsernameOrEmail) && user.password === password;
    });

    if (checkUser) {
        window.location.href = "./home.html"; 
    } else {
        validate.textContent = "Email or Username does not exist!";
    }
}

signIn.addEventListener("click", (e) => {
    e.preventDefault();
    userLogInCheck();
});

eyeBtn.addEventListener("click", () => {
    const passwordField = document.querySelector(".password");
    if (eyeBtn.classList.contains("fa-eye")) {
        eyeBtn.classList.remove("fa-eye");
        eyeBtn.classList.add("fa-eye-slash");
        passwordField.type = "text";
    } else {
        eyeBtn.classList.add("fa-eye");
        eyeBtn.classList.remove("fa-eye-slash");
        passwordField.type = "password";
    }
});
