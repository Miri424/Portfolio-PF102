import React from "react";
import "../Basket/index.scss"

const BasketItem = ({ product, removeFromBasket }) => {
  return (
    <div className="basket-item">
      <img src={product.image} alt={product.name} />
      <div className="item-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={() => removeFromBasket(product.id)}>Remove</button>
      </div>
    </div>
  );
};

export default BasketItem;
