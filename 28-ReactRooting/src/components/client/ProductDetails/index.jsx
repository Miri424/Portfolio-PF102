import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, handleError } from "../../../Services";
import "./index.scss"

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const products = await getProducts(); 
                const foundProduct = products.find((item) => item.id.toString() === id); 
                setProduct(foundProduct || null);
            } catch (error) {
                handleError(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
    <>
    <button onClick={() => (window.history.back())} className="back-to-products">
        Back To Products
    </button>
    <div className="details-container">
        <div className="details-image-section">
          <img src={product.image} alt={product.name} className="details-image" />
        </div>
        <div className="details-content">
          <h1 className="details-title">{product.name}</h1>
          <p className="details-description">{product.description}</p>
          <p className="details-price">{product.price}</p>
          <div className="details-buttons">
            <button className="details-buy-btn">Buy Now</button>
            <button className="details-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
    );
}

export default ProductDetails;
