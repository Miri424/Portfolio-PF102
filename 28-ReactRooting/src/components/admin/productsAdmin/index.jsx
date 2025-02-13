import React, { useEffect, useState } from "react";
import Dashboard from "../pages/dashboard";
import { getProducts } from "../../../Services";

const ProductsAdmin = () => {
  const [adminProducts, setAdminProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getAllProducts() {
    const response = await getProducts();
    setAdminProducts(response);

    setIsLoading(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Dashboard adminProducts={adminProducts} setAdminProducts={setAdminProducts}/>
    </div>
  );
};

export default ProductsAdmin;
