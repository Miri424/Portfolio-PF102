import { useEffect, useState } from "react";
import ProductList from "../../components/client/ProductList";
import { getProducts } from "../../Services";

const Products = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    getAllProducts();
  }, []);

  return <ProductList products={products} setProducts={setProducts} />;
};

export default Products;
