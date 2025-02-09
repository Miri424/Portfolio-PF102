import axios from "axios";
import {nanoid} from "nanoid"
import { useState } from "react";
import { BASE_URL } from "../../constants/api";

const AddProduct = ({ setProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isDiscounted, setIsDiscounted] = useState(false);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const product = {
      id: nanoid(),
      name: name,
      price: Number(price),
      isDiscounted,
    };

    try {
      const response = await axios.post(`${BASE_URL}/products`, product); 
      setProduct((prev) => [...prev, response.data]);
      setName(""); 
      setPrice(""); 
      setIsDiscounted(false); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleAddProduct}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Add product name..."
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter product price..."
        required
      />
      <input
        type="checkbox"
        checked={isDiscounted}
        onChange={(e) => setIsDiscounted(e.target.checked)}
      />
      <button className="btn btn-add" type="submit">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
