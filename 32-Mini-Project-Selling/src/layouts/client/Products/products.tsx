import styles from "./products.module.scss";
import "../../../assets/scss/main.scss";
import ProductsList from "../ProductList";

export default function PopularProducts() {
  return (
    <>
      <section className={styles.titleContainer}>
        <h3 className={styles.subtitle}>POPULAR PRODUCTS</h3>
        <h2 className={styles.title}>Our Products</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </section>
      <ProductsList />
    </>
  );
}
