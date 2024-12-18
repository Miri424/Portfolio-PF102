const res = document.querySelector(".result");
const input = document.querySelector(".input");
const input2 = document.querySelector(".input2");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract"); 
const multiplyBtn = document.querySelector(".Multiply");
const divisBtn = document.querySelector(".Division");
const resetBtn = document.querySelector(".reset");

addBtn.addEventListener("click", () => {
  res.textContent = +input.value + +input2.value;
});

subtractBtn.addEventListener("click", () => { 
  res.textContent = +input.value - +input2.value;
});

multiplyBtn.addEventListener("click", () => {
  res.textContent = +input.value * +input2.value;
});

divisBtn.addEventListener("click", () => {
  res.textContent = +input.value / +input2.value;
});

resetBtn.addEventListener("click", () => {
  input.value = "";
  input2.value = "";
  res.textContent = "0";
});

console.log(subtractBtn);
