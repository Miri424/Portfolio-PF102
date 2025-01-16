const productName = document.querySelector("#product-name");
const productId = document.querySelector("#product-id");
const productDesc = document.querySelector("#product-description");
const productPrice = document.querySelector("#product-price");
const productCategory = document.querySelector("#product-category");


const productIdFromURL = window.location.hash.substring(1);

if (!productIdFromURL) {
    console.error("Product ID is missing in the APi.");
  } else {
      fetch(`${BASE_URL}/products/${productIdFromURL}`)
        .then((response) => response.json())
        .then((data) => {
            productName.textContent = data.name || undefined;
            productId.textContent = `ID: ${data.id || undefined}`;
            productDesc.textContent = `Stocks: ${data.unitsInStock || "No stock available"}`;
            productPrice.textContent = `Price: $${data.unitPrice || undefined}`;
            productCategory.textContent = `Category: ${data.categoryId || undefined}`;
          })
          .catch((err) => {
              console.error(err);
            });
        }