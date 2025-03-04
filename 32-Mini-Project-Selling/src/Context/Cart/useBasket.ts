import { useContext } from "react";
import BasketContext from ".";

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("Sarmala ay qardas");
  }
  return context;
};
