import { createContext, useState, ReactNode } from "react";
import { DetailsProduct } from "../../types";
import { toast } from "react-toastify";

type BasketItem = DetailsProduct & { quantity: number }

type BasketContextType = {
  basket: BasketItem[];
  addToBasket: (product: DetailsProduct) => void;
  removeFromBasket: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (product: DetailsProduct) => {
    setBasket((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    toast.success("Added to Basket Successfully!");
  };

  const removeFromBasket = (id: number) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed from Basket!");
  };

  const increaseQuantity = (id: number) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setBasket((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
