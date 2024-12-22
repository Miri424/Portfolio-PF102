const container = document.querySelector(".container");
const input1 = document.querySelector("#input1");
const submitBtn = document.querySelector("#submitBtn");
const allPendingsBtn = document.querySelector("#allPendingsBtn");
const validation1 = document.querySelector(".validation");
const allComp = document.querySelector("#allCompletedBtn")
const clear = document.querySelector("#clear")
const allTasks = document.querySelector("#allTasks")


submitBtn.addEventListener("click", () => {
    toDoList();
});

allPendingsBtn.addEventListener("click", () => {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
        const pendingBtn = row.querySelector("td button");
        if (pendingBtn && pendingBtn.textContent === "Completed") {
            row.style.display = "none";
        } else {
            row.style.display = "";
        }
    });
});


allComp.addEventListener("click", () => {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
        const statusBtn = row.querySelector("td button");
        if (statusBtn && statusBtn.textContent === "Pending") {
            row.style.display = "none";
        } else {
            row.style.display = "";
        }
    });
});

clear.addEventListener("click", () => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; 


});
allTasks.addEventListener("click", () => {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
        row.style.display = ""; 
    })});

allPendingsBtn.style.backgroundColor = "orange";
allPendingsBtn.style.transition = "background-color 0.2s ease-in-out";

allPendingsBtn.addEventListener("mouseover", () => {
    allPendingsBtn.style.backgroundColor = "#d98900";
});

allPendingsBtn.addEventListener("mouseout", () => {
    allPendingsBtn.style.backgroundColor = "orange";
});

function toDoList() {
    const inputValue = input1.value.trim();
    
    if (inputValue !== "") {
        const newRow = document.createElement("tr");

        const username = document.createElement("td");
        username.textContent = inputValue;

        const dateCell = document.createElement("td");
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}`;
        dateCell.textContent = formattedDate;

        const statusCell = document.createElement("td");
        const pendingBtn = document.createElement("button");
        pendingBtn.textContent = "Pending";
        
        pendingBtn.style.backgroundColor = "orange";
        pendingBtn.style.color = "white";
        pendingBtn.style.padding = "8px 16px";
        pendingBtn.style.fontSize = "14px";
        pendingBtn.style.cursor = "pointer";
        pendingBtn.style.borderRadius = "5px";
        pendingBtn.style.transition = "background-color 0.3s";

        pendingBtn.addEventListener("mouseover", () => {
            pendingBtn.style.backgroundColor = "#e67e22";
        });

        pendingBtn.addEventListener("mouseout", () => {
            pendingBtn.style.backgroundColor = "orange";
        });

        pendingBtn.addEventListener("click", () => {
            if (pendingBtn.textContent === "Pending") {
                pendingBtn.textContent = "Completed";
                pendingBtn.style.backgroundColor = "green";
                newRow.style.textDecoration = "line-through";
            } else {
                pendingBtn.textContent = "Pending";
                pendingBtn.style.backgroundColor = "orange";
                newRow.style.textDecoration = "none";
            }
        });

        statusCell.append(pendingBtn);

        const action = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // Stil əlavə etmə
        deleteBtn.style.padding = "8px 16px";
        deleteBtn.style.fontSize = "14px";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.borderRadius = "5px";
        deleteBtn.style.transition = "background-color 0.3s";
        deleteBtn.style.marginRight = "10px";
        deleteBtn.style.border = "none";
        deleteBtn.style.backgroundColor = "#e74c3c";
        deleteBtn.style.color = "white";

        deleteBtn.addEventListener("mouseover", () => {
            deleteBtn.style.backgroundColor = "#c0392b";
        });

        deleteBtn.addEventListener("mouseout", () => {
            deleteBtn.style.backgroundColor = "#e74c3c";
        });

        deleteBtn.addEventListener("click", () => {
            newRow.remove();
        });

        action.append(deleteBtn);
        newRow.append(username, dateCell, statusCell, action);

        document.querySelector("tbody").append(newRow);

        input1.value = "";
        input1.style.border = "none";
        validation1.innerHTML = "";
    } else {
        checkValidate(input1, validation1, "Task Section Must Be Filled");
    }
}

function checkValidate(input, validation, errorMessage) {
    if (input.value === "") {
        validation.innerHTML = errorMessage;
        input.style.border = "1px red solid";
    } else {
        validation.innerHTML = "";
        input.style.border = "";
    }
}
