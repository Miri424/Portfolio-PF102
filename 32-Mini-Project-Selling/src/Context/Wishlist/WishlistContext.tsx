import { createContext, useState, ReactNode } from "react";
import { DetailsProduct } from "../../types";
import { toast } from "react-toastify";

type WishlistContextType = {
  wishlist: DetailsProduct[];
  addToWishlist: (product: DetailsProduct) => void;
  removeFromWishlist: (id: number) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<DetailsProduct[]>([]);

  const addToWishlist = (product: DetailsProduct) => {
    setWishlist((prev) => [...prev, product]);
    toast.success("Added to Wishlist!");
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed from Wishlist!");
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
