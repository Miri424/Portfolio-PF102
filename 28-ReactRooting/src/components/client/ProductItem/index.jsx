import { Link, NavLink } from "react-router-dom";
// import { FaRegHeart, FaHeart } from "react-icons/fa";

import styles from "./index.module.scss";
import FavoriteIcons from "../FavoriteIcons";

const ProductItem = ({ products }) => {
  console.log(products);

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
            <FavoriteIcons  product={product}/>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
