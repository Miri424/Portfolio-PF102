import ProductItem from "../ProductItem";

const ProductList = ({products, setProducts}) => {
  return (
    <ProductItem products={products} setProducts={setProducts}/>
  );
};

export default ProductList;
