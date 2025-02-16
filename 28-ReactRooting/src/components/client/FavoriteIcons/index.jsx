import React, { useContext } from "react";
import { FavoritesContext } from "../../Context/FavoritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteIcons = ({ product }) => {
  console.log(product);
  const { favorites, toggleFavorites } = useContext(FavoritesContext)

  const checkFavorite = favorites.some((fav) => fav.id === product.id)

  return ( 
    <>
      <button onClick={() => toggleFavorites(product)}>
        {checkFavorite ? (
          <FaHeart style={{ color: "red", cursor: "pointer" }} />
        ) : (
          <FaRegHeart style={{ color: "red", cursor: "pointer" }} />
        )}
      </button>
    </>
  );
};

export default FavoriteIcons;
