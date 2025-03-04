import { useProductDetails } from "../../../Context/Cart/details";
import styles from "./index.module.scss";

const ProductDetails = () => {
  const { product } = useProductDetails();

  if (!product) {
    return <p className="red text-align align-center">Product not found!</p>;
  }

  return (
    <div className={styles.background}>
      <div className={styles.detailsContainer}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.productImage}
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className={styles.productInfo}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>

          <p className={styles.productCategory}>Category: {product.category}</p>
          <p className={styles.productRating}>Rating: {product.rating}</p>
          <p className={styles.productFavourites}>
            Favourites: {product.favourites}
          </p>
          <p className={styles.productSold}>Sold: {product.sold}</p>

          <button className={styles.backButton} onClick={() => history.back()}>
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
