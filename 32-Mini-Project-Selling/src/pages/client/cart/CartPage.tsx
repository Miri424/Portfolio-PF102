import { useBasket } from "../../../Context/Cart/useBasket";
import Navbar from "../../../layouts/client/Navbar/navbar";
import styles from "./index.module.scss";
import { Trash2 } from "lucide-react";

const BasketPage = () => {
  const { basket } = useBasket();

  const totalPrice = basket.reduce(
    (total, product) => total + product.price,
    0
  );

  if (basket.length === 0) {
    return (
      <div className={styles.emptyBasket}>
        <p className="red">Your Basket is Empty!</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.basketPage}>
        <div className={styles.productsWrapper}>
          {basket.map((product) => (
            <div key={product.id} className={styles.fullScreenProduct}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
                <span className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                </span>
                <button className={styles.removeButton}>
                  <Trash2 size={20} />
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.totalSection}>
            <span>Total:</span>
            <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
          </div>
          <button className={styles.deliverButton}>Deliver My Order</button>
        </div>
      </div>
    </>
  );
};

export default BasketPage;
