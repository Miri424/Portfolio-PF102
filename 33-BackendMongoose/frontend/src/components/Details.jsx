import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constant/api/api";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/posts`);
        const foundProduct = response.data.data.find((item) => item._id === id); 
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={product.image} alt={product.title} className="details-image" />
        <div className="details-info">
          <h2 className="details-title">{product.title}</h2>
          <p className="details-description">{product.description}</p>
          <p className="content">{product.content}</p>
          <button className="details-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
