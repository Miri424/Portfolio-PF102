import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constant/api/api";

const SearchSort = ({ setProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("title"); 
  const [categories, setCategories] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value); 
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/posts`, {
        params: {
          search: searchTerm,
          sort: sortOption, 
        },
      });
      setProducts(response.data.data); 
      console.log(products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  
  
  useEffect(() => {
    fetchProducts();
  }, [searchTerm, sortOption]);

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

  return (
    <div className="search-sort-container">
      <div className="search-input">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search products..."
        />
      </div>

      <div className="sort-input">
        <select value={sortOption} onChange={handleSortChange}>
          <option value="title">Sort by Title</option>
          <option value="date">Sort by Date</option>
          <option value="category">Sort by Category</option>
        </select>
      </div>
    </div>
  );
};

export default SearchSort;
