import type { DetailsProduct, Product } from "../../../types";
import { Heart } from "lucide-react";
import styles from "./ProductsList.module.scss";
import { useBasket } from "../../../Context/Cart/useBasket";
import { useProductDetails } from "../../../Context/Cart/details";
import { useNavigate } from "react-router-dom";

const ProductsList: React.FC<{ products: DetailsProduct[] }> = ({
  products,
}) => {
  const nav = useNavigate();
  const { addToBasket } = useBasket();
  const { addToDetails } = useProductDetails();

  const handleAddToDetails = (product: Product | any) => {
    addToDetails(product);
    nav(`/product/${product.id}`);
  };

  return (
    <section className={styles.productsSection}>
      <div className={styles.productContainer}>
        <h2 className={styles.sectionTitle}>Our Products</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <div className={styles.productCard} key={product.id}>
              <div className={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <button className={styles.wishlistButton}>
                  <Heart className={styles.heartIcon} />
                </button>
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
                <div className={styles.productActions}>
                  <button
                    className={styles.cartButton}
                    onClick={() => addToBasket(product)}
                  >
                    CART
                  </button>
                  <button
                    className={styles.viewButton}
                    onClick={() => handleAddToDetails(product)}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
