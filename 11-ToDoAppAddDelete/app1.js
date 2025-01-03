const addInput = document.querySelector(".addInput");
const buttonAdd = document.querySelector(".buttonAdd");
const buttonClear = document.querySelector(".buttonClear");
const tasksMain = document.querySelector(".tasksMain");
const azBtn = document.querySelector(".azBtn");
const darkMode = document.querySelector(".darkMode")


let mode = localStorage.getItem("mode") || "light"
mode === "dark" && document.body.classList.add("darkMode")

darkMode.addEventListener("click", (e) => {
    if(document.body.classList.contains("darkMode")) {
     document.body.classList.remove("darkMode")
    e.target.textContent = "Dark Mode";
    localStorage.setItem("mode", "light")
    }
    else {
        document.body.classList.add("darkMode")
        e.target.textContent = "Light Mode"
        localStorage.setItem("mode", "dark")
    }   
})

let toDos = JSON.parse(localStorage.getItem("toDos")) || [
  {
    id: 1,
    title: "Kod Yaz",
  },
  {
    id: 2,
    title: "Idmana Git",
  },
  {
    id: 3,
    title: "Kursa Git",
  },
];

createList(toDos);




buttonAdd.addEventListener("click", () => {
  let obj = {
    title: addInput.value,
    id: toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 1,
  };

  toDos.push(obj);

  localStorage.setItem("toDos", JSON.stringify(toDos))

  tasksMain.innerHTML = ""; 
  createList(toDos);

  addInput.value = "";
});

azBtn.addEventListener("click", () => {
  tasksMain.innerHTML = "";
  createList([...toDos].sort((a, b) => a.title.localeCompare(b.title)));
});

buttonClear.addEventListener("click", () => {
  toDos.remove();
  createList(toDos);
    localStorage.setItem("toDos", JSON.stringify(toDos))

});

function createList(arr) {
  tasksMain.innerHTML = "";
  arr.forEach((toDo) => {
    const li = document.createElement("li");
    const buttonDelete = document.createElement("button");
    const buttonEdit = document.createElement("button");
    const inputEdit = document.createElement("input");

    li.className = "m-2";
    li.innerText = toDo.title;

    buttonDelete.innerText = "Delete";
    buttonDelete.className = "btn btn-danger ms-2 deleteButton";

    buttonEdit.innerText = "Edit";
    buttonEdit.className = "btn btn-warning ms-2 editButton";
    
    inputEdit.className = "editInput";
    inputEdit.style.display = "none";

    buttonDelete.addEventListener("click", () => {
      toDos = toDos.filter((elem) => elem.id !== toDo.id);
      tasksMain.innerHTML = "";
      createList(toDos);
    });

    buttonEdit.addEventListener("click", () => {
      li.style.display = "none";
      inputEdit.style.display = "inline-block";
      inputEdit.value = toDo.title;

      inputEdit.addEventListener("blur", () => {
        if (inputEdit.value.trim() !== "") {
          toDo.title = inputEdit.value.trim();
          tasksMain.innerHTML = "";
          createList(toDos);
        }
        li.style.display = "inline";
        inputEdit.style.display = "none";
      });
    });

    li.appendChild(buttonDelete);
    li.appendChild(buttonEdit);
    li.appendChild(inputEdit);
    tasksMain.appendChild(li);
  });
}



