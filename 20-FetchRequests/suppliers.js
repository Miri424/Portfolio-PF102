const BASE_URL = "http://localhost:3000";
const productHolder = document.querySelector(".product-container")

fetch(`${BASE_URL}/products`)
  .then((response) => response.json())
  .then((data) => {  
    data.forEach(product => {
      const holder = document.createElement("div")
      holder.classList.add("product")


      const id = document.createElement("p")
      id.textContent = product.id;
      holder.append(id)


      const name = document.createElement("p")
      name.textContent = product.name;
      holder.append(name);

      const button = document.createElement("a")
      button.classList.add("detailsBtn")
      button.textContent = "Details"
      button.href = `details.html#${product.id}`;

      const buttonDelete = document.createElement("button")
      buttonDelete.textContent = "Delete"
      buttonDelete.style.backgroundColor = "red"
      buttonDelete.style.color = "white"
      buttonDelete.style.border = "none"
      buttonDelete.style.padding = "11px"
      buttonDelete.style.paddingRight = "16px"
      buttonDelete.style.paddingLeft = "16px"
      buttonDelete.style.borderRadius = "8px"
      buttonDelete.style.marginLeft = "8px"
      buttonDelete.style.cursor = "pointer"

      buttonDelete.addEventListener("click", () => {
        const confirmDelete = confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
          fetch(`${BASE_URL}/products/${product.id}`, {
            method: "DELETE"
          })
            .then((response) => {
              if (response.ok) {
                holder.remove();
              }
            })
            .catch((err) => {
              console.error(err);
            });
        }
      });


      holder.append(button, buttonDelete)
      productHolder.append(holder);
    });
  })
  .catch((err) => {
    console.log(err);
  });