import type { DetailsProduct, Product } from "../../../types";
import { Heart } from "lucide-react";
import styles from "./ProductsList.module.scss";
import { useBasket } from "../../../Context/Cart/useBasket";
import { useProductDetails } from "../../../Context/Cart/details";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useWishlist } from "../../../Context/Wishlist/UseWishlist";

const ProductsList: React.FC<{ products: DetailsProduct[] }> = ({ products }) => {
  const nav = useNavigate();
  const { addToBasket } = useBasket();
  const { addToDetails } = useProductDetails();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.id === productId);
  };

  const handleWishlistClick = (product: DetailsProduct) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToDetails = (product: Product) => {
    addToDetails(product);
    nav(`/product/${product.id}`);
  };

  return (
    <section className={styles.productsSection}>
      <ToastContainer />
      <div className={styles.productContainer}>
        <h2 className={styles.sectionTitle}>Our Products</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <div className={styles.productCard} key={product.id}>
              <div className={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <button
                  className={styles.wishlistButton}
                  onClick={() => handleWishlistClick(product)}
                >
                  <Heart
                    className={`${styles.heartIcon} ${isInWishlist(product.id) ? styles.filled : ""}`}
                  />
                </button>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <div className={styles.productActions}>
                  <button
                    className={styles.cartButton}
                    onClick={() => addToBasket(product)}
                  >
                    CART
                  </button>
                  <button
                    className={styles.viewButton}
                    onClick={() => handleAddToDetails(product)}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
