import { ToastContainer } from "react-toastify";
import { useWishlist } from "../../../Context/Wishlist/UseWishlist";
import styles from "./WishList.module.scss";
import { Trash2 } from "lucide-react";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className={styles.emptyWishlist}>
        <div className={styles.inner}>
          <span>Your Wishlist is Empty!</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.wishlistPage}>
        <h2>Your Wishlist</h2>
        <div className={styles.productsWrapper}>
          {wishlist.map((product) => (
            <div key={product.id} className={styles.wishlistItem}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h2 className={styles.productName}>{product.name}</h2>
                <span className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                </span>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromWishlist(product.id)}
                >
                  <Trash2 size={18} />
                  REMOVE
                </button>
              </div>
            </div>
          ))}
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
