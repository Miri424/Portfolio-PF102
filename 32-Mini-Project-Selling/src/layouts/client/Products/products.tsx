import styles from "./products.module.scss";
import "../../../assets/scss/main.scss";
import ProductsList from "../ProductList";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/API/index.ts"
import { Product } from "../../../types";

export default function PopularProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        setError("Məhsullar yüklənərkən xəta baş verdi");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className={styles.titleContainer}>
        <h3 className={styles.subtitle}>POPULAR PRODUCTS</h3>
        <h2 className={styles.title}>Our Products</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
      <ProductsList products={products} />
    </>
  );
}
