import { useState } from "react";
import "./App.css";
import {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} from "./redux/services/productApi";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddProduct = async () => {
    if (!inputValue.trim() || !priceValue.trim()) {
      alert("Product name and price cannot be empty!");
      return;
    }

    const newProduct = { 
      title: inputValue,
      price: parseFloat(priceValue),
    };

    await addProduct(newProduct);
    setInputValue("") 
    setPriceValue("")
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <>
      <div>
        <h1>Products</h1>
        <input 
          value={inputValue} 
          type="text" 
          placeholder="Product name" 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <input 
          value={priceValue} 
          type="number" 
          placeholder="Price" 
          onChange={(e) => setPriceValue(e.target.value)} 
        />
        <button onClick={handleAddProduct}>Add Product</button>
        <ul>
          {products?.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price}
              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
