import { getDataFromLocal, setDataInLocal } from "./Storage-helpers.js";

const signIn = document.querySelector(".signIn");
const validate = document.querySelector(".validation");
const eyeBtn = document.querySelector(".fa-solid");

function userLogInCheck() {
    const usernameOrEmail = document.querySelector(".usernameOrEmail").value.trim();
    const password = document.querySelector(".password").value.trim();

    if (!usernameOrEmail || !password) {
        validate.textContent = "Please enter both username/email and password.";
        validate.style.color = "red"
        return;
    }

    const users = getDataFromLocal("users");
    
    const activeUser = users.find((user) => user.username.toLowerCase() === usernameOrEmail || user.email.toLowerCase() === usernameOrEmail)

    const checkUser = users.some((user) => {
        const UsernameOrEmail = usernameOrEmail.toLowerCase();
        return (user.username.toLowerCase() === usernameOrEmail || user.email.toLowerCase() === usernameOrEmail) && user.password === password;
    });

    if (checkUser) {
            Swal.fire({
                title: "User Successfully Logged In",
                icon: "success",
                draggable: true
              })
                .then((result) => {
                 activeUser.isLogged = true;
                 setDataInLocal("users", users);
                 window.location.href = "./index.html"
    })
    } else {
        validate.textContent = "Email or Username does not exist!";
        validate.style.color = "red"
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
