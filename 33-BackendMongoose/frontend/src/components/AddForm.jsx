import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddForm.css";
import { BASE_URL } from "../constant/api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    image: null, // File olarak tutulacak
    content: "",
    date: "",
  });

  const [categories, setCategories] = useState([]);

  // Kategorileri API'den çek
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Input değişikliklerini kontrol et
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] }); // Dosyayı state'e kaydet
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Formu gönderme işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.categoryId || !formData.content || !formData.image || !formData.date) {
      toast.error("All fields are required!");
      return;
    }

    // FormData oluştur
    const data = new FormData();
    data.append("title", formData.title);
    data.append("categoryId", formData.categoryId);
    data.append("content", formData.content);
    data.append("date", formData.date);
    data.append("image", formData.image); 

    try {
      const response = await axios.post(`${BASE_URL}/api/posts`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Post created successfully!");

      setFormData({
        title: "",
        categoryId: "",
        image: null,
        content: "",
        date: "",
      });

      console.log(response.data);
    } catch (error) {
      console.error("Failed to create post:", error.response ? error.response.data : error.message);
      toast.error("Failed to create post!");
    }
  };

  return (
    <div className="form-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="categoryId">Category:</label>
          <select id="categoryId" name="categoryId" value={formData.categoryId} onChange={handleChange} required>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" value={formData.content} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <button type="submit">Submit Post</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AddForm;
