import React, { createContext, useContext, useState } from "react";
import { DetailsProduct } from "../../types";

interface ProductDetailsContextType {
  product: DetailsProduct | null;
  addToDetails: (product: DetailsProduct) => void;
}

const ProductDetailsContext = createContext<ProductDetailsContextType | undefined>(undefined);

export const ProductDetailsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [product, setProduct] = useState<DetailsProduct | null>(null);

  const addToDetails = (product: DetailsProduct) => {
    setProduct(product);
  };

  return (
    <ProductDetailsContext.Provider value={{ product, addToDetails }}>
      {children}
    </ProductDetailsContext.Provider>
  );
};

export const useProductDetails = () => {
  const context = useContext(ProductDetailsContext);
  if (!context) {
    throw new Error("Sarmala ay qardas");
  }
  return context;
};
