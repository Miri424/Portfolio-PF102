import ProductItem from "../ProductItem";

const ProductList = ({ products, setProducts }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} setProducts={setProducts} />
          ))
        ) : (
          <tr>
            <td colSpan="3" className="no-products">No products available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductList;
