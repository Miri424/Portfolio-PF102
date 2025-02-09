import axios from "axios";
import { BASE_URL } from "../../constants/api";

const ProductItem = ({ product, setProducts }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/products/${product.id}`);
      setProducts((prevProducts) => prevProducts.filter((item) => item.id !== product.id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <tr className={product.isDiscounted ? "discounted" : ""}>
      <td className="product-name">{product.name}</td>
      <td className="product-price">${product.price}</td>
      <td>
        <button className="btn btn-delete" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default ProductItem;