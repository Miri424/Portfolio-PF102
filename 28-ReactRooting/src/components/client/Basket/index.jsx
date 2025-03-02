import React from "react";
import { useBasket } from "../../Context/BasketContext" 
import BasketItem from "../BasketItem";
import "./index.scss"

const Basket = () => {
  const { basket, removeFromBasket, clearBasket } = useBasket();

    const totalPrice = basket.reduce((total, product) => total + parseFloat(product.price.slice(1)),0)

  return (
    <div className="basket-container">
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty!</p>
      ) : (
        <>
          <div className="basket-items">
            {basket.map((product) => (
              <BasketItem
                key={product.id}
                product={product}
                removeFromBasket={removeFromBasket}
              />
            ))}
          </div>
          <div className="basket-total">
            <p>Total: ${totalPrice}</p>
            <button onClick={clearBasket}>Clear Basket</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
