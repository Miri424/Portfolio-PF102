import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../../../redux/features/basketSlice";
import "../../../assets/scss/main.scss";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="basket-container">
      <h2 className="basket-title">Your Basket</h2>
      <div className="basket-items">
        {basketItems.length === 0 ? (
          <p className="empty-basket">Your basket is empty :(</p>
        ) : (
          basketItems.map((product) => (
            <div key={product.id} className="basket-item">
              <div className="item-details">
                <div className="item-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" b-radius-6"
                  />
                </div>

                <div className="item-info">
                  <h3 className="item-name">{product.name}</h3>
                  <p className="item-description">{product.description}</p>
                  <p className="item-price">${product.price}</p>
                  <p className="font-size-16">On Basket: {product.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => deleteItem(product.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Basket;
