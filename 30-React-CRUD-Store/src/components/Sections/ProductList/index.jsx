import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/features/apiSlice";

const ProductList = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const nav = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return <div className="text-center pt-6 pb-6">Loading...</div>;
  }
  if (error) {
    return <div className="text-center pt-6 pb-6">Error: {error.message}</div>;
  }

  const directToDetails = (id) => {
    nav(`/product/${id}`);
  };

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-100 pb-6 mt-6">
      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 b-radius-12 w-45 mb-6 pb-2 pt-2"
        />
      </div>

      <div className="product-holder flex-box flex-wrap">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              onClick={() => directToDetails(product.id)}
              className="product-div"
              key={product.id}
            >
              <div className="image-holder">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="text-center">
                <p className="mt-6 orange font-size-20">
                  Rating : {product.rating}
                </p>
              </div>
              <div className="pt-2 pb-2 text-center align-center">
                <h3 className="font-500 font-size-16 mb-2">{product.name}</h3>
                <div className="text-center align-center">
                  <span className="font-600 font-size-16">
                    ${product.discount.toFixed(2)}
                  </span>
                  {product.price && (
                    <span
                      className="font-400 font-size-14 red text-through"
                      style={{ marginLeft: "8px" }}
                    >
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-100 font-size-18 mt-4">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
