import { Link, NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const ProductItem = ({ products }) => {
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
            {product.description.length > 80
              ? product.description.slice(0, 80) + "..."
              : product.description}
          </p>
          <button>
            <Link to={`/products/${product.id}`}>Go To Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
