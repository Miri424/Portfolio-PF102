import { ClipLoader } from "react-spinners";
import {useDeleteProductMutation, useGetProductsQuery,} from "../../redux/features/apiSlice";
import "../../assets/scss/pages/Admin/ProductTable.scss";
import "../../assets/scss/main.scss";
import { toast } from "react-toastify";
import { MESSAGES } from "../../constants/message";

const ProductTable = () => {
  const { data: products, isLoading, isError, refetch } = useGetProductsQuery();

  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) {
    return (
      <div className="flex-center align-center pt-40">
        <ClipLoader size={100} color="#36d7b7" />
      </div>
    );
  }

  if (isError || !products) {
    return (
      <div className="error-message text-center align-center pt-6 pb-6 mw-420 mx-auto">
        <h2 className="red">
          Unfortunately, we couldn't get your data. Please check your connection
          and try again.
        </h2>
      </div>
    );
  }

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      toast.success("Məhsul uğurla silindi!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      refetch();
    } catch (error) {
      toast.error(MESSAGES.ERROR, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <div className="table-holder">
      <h2 className="table-title">Product List</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}$</td>
              <td>{product.category}</td>
              <td>{product.rating}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
