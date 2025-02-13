import { deleteProduct, handleError } from "../../../Services";
import styles from "./index.module.scss";



// Important message
{
  /* muellim bu ( sadece 45 ci setr) price hissesini AI dan goturdum. Isteyirdim ki product
    price 2 basamaqli gorsensin seliqeli olsun
    cox arastirdim internetde ancaq number zad methodu
    var idi mende yoxluyurdum olmurdu. parseFloatin ozude tekce replace olmadan 
    ishlemirdi. GPT dedi ki replace ishletmek lazimdi.
    bashqa yerde AI ishletmemishem yeni sadece deyim dedim */
}



const Table = ({ adminProducts, setAdminProducts }) => {
  async function handleDelete(id) {
    try {
      const response = await deleteProduct(id);
      setAdminProducts(adminProducts.filter((product) => product.id !== id));
    } catch (error) {
      handleError(error);
    }
  }

  return (
    <div className={styles.tableHolder}>
      <table className={styles.adminTable}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Product Name</th>
            <th className={styles.tableHeader}>Price</th>
            <th className={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {adminProducts?.map((product) => (
            <tr key={product.id} className={styles.tr}>
              <td className={styles.td}>{product.id}</td>
              <td className={styles.td}>{product.name}</td>
              <td className={styles.td}>
                ${parseFloat(product.price.replace("$", "")).toFixed(2)}
              </td>
              <td className={styles.td}>
                <button
                  onClick={() => handleDelete(product.id)}
                  className={styles["delete-btn"]}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
