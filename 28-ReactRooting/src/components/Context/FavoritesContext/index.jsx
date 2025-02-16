import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext([]);

const FavoritesProvider = ({ children }) => { 
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  
  const toggleFavorites = (product) => {  
    const isFavorite = favorites.some((fav) => fav.id === product.id);

    if (!isFavorite) {
      setFavorites((prev) => {
        const updatedFavs = [...prev, product];
        localStorage.setItem("favorites", JSON.stringify(updatedFavs)); 
        return updatedFavs;
      });
    } else {
      setFavorites((prev) => {
        const updatedFavs = prev.filter((q) => q.id !== product.id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavs)); 
        return updatedFavs;
      });
    }
  };

  const clearAllFavs = () => {
    setFavorites([]); 
    localStorage.removeItem("favorites");
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites, clearAllFavs }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;