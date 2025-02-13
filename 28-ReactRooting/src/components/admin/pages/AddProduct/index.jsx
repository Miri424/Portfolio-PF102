import React, { useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import "./index.scss";
import { BASE_URL } from "../../../../Services/Base/api";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData, [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const newProduct = {
      id: nanoid(4),
      name: formData.name,
      price: `$${formData.price}`,
      description: formData.description,
      image: formData.imageUrl,
    };

    try {
      const response = await axios.post(`${BASE_URL}/products`, newProduct);
      if (response.status === 201) {
        setMessage("Product added successfully!");
        setFormData({
          name: "",
          price: "",
          description: "",
          imageUrl: "",
        });
      }
    } catch (error) {
      setMessage("Error adding product!");
    }

    setLoading(false);
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
