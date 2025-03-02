import React from "react";
import { useBasket } from "../../Context/BasketContext";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import FavoriteIcons from "../FavoriteIcons";

const ProductItem = ({ products }) => {
  const { addToBasket } = useBasket();

  const handleAddToBasket = (product) => {
    addToBasket(product);
  };

  return (
    <div className={styles["product-container"]}>
      {products.map((product) => (
        <div
          key={product.id}
          className={`${styles["product-card"]} ${
            product.isDiscounted ? styles.discount : ""
          }`}
        >
          <div className={styles.imgDiv}>
            <img
              src={product.image}
              alt=""
              className={styles["product-card-img"]}
            />
          </div>
          <h2>{product.name}</h2>
          <p className={styles.price}>{product.price}</p>
          <p className={styles.description}>
            {product.description.slice(0, 37) + "..."}
          </p>
          <button>
            <Link to={`/products/${product.id}`}>Go To Details</Link>
          </button>
          <div className={styles.iconHolder}>
            <FavoriteIcons product={product} />
          </div>

          <button onClick={() => handleAddToBasket(product)}>
            Add to Basket
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
