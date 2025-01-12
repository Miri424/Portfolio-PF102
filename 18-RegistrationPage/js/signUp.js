import { setDataInLocal, getDataFromLocal } from "./Storage-helpers.js";

const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const signUpBtn = document.querySelector(".SignUp");
const validation = document.querySelector(".validation");
const profileImg = document.querySelector("#profileImg");
const profilePicInput = document.getElementById("profilePicInput");

function registerUser() {
    const enteredUsername = username.value.trim();
    const enteredEmail = email.value.trim();
    const enteredPassword = password.value.trim();

    const users = getDataFromLocal("users") || [];

    const sameUser = users.some(
        (user) => user.username === enteredUsername || user.email === enteredEmail
    );

    if (sameUser) {
        validation.textContent = "Username or Email already has been taken";
        validation.style.color = "red";
        return;
    }

    const user = {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
        id: Date.now(),
        wishList: [],
        isLogged: false,
        profilePic: profilePicInput.dataset.base64 || null,
    };

    users.push(user);
    setDataInLocal("users", users);

    setDataInLocal("loggedInUserId", user.id);

    window.location.href = "./logIn.html";
}

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    registerUser();
});



profileImg.addEventListener("click", () => profilePicInput.click());
profileImg.addEventListener("dragover", (e) => e.preventDefault());
profileImg.addEventListener("drop", handleDrop);
profilePicInput.addEventListener("change", handleFile);

function handleFile(e) {
    const file = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const base64 = event.target.result;

            profileImg.src = base64;

            profilePicInput.dataset.base64 = base64;
        };
        reader.readAsDataURL(file);
    }
}

function handleDrop(e) {
    e.preventDefault();
    handleFile(e);
}


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

