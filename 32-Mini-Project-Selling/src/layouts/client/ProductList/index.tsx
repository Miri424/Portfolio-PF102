import type React from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/API/index.ts";
import type { Product } from "../../../types/index.ts";
import NotFound from "../../../pages/client/error/NotFound.tsx";
import { Heart } from "lucide-react";
import styles from "./ProductsList.module.scss";
import { ClipLoader } from "react-spinners";

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Məhsullar alinarkən xəta baş verdi");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <ClipLoader color="#000000" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center align-center">
        <NotFound />
      </div>
    );
  }

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
                <div className={styles.ratingContainer}>
                  <span className={styles.ratingText}>{product.rating}</span>
                  <span className={styles.reviewCount}>
                    {product.favourites}
                  </span>
                </div>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
                <div className={styles.productActions}>
                  <button className={styles.cartButton}>CART</button>
                  <button className={styles.viewButton}>VIEW</button>
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
