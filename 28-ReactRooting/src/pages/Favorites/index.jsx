import { useContext } from "react";
import { FavoritesContext } from "../../components/Context/FavoritesContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./index.scss";

const Favorites = ({products}) => { // bilmirem nece gonderim productsi props kimi.   
    
  const { favorites, toggleFavorites, clearAllFavs } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <p style={{ color: "red" }}>No favorites yet!</p>;
  }

  return (
    <>
      <div className="favHolder">
        <h2 className="favTitle">My Favorites</h2>
        <button className="clearAllBtn" onClick={clearAllFavs}>
          Clear All
        </button>
        <div className="favList">
          {favorites.map((product) => (
            <div key={product.id} className="favItem">
              <Link to={`/details/${product.id}`} className="favLink">
                <FaHeart className="favIcon" />
                <span className="favText">{product.name}</span>
              </Link>
              <button
                className="favRemoveBtn"
                onClick={() => toggleFavorites(product) }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
