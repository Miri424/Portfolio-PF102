import { createContext, useState, ReactNode } from "react";
import { DetailsProduct } from "../../types";

type BasketContextType = {
  basket: DetailsProduct[];
  addToBasket: (product: DetailsProduct) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<DetailsProduct[]>([]);
  const addToBasket = (product: DetailsProduct) => {
    setBasket((prev) => [...prev, product]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
