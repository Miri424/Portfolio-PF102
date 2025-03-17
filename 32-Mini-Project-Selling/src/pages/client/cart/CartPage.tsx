import { toast, ToastContainer } from "react-toastify";
import { useBasket } from "../../../Context/Cart/useBasket";
import styles from "./index.module.scss";
import { Trash2 } from "lucide-react";

const BasketPage = () => {
  const { basket, increaseQuantity, decreaseQuantity, removeFromBasket } = useBasket();

  const totalPrice = basket.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const srocnuYazdimAdTapmadim = () =>  {
    toast.success("Hello, Your Computer Has Virus ")
  }

  if (basket.length === 0) {
    return (
      <div className={styles.emptyBasket}>
        <p className="red pt-24">Your Basket is Empty!</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.basketPage}>
        <h2>Shopping Basket</h2>

        <table className={styles.basketTable}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                </td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <div className={styles.quantityControls}>
                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => increaseQuantity(product.id)}>+</button>
                  </div>
                </td>
                <td>${(product.price * product.quantity).toFixed(2)}</td>
                <td>
                  <button className={styles.removeButton} onClick={() => removeFromBasket(product.id)}>
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.footer}>
          <div className={styles.totalSection}>
            <span>Total:</span>
            <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
          </div>
          <button className={styles.deliverButton} onClick={srocnuYazdimAdTapmadim}>Deliver My Order</button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default BasketPage;
