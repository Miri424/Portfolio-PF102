import { postAsync, handleError, fieldsChecker } from "../services/index.js";

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.getElementById("signup-form");
const signInView = document.getElementById("signInView")

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInView.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

signUpForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const profilePic = document.getElementById("profile-pic").value.trim();
  
  const fields = {username, email, password, profilePic};

  // if (!fieldsChecker(fields)) return; // ishlemir service js deki bir problemden oturu. 

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const payload = {
    id: generateUniqueId(),
    role: "user",
    username,
    email,
    password,
    balance: 500,
    profilePictureURL: profilePic,
    favorites: [],
    accountCreationDate: formattedDate,
    totalSpentMoney: 0,
  };

  try {
    const result = await postAsync("users", payload);
    alert("Sign up successful! 🎉");
    console.log("Response:", result);
  } catch (error) {
    alert("Failed to sign up. Please try again.");
    handleError(error);
  }
});

function generateUniqueId() {
  return Date.now();
}


